import Forms from '../component/Forms/Forms';
import Nav from '../component/Nav/Nav';
import { isDesktop } from '../utils/deviceChecker';

export default function Apply() {
  if (isDesktop()) {
    return (
      <>
        <Nav />
        <Forms />
      </>
    );
  }
  alert('지원하기는 PC를 이용해주세요.');
  window.location.href = '/';
}
