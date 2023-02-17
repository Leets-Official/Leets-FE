/** @jsxImportSource @emotion/react */
import pointerStyle from './Pointer.style';

export default function Pointer({ position, size }) {
  // console.log('포인터 렌더링\n');
  // console.log('--------새로고침--------');
  return <div css={pointerStyle(position.x, position.y, size)} />;
}
