'use client';

import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { USER } from '@/constants';
import * as S from './HeaderTemplate.styled';

interface HeaderTemplateProps {
  variant?: 'white' | 'black';
}

const HeaderTemplate = ({ variant = 'white' }: HeaderTemplateProps) => {
  const { push } = useRouter();
  const sessionData = useSession();
  const isLoggedIn = !!sessionData?.data?.user;

  const logoSrc =
    variant === 'white' ? '/assets/image/Logo/Logo_white.svg' : '/assets/image/Logo/Logo_black.svg';

  const handleAuthClick = () => {
    if (isLoggedIn) {
      signOut({ callbackUrl: USER.HOME });
    } else {
      push(USER.LOGIN);
    }
  };

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
          <S.AuthButton $variant={variant} onClick={handleAuthClick}>
            {isLoggedIn ? (
              '로그아웃'
            ) : (
              <>
                <S.GoogleIcon src="/assets/image/googleLogo.png" alt="" />
                <span>Google 계정으로 로그인</span>
              </>
            )}
          </S.AuthButton>
        </S.MenuContainer>
      </S.HeaderInner>
    </S.HeaderContainer>
  );
};

export default HeaderTemplate;
