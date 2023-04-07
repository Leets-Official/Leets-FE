import MainContainer from '../component/MainContainer';
import MobileContainer from '../component/Mobile/MobileContanier';
import { isMobile } from '../utils/deviceChecker';

export default function Main({ color }) {
  return isMobile() ? <MobileContainer color={color} /> : <MainContainer color={color} />;
}
