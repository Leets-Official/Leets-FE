/** @jsxImportSource @emotion/react */
import Fade from 'react-reveal/Fade';
import {
  sectionContainer,
  contentContainer,
  topContainer,
  subjectStyle,
  imgStyle,
  bottomContainer,
} from './PromotionCard.style';
import Project from '../Project/Project';
import Study from '../Study/Study';
import Entertainment from '../Entertainment/Entertainment';

export default function PromotionCard({ imageSrc, height, title, benefits }) {
  return (
    <section css={sectionContainer}>
      <div css={contentContainer}>
        <div css={topContainer}>
          <Fade left>
            <div css={subjectStyle}>{title}</div>
          </Fade>
          <img src={imageSrc} alt={title} css={imgStyle(height)} />
        </div>
        <div css={bottomContainer}>
          {title === 'Project' && <Project benefits={benefits} />}
          {title === 'Study & Networking' && <Study benefits={benefits} />}
          {title === 'Entertainment' && <Entertainment benefits={benefits} />}
        </div>
      </div>
    </section>
  );
}
