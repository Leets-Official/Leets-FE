import { DROPDOWN_MAP } from '@/constants';
import { ApplicationStatusType } from '@/types';
import * as S from './Status.styled';

const Status = ({ applicationStatus }: { applicationStatus: ApplicationStatusType }) => (
  <S.StatusContainer applicationStatus={applicationStatus}>{DROPDOWN_MAP[applicationStatus]}</S.StatusContainer>
);

export default Status;
