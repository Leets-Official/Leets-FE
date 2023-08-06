/** @jsxImportSource @emotion/react */
import containerStyle from './MobileContanier.styled';
import BackgroundImage from '../../BackgroundImage/svg';
import MobileButton from '../MobileButton';
import MobilePromotions from '../MobilePromotions';
import MobileHeader from '../MobileHeader';
import MobileContact from '../MobileContact';
import MobileTimeline from '../MobileTimeline';
import MobileFooter from '../MobileFooter';

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
