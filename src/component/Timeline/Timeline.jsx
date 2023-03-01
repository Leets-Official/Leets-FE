/** @jsxImportSource @emotion/react */
import Fade from 'react-reveal/Fade';
import {
  sectionContaier,
  contentContainer,
  topContainer,
  subjectStyle,
  bottomContainer,
  // imageContainer,
  infoStyle,
  dateStyle,
  keyStyle,
  valueStyle,
} from './Timeline.style';
import TimelineImage from '../TimelineImage/TimelineImage';
import data from '../../utils/timelineData';

export default function Timeline({ color }) {
  return (
    <section css={sectionContaier}>
      <div css={contentContainer}>
        <div css={topContainer}>
          <Fade left>
            <div css={subjectStyle}>Timeline</div>
          </Fade>
        </div>
        <div css={bottomContainer}>
          <TimelineImage color={color} />
          <div css={infoStyle}>
            {Object.entries(data).map(([key, value]) => (
              <div key={key} css={dateStyle}>
                <div css={keyStyle}>{key}</div>
                <div css={valueStyle}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
