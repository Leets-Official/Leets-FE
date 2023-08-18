import { ThemeColor } from '@/types';
import { USER } from '@/constants';
import * as S from './ApplyButton.styled';

const ApplyButton = ({ color }: { color: ThemeColor }) => (
  <S.Container>
    <S.ApplyButton href={USER.APPLY} color={color}>
      지원하기
    </S.ApplyButton>
  </S.Container>
);

export default ApplyButton;
