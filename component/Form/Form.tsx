'use client';

import { APPLICATION_TEXT_DEFAULT, APPLICATION_INPUT_DEFAULT, POSITION_ENGLIST_MAP } from '@/constants';
import { ApplicationInput, KeyOf, ThemeColor } from '@/types';
import * as api from '@/api';
import { useInputRef } from '@/hooks';
import axios from 'axios';
import { Alert } from '@/utils';
import { FormEvent, useState, SetStateAction } from 'react';
import InputText from './InputText';
import InputTextarea from './InputTextarea';
import * as S from './Form.styled';
import FilterDropDown from '../Admin/FilterDropDown';

const Form = ({ color, email }: { color: ThemeColor; email: string }) => {
  const { inputRef, changeHandler } = useInputRef<ApplicationInput>({ defaultValues: APPLICATION_INPUT_DEFAULT });
  const [applicationText, setApplicationText] = useState(APPLICATION_TEXT_DEFAULT);
  const [position, setPosition] = useState<KeyOf<typeof POSITION_ENGLIST_MAP>>('DEV');

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const { result } = await api.postApplication({ ...inputRef.current, ...applicationText, email, position });
    if (!axios.isAxiosError(result)) {
      Alert.success('지원 완료되었습니다.');
    }
  };

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
                list={Object.values(POSITION_ENGLIST_MAP)}
                selected={position as KeyOf<typeof POSITION_ENGLIST_MAP>}
                setSelected={(selected) => setPosition(selected as SetStateAction<KeyOf<typeof POSITION_ENGLIST_MAP>>)}
                customWidth={15}
              />
            </S.DropDownContainer>
            <InputText position={position} changeHandler={changeHandler} />
            <InputTextarea position={position} text={applicationText} setText={setApplicationText} />
            <S.PrivacyContainer>
              <S.PrivacyCheckBox type="checkbox" required />
              <S.Text>
                <S.LinkConatiner href="/certificate" target="_blank">
                  <u>개인정보 처리 방침</u>
                </S.LinkConatiner>
                에 동의합니다.
              </S.Text>
            </S.PrivacyContainer>
          </S.InputContainer>
          <S.ButtonContainer>
            <S.SubmitButton type="submit" color={color}>
              제출하기
            </S.SubmitButton>
          </S.ButtonContainer>
          <S.NoticeContainer>여러 번 제출 시 최종 제출 자료만 인정됩니다.</S.NoticeContainer>
        </S.FieldsetStyle>
      </S.FormStyle>
    </S.FormContainer>
  );
};

export default Form;
