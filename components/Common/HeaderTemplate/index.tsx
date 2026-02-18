'use client';

import { signIn, useSession } from 'next-auth/react';
import { USER } from '@/constants';
import * as S from './HeaderTemplate.styled';

interface HeaderTemplateProps {
  variant?: 'white' | 'black';
}

const HeaderTemplate = ({ variant = 'white' }: HeaderTemplateProps) => {
  const sessionData = useSession();
  const isLoggedIn = !!sessionData?.data?.user;
  const name = sessionData?.data?.user?.name;

  const logoSrc =
    variant === 'white' ? '/assets/image/Logo/Logo_white.svg' : '/assets/image/Logo/Logo_black.svg';

  return (
    <S.HeaderContainer $variant={variant}>
      <S.HeaderInner>
        <S.LogoLink href={USER.HOME} $variant={variant}>
          <S.LogoImage src={logoSrc} alt="Leets" />
        </S.LogoLink>
        <S.MenuContainer>
          <S.MenuItem href="/project" $variant={variant}>
            프로젝트
          </S.MenuItem>
          {isLoggedIn ? (
            <S.UserName $variant={variant}>{name}님</S.UserName>
          ) : (
            <S.AuthButton $variant={variant} onClick={() => signIn('google', { callbackUrl: USER.HOME })}>
              <S.GoogleIcon src="/assets/image/googleLogo.png" alt="" />
              <span>Google 계정으로 로그인</span>
            </S.AuthButton>
          )}
        </S.MenuContainer>
      </S.HeaderInner>
    </S.HeaderContainer>
  );
};

export default HeaderTemplate;
