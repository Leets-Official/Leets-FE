/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { applyContainer, linkStyle } from './Button.style';
import { isDesktop } from '../../utils/deviceChecker';

export default function Button({ link, title }) {
  const handleClick = e => {
    if (!isDesktop()) {
      e.preventDefault();
      alert('지원하기는 PC를 이용해주세요.');
    }
  };

  return (
    <div css={applyContainer}>
      <Link to={link} css={linkStyle} onClick={handleClick}>
        {title}
      </Link>
    </div>
  );
}
