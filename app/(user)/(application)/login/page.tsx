'use client';

import { signIn } from 'next-auth/react';
import { USER } from '@/constants';
import * as S from './styled';

const Login = () => {
  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: USER.APPLY });
  };

  return (
    <S.LoginBackground>
      <S.LoginContainer
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}>
        <S.HeadStyle>
          Join us!
          <S.WriteStyle>지원서 작성하기</S.WriteStyle>
        </S.HeadStyle>
        <S.ButtonContainer>
          <S.ButtonStyle type="button" onClick={handleGoogleLogin}>
            <S.ImageStyle src="/assets/image/googleLogo.png" alt="logo" width={30} height={30} />
            <S.TextStyle>구글 아이디로 로그인</S.TextStyle>
          </S.ButtonStyle>
        </S.ButtonContainer>
      </S.LoginContainer>
    </S.LoginBackground>
  );
};

export default Login;
