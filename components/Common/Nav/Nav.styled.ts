import { styled } from 'styled-components';
import Link from 'next/link';

export const NavContainer = styled.nav<{ $darkMode: boolean }>`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ $darkMode }) => ($darkMode ? 'white' : 'black')};
  background: ${({ $darkMode }) => ($darkMode ? 'black' : 'white')};
  padding: 0 3.81vw;
`;

export const LinkContainer = styled(Link)<{ color?: string }>`
  font-size: 26px;

  background: inherit;
  color: inherit;
  text-decoration: none;

  @media screen and (max-width: 541px) {
    font-size: 14px;
  }
`;

export const WelcomeContainer = styled.div<{ name: string }>`
  display: flex;
  justify-content: ${({ name }) => (name ? 'space-between' : 'flex-end')};

  background: white;
`;

export const WelcomeStyle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  background: white;
`;

export const LogoutButton = styled.button`
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 14px;

  display: ${({ name }) => (name ? '' : 'none')};

  color: #3685fc;
  background: white;
  padding: 0;
  cursor: pointer;
  margin-left: 30px;
  border: none;
`;

export const Apply = styled(Link)`
  background: black;
  font-weight: 600;
  font-size: 18px;

  text-decoration: underline;
  text-underline-offset: 4px;
  color: #3685fc;

  @media screen and (max-width: 541px) {
    font-size: 14px;
  }
`;
