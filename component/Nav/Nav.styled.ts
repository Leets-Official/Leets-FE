import { styled } from 'styled-components';
import Link from 'next/link';

const backgrounds = {
  blue: '#3685FC',
  green: '#29B69A',
  yellow: '#FCB836',
};

export const NavContainer = styled.nav`
  background-color: black;
`;

export const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;
  padding-left: 3.81vw;
`;

export const LinkContainer = styled(Link)`
  font-family: 'DM Sans';
  font-weight: 400px;
  font-size: 26px;

  background: white;
  text-decoration: none;
  color: black;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: ${({ name }) => (name ? 'space-between' : 'flex-end')};

  background: white;
  margin-right: 3.81vw;
`;

export const WelcomeStyle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  background: white;
`;

export const LogoutButton = styled.button`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 14px;

  display: ${({ name }) => (name ? '' : 'none')};

  color: ${({ color }) => backgrounds[color]};
  background: white;
  padding: 0;
  cursor: pointer;
  margin-left: 30px;
  border: none;
`;