/** @jsxImportSource @emotion/react */
import BackgroundImage from '@/component/BackgroundImage';
import { ThemeColor } from '@/types';
import containerStyle from './MobileContanier.styled';
import MobileButton from '../MobileButton';
import MobilePromotions from '../MobilePromotions';
import MobileHeader from '../MobileHeader';
import MobileContact from '../MobileContact';
import MobileTimeline from '../MobileTimeline';
import MobileFooter from '../MobileFooter';

export default function MobileContainer({ color }: { color: ThemeColor }) {
  return (
    <main css={containerStyle}>
      <MobileHeader />
      <BackgroundImage color={color} />
      <MobilePromotions color={color} />
      <MobileTimeline color={color} />
      <MobileButton color={color} />
      <MobileContact />
      <MobileFooter />
    </main>
  );
}
