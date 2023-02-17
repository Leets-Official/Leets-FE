/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { applyContainer, linkStyle } from './Button.style';

export default function Button({ link, title }) {
  return (
    <div css={applyContainer}>
      <Link to={link} css={linkStyle}>
        {title}
      </Link>
    </div>
  );
}
