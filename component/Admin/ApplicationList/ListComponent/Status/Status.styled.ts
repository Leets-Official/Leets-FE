import { styled } from 'styled-components';

export const StatusContainer = styled.div<{ isPass: boolean }>`
  width: 70%;
  padding: 4px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: ${({ isPass }) => (isPass ? '#e9faf7' : '#feecee')};
  color: ${({ isPass }) => (isPass ? '#1a9882' : '#eb3d4d')};
`;