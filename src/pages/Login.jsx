/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import LoginButton from '../component/LoginButton/LoginButton';
import Apply from './Apply';

export default function Login() {
  const { name } = useSelector(state => state.user);
  return name ? <Apply /> : <LoginButton />;
}
