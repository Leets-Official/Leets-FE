import { ThemeColor } from '@/types';
import { APPLICATION } from '@/constants';
import { Alert } from '@/utils';
import { MouseEvent } from 'react';
import * as S from './MobileApplyButton.styled';

const MobileApplyButton = ({ color }: { color: ThemeColor }) => {
  const clickHandler = (e: MouseEvent) => {
    e.preventDefault();

    Alert.error(APPLICATION.ASK_USE_DESKTOP);
  };

  return (
    <S.ButtonContainer>
      <S.ApplyButton color={color} onClick={clickHandler}>
        지원하기
      </S.ApplyButton>
    </S.ButtonContainer>
  );
};
export default MobileApplyButton;
