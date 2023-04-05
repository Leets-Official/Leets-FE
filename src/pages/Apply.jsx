import { useSelector } from 'react-redux';
import Nav from '../component/Nav';
import Forms from '../component/Forms';
import LoginButton from '../component/LoginButton';

const todayColor = 'green';

export default function Apply() {
  // alert('지원 기간이 아닙니다.');
  // window.location.href = '/';

  const { name, email } = useSelector(state => state.user);

  return (
    <>
      <Nav color={todayColor} />
      {name ? <Forms color={todayColor} email={email} /> : <LoginButton />}
    </>
  );
}
