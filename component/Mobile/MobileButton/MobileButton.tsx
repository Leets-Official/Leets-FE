/** @jsxImportSource @emotion/react */
import { ThemeColor } from '@/types';
import { buttonContainer, buttonStyle } from './MobileButton.styled';

export default function MobileButton({ color }: { color: ThemeColor }) {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    alert('지원 기간이 아닙니다.');
  };

  return (
    <div css={buttonContainer}>
      <button type="button" css={buttonStyle(color)} onClick={() => handleClick}>
        지원하기
      </button>
    </div>
  );
}
