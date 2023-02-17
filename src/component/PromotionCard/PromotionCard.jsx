/** @jsxImportSource @emotion/react */

import {
  sectionContainer,
  subjectStyle,
  describeStyle,
  listStyle,
  imgStyle,
  infoContainer,
  imgContainer,
  hrStyle,
} from './PromotionCard.style';

export default function PromotionCard({ imageSrc, title, benefits }) {
  return (
    <section css={sectionContainer}>
      <div css={infoContainer}>
        <div css={subjectStyle}>{title}</div>
        <div css={describeStyle}>
          <ul style={{ padding: '0' }}>
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
        <img src={imageSrc} alt={title} css={imgStyle(450)} />
      </div>
    </section>
  );
}
