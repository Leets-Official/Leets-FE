'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { USER } from '@/constants';
import HeaderTemplate from '@/components/Common/HeaderTemplate';
import GradientBackground from '@/components/Landing/GradientBackground';
import * as S from './styled';

const Login = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: USER.APPLY });
  };

  return (
    <GradientBackground>
      <HeaderTemplate variant="white" hideAuth />
      <S.LoginContent>
        <S.Title>Join Us!</S.Title>
        <S.Subtitle>
          구글 계정으로 간편하게 로그인하고
          <br />
          지원서를 작성해보세요
        </S.Subtitle>
        {error && <S.ErrorMessage>로그인 중 오류가 발생했습니다. 다시 시도해 주세요.</S.ErrorMessage>}
        <S.GoogleButton type="button" onClick={handleGoogleLogin}>
          <S.GoogleIcon src="/assets/image/googleLogo.png" alt="" width={20} height={20} />
          Google 계정으로 로그인
        </S.GoogleButton>
      </S.LoginContent>
    </GradientBackground>
  );
};

export default Login;
