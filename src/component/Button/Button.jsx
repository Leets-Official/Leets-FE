/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { applyContainer, linkStyle } from './Button.style';
import { isDesktop } from '../../utils/deviceChecker';

export default function Button({ link, title, color }) {
  const handleClick = e => {
    // e.preventDefault();
    // alert('3/2 12시부터 지원 가능합니다.');

    if (!isDesktop()) {
      e.preventDefault();
      alert('지원하기는 PC를 이용해주세요.');
    }
  };

  return (
    <div css={applyContainer}>
      <Link to={link} css={linkStyle(color)} onClick={handleClick}>
        {title}
      </Link>
    </div>
  );
}
