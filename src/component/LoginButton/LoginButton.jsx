/** @jsxImportSource @emotion/react */
// import { useState } from 'react';
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
} from './LoginButton.style';
import Nav from '../Nav/Nav';

export default function LoginButton() {
  // const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(data => {
        // setUserData(data.user);
        dispatch(
          userSlice.actions.login({
            user: data.user.displayName,
            email: data.user.email,
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <Nav />

      <div css={loginBackground}>
        <div css={loginContainer}>
          <div css={buttonContainer}>
            <button type="button" onClick={handleGoogleLogin} css={buttonStyle}>
              <img src="../assets/image/googleLogo.png" alt="logo" css={imageStyle} />
              <div css={textStyle}>구글 아이디로 로그인 하기</div>
            </button>
          </div>
          {/* <div style={{ color: 'white' }}>{userData ? userData.email : null}</div> */}
        </div>
      </div>
    </>
  );
}
