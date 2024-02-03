'use client';

import Nav from '@/components/Admin/Nav';
import { useLogin } from '@/hooks';
import * as S from './Admin.styled';

const Admin = () => {
  const { changeHandler, onSubmitHandler } = useLogin();

  return (
    <S.ApplyListContainer>
      <S.ContentContainer>
        <S.LoginContainer>
          <Nav />
          <S.Form onSubmit={onSubmitHandler}>
            <S.InputSection>
              <S.InputStyle
                type="text"
                onChange={(e) => changeHandler(e, 'id')}
                placeholder="아이디"
                autoComplete="on"
              />
              <S.InputStyle
                type="password"
                onChange={(e) => changeHandler(e, 'password')}
                placeholder="비밀번호"
                autoComplete="off"
              />
            </S.InputSection>
            <S.LoginButton>로그인</S.LoginButton>
          </S.Form>
        </S.LoginContainer>
      </S.ContentContainer>
    </S.ApplyListContainer>
  );
};

export default Admin;
