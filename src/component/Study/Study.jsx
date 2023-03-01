/** @jsxImportSource @emotion/react */
import {
  contentContainer,
  gridContainer,
  numberStyle,
  benefitContainer,
  textStyle,
  flexContainer,
  flexBlockStyle,
} from './Study.style';

export default function Study({ benefits }) {
  return (
    <div css={contentContainer}>
      <div css={gridContainer}>
        {benefits.slice(0, 3).map((benefit, index) => (
          <div key={benefit} css={benefitContainer}>
            <div css={numberStyle}>{`${0}${index + 1}`}</div>
            <div css={textStyle}>{benefit}</div>
          </div>
        ))}
      </div>
      <div css={flexContainer}>
        {benefits.slice(3).map((benefit, index) => (
          <div key={benefit} css={flexBlockStyle}>
            <div css={benefitContainer}>
              <div css={numberStyle}>{`${0}${index + 4}`}</div>
              <div css={textStyle}>{benefit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
