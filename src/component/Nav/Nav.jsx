/** @jsxImportSource @emotion/react */

import { navStyle, homeContainer, home } from './Nav.style';

export default function Nav() {
  return (
    <nav css={navStyle}>
      <div css={homeContainer}>
        <div css={home}>LEETS</div>
      </div>
    </nav>
  );
}
