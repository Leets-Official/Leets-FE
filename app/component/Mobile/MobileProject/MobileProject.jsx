/** @jsxImportSource @emotion/react */

import { blockStyle, contentContainer, headContainer, benefitContainer, imgStyle } from './MobileProject.style';

export default function MobileProject({ benefits, imageSrc }) {
  return (
    <div css={contentContainer}>
      {benefits.map((benefit, index) => (
        <div key={benefit} css={blockStyle}>
          <div css={headContainer}>
            {`0${index + 1}`}
            <img src={`${imageSrc}/star${index + 1}.png`} alt="Project" css={imgStyle} />
          </div>
          <div css={benefitContainer}>{benefit}</div>
        </div>
      ))}
    </div>
  );
}
