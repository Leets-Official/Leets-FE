'use client';

import {
  APPLICATION_TEXT_DEFAULT,
  APPLICATION_INPUT_DEFAULT,
  POSITION_ENGLIST_MAP,
  USER,
  SUBMIT_STATUS,
  APPLICATION,
} from '@/constants';
import { ApplicationInput, KeyOf, ThemeColor } from '@/types';
import * as api from '@/api';
import { useInputRef } from '@/hooks';
import axios from 'axios';
import { Alert } from '@/utils';
import { FormEvent, useState, SetStateAction, useEffect } from 'react';
import FilterDropDown from '@/component/Admin/FilterDropDown';
import { useSession } from 'next-auth/react';
import InputText from './InputText';
import InputTextarea from './InputTextarea';
import * as S from './Form.styled';

type SubmitType = 'SAVE' | 'SUBMIT';

const Form = ({ color, email, token }: { color: ThemeColor; email: string; token: string }) => {
  const { inputRef, changeHandler } = useInputRef<ApplicationInput>({ defaultValues: APPLICATION_INPUT_DEFAULT });
  const [applicationText, setApplicationText] = useState(APPLICATION_TEXT_DEFAULT);
  const [position, setPosition] = useState<KeyOf<typeof POSITION_ENGLIST_MAP>>('DEV');
  const [submitType, setSubmitType] = useState<SubmitType>('SAVE');
  const session = useSession();
  const submitStatus = session.data?.submitStatus;

  const clickHandler = (type: SubmitType) => {
    setSubmitType(type);
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (submitStatus === SUBMIT_STATUS.SUBMIT) {
      Alert.error(APPLICATION.EXIST_APPLICATION);
      return;
    }
    if (submitStatus === SUBMIT_STATUS.NONE) {
      const { result } = await api.postApplication(
        { ...inputRef.current, ...applicationText, email, position, submitStatus: submitType },
        token
      );
      if (!axios.isAxiosError(result)) {
        Alert.success(APPLICATION.COMPLETE_SUBMIT);
        await session.update({ submitStatus: submitType });
      }
      return;
    }
    if (submitStatus === SUBMIT_STATUS.SAVE) {
      const { result } = await api.patchApplication(
        { ...inputRef.current, ...applicationText, position, submitStatus: submitType },
        token
      );
      if (!axios.isAxiosError(result)) {
        Alert.success(APPLICATION.COMPLETE_SUBMIT);
        await session.update({ submitStatus: submitType });
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await api.getUserApplication(token);
      if (!axios.isAxiosError(result)) {
        const {
          gpa,
          major,
          algorithm,
          project,
          career,
          portfolio,
          interviewDay,
          interviewTime,
          enhancement,
          level,
          pros,
          goal,
          completion,
          user,
        } = result;
        inputRef.current = {
          gpa,
          major,
          algorithm,
          project,
          career,
          portfolio,
          interviewDay,
          interviewTime,
          ...user,
        };
        setApplicationText({ enhancement, level, pros, goal, completion });
      }
    };
    if (session.data?.submitStatus !== SUBMIT_STATUS.NONE) {
      fetchData();
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
                list={Object.keys(POSITION_ENGLIST_MAP)}
                selected={position as KeyOf<typeof POSITION_ENGLIST_MAP>}
                setSelected={(selected) => setPosition(selected as SetStateAction<KeyOf<typeof POSITION_ENGLIST_MAP>>)}
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
          <S.NoticeContainer>제출 시 변경하거나 수정할 수 없습니다.</S.NoticeContainer>
          <S.ButtonContainer>
            <S.SaveButton type="submit" color={color} onClick={() => clickHandler('SAVE')}>
              임시저장
            </S.SaveButton>
            <S.SubmitButton type="submit" color={color} onClick={() => clickHandler('SUBMIT')}>
              제출하기
            </S.SubmitButton>
          </S.ButtonContainer>
        </S.FieldsetStyle>
      </S.FormStyle>
    </S.FormContainer>
  );
};

export default Form;
