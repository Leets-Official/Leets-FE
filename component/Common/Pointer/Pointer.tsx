import { useDeviceChecker } from '@/hooks';
import './Pointer.css';

const Pointer = ({ position, size, color }: any) => {
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
