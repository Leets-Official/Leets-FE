'use client';

import { signOut, useSession } from 'next-auth/react';
import { APPLY_PERIOD, USER } from '@/constants';
import { ReactNode, memo, MouseEvent } from 'react';
import { Alert, Schedule } from '@/utils';
import { useRouter } from 'next/navigation';
import LogoBlack from '@/public/assets/image/Logo/Logo_black.svg';
import LogoWhite from '@/public/assets/image/Logo/Logo_white.svg';
import * as S from './Nav.styled';

const Nav = ({ children, darkMode = true }: { children?: ReactNode; darkMode?: boolean }) => {
  return (
    <S.NavContainer $darkMode={darkMode}>
      <S.LinkContainer href={USER.HOME}>
        {darkMode ? <LogoWhite /> : <LogoBlack />}
      </S.LinkContainer>
      {children}
    </S.NavContainer>
  );
};

export const Logout = () => {
  const { data: session } = useSession();
  const name = session?.user?.name;

  const handleLogout = () => {
    signOut({ callbackUrl: USER.HOME });
  };

  return (
    <S.NavLinksContainer>
      <S.NavLink href="/project">프로젝트</S.NavLink>
      {name && (
        <S.LogoutButton type="button" onClick={handleLogout} name={name}>
          로그아웃
        </S.LogoutButton>
      )}
    </S.NavLinksContainer>
  );
};

export const Apply = () => {
  const { push } = useRouter();
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    const period = Schedule.getCurrentPeriod();
    if (period !== APPLY_PERIOD.RECRUIT) {
      Alert.error('지원 기간이 아닙니다.');
      return;
    }
    push(USER.APPLY);
  };

  return (
    <S.Apply href={USER.APPLY} onClick={handleClick}>
      Join Us!
    </S.Apply>
  );
};

export default memo(Nav);
