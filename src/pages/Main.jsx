import MainContainer from '../component/MainContainer/MainContainer';
import MobileContainer from '../component/Mobile/MobileContanier/MobileContanier';
import { isMobile } from '../utils/deviceChecker';

export default function Main() {
  console.log('isMobile(): ', isMobile());
  return isMobile() ? <MobileContainer /> : <MainContainer />;
}
