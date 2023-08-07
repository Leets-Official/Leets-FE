'use client';

import { useEffect, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import submitForm from '@/utils/submitForm';
import { setForm } from '@/store/formSlice';
import { INITAIL_INFO, INPUTS, TEXTAREAS } from '@/constants';
import { ThemeColor } from '@/types';
import { useAppSelector } from '@/store';
import InputText from './InputText';
import InputTextarea from './InputTextarea';
import * as S from './Form.styled';

const Form = ({ color, email }: { color: ThemeColor; email: string }) => {
  const dispatch = useDispatch();
  const formSlice = useAppSelector((state) => state.form);

  const loadStorage = () => {
    const tempInfo = JSON.parse(localStorage.getItem('tempInfo')) || INITAIL_INFO;
    dispatch(setForm(tempInfo));
  };

  const saveStorage = () => {
    localStorage.setItem('tempInfo', JSON.stringify(formSlice));
  };

  const createUsers = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm({ ...formSlice, email });
    alert(`${formSlice.name}님 제출 완료되었습니다.`);
  };

  const handleOnChange = (id: string, value: string) => {
    dispatch(setForm({ id, value }));
    saveStorage();
  };

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <S.FormContainer>
      <S.FormStyle onSubmit={createUsers}>
        <S.FieldsetStyle>
          <S.Ul>
            <S.HeadStyle>
              Join us!
              <S.WriteStyle>지원서 작성하기</S.WriteStyle>
            </S.HeadStyle>
            {INPUTS.map(({ id, title, holderText, required, maxLength }) => (
              <InputText
                key={id}
                id={id}
                value={formSlice[id]}
                title={title}
                holderText={holderText}
                required={required}
                handleOnChange={handleOnChange}
                maxLength={maxLength}
              />
            ))}
            {TEXTAREAS.map(({ id, title, holderText, required, maxLength }) => (
              <InputTextarea
                key={id}
                id={id}
                value={formSlice[id]}
                title={title}
                holderText={holderText}
                required={required}
                handleOnChange={handleOnChange}
                maxLength={maxLength}
              />
            ))}
          </S.Ul>
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
