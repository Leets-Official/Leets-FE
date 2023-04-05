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
import Project from '../Project';
import Study from '../Study';
import Entertainment from '../Entertainment';

export default function PromotionCard({ height, title, benefits, color }) {
  const imageSrc = `../../assets/image/Main/${color}/${title}.png`;
  const projectImageSrc = `../../assets/image/Project/${color}`;

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
          {title === 'Project' && <Project benefits={benefits} imageSrc={projectImageSrc} />}
          {title === 'Study & Networking' && <Study benefits={benefits} />}
          {title === 'Entertainment' && <Entertainment benefits={benefits} />}
        </div>
      </div>
    </section>
  );
}
