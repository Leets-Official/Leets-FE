import MainContainer from '../component/MainContainer/MainContainer';
import MobileContainer from '../component/Mobile/MobileContanier/MobileContanier';
import { isMobile } from '../utils/deviceChecker';

const todayColor = 'yellow';

export default function Main() {
  // console.log('isMobile(): ', isMobile());
  return isMobile() ? <MobileContainer color={todayColor} /> : <MainContainer color={todayColor} />;
}
