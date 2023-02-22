import MainContainer from '../component/MainContainer/MainContainer';
import MobileContainer from '../component/Mobile/MobileContanier/MobileContanier';

import isMobile from '../utils/isMobile';

export default function Main() {
  console.log(isMobile());
  return isMobile ? <MobileContainer /> : <MainContainer />;
}
