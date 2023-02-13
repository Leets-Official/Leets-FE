/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { pointerContainerStyle, pointerStyle, sectionContainer, linkStyle } from './PointerContainer.style';

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
    <div css={pointerContainerStyle} onPointerMove={handleMouseMove}>
      <Nav />
      <div css={pointerStyle(position.x, position.y, size)} />
      <div css={sectionContainer}>
        <Link to="/Apply" css={linkStyle}>
          지원하기
        </Link>
      </div>
    </div>
  );
}
