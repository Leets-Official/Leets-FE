import AdminLogo from '@/public/assets/image/Admin/logo.svg';
import { styled } from 'styled-components';

export const ApplicationListContainer = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f9f9fc;
  color: black;
`;

export const ContentContainer = styled.section`
  width: 95%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
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
