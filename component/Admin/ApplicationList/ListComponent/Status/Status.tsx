import { DROPDOWN_MAP } from '@/constants';
import { ApplicationStatusType } from '@/types';
import * as S from './Status.styled';

const Status = ({ status }: { status: ApplicationStatusType }) => {
  const isPass = status.includes('PASS');
  return <S.StatusContainer isPass={isPass}>{DROPDOWN_MAP[status]}</S.StatusContainer>;
};

export default Status;
