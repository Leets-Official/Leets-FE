import PromotionCard from '../PromotionCard/PromotionCard';
import promotionDatas from '../../utils/promotionDatas';

export default function Promotions() {
  return promotionDatas.map(({ imageSrc, title, height, benefits }) => (
    <PromotionCard key={imageSrc} height={height} imageSrc={`${imageSrc}`} title={title} benefits={benefits} />
  ));
}
