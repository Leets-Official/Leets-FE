'use client';

import { useState, MouseEvent } from 'react';
import { PointerWrapper } from '@/styles/global-style';
import BackgroundImage from '@/component/BackgroundImage/';
import Promotions from '@/component/Promotions';
import Header from '@/component/Header';
import ApplyButton from '@/component/ApplyButton';
import Pointer from '@/component/Common/Pointer';
import Contact from '@/component/Contact';
import Timeline from '@/component/Promotions/Timeline';
import Footer from '@/component/Footer';
import MobileContainer from '@/component/Mobile/MobileContanier';
import { useDeviceChecker } from '@/hooks';

const color = 'green';

const Index = () => {
  const isDesktop = useDeviceChecker();
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

  if (!isDesktop) {
    return <MobileContainer color={color} />;
  }
  return (
    <PointerWrapper onMouseMove={handleMouseMove}>
      <Header />
      <BackgroundImage color={color} />
      <Promotions color={color} />
      <Timeline color={color} />
      <ApplyButton color={color} />
      <Contact />
      <Footer />
      <Pointer position={position} size={7} color={color} />
    </PointerWrapper>
  );
};

export default Index;
