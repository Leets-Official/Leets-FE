import { logout } from '@/features/userSlice';
import persistor from '@/utils/persistor';
import { useAppSelector, useAppDispatch } from '@/store';
import * as S from './Nav.style';

const Nav = ({ color }) => {
  const { name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const purge = async () => {
    await persistor.purge();
    dispatch(logout());
  };

  return (
    <S.NavContainer>
      <S.Container>
        <S.LinkContainer href="/">Leets</S.LinkContainer>
        <S.WelcomeContainer name={name}>
          {name && (
            <>
              <S.WelcomeStyle>{`${name}님 `}환영해요!</S.WelcomeStyle>
              <S.LogoutButton type="button" onClick={purge} name={name} color={color} />
            </>
          )}
        </S.WelcomeContainer>
      </S.Container>
    </S.NavContainer>
  );
};

export default Nav;
