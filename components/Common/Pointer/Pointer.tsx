'use client';

import { ThemeColor } from '@/types';
import { useMousePosition } from '@/hooks';
import * as S from './Pointer.styled';

type PointerProp = {
  size: number;
  color: ThemeColor;
};

const Pointer = ({ size, color }: PointerProp) => {
  const { position } = useMousePosition();

  return (
    <S.Pointer
      color={color}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: `${size}rem`,
        height: `${size}rem`,
        left: `-${size / 2}rem`,
        top: `-${size / 2}rem`,
      }}
    />
  );
};

export default Pointer;
