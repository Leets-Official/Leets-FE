/** @jsxImportSource @emotion/react */

import { contentContainer, balloon, textContainer } from './MobileEntertainment.styled';

export default function MobileEntertainment({ benefits }) {
  return (
    <div css={contentContainer}>
      {benefits.map((benefit, index) => (
        <div key={index} css={balloon(index)}>
          <div css={textContainer}>{benefit}</div>
        </div>
      ))}
    </div>
  );
}
