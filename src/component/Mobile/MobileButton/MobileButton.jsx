/** @jsxImportSource @emotion/react */
import { buttonContainer, buttonStyle } from './MobileButton.style';
// import { isDesktop } from '../../../utils/deviceChecker';

export default function MobileButton({ color }) {
  const handleClick = e => {
    // if (!isDesktop()) {
    //   alert('지원하기는 PC를 이용해주세요.');
    //   e.preventDefault();
    // }
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
