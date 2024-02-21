'use client';

import { ThemeColor } from '@/types';
import { useDeviceChecker, useMousePosition } from '@/hooks';
import { memo } from 'react';
import * as S from './Pointer.styled';

type PointerProp = {
  size: number;
  color: ThemeColor;
};

const Pointer = ({ size, color }: PointerProp) => {
  const {
    position: { x, y },
  } = useMousePosition();
  const { isDesktop } = useDeviceChecker();

  if (!isDesktop || (x === 0 && y === 0)) {
    return null;
  }
  return (
    <S.Pointer
      color={color}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        width: `${size}rem`,
        height: `${size}rem`,
        left: `-${size / 2}rem`,
        top: `-${size / 2}rem`,
      }}
    />
  );
};

export default memo(Pointer);
