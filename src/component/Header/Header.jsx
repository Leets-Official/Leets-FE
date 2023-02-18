/** @jsxImportSource @emotion/react */

import { headContainer, titleStyle } from './Header.style';

export default function Header() {
  return (
    <div css={headContainer(400)}>
      <div css={titleStyle}>Leets</div>
    </div>
  );
}
