/** @jsxImportSource @emotion/react */
import {
  contentContainer,
  gridContainer,
  numberStyle,
  benefitContainer,
  textStyle,
  flexContainer,
  flexBlockStyle,
} from './Study.styled';

export default function Study({ benefits }) {
  const DIVIDER = 3;
  const ONE_INDEX = 1;
  const ZERO = 0;

  return (
    <div css={contentContainer}>
      <div css={gridContainer}>
        {benefits.slice(ZERO, DIVIDER).map((benefit, index) => (
          <div key={benefit} css={benefitContainer}>
            <div css={numberStyle}>{`${ZERO}${index + ONE_INDEX}`}</div>
            <div css={textStyle}>{benefit}</div>
          </div>
        ))}
      </div>

      <div css={flexContainer}>
        {benefits.slice(DIVIDER).map((benefit, index) => (
          <div key={benefit} css={flexBlockStyle}>
            <div css={benefitContainer}>
              <div css={numberStyle}>{`${ZERO}${index + DIVIDER + ONE_INDEX}`}</div>
              <div css={textStyle}>{benefit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
