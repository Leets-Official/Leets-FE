'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { deleteCookie } from 'cookies-next';
import { ACCESS_TOKEN, ADMIN } from '@/constants';
import * as S from './WithLogout.styled';

const WithLogout = ({ children }: { children: ReactNode }) => {
  const { replace } = useRouter();

  const logoutHandler = () => {
    deleteCookie(ACCESS_TOKEN);
    replace(ADMIN.LOGIN);
  };

  return (
    <S.NavContainer>
      {children}
      <S.LogoutContainer>
        <S.LogoutButton onClick={logoutHandler}>로그아웃</S.LogoutButton>
      </S.LogoutContainer>
    </S.NavContainer>
  );
};

export default WithLogout;
