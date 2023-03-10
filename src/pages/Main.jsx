import MainContainer from '../component/MainContainer/MainContainer';
import MobileContainer from '../component/Mobile/MobileContanier/MobileContanier';
import { isMobile } from '../utils/deviceChecker';

const todayColor = 'green';

export default function Main() {
  return isMobile() ? <MobileContainer color={todayColor} /> : <MainContainer color={todayColor} />;
}
