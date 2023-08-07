import data from '@/utils/timelineData';
import * as S from './Timeline.styled';
import TimelineImage from './TimelineImage';

export default function Timeline({ color }) {
  return (
    <S.SectionContainer>
      <S.ContentContainer>
        <S.TopContainer>
          <S.SubjectStyle>Timeline</S.SubjectStyle>
        </S.TopContainer>
        <S.BottomContainer>
          <TimelineImage color={color} />
          <S.InfoStyle>
            {Object.entries(data).map(([key, value]) => (
              <div key={key}>
                <S.DateStyle>
                  <S.KeyStyle>{key}</S.KeyStyle>
                  <S.ValueStyle>{value}</S.ValueStyle>
                </S.DateStyle>
              </div>
            ))}
          </S.InfoStyle>
        </S.BottomContainer>
      </S.ContentContainer>
    </S.SectionContainer>
  );
}
