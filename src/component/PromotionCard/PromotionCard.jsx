/** @jsxImportSource @emotion/react */

import { sectionContainer, subjectStyle, describeStyle, listStyle } from './PromotionCard.style';

export default function PromotionCard({ imageSrc, title, benefits }) {
  return (
    <section css={sectionContainer}>
      <div css={subjectStyle}>{title}</div>
      <img src={imageSrc} alt={title} style={{ color: 'white' }} />
      <div css={describeStyle}>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index} css={listStyle}>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
