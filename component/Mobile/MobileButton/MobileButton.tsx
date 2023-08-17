import { ThemeColor } from '@/types';
import * as S from './MobileButton.styled';

const MobileButton = ({ color }: { color: ThemeColor }) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    alert('지원 기간이 아닙니다.');
  };

  return (
    <S.ButtonContainer>
      <S.ButtonStyle type="button" onClick={() => handleClick} color={color}>
        지원하기
      </S.ButtonStyle>
    </S.ButtonContainer>
  );
};

export default MobileButton;
