'use client';

import { useDeviceChecker, useMousePosition } from '@/hooks';
import { memo } from 'react';
import * as S from './Pointer.styled';

const Pointer = () => {
  const {
    position: { x, y },
  } = useMousePosition();
  const { isDesktop } = useDeviceChecker();
  const size = 7;

  if (!isDesktop || (x === 0 && y === 0)) {
    return null;
  }
  return (
    <S.Pointer
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
