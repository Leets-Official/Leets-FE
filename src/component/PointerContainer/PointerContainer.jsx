/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/svg/BackgroundImage/svg/BackgroundImage';
import Nav from '../Nav/Nav';
import Promotion from '../Promotion/Promotion';
import {
  pointerContainerStyle,
  titleContainer,
  titleStyle,
  pointerStyle,
  applyContainer,
  linkStyle,
} from './PointerContainer.style';

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
      <div css={titleContainer}>
        <p css={titleStyle}>Leets</p>
      </div>

      <BackgroundImage />

      <Promotion />

      <div css={applyContainer}>
        <Link to="/Apply" css={linkStyle}>
          지원하기
        </Link>

        <div css={pointerStyle(position.x, position.y, size)} />
      </div>
    </div>
  );
}
