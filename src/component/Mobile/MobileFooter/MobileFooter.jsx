/** @jsxImportSource @emotion/react */
import { sectionContainer, footerContainer, textStyle } from './MobileFooter.style';

export default function MobileFooter() {
  return (
    <section css={sectionContainer}>
      <div css={footerContainer}>
        <div css={textStyle}>Copyright 2023. Collection50 all right reseved.</div>
      </div>
    </section>
  );
}
