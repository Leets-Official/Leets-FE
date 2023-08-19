import { HeaderAnimation } from '@/constants';
import * as S from './MobileHeader.styled';

const Header = () => (
  <S.HeadContainer initial="ready" animate="start" variants={HeaderAnimation}>
    <S.TitleStyle>Leets</S.TitleStyle>
  </S.HeadContainer>
);

export default Header;
