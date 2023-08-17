import { useDeviceChecker } from '@/hooks';
import './Pointer.css';
import { ThemeColor } from '@/types';

type PointerProp = {
  position: { x: number; y: number };
  size: number;
  color: ThemeColor;
};

const Pointer = ({ position, size, color }: PointerProp) => {
  const isDesktop = useDeviceChecker();

  if (!isDesktop) {
    return null;
  }
  return (
    <div
      className={`Pointer Pointer--${color}`}
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
