'use client';

import { useLogin } from '@/hooks';
import * as S from './LoginForm.styled';

const LoginForm = () => {
  const { changeHandler, onSubmitHandler } = useLogin();

  return (
    <S.Form id="admin-login-form" onSubmit={onSubmitHandler}>
      <S.InputSection>
        <S.InputGroup>
          <S.InputLabel htmlFor="admin-username">아이디</S.InputLabel>
          <S.InputStyle
            id="admin-username"
            type="text"
            onChange={(e) => changeHandler(e, 'username')}
            placeholder="아이디를 입력해 주세요"
            autoComplete="on"
          />
        </S.InputGroup>
        <S.InputGroup>
          <S.InputLabel htmlFor="admin-password">비밀번호</S.InputLabel>
          <S.InputStyle
            id="admin-password"
            type="password"
            onChange={(e) => changeHandler(e, 'password')}
            placeholder="비밀번호를 입력해 주세요"
            autoComplete="off"
          />
        </S.InputGroup>
      </S.InputSection>
      <S.LoginButton type="submit">로그인</S.LoginButton>
    </S.Form>
  );
};

export default LoginForm;
