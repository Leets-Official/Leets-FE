/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { applyContainer, linkStyle } from './Button.style';
import { isDesktop } from '../../utils/deviceChecker';

export default function Button({ link, title, color }) {
  const handleClick = e => {
    // if (!isDesktop()) {
    //   e.preventDefault();
    //   alert('지원하기는 PC를 이용해주세요.');
    // }
    e.preventDefault();
    alert('지원 기간이 아닙니다.');
  };

  return (
    <div css={applyContainer}>
      <Link to={link} css={linkStyle(color)} onClick={handleClick}>
        {title}
      </Link>
    </div>
  );
}
