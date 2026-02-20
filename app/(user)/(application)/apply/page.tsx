'use client';

import {
  APPLICATION_TEXT_DEFAULT,
  APPLICATION_INPUT_DEFAULT,
  USER,
  SUBMIT_STATUS,
  APPLICATION,
  APPLY_POSITION,
  DEV_INPUTS,
  DESING_INPUTS,
  PM_INPUTS,
  DEV_TEXTAREAS,
  DESIGN_TEXTAREAS,
  PM_TEXTAREAS,
} from '@/constants';
import { KeyOf, PositionType, SubmitStatus, ApplicationTextarea } from '@/types';
import { postApplication, patchApplication, getUserApplication } from '@/api';
import { useBeforeUnload } from '@/hooks';
import { isAxiosError } from 'axios';
import { Alert } from '@/utils';
import { Fragment, FormEvent, useState, SetStateAction, useEffect, useMemo, Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import FilterDropDown from '@/components/Common/FilterDropDown';
import * as S from './styled';

const InputTextareas = dynamic(() => import('@/components/Form/ApplyForm/InputTextareas'));

const STEP_LABELS = ['기본 정보', '자기소개서', '제출'] as const;
const STEP2_INPUT_IDS = new Set(['interviewDay', 'interviewTime']);

const SaveIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.3328 10.7336C13.6642 10.7336 13.9328 11.0022 13.9328 11.3336V12.6672C13.9327 13.1798 13.7297 13.6719 13.3672 14.0344C13.0047 14.3968 12.5126 14.5999 12 14.6H4C3.48748 14.5999 2.99529 14.3967 2.63281 14.0344C2.2704 13.6719 2.06648 13.1798 2.06641 12.6672V11.3336C2.06641 11.0023 2.33517 10.7338 2.66641 10.7336C2.99778 10.7336 3.26641 11.0022 3.26641 11.3336V12.6672C3.26648 12.8615 3.34396 13.0477 3.48125 13.1852C3.61871 13.3226 3.80561 13.3999 4 13.4H12C12.1943 13.3999 12.3805 13.3225 12.518 13.1852C12.6554 13.0477 12.7327 12.8616 12.7328 12.6672V11.3336C12.7328 11.0024 13.0017 10.7339 13.3328 10.7336Z"
      fill="currentColor"
    />
    <path
      d="M8 2.06641C8.33137 2.06641 8.6 2.33504 8.6 2.66641V9.21719L10.9086 6.90938C11.1428 6.67515 11.5227 6.67534 11.757 6.90938C11.9913 7.14369 11.9913 7.5235 11.757 7.75781L8.42422 11.0914C8.37179 11.1438 8.3114 11.1828 8.24766 11.2117C8.24236 11.2141 8.23741 11.2173 8.23203 11.2195C8.1871 11.2383 8.14044 11.2504 8.09297 11.2578C8.06812 11.2617 8.04295 11.2641 8.01719 11.2648C8.00543 11.2652 7.99378 11.2652 7.98203 11.2648C7.95601 11.2641 7.93055 11.2618 7.90547 11.2578C7.85831 11.2503 7.8118 11.2383 7.76719 11.2195C7.75934 11.2162 7.7522 11.2114 7.74453 11.2078C7.68389 11.1791 7.62594 11.1415 7.57578 11.0914L4.24219 7.75781C4.00807 7.52354 4.00807 7.14365 4.24219 6.90938C4.47645 6.67511 4.8563 6.67521 5.09063 6.90938L7.4 9.21875V2.66641C7.4 2.33504 7.66863 2.06641 8 2.06641Z"
      fill="currentColor"
    />
  </svg>
);

