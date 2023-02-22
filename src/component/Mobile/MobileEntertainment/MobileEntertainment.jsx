/** @jsxImportSource @emotion/react */

import { contentContainer, bottomContainer, balloon, textContainer } from './MobileEntertainment.style';

export default function MobileEntertainment({ benefits }) {
  return (
    <div css={contentContainer}>
      <div css={bottomContainer}>
        {benefits.map((benefit, index) => (
          <div key={index} css={balloon(index)}>
            <div css={textContainer}>{benefit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
