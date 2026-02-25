'use client';

import { signOut, useSession } from 'next-auth/react';
import { APPLY_PERIOD, SUBMIT_STATUS, USER } from '@/constants';
import { ReactNode, memo, MouseEvent } from 'react';
import Swal from 'sweetalert2';
import { Alert, Schedule } from '@/utils';
import { useSessionData } from '@/hooks';
import { useTransitionRouter } from '@/hooks/useTransitionRouter';
import LogoBlack from '@/public/assets/image/Logo/Logo_black.svg';
import LogoWhite from '@/public/assets/image/Logo/Logo_white.svg';
import * as S from './Nav.styled';

const Nav = ({ children, darkMode = true }: { children?: ReactNode; darkMode?: boolean }) => {
  const { push } = useTransitionRouter();

  return (
    <S.NavContainer $darkMode={darkMode}>
      <S.LinkContainer href={USER.HOME} onClick={(e) => { e.preventDefault(); push(USER.HOME); }}>
        {darkMode ? <LogoWhite /> : <LogoBlack />}
      </S.LinkContainer>
      {children}
    </S.NavContainer>
  );
};

export const Logout = () => {
  const { data: session } = useSession();
  const { push } = useTransitionRouter();
  const name = session?.user?.name;

  const handleLogout = () => {
    signOut({ callbackUrl: USER.HOME });
  };

  return (
    <S.NavLinksContainer>
      <S.NavLink href="/project" onClick={(e) => { e.preventDefault(); push('/project'); }}>
        프로젝트
      </S.NavLink>
      {name && (
        <S.LogoutButton type="button" onClick={handleLogout} name={name}>
          로그아웃
        </S.LogoutButton>
      )}
    </S.NavLinksContainer>
  );
};

export const Apply = () => {
  const { push } = useTransitionRouter();
  const { submitStatus } = useSessionData();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    const period = Schedule.getCurrentPeriod();

    if (period === APPLY_PERIOD.BEFORE) {
      Alert.error('지원 기간이 아닙니다.');
      return;
    }

    if (period === APPLY_PERIOD.RECRUIT) {
      push(USER.APPLY);
      return;
    }

    // AFTER: 지원기간 종료 후
    if (submitStatus === SUBMIT_STATUS.SUBMIT) {
      push(USER.APPLY_STATUS);
      return;
    }

    Swal.fire({
      icon: 'info',
      title: '지원 기간이 종료되었습니다',
      text: '다음 기수에서 만나요! 🙂',
      confirmButtonText: '확인',
      customClass: { popup: 'swal-custom-popup' },
    });
  };

  return (
    <S.Apply href={USER.APPLY} onClick={handleClick}>
      Join Us!
    </S.Apply>
  );
};

export default memo(Nav);