const ApplyForm = () => {
  const [applicationInput, setApplicationInput] = useState(APPLICATION_INPUT_DEFAULT);
  const [applicationText, setApplicationText] = useState(APPLICATION_TEXT_DEFAULT);
  const [position, setPosition] = useState<KeyOf<typeof APPLY_POSITION>>('FRONTEND');
  const [step, setStep] = useState(1);
  const [maxStep, setMaxStep] = useState(1);
  const [submitConfirmed, setSubmitConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const session = useSession();
  const router = useRouter();
  const accessToken = session.data?.accessToken;
  const submitStatus = session.data?.submitStatus;
  const { allowLeave } = useBeforeUnload();

  type InputField = { id: string; title: string; holderText: string; required: boolean; maxLength: number };

  const inputLayout: readonly InputField[] = useMemo(() => {
    if (position === 'FRONTEND' || position === 'BACKEND') return DEV_INPUTS;
    if (position === 'PM') return PM_INPUTS;
    return DESING_INPUTS;
  }, [position]);

  const textareaLayout: readonly InputField[] = useMemo(() => {
    if (position === 'FRONTEND' || position === 'BACKEND') return DEV_TEXTAREAS;
    if (position === 'PM') return PM_TEXTAREAS;
    return DESIGN_TEXTAREAS;
  }, [position]);

  const step1Inputs = useMemo(() => inputLayout.filter((f) => !STEP2_INPUT_IDS.has(f.id)), [inputLayout]);
  const step2Inputs = useMemo(() => inputLayout.filter((f) => STEP2_INPUT_IDS.has(f.id)), [inputLayout]);

  const isStep1Valid = useMemo(() => {
    return step1Inputs.every(({ id }) => {
      const value = (applicationInput as Record<string, string>)[id];
      return value !== undefined && value.trim() !== '';
    });
  }, [applicationInput, step1Inputs]);

  const isStep2Valid = useMemo(() => {
    const inputsFilled = step2Inputs.every(({ id }) => {
      const value = (applicationInput as Record<string, string>)[id];
      return value !== undefined && value.trim() !== '';
    });
    const textareasFilled = textareaLayout.every(({ id }) => {
      const value = applicationText[id as keyof ApplicationTextarea];
      return value !== undefined && value.trim() !== '';
    });
    return inputsFilled && textareasFilled;
  }, [applicationInput, applicationText, step2Inputs, textareaLayout]);

  useEffect(() => {
    if (submitStatus === SUBMIT_STATUS.SUBMIT) {
      router.replace(USER.APPLY_COMPLETE);
      return;
    }
    setIsLoading(false);
  }, [submitStatus, router]);

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await getUserApplication(accessToken);
      if (!isAxiosError(result)) {
        const { motive, capability, conflict, expectation, passion, user, position: fetchPosition } = result;
        setApplicationText({ motive, capability, conflict, expectation, passion });
        setApplicationInput({ ...user, ...result });
        setPosition(fetchPosition.replace('_', '/') as PositionType);
      }
    };
    if (submitStatus && submitStatus === SUBMIT_STATUS.SAVE) {
      fetchData();
    }
  }, [submitStatus, accessToken]);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('selectedApplyPosition');
    if (savedPosition && submitStatus === SUBMIT_STATUS.NONE) {
      setPosition(savedPosition as KeyOf<typeof APPLY_POSITION>);
      sessionStorage.removeItem('selectedApplyPosition');
    }
  }, [submitStatus]);

  const goToStep = (targetStep: number) => {
    setStep(targetStep);
    setMaxStep((prev) => Math.max(prev, targetStep));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getInputValue = (id: string): string => {
    return (applicationInput as Record<string, string>)[id] || '';
  };

  const handleInputChange = (id: string, value: string) => {
    setApplicationInput({ ...applicationInput, [id]: value });
  };

  const handleSave = async () => {
    allowLeave();

    const applicationData = {
      ...applicationInput,
      ...applicationText,
      position,
      submitStatus: SUBMIT_STATUS.SAVE as SubmitStatus,
    };

    const requestApplication = submitStatus === SUBMIT_STATUS.NONE ? postApplication : patchApplication;
    const { result } = await requestApplication(
      { ...applicationData, position: applicationData.position.replace('/', '_') as PositionType },
      accessToken,
    );

    if (!isAxiosError(result)) {
      await session.update({ submitStatus: SUBMIT_STATUS.SAVE });
      Alert.success(APPLICATION.COMPLETE_SAVE);
    }
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (step !== 3 || !submitConfirmed) return;

    allowLeave();

    if (submitStatus === SUBMIT_STATUS.SUBMIT) {
      Alert.error(APPLICATION.EXIST_APPLICATION);
      return;
    }

    const applicationData = {
      ...applicationInput,
      ...applicationText,
      position,
      submitStatus: SUBMIT_STATUS.SUBMIT as SubmitStatus,
    };

    const requestApplication = submitStatus === SUBMIT_STATUS.NONE ? postApplication : patchApplication;
    const { result } = await requestApplication(
      { ...applicationData, position: applicationData.position.replace('/', '_') as PositionType },
      accessToken,
    );

    if (!isAxiosError(result)) {
      await session.update({ submitStatus: SUBMIT_STATUS.SUBMIT });
      Alert.success(APPLICATION.COMPLETE_SUBMIT);
      router.push(USER.APPLY_COMPLETE);
    }
  };

  const getStepStatus = (stepNum: number): 'completed' | 'current' | 'upcoming' => {
    if (stepNum < step) return 'completed';
    if (stepNum === step) return 'current';
    if (stepNum <= maxStep) return 'completed';
    return 'upcoming';
  };

  const findField = (id: string) => step1Inputs.find((f) => f.id === id);

  if (isLoading) return null;

  return (
    <S.PageContainer>
      <S.Section>
        <S.SectionText>
          <S.TitleText>Join Us!</S.TitleText>
          <S.SubtitleText>지원서 작성하기</S.SubtitleText>
        </S.SectionText>

        <S.Form onSubmit={submitHandler}>
          <S.FieldsetStyle>
            <S.FormCard>
              {/* PC Stepper */}
              <S.StepperPC>
                {STEP_LABELS.map((label, i) => {
                  const stepNum = i + 1;
                  const status = getStepStatus(stepNum);
                  return (
                    <Fragment key={stepNum}>
                      {i > 0 && (
                        <S.StepDashedLine
                          $variant={i < step ? 'completed' : i === step ? 'transitioning' : 'upcoming'}
                        />
                      )}
                      <S.StepDotWrapper
                        $clickable={status !== 'upcoming'}
                        onClick={() => status !== 'upcoming' && goToStep(stepNum)}>
                        <S.StepDot $status={status} />
                        <S.StepLabelPC $status={status}>{label}</S.StepLabelPC>
                      </S.StepDotWrapper>
                    </Fragment>
                  );
                })}
              </S.StepperPC>

              {/* Mobile Stepper */}
              <S.StepperMobile>
                <S.MobileSegmentBar>
                  {STEP_LABELS.map((label, i) => {
                    const segmentStep = i + 1;
                    const canNavigate = segmentStep <= maxStep && segmentStep !== step;
                    return (
                      <S.MobileSegment
                        key={i}
                        $active={step > i}
                        $clickable={canNavigate}
                        onClick={() => canNavigate && goToStep(segmentStep)}
                      />
                    );
                  })}
                </S.MobileSegmentBar>
                <S.MobileStepLabel>
                  {step}. {STEP_LABELS[step - 1]}
                </S.MobileStepLabel>
              </S.StepperMobile>

              {/* ===== Step 1: Basic Info ===== */}
              {step === 1 && (
                <>
                  <S.FieldGrid>
                    <S.FieldItem>
                      <S.FieldLabel>지원 파트</S.FieldLabel>
                      <FilterDropDown
                        defaultValue="선택"
                        list={Object.keys(APPLY_POSITION).map((value) => value.replace('_', '/'))}
                        selected={position as KeyOf<typeof APPLY_POSITION>}
                        setSelected={(selected) =>
                          setPosition(selected as SetStateAction<KeyOf<typeof APPLY_POSITION>>)
                        }
                        customWidth={100}
                      />
                    </S.FieldItem>

                    {findField('name') && (
                      <S.FieldItem>
                        <S.FieldLabel htmlFor="name">{findField('name')!.title}</S.FieldLabel>
                        <S.FieldInput
                          type="text"
                          id="name"
                          value={getInputValue('name')}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder={findField('name')!.holderText}
                          maxLength={findField('name')!.maxLength}
                        />
                      </S.FieldItem>
                    )}

                    {findField('grade') && (
                      <S.FieldItem>
                        <S.FieldLabel htmlFor="grade">{findField('grade')!.title}</S.FieldLabel>
                        <S.FieldInput
                          type="text"
                          id="grade"
                          value={getInputValue('grade')}
                          onChange={(e) => handleInputChange('grade', e.target.value)}
                          placeholder={findField('grade')!.holderText}
                          maxLength={findField('grade')!.maxLength}
                        />
                      </S.FieldItem>
                    )}

                    {findField('major') && (
                      <S.FieldItem>
                        <S.FieldLabel htmlFor="major">{findField('major')!.title}</S.FieldLabel>
                        <S.FieldInput
                          type="text"
                          id="major"
                          value={getInputValue('major')}
                          onChange={(e) => handleInputChange('major', e.target.value)}
                          placeholder={findField('major')!.holderText}
                          maxLength={findField('major')!.maxLength}
                        />
                      </S.FieldItem>
                    )}

                    {findField('phone') && (
                      <S.FieldItem $fullWidth>
                        <S.FieldLabel htmlFor="phone">{findField('phone')!.title}</S.FieldLabel>
                        <S.FieldInput
                          type="text"
                          id="phone"
                          value={getInputValue('phone')}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="전화번호를 입력하세요."
                          maxLength={findField('phone')!.maxLength}
                        />
                        <S.FieldNote>모든 개인 정보는 안내 이외에는 사용되지 않습니다.</S.FieldNote>
                      </S.FieldItem>
                    )}

                    {findField('portfolio') && (
                      <S.FieldItem $fullWidth>
                        <S.FieldLabel htmlFor="portfolio">{findField('portfolio')!.title}</S.FieldLabel>
                        <S.FieldInput
                          type="text"
                          id="portfolio"
                          value={getInputValue('portfolio')}
                          onChange={(e) => handleInputChange('portfolio', e.target.value)}
                          placeholder={findField('portfolio')!.holderText}
                          maxLength={findField('portfolio')!.maxLength}
                        />
                      </S.FieldItem>
                    )}

                    {findField('project') && (
                      <S.FieldItem $fullWidth>
                        <S.FieldLabel htmlFor="project">{findField('project')!.title}</S.FieldLabel>
                        <S.FieldInput
                          type="text"
                          id="project"
                          value={getInputValue('project')}
                          onChange={(e) => handleInputChange('project', e.target.value)}
                          placeholder={findField('project')!.holderText}
                          maxLength={findField('project')!.maxLength}
                        />
                      </S.FieldItem>
                    )}

                    {findField('algorithm') && (
                      <S.FieldItem $fullWidth>
                        <S.FieldLabel htmlFor="algorithm">{findField('algorithm')!.title}</S.FieldLabel>
                        <S.FieldInput
                          type="text"
                          id="algorithm"
                          value={getInputValue('algorithm')}
                          onChange={(e) => handleInputChange('algorithm', e.target.value)}
                          placeholder={findField('algorithm')!.holderText}
                          maxLength={findField('algorithm')!.maxLength}
                        />
                      </S.FieldItem>
                    )}
                  </S.FieldGrid>

                  <S.TempSaveLink type="button" onClick={handleSave}>
                    <SaveIcon /> 임시저장
                  </S.TempSaveLink>
                </>
              )}

              {/* ===== Step 2: Self Introduction ===== */}
              {step === 2 && (
                <>
                  <S.Step2Fields>
                    {step2Inputs.map((field) => (
                      <S.FieldItem key={field.id}>
                        <S.FieldLabel htmlFor={field.id}>{field.title}</S.FieldLabel>
                        <S.FieldInput
                          type="text"
                          id={field.id}
                          value={getInputValue(field.id)}
                          onChange={(e) => handleInputChange(field.id, e.target.value)}
                          placeholder={field.holderText}
                          maxLength={field.maxLength}
                        />
                        {field.id === 'interviewDay' && <S.FieldNote>복수로 선택할 수 있어요.</S.FieldNote>}
                      </S.FieldItem>
                    ))}
                  </S.Step2Fields>

                  <S.InputContainer>
                    <Suspense>
                      <InputTextareas position={position} text={applicationText} setText={setApplicationText} />
                    </Suspense>
                  </S.InputContainer>

                  <S.TempSaveLink type="button" onClick={handleSave}>
                    <SaveIcon /> 임시저장
                  </S.TempSaveLink>
                </>
              )}

              {/* ===== Step 3: Confirmation ===== */}
              {step === 3 && (
                <S.ConfirmContent>
                  <S.ConfirmTitle>{'지원서 제출 이후에는 수정할 수 없습니다.\n제출하시겠습니까?'}</S.ConfirmTitle>
                  <S.ConfirmDescription>
                    하단의 이전 버튼 또는 상단의 스테퍼를 클릭하여 지원서 작성란으로 돌아갈 수 있습니다.
                  </S.ConfirmDescription>
                  <S.ConfirmCheckboxContainer>
                    <S.ConfirmCheckbox
                      type="checkbox"
                      checked={submitConfirmed}
                      onChange={(e) => setSubmitConfirmed(e.target.checked)}
                    />
                    <S.ConfirmCheckboxText>제출하겠습니다!</S.ConfirmCheckboxText>
                  </S.ConfirmCheckboxContainer>
                </S.ConfirmContent>
              )}
            </S.FormCard>

            {/* Buttons */}
            <S.ButtonContainer>
              {step === 1 && (
                <S.NextButtonSingle type="button" $active={isStep1Valid} onClick={() => goToStep(2)}>
                  다음
                </S.NextButtonSingle>
              )}
              {step === 2 && (
                <>
                  <S.PrevButton type="button" onClick={() => goToStep(1)}>
                    이전
                  </S.PrevButton>
                  <S.NextButtonPaired type="button" $active={isStep2Valid} onClick={() => goToStep(3)}>
                    다음
                  </S.NextButtonPaired>
                </>
              )}
              {step === 3 && (
                <>
                  <S.PrevButton type="button" onClick={() => goToStep(2)}>
                    이전
                  </S.PrevButton>
                  <S.SubmitButton type="submit" $active={submitConfirmed}>
                    제출하기
                  </S.SubmitButton>
                </>
              )}
            </S.ButtonContainer>
          </S.FieldsetStyle>
        </S.Form>
      </S.Section>

      <S.Copyright>
        <S.CopyrightBorder />
        <S.CopyrightText>Copyright 2023-2026. Leets All rights reserved.</S.CopyrightText>
      </S.Copyright>
    </S.PageContainer>
  );
};

export default ApplyForm;
