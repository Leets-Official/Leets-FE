import { ThemeColor } from '@/types';
import { TIMELINE_LAYOUT } from '@/constants';
import MobileTimelineImage from './MobileTimelineImage';
import * as S from './MobileTimeline.styled';

const MobileTimeline = ({ color }: { color: ThemeColor }) => (
  <S.SectionContainer>
    <S.ContentContainer>
      <S.Subject initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }}>
        Timeline
      </S.Subject>
      <S.BottomContainer>
        <MobileTimelineImage color={color} />
        <S.InfoStyle>
          {Object.entries(TIMELINE_LAYOUT).map(([key, value]) => (
            <S.DateStyle key={key} initial={{ y: 60 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}>
              <S.KeyStyle>{key}</S.KeyStyle>
              <S.ValueStyle>{value}</S.ValueStyle>
            </S.DateStyle>
          ))}
        </S.InfoStyle>
      </S.BottomContainer>
    </S.ContentContainer>
  </S.SectionContainer>
);

export default MobileTimeline;
