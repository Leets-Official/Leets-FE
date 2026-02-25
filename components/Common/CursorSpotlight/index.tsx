'use client';

import { useEffect, useRef } from 'react';

const CursorSpotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      el.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(53,132,251,0.9) 0%, rgba(53,132,251,0.6) 40%, rgba(53,132,251,0.15) 70%, transparent 100%)',
        transform: 'translate(-200px, -200px)',
        filter: 'blur(6px)',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  );
};

export default CursorSpotlight;
