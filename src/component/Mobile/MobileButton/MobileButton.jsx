/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { buttonContainer, linkStyle } from './MobileButton.style';

export default function MobileButton() {
  return (
    <div css={buttonContainer}>
      <Link to="/NoApply" css={linkStyle}>
        지원하기
      </Link>
    </div>
  );
}
