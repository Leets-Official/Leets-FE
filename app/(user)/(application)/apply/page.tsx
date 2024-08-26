'use client';

import {
  APPLICATION_TEXT_DEFAULT,
  APPLICATION_INPUT_DEFAULT,
  USER,
  SUBMIT_STATUS,
  APPLICATION,
  APPLY_POSITION,
} from '@/constants';
import { KeyOf, SubmitStatus } from '@/types';
import { postApplication, patchApplication, getUserApplication } from '@/api';
import { useBeforeUnload } from '@/hooks';
import { isAxiosError } from 'axios';
import { Alert } from '@/utils';
import { FormEvent, useState, SetStateAction, useEffect, Suspense } from 'react';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import InputText from '@/components/Form/ApplyForm/InputTexts';
import FilterDropDown from '@/components/Common/FilterDropDown';
import * as S from './styled';

const Notice = dynamic(() => import('@/components/Form/ApplyForm/Notice'));
const InputTextareas = dynamic(() => import('@/components/Form/ApplyForm/InputTextareas'));

const Form = () => {
  const [applicationInput, setApplicationInput] = useState(APPLICATION_INPUT_DEFAULT);
  const [applicationText, setApplicationText] = useState(APPLICATION_TEXT_DEFAULT);
  const [position, setPosition] = useState<KeyOf<typeof APPLY_POSITION>>('DEV');
  const [currentSubmitStatus, setCurrentSubmitStatus] = useState<SubmitStatus>(SUBMIT_STATUS.SAVE);
  const session = useSession();
  const accessToken = session.data?.accessToken;
  const submitStatus = session.data?.submitStatus;
  const { allowLeave } = useBeforeUnload();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    allowLeave();

    if (submitStatus === SUBMIT_STATUS.SUBMIT) {
      Alert.error(APPLICATION.EXIST_APPLICATION);
      return;
    }

    if (currentSubmitStatus === SUBMIT_STATUS.SUBMIT && !window.confirm(APPLICATION.CONFIRM_SUBMIT)) {
      return;
    }

    const applicationData = {
      ...applicationInput,
      ...applicationText,
      position,
      submitStatus: currentSubmitStatus,
    };

    const requestApplication = submitStatus === SUBMIT_STATUS.NONE ? postApplication : patchApplication;
    const { result } = await requestApplication(applicationData, accessToken);

    if (!isAxiosError(result)) {
      const successMessage =
        currentSubmitStatus === SUBMIT_STATUS.SAVE ? APPLICATION.COMPLETE_SAVE : APPLICATION.COMPLETE_SUBMIT;
      await session.update({ submitStatus: currentSubmitStatus });
      Alert.success(successMessage);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await getUserApplication(accessToken);
      if (!isAxiosError(result)) {
        const { motive, capability, conflict, expectation, passion, user, position: fetchPosition } = result;
        setApplicationText({ motive, capability, conflict, expectation, passion });
        setApplicationInput({ ...user, ...result });
        setPosition(fetchPosition);
      }
    };
    if (submitStatus && submitStatus !== SUBMIT_STATUS.NONE) {
      fetchData();
    }
  }, [submitStatus]);

  return (
    <S.Form onSubmit={submitHandler}>
      <S.FieldsetStyle>
        <S.HeadStyle>
          Join us!
          <S.WriteStyle>지원서 작성하기</S.WriteStyle>
        </S.HeadStyle>
        <S.InputContainer>
          <S.DropDownContainer>
            <S.PositionContainer>지원 직무 :</S.PositionContainer>
            <FilterDropDown
              defaultValue="선택"
              list={Object.keys(APPLY_POSITION).map((value) => value.replace('_', '/'))}
              selected={position as KeyOf<typeof APPLY_POSITION>}
              setSelected={(selected) => setPosition(selected as SetStateAction<KeyOf<typeof APPLY_POSITION>>)}
              customWidth={15}
            />
          </S.DropDownContainer>
          <InputText position={position} input={applicationInput} setInput={setApplicationInput} />
          <Suspense>
            <InputTextareas position={position} text={applicationText} setText={setApplicationText} />
          </Suspense>
          <S.PrivacyContainer>
            <S.PrivacyCheckBox type="checkbox" required />
            <S.Text>
              <S.LinkConatiner href={USER.CERTIFICATE} target="_blank">
                <u>개인정보 처리 방침</u>
              </S.LinkConatiner>
              에 동의합니다.
            </S.Text>
          </S.PrivacyContainer>
        </S.InputContainer>
        <Suspense>
          <Notice />
        </Suspense>
        <S.ButtonContainer>
          <S.SaveButton type="submit" onClick={() => setCurrentSubmitStatus(SUBMIT_STATUS.SAVE)}>
            임시저장
          </S.SaveButton>
          <S.SubmitButton type="submit" onClick={() => setCurrentSubmitStatus(SUBMIT_STATUS.SUBMIT)}>
            제출하기
          </S.SubmitButton>
        </S.ButtonContainer>
      </S.FieldsetStyle>
    </S.Form>
  );
};

export default Form;
