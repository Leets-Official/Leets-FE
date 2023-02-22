/** @jsxImportSource @emotion/react */
import { contentContainer, gridContainer, balloon, textStyle } from './Entertainment.style';

export default function Entertainment({ benefits }) {
  return (
    <div css={contentContainer}>
      <div css={gridContainer}>
        {benefits.map((benefit, index) => (
          <div key={index} css={balloon(index)}>
            <div css={textStyle}>{benefit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
