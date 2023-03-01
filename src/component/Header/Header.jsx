/** @jsxImportSource @emotion/react */
import Fade from 'react-reveal/Fade';
import { headContainer, titleStyle } from './Header.style';

export default function Header() {
  return (
    <header css={headContainer}>
      <Fade>
        <div css={titleStyle}>Leets</div>
      </Fade>
    </header>
  );
}
