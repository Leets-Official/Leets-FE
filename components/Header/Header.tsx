import { memo } from 'react';
import * as S from './Header.styled';

export const HeaderAnimation = {
  ready: {
    opacity: 0,
  },
  start: { opacity: 1, transition: { duration: 1, delay: 0.1 } },
} as const;

const Header = () => (
  <S.HeadContainer initial="ready" animate="start" variants={HeaderAnimation}>
    <S.TitleStyle>Leets</S.TitleStyle>
  </S.HeadContainer>
);

export default memo(Header);
