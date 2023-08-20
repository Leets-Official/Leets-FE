import { TIMELINE_LAYOUT } from '@/constants';
import { ThemeColor } from '@/types';
import * as S from './Timeline.styled';
import TimelineImage from './TimelineImage';

const Timeline = ({ color }: { color: ThemeColor }) => (
  <S.SectionContainer>
    <S.ContentContainer>
      <S.TopContainer>
        <S.Subject initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 0.5 }}>
          Timeline
        </S.Subject>
      </S.TopContainer>
      <S.BottomContainer>
        <TimelineImage color={color} />
        <S.InfoStyle>
          {Object.entries(TIMELINE_LAYOUT).map(([key, value]) => (
            <S.DateStyle key={key} initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}>
              <S.KeyStyle>{key}</S.KeyStyle>
              <S.ValueStyle>{value}</S.ValueStyle>
            </S.DateStyle>
          ))}
        </S.InfoStyle>
      </S.BottomContainer>
    </S.ContentContainer>
  </S.SectionContainer>
);

export default Timeline;
