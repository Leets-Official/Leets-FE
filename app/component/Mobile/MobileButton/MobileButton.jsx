/** @jsxImportSource @emotion/react */
import { buttonContainer, buttonStyle } from './MobileButton.style';

export default function MobileButton({ color }) {
  const handleClick = e => {
    e.preventDefault();
    alert('지원 기간이 아닙니다.');
  };

  return (
    <div css={buttonContainer}>
      <button type="button" css={buttonStyle(color)} onClick={handleClick}>
        지원하기
      </button>
    </div>
  );
}
