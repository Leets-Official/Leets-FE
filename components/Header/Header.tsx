import { HeaderAnimation } from '@/constants';
import { memo } from 'react';
import * as S from './Header.styled';

const Header = () => (
  <S.HeadContainer initial="ready" animate="start" variants={HeaderAnimation}>
    <S.TitleStyle>Leets</S.TitleStyle>
  </S.HeadContainer>
);

export default memo(Header);
