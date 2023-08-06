/** @jsxImportSource @emotion/react */
import { blockStyle, contentContainer, headContainer, benefitContainer } from './MobileStudy.styled';

export default function MobileStudy({ benefits }) {
  return (
    <div css={contentContainer}>
      {benefits.map((benefit, index) => (
        <div key={benefit} css={blockStyle}>
          <div css={headContainer}>{`0${index + 1}`}</div>
          <div css={benefitContainer}>{benefit}</div>
        </div>
      ))}
    </div>
  );
}
