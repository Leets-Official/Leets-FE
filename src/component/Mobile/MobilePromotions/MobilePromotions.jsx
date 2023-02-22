import MobilePromotionCard from '../MobilePromotionCard/MobilePromotionCard';
import promotionDatas from '../../../utils/mobilePromotionDatas';

export default function MobilePromotions() {
  return promotionDatas.map(({ imageSrc, title, height, benefits }) => (
    <MobilePromotionCard key={imageSrc} height={height} imageSrc={`${imageSrc}`} title={title} benefits={benefits} />
  ));
}
