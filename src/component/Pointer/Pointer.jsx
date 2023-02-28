/** @jsxImportSource @emotion/react */
import { useMediaQuery } from 'react-responsive';
import pointerStyle from './Pointer.style';

export default function Pointer({ position, size, color }) {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  return isDesktopOrLaptop && <div css={pointerStyle(position.x, position.y, size, color)} />;
}
