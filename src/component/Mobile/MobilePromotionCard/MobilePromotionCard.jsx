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

export default function MobilePromotionCard({ height, title, benefits, color }) {
  const imageSrc = `../../assets/image/Main/${color}/${title}.png`;
  const projectImageSrc = `../../assets/image/Project/${color}`;

  return (
    <section css={sectionContainer}>
      <div css={contentContainer}>
        <div css={topContainer}>
          <Fade left>
            <div css={subjectStyle}>{title}</div>
          </Fade>
          <div css={imgContianer}>
            <img src={imageSrc} alt={title} css={imgStyle(height)} />
          </div>
        </div>
        {title === 'Project' && (
          <div css={bottomContainer}>
            <MobileProject benefits={benefits} imageSrc={projectImageSrc} />
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
