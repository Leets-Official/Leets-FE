/** @jsxImportSource @emotion/react */
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase-config';
import { userSlice } from '../../features/userSlice';
import {
  loginBackground,
  loginContainer,
  buttonContainer,
  imageStyle,
  textStyle,
  buttonStyle,
  headStyle,
  writeStyle,
} from './LoginButton.style';

export default function LoginButton() {
  const dispatch = useDispatch();

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(data => {
        dispatch(
          userSlice.actions.login({
            name: data.user.displayName,
            email: data.user.email,
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div css={loginBackground}>
      <div css={loginContainer}>
        <div css={headStyle}>
          Join us!
          <div css={writeStyle}>지원서 작성하기</div>
        </div>
        <div css={buttonContainer}>
          <button type="button" onClick={handleGoogleLogin} css={buttonStyle}>
            <img src="../assets/image/googleLogo.png" alt="logo" css={imageStyle} />
            <div css={textStyle}>Google 계정으로 로그인</div>
          </button>
        </div>
      </div>
    </div>
  );
}
