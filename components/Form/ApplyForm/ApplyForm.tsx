'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState, SetStateAction, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { SUBMIT_STATUS, APPLICATION, APPLY_POSITION, USER } from '@/constants';
import { KeyOf, PositionType, SubmitStatus } from '@/types';
import { postApplication, patchApplication } from '@/api';
import { useApplyContext, useBeforeUnload } from '@/hooks';
import { Alert } from '@/utils';
import dynamic from 'next/dynamic';
import FilterDropDown from '@/components/Common/FilterDropDown';
import InputTexts from './InputTexts';
import InputTextareas from './InputTextareas';
import * as S from './ApplyForm.styled';

const Notice = dynamic(() => import('./Notice'));

const ApplyForm = () => {
  const { applicationInput, applicationText, position: applyPosition, submitStatus, accessToken } = useApplyContext();
  const [infoInput, setInfoInput] = useState(applicationInput);
  const [longText, setLongText] = useState(applicationText);
  const [position, setPosition] = useState<KeyOf<typeof APPLY_POSITION>>(applyPosition as PositionType);
  const [currentSubmitStatus, setCurrentSubmitStatus] = useState<SubmitStatus>(SUBMIT_STATUS.SAVE);
  const session = useSession();
  const { allowLeave } = useBeforeUnload();
  const router = useRouter();

  useEffect(() => {
    if (submitStatus === SUBMIT_STATUS.SUBMIT) {
      allowLeave();
    }
  }, [submitStatus]);

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
      ...infoInput,
      ...longText,
      position,
      submitStatus: currentSubmitStatus,
    };

    if (submitStatus === SUBMIT_STATUS.NONE) {
      await postApplication(applicationData, accessToken);
    } else {
      await patchApplication(applicationData, accessToken);
    }

    const successMessage =
      currentSubmitStatus === SUBMIT_STATUS.SAVE ? APPLICATION.COMPLETE_SAVE : APPLICATION.COMPLETE_SUBMIT;
    await session.update({ submitStatus: currentSubmitStatus });
    Alert.success(successMessage);
    router.refresh();
  };

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
              list={Object.keys(APPLY_POSITION)}
              selected={position as KeyOf<typeof APPLY_POSITION>}
              setSelected={(selected) => setPosition(selected as SetStateAction<KeyOf<typeof APPLY_POSITION>>)}
              customWidth={15}
            />
          </S.DropDownContainer>
          <InputTexts position={position} input={infoInput} setInput={setInfoInput} />
          <InputTextareas position={position} text={longText} setText={setLongText} />
        </S.InputContainer>
        <S.PrivacyContainer>
          <S.PrivacyCheckBox type="checkbox" required />
          <S.Text>
            <S.LinkConatiner href={USER.CERTIFICATE} target="_blank">
              <u>개인정보 처리 방침</u>
            </S.LinkConatiner>
            에 동의합니다.
          </S.Text>
        </S.PrivacyContainer>
        <Notice />
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

export default ApplyForm;
