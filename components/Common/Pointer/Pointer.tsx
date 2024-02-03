import { ThemeColor } from '@/types';
import * as S from './Pointer.styled';

type PointerProp = {
  position: { x: number; y: number };
  size: number;
  color: ThemeColor;
};

const Pointer = ({ position, size, color }: PointerProp) => {
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
