'use client';

import { ThemeColor } from '@/types';
import { signOut, useSession } from 'next-auth/react';
import * as S from './Nav.styled';

const Nav = ({ color }: { color: ThemeColor }) => {
  const { data: session } = useSession();

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <S.NavContainer>
      <S.Container>
        <S.LinkContainer href="/">Leets</S.LinkContainer>
        <S.WelcomeContainer name={session?.user?.name as string}>
          {session?.user?.name && (
            <>
              <S.WelcomeStyle>{`${session?.user?.name}님 `}환영해요!</S.WelcomeStyle>
              <S.LogoutButton type="button" onClick={handleLogout} name={session?.user?.name} color={color}>
                로그아웃
              </S.LogoutButton>
            </>
          )}
        </S.WelcomeContainer>
      </S.Container>
    </S.NavContainer>
  );
};

export default Nav;
