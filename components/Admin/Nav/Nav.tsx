import { ADMIN } from '@/constants';
import * as S from './Nav.styled';

const Nav = () => {
  return (
    <S.HeaderContainer href={ADMIN.HOME}>
      <S.Header>
        <S.AdminLogoContainer />
        Leets
      </S.Header>
    </S.HeaderContainer>
  );
};

export default Nav;
