/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { containerStyle, pointerStyle } from './PointerContainer.style';

export default function PointerContainer({ size }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = e => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div css={containerStyle} onPointerMove={handleMouseMove}>
      <div css={pointerStyle(position.x, position.y, size)} />
      <div css={pointerStyle(position.x, position.y, size)} />
      <div css={pointerStyle(position.x, position.y, size)} />
    </div>
  );
}
