'use client';

import {
  APPLICATION_TEXT_DEFAULT,
  APPLICATION_INPUT_DEFAULT,
  USER,
  SUBMIT_STATUS,
  APPLICATION,
  APPLY_POSITION,
  APPLY_PERIOD,
  MAIN_COLOR,
  POSITION_ENGLISH_MAP,
} from '@/constants';
import { ApplicationInput, KeyOf, ApplicationData, SubmitStatus } from '@/types';
import * as api from '@/api';
import { useBeforeUnload, useInputRef } from '@/hooks';
import axios from 'axios';
import { Alert } from '@/utils';
import { FormEvent, useState, SetStateAction, useEffect } from 'react';
import FilterDropDown from '@/components/Admin/FilterDropDown';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Schedule } from '@/utils/Schedule';
import InputText from './InputText';
import InputTextarea from './InputTextarea';
import * as S from './Form.styled';
import Notice from './Notice';

const Form = () => {
  const { inputRef, changeHandler } = useInputRef<ApplicationInput>({ defaultValues: APPLICATION_INPUT_DEFAULT });
  const [applicationText, setApplicationText] = useState(APPLICATION_TEXT_DEFAULT);
  const [position, setPosition] = useState<KeyOf<typeof APPLY_POSITION>>(POSITION_ENGLISH_MAP.DEV_ENG);
  const [currentSubmitStatus, setCurrentSubmitStatus] = useState<SubmitStatus>(SUBMIT_STATUS.SAVE);
  const session = useSession();
  const token = session.data?.accessToken;
  const email = session.data?.user?.email!;
  const beforeSubmitStatus = session.data?.submitStatus;
  const router = useRouter();
  const submitClickHandler = useBeforeUnload();
  const color = MAIN_COLOR;

  const clickHandler = (type: SubmitStatus) => {
    setCurrentSubmitStatus(type);
    submitClickHandler();
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (beforeSubmitStatus === SUBMIT_STATUS.SUBMIT) {
      Alert.error(APPLICATION.EXIST_APPLICATION);
      router.refresh();
      return;
    }
    if (Schedule.getCurrentPeriod(new Date()) === APPLY_PERIOD.CLOSE) {
      Alert.error(APPLICATION.NOT_RECRUIT_PERIOD);
      return;
    }
    if (currentSubmitStatus === SUBMIT_STATUS.SUBMIT && !window.confirm(APPLICATION.CONFIRM_SUBMIT)) {
      return;
    }

    const applicationData: ApplicationData = {
      ...inputRef.current,
      ...applicationText,
      email,
      position,
      submitStatus: currentSubmitStatus,
    };

    const { result } =
      beforeSubmitStatus === SUBMIT_STATUS.NONE
        ? await api.postApplication(applicationData, token)
        : await api.patchApplication(applicationData, token);

    if (!axios.isAxiosError(result)) {
      const successMessage =
        currentSubmitStatus === SUBMIT_STATUS.SAVE ? APPLICATION.COMPLETE_SAVE : APPLICATION.COMPLETE_SUBMIT;
      await session.update({ beforeSubmitStatus: currentSubmitStatus });
      Alert.success(successMessage);
      router.refresh();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await api.getUserApplication(token);
      if (!axios.isAxiosError(result)) {
        const { enhancement, level, pros, goal, completion, user } = result;
        inputRef.current = {
          ...user,
          ...result,
        };
        setApplicationText({ enhancement, level, pros, goal, completion });
      }
    };
    if (session.data?.submitStatus !== SUBMIT_STATUS.NONE) {
      fetchData();
    }
    if (session.data?.submitStatus === SUBMIT_STATUS.SUBMIT) {
      submitClickHandler();
    }
  }, [session.data?.submitStatus]);

  return (
    <S.FormContainer>
      <S.FormStyle onSubmit={submitHandler}>
        <S.FieldsetStyle>
          <S.HeadStyle>
            Join us!
            <S.WriteStyle>지원서 작성하기</S.WriteStyle>
          </S.HeadStyle>
          <S.InputContainer>
            <S.DropDownContainer>
              <S.PositionContainer>지원 직무 :</S.PositionContainer>
              <FilterDropDown
                list={Object.keys(APPLY_POSITION)}
                selected={position as KeyOf<typeof APPLY_POSITION>}
                setSelected={(selected) => setPosition(selected as SetStateAction<KeyOf<typeof APPLY_POSITION>>)}
                customWidth={15}
              />
            </S.DropDownContainer>
            <InputText position={position} changeHandler={changeHandler} application={inputRef.current} />
            <InputTextarea
              position={position}
              text={applicationText}
              setText={setApplicationText}
              application={applicationText}
            />
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
          <Notice color={color} />
          <S.ButtonContainer>
            <S.SaveButton type="submit" color={color} onClick={() => clickHandler(SUBMIT_STATUS.SAVE)}>
              임시저장
            </S.SaveButton>
            <S.SubmitButton type="submit" color={color} onClick={() => clickHandler(SUBMIT_STATUS.SUBMIT)}>
              제출하기
            </S.SubmitButton>
          </S.ButtonContainer>
        </S.FieldsetStyle>
      </S.FormStyle>
    </S.FormContainer>
  );
};

export default Form;
