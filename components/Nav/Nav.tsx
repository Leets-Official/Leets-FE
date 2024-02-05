'use client';

import { ThemeColor } from '@/types';
import { signOut, useSession } from 'next-auth/react';
import { USER } from '@/constants';
import * as S from './Nav.styled';

const Nav = ({ color }: { color: ThemeColor }) => {
  const { data: session } = useSession();
  const name = session?.user?.name;

  const handleLogout = () => {
    signOut({ callbackUrl: USER.HOME });
  };

  return (
    <S.NavContainer>
      <S.Container>
        <S.LinkContainer href={USER.HOME}>Leets</S.LinkContainer>
        <S.WelcomeContainer name={name as string}>
          {name && (
            <>
              <S.WelcomeStyle>{`${name}님 `}환영해요!</S.WelcomeStyle>
              <S.LogoutButton type="button" onClick={handleLogout} name={name} color={color}>
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
