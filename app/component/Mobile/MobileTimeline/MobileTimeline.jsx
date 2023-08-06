/** @jsxImportSource @emotion/react */
import {
  sectionContaier,
  contentContainer,
  subjectStyle,
  bottomContainer,
  infoStyle,
  dateStyle,
  keyStyle,
  valueStyle,
} from './MobileTimeline.style';
import data from '../../../utils/timelineData';
import MobileTimelineImage from '../MobileTimelineImage';

export default function MobileTimeline({ color }) {
  return (
    <section css={sectionContaier}>
      <div css={contentContainer}>
        <div css={subjectStyle}>Timeline</div>
        <div css={bottomContainer}>
          <MobileTimelineImage color={color} />
          <div css={dateStyle}>
            {Object.entries(data).map(([key, value]) => (
              <div key={key} css={infoStyle}>
                <div css={keyStyle}>{key}</div>
                <div css={valueStyle}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>모바일 타임라인</div>
    </section>
  );
}
