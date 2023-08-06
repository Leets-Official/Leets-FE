import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '@/firebase-config';
import { login } from '@/features/userSlice';
import * as S from './LoginButton.style';

const LoginButton = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
          })
        );
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <S.LoginBackground>
      <S.LoginContainer>
        <S.HeadStyle>
          Join us!
          <S.WriteStyle>지원서 작성하기</S.WriteStyle>
        </S.HeadStyle>
        <S.ButtonContainer>
          <S.ButtonStyle type="button" onClick={handleGoogleLogin}>
            <S.ImageStyle src="../assets/image/googleLogo.png" alt="logo" />
            <S.TextStyle>구글 아이디로 로그인</S.TextStyle>
          </S.ButtonStyle>
        </S.ButtonContainer>
      </S.LoginContainer>
    </S.LoginBackground>
  );
};

export default LoginButton;
