import { styled } from 'styled-components';
import LogoImage from '@/public/assets/image/Admin/logo.svg';

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
  color: black;
`;

export const Logo = styled(LogoImage)`
  width: 33%;
  height: 20%;
`;
