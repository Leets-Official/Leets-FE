import './Pointer.css';
import { DeviceChecker } from '@/utils';

export default function Pointer({ position, size, color }: any) {
  if (!DeviceChecker.isDesktop()) {
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
}
