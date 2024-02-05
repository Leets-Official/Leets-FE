'use client';

import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: any) => {
    requestAnimationFrame(() => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { position };
};

export default useMousePosition;
