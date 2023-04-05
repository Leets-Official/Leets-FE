import PromotionCard from '../PromotionCard';
import promotionDatas from '../../utils/promotionDatas';

export default function Promotions({ color }) {
  return promotionDatas.map(({ title, height, benefits }) => (
    <PromotionCard key={title} height={height} title={title} benefits={benefits} color={color} />
  ));
}
