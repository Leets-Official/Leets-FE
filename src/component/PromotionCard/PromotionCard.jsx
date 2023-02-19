/** @jsxImportSource @emotion/react */
import Fade from 'react-reveal/Fade';
import {
  sectionContainer,
  contentContainer,
  infoContainer,
  imgContainer,
  subjectStyle,
  describeStyle,
  ulStyle,
  listStyle,
  imgStyle,
  hrStyle,
} from './PromotionCard.style';

export default function PromotionCard({ imageSrc, title, benefits }) {
  return (
    <section css={sectionContainer}>
      <div css={contentContainer}>
        <div css={infoContainer}>
          <Fade left>
            <div css={subjectStyle}>{title}</div>
          </Fade>
          <div css={describeStyle}>
            <ul css={ulStyle}>
              {benefits.map((benefit, index) => (
                <>
                  <li key={index} css={listStyle}>
                    {benefit}
                  </li>
                  <hr css={hrStyle} />
                </>
              ))}
            </ul>
          </div>
        </div>
        <div css={imgContainer}>
          <img src={imageSrc} alt={title} css={imgStyle} />
        </div>
      </div>
    </section>
  );
}
