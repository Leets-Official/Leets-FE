/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';
import { navStyle, home, linkStyle } from './Nav.style';

export default function Nav() {
  return (
    <nav css={navStyle}>
      <div css={home}>
        <Link css={linkStyle} to="/">
          Leets
        </Link>
      </div>
    </nav>
  );
}
