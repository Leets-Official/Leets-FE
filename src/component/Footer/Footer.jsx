/** @jsxImportSource @emotion/react */

import { sectionContainer, footerContainer, textStyle, hrStyle } from './Footer.style';

export default function Footer() {
  return (
    <footer css={sectionContainer}>
      <div css={footerContainer}>
        <hr css={hrStyle} />
        <div css={textStyle}>Copyright 2023. Collection50 all right reseved.</div>
      </div>
    </footer>
  );
}
