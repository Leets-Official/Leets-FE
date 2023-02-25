import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase-config';

export default function Login() {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(data => {
        setUserData(data.user);
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
