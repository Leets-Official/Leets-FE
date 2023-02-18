/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import BackgroundImage from '../BackgroundImage/svg/BackgroundImage';
import Promotions from '../Promotions/Promotions';
import pointerContainerStyle from './MainContainer.style';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Pointer from '../Pointer/Pointer';

export default function MainContainer() {
  // console.log('main 렌더링');
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
    <main css={pointerContainerStyle} onPointerMove={handleMouseMove}>
      <Header />

      <BackgroundImage />

      <Promotions />

      <Button title="지원하기" link="/Apply" />

      <Pointer position={position} size={7} />
    </main>
  );
}