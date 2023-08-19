import { styled } from 'styled-components';
import { BackgroundColor } from '@/types';

export const LoadingContainer = styled.div<{ $backgroundColor: BackgroundColor }>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ $backgroundColor }) => $backgroundColor};
  color: black;
`;

export const LogoContainer = styled.div`
  width: 12%;
  height: 8%;
`;
