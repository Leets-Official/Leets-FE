import AdminLogo from '@/public/assets/image/Logo/Blue.svg';
import { styled } from 'styled-components';

export const ApplyListContainer = styled.main`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;

  background: #f9f9fc;
  color: black;
`;

export const ContentContainer = styled.section`
  width: 95%;
  height: auto;
`;

export const NavContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;

export const LogoutContainer = styled.div`
  width: 60px;

  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.button`
  all: unset;

  color: #4a93ff;
  cursor: pointer;
`;

export const AdminLogoContainer = styled(AdminLogo)`
  margin-right: 10px;
`;

export const Title = styled.section`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;

  width: 100%;
  height: 32px;

  display: flex;
  align-items: center;

  margin-top: 15px;
`;

export const SearchBar = styled.section`
  width: 100%;
  height: 40px;

  margin-top: 15px;
`;
