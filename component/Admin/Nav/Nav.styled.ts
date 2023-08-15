import { styled } from 'styled-components';
import AdminLogo from '@/public/assets/image/Admin/logo.svg';

export const HeaderContainer = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
`;

export const Header = styled.header`
  font-size: 24px;
  font-weight: 600;

  width: 100%;
  height: 32px;

  display: flex;
  align-items: center;

  margin-top: 15px;
`;

export const AdminLogoContainer = styled(AdminLogo)`
  width: 33px;
  height: 20px;

  margin-right: 10px;
`;
