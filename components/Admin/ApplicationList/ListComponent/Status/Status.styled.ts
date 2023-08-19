import { styled } from 'styled-components';
import { ApplicationStatusType } from '@/types';

export const StatusContainer = styled.div<{ applicationStatus: ApplicationStatusType }>`
  width: 70%;
  padding: 4px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: ${({ applicationStatus }) =>
    applicationStatus === 'PENDING' ? '#e9e8e8' : applicationStatus.includes('PASS') ? '#e9faf7' : '#989898'};
  color: ${({ applicationStatus }) =>
    applicationStatus === 'PENDING' ? '#989898' : applicationStatus.includes('PASS') ? '#1a9882' : '#eb3d4d'};
`;
