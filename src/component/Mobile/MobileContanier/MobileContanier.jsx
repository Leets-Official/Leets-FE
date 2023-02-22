/** @jsxImportSource @emotion/react */
import BackgroundImage from '../../BackgroundImage/svg/BackgroundImage';
import Header from '../../Header/Header';
import MobileButton from '../MobileButton/MobileButton';
import MobilePromotions from '../MobilePromotions/MobilePromotions';
import containerStyle from './MobileContanier.style';

export default function MobileContainer() {
  return (
    <main css={containerStyle}>
      <Header />
      <BackgroundImage />
      <MobilePromotions />
      <MobileButton />
    </main>
  );
}
