import { PROMOTION_LAYOUT } from '@/constants/';
import { ThemeColor } from '@/types';
import MobilePromotionCard from '../MobilePromotionCard';

export default function MobilePromotions({ color }: { color: ThemeColor }) {
  return (
    <>
      {PROMOTION_LAYOUT.map(({ title, height, benefits }) => (
        <MobilePromotionCard key={title} height={height} title={title} benefits={benefits} color={color} />
      ))}
    </>
  );
}
