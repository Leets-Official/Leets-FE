'use client';

import { MouseEvent, useState } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent) => {
    requestAnimationFrame(() => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    });
  };

  return { position, handleMouseMove };
}
