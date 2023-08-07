import MobilePromotionCard from '../MobilePromotionCard';
import promotionDatas from '../@/utils/mobilePromotionDatas';

export default function MobilePromotions({ color }) {
  return promotionDatas.map(({ title, height, benefits }) => (
    <MobilePromotionCard key={title} height={height} title={title} benefits={benefits} color={color} />
  ));
}
