'use client';

import { useState, MouseEvent } from 'react';
import { PointerWrapper } from '@/styles/global-style';
import BackgroundImage from '@/component/BackgroundImage/';
import Promotions from '@/component/Promotions';
import Header from '@/component/Header';
import Button from '@/component/Button';
import Pointer from '@/component/Common/Pointer';
import Contact from '@/component/Contact';
import Timeline from '@/component/Promotions/Timeline';
import Footer from '@/component/Footer';

const color = 'green';

const Index = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const updatePosition = (x: number, y: number) => {
    requestAnimationFrame(() => {
      setPosition({
        x,
        y,
      });
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    updatePosition(e.clientX, e.clientY);
  };

  return (
    <PointerWrapper onMouseMove={handleMouseMove}>
      <Header />
      <BackgroundImage color={color} />
      <Promotions color={color} />
      <Timeline color={color} />
      <Button color={color} />
      <Contact />
      <Footer />
      <Pointer position={position} size={7} color={color} />
    </PointerWrapper>
  );
};

export default Index;
