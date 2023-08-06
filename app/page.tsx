'use client';

import { useState, MouseEvent } from 'react';
import BackgroundImage from '@/component/BackgroundImage/svg';
import Promotions from '@/component/Promotions';
import Header from '@/component/Header';
import Button from '@/component/Button';
import Pointer from '@/component/Pointer';
import Contact from '@/component/Contact';
import Timeline from '@/component/Timeline';
import Footer from '@/component/Footer';
import MainWrapper from '@/styles/MainWrapper.styled';

const color = 'blue';

const Index = () => {
  // FIXME: 렌더링 최적화
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
    <MainWrapper onMouseMove={handleMouseMove}>
      <Header />
      <BackgroundImage color={color} />
      <Promotions color={color} />
      <Timeline color={color} />
      <Button color={color} />
      <Contact />
      <Footer />
      <Pointer position={position} size={7} color={color} />
    </MainWrapper>
  );
};

export default Index;