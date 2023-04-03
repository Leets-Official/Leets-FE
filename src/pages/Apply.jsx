import { useSelector } from 'react-redux';
// import { isDesktop } from '../utils/deviceChecker';
import Nav from '../component/Nav/Nav';
import Forms from '../component/Forms/Forms';
import Login from './Login';

const todayColor = 'green';

export default function Apply() {
  alert('지원 기간이 아닙니다.');
  window.location.href = '/';

  // if (!isDesktop()) {
  //   alert('지원하기는 PC를 이용해주세요.');
  //   window.location.href = '/';
  // }

  const { name, email } = useSelector(state => state.user);

  return name ? (
    <>
      <Nav color={todayColor} />
      <Forms color={todayColor} email={email} />
    </>
  ) : (
    <Login />
  );
}
