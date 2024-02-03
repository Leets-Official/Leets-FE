import { styled } from 'styled-components';
import AdminLogo from '@/public/assets/image/Logo/Blue.svg';
import Link from 'next/link';

export const HeaderContainer = styled(Link)`
  all: unset;

  width: fit-content;

  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Header = styled.header`
  font-size: 24px;
  font-weight: 600;

  width: 100%;
  height: 32px;

  display: flex;
  align-items: center;
`;

export const AdminLogoContainer = styled(AdminLogo)`
  width: 33px;
  height: 20px;

  margin-right: 10px;
`;
