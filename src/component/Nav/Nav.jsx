/** @jsxImportSource @emotion/react */

import { navContainer, home } from './Nav.style';

export default function Nav() {
  return (
    <nav>
      <div css={navContainer}>
        <div css={home}>LEETS</div>
      </div>
    </nav>
  );
}
