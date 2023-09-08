import { styled } from 'styled-components';
import { ApplicationStatusType } from '@/types';
import { APPLICATION_STATUS_TEXT_COLOR, APPLICATION_STATUS_BG_COLOR } from '@/constants';

export const StatusContainer = styled.div<{ $applicationStatus: ApplicationStatusType }>`
  width: 70%;
  padding: 4px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: ${({ $applicationStatus }) => APPLICATION_STATUS_BG_COLOR[$applicationStatus]};
  color: ${({ $applicationStatus }) => APPLICATION_STATUS_TEXT_COLOR[$applicationStatus]};
`;
