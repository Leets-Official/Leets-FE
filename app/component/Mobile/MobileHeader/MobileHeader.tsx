/** @jsxImportSource @emotion/react */
import { headContainer, titleStyle } from './MobileHeader.styled';

export default function Header() {
  return (
    <header css={headContainer}>
      <div css={titleStyle}>Leets</div>
    </header>
  );
}
