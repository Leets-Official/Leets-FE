/** @jsxImportSource @emotion/react */
import { headContainer, titleStyle } from './MobileHeader.style';

export default function Header() {
  return (
    <header css={headContainer}>
      <div css={titleStyle}>Leets</div>
    </header>
  );
}
