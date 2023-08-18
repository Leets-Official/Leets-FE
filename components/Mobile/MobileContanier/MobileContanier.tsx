import BackgroundImage from '@/components/BackgroundImage';
import { ThemeColor } from '@/types';
import * as S from './MobileContanier.styled';
import MobileButton from '../MobileApplyButton';
import MobilePromotions from '../MobilePromotions';
import MobileHeader from '../MobileHeader';
import MobileContact from '../MobileContact';
import MobileTimeline from '../MobileTimeline';
import MobileFooter from '../MobileFooter';

const MobileContainer = ({ color }: { color: ThemeColor }) => (
  <S.MobileMainContainer>
    <MobileHeader />
    <BackgroundImage color={color} />
    <MobilePromotions color={color} />
    <MobileTimeline color={color} />
    <MobileButton color={color} />
    <MobileContact />
    <MobileFooter />
  </S.MobileMainContainer>
);

export default MobileContainer;
