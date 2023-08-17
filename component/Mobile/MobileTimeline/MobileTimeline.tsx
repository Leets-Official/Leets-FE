import { ThemeColor } from '@/types';
import { TIMELINE_LAYOUT } from '@/constants';
import MobileTimelineImage from './MobileTimelineImage';
import * as S from './MobileTimeline.styled';

const MobileTimeline = ({ color }: { color: ThemeColor }) => {
  return (
    <S.SectionContainer>
      <S.ContentContainer>
        <S.SubjectStyle>Timeline</S.SubjectStyle>
        <S.BottomContainer>
          <MobileTimelineImage color={color} />
          <S.DateStyle>
            {Object.entries(TIMELINE_LAYOUT).map(([key, value]) => (
              <S.InfoStyle key={key}>
                <S.KeyStyle>{key}</S.KeyStyle>
                <S.ValueStyle>{value}</S.ValueStyle>
              </S.InfoStyle>
            ))}
          </S.DateStyle>
        </S.BottomContainer>
      </S.ContentContainer>
      <div>모바일 타임라인</div>
    </S.SectionContainer>
  );
};

export default MobileTimeline;
