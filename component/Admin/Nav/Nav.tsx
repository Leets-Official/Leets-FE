import { useRouter } from 'next/navigation';
import { ADMIN } from '@/constants';
import * as S from './Nav.styled';

const Nav = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(ADMIN.HOME);
  };

  return (
    <S.HeaderContainer onClick={clickHandler}>
      <S.Header>
        <S.AdminLogoContainer />
        Leets
      </S.Header>
    </S.HeaderContainer>
  );
};

export default Nav;
