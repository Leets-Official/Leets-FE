/** @jsxImportSource @emotion/react */
import Fade from 'react-reveal/Fade';
import {
  sectionContaier,
  contentContainer,
  topContainer,
  subjectStyle,
  bottomContainer,
  infoStyle,
  dateStyle,
  keyStyle,
  valueStyle,
} from './MobileTimeline.style';
import data from '../../../utils/timelineData';
import MobileTimelineImage from '../MobileTimelineImage/MobileTimelineImage';

export default function MobileTimeline({ color }) {
  return (
    <div css={sectionContaier}>
      <div css={contentContainer}>
        <div css={topContainer}>
          <Fade left>
            <div css={subjectStyle}>Timeline</div>
          </Fade>
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
      </div>
      <div>모바일 타임라인</div>
    </div>
  );
}