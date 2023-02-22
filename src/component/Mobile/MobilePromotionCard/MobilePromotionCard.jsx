/** @jsxImportSource @emotion/react */
import Fade from 'react-reveal/Fade';

import {
  sectionContainer,
  contentContainer,
  topContainer,
  subjectStyle,
  imgContianer,
  imgStyle,
  bottomContainer,
} from './MobilePromotionCard.style';
import MobileProject from '../MobileProject/MobileProject';
import MobileStudy from '../MobileStudy/MobileStudy';
import MobileEntertainment from '../MobileEntertainment/MobileEntertainment';

export default function MobilePromotionCard({ imageSrc, height, title, benefits }) {
  return (
    <section css={sectionContainer}>
      <div css={contentContainer}>
        <div css={topContainer}>
          <Fade left>
            <div css={subjectStyle}>{title}</div>
          </Fade>
          <div css={imgContianer}>
            <img src={`${imageSrc}.png`} alt={title} css={imgStyle(height)} />
          </div>
        </div>
        {title === 'Project' && (
          <div css={bottomContainer}>
            <MobileProject benefits={benefits} imageSrc={imageSrc} />
          </div>
        )}
        {title === 'Study & Networking' && (
          <div css={bottomContainer}>
            <MobileStudy benefits={benefits} />
          </div>
        )}
        {title === 'Entertainment' && (
          <div css={bottomContainer}>
            <MobileEntertainment benefits={benefits} />
          </div>
        )}
      </div>
    </section>
  );
}
