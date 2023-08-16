'use client';

import Nav from '@/component/Admin/Nav';
import { useLogin } from '@/hooks';
import { ADMIN, LOGIN_LAYOUT } from '@/constants';
import { useAppSelector } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import * as S from './Login.styled';

const Login = () => {
  const { changeHandler, onSubmitHandler } = useLogin();
  const { name } = useAppSelector((state) => state.admin);
  const router = useRouter();

  useEffect(() => {
    if (name) {
      router.push(ADMIN.HOME);
    }
  }, []);

  return (
    <S.ApplyListContainer>
      <S.ContentContainer>
        <S.LoginContainer>
          <Nav />
          <S.Form onSubmit={onSubmitHandler}>
            <S.InputSection>
              {LOGIN_LAYOUT.map(({ key, placeholder }) => (
                <S.InputStyle
                  type={key === 'id' ? 'text' : 'password'}
                  key={key}
                  onChange={(e) => changeHandler(e, key)}
                  placeholder={placeholder}
                  autoComplete={key === 'password' ? 'off' : 'on'}
                />
              ))}
            </S.InputSection>
            <S.Button>로그인</S.Button>
          </S.Form>
        </S.LoginContainer>
      </S.ContentContainer>
    </S.ApplyListContainer>
  );
};

export default Login;
