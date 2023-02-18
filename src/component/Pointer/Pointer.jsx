/** @jsxImportSource @emotion/react */
import { useMediaQuery } from 'react-responsive';
import pointerStyle from './Pointer.style';

export default function Pointer({ position, size }) {
  // console.log('포인터 렌더링\n');
  // console.log('--------새로고침--------');
  // const isDeskTop = true;
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  return isDesktopOrLaptop && <div css={pointerStyle(position.x, position.y, size)} />;
}
