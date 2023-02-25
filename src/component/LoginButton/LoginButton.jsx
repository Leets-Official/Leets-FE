import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase-config';
import { userSlice } from '../../features/userSlice';

export default function LoginButton() {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(data => {
        setUserData(data.user);
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
    <div>
      <button type="button" onClick={handleGoogleLogin} style={{ background: 'white' }}>
        구글 로그인
      </button>
      <div style={{ color: 'white' }}>{userData ? userData.email : null}</div>
    </div>
  );
}
