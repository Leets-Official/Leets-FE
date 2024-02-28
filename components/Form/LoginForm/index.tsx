'use client';

import { useLogin } from '@/hooks';
import * as S from './LoginForm.styled';

const LoginForm = () => {
  const { changeHandler, onSubmitHandler } = useLogin();

  return (
    <S.Form onSubmit={onSubmitHandler}>
      <S.InputSection>
        <S.InputStyle type="text" onChange={(e) => changeHandler(e, 'id')} placeholder="아이디" autoComplete="on" />
        <S.InputStyle
          type="password"
          onChange={(e) => changeHandler(e, 'password')}
          placeholder="비밀번호"
          autoComplete="off"
        />
      </S.InputSection>
      <S.LoginButton>로그인</S.LoginButton>
    </S.Form>
  );
};

export default LoginForm;
