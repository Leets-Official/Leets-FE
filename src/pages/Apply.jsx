import { useSelector } from 'react-redux';
import { isDesktop } from '../utils/deviceChecker';
import Nav from '../component/Nav/Nav';
import Forms from '../component/Forms/Forms';
import Login from './Login';

const todayColor = 'yellow';

export default function Apply() {
  if (!isDesktop()) {
    alert('지원하기는 PC를 이용해주세요.');
    window.location.href = '/';
  }

  const userName = useSelector(state => state.user.name);
  // console.log('name', user);

  return userName ? (
    <>
      <Nav color={todayColor} />
      <Forms color={todayColor} />
    </>
  ) : (
    <Login />
  );
}
