/** @jsxImportSource @emotion/react */

import { headContainer, titleStyle } from './Header.style';

export default function Header({ height }) {
  return (
    <div css={headContainer(height)}>
      <p css={titleStyle}>Leets</p>
    </div>
  );
}
