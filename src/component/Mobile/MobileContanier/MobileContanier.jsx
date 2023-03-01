/** @jsxImportSource @emotion/react */
import BackgroundImage from '../../BackgroundImage/svg/BackgroundImage';
import MobileButton from '../MobileButton/MobileButton';
import MobilePromotions from '../MobilePromotions/MobilePromotions';
import containerStyle from './MobileContanier.style';
import MobileHeader from '../MobileHeader/MobileHeader';
import MobileContact from '../MobileContact/MobileContact';
import MobileTimeline from '../MobileTimeline/MobileTimeline';
import MobileFooter from '../MobileFooter/MobileFooter';

export default function MobileContainer({ color = 'green' }) {
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
