import { DROPDOWN_MAP } from '@/constants';
import { KeyOf } from '@/types';
import * as S from './Status.styled';

const Status = ({ status }: { status: string }) => {
  const isPass = status.includes('PASS');
  return <S.StatusContainer isPass={isPass}>{DROPDOWN_MAP[status as KeyOf<typeof DROPDOWN_MAP>]}</S.StatusContainer>;
};

export default Status;
