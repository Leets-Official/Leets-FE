/** @jsxImportSource @emotion/react */
import Fade from 'react-reveal/Fade';
import { headContainer, titleStyle } from './MobileHeader.style';

export default function Header() {
  return (
    <div css={headContainer}>
      <Fade>
        <div css={titleStyle}>Leets</div>
      </Fade>
    </div>
  );
}
