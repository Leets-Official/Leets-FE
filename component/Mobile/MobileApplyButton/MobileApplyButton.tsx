import { ThemeColor } from '@/types';
import { USER } from '@/constants';
import * as S from './MobileApplyButton.styled';

const MobileApplyButton = ({ color }: { color: ThemeColor }) => (
  <S.ButtonContainer>
    <S.ApplyButton href={USER.APPLY} color={color}>
      지원하기
    </S.ApplyButton>
  </S.ButtonContainer>
);

export default MobileApplyButton;
