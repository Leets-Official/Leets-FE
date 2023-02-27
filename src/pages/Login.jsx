/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import LoginButton from '../component/LoginButton/LoginButton';
import Apply from './Apply';

export default function Login() {
  const userName = useSelector(state => state.user.name);
  return userName ? <Apply /> : <LoginButton />;
}
