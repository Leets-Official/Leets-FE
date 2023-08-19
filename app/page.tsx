'use client';

import { useState, MouseEvent } from 'react';
import { PointerWrapper } from '@/styles/global-style';
import BackgroundImage from '@/components/BackgroundImage';
import Promotions from '@/components/Promotions';
import Header from '@/components/Header';
import ApplyButton from '@/components/ApplyButton';
import Pointer from '@/components/Common/Pointer';
import Contact from '@/components/Contact';
import Timeline from '@/components/Promotions/Timeline';
import Footer from '@/components/Footer';
import MobileContainer from '@/components/Mobile/MobileContanier';
import { useDeviceChecker } from '@/hooks';
import { MAIN_COLOR } from '@/constants';
import Loading from '@/components/Common/Loading';
import { useIsLoading } from '@/hooks/useIsLoading';

const Index = () => {
  const color = MAIN_COLOR;
  const isDesktop = useDeviceChecker();
  const isLoading = useIsLoading();
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

  if (isLoading) {
    return <Loading color={color} backgroundColor="black" />;
  }
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
