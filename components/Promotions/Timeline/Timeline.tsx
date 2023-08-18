import { TIMELINE_LAYOUT } from '@/constants';
import { ThemeColor } from '@/types';
import * as S from './Timeline.styled';
import TimelineImage from './TimelineImage';

const Timeline = ({ color }: { color: ThemeColor }) => (
  <S.SectionContainer>
    <S.ContentContainer>
      <S.TopContainer>
        <S.SubjectStyle>Timeline</S.SubjectStyle>
      </S.TopContainer>
      <S.BottomContainer>
        <TimelineImage color={color} />
        <S.InfoStyle>
          {Object.entries(TIMELINE_LAYOUT).map(([key, value]) => (
            <S.DateStyle key={key}>
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
