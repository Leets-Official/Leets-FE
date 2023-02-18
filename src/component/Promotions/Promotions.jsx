import PromotionCard from '../PromotionCard/PromotionCard';
import promotionDatas from './promotionDatas';

export default function Promotions() {
  // console.log('프로모션 렌더링');
  return promotionDatas.map(({ imageSrc, title, benefits }) => (
    <PromotionCard key={imageSrc} imageSrc={imageSrc} title={title} benefits={benefits} />
  ));
}