import './Pointer.css';
import { isDesktop } from '../../utils/deviceChecker';

export default function Pointer({ position, size, color }) {
  return (
    isDesktop() && (
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
    )
  );
}
