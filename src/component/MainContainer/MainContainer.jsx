/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import pointerContainerStyle from './MainContainer.style';
import BackgroundImage from '../BackgroundImage/svg';
import Promotions from '../Promotions';
import Header from '../Header';
import Button from '../Button';
import Pointer from '../Pointer';
import Contact from '../Contact';
import Timeline from '../Timeline';
import Footer from '../Footer';

export default function MainContainer({ color }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const updatePosition = (x, y) => {
    requestAnimationFrame(() => {
      setPosition({
        x,
        y,
      });
    });
  };

  const handleMouseMove = e => {
    updatePosition(e.clientX, e.clientY);
  };

  return (
    <main css={pointerContainerStyle} onMouseMove={handleMouseMove}>
      <Header />
      <BackgroundImage color={color} />
      <Promotions color={color} />
      <Timeline color={color} />
      <Button title="지원하기" link="/Apply" color={color} />
      <Contact />
      <Footer />
      <Pointer position={position} size={7} color={color} />
    </main>
  );
}
