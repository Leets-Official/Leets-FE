'use client';

import BackgroundImage from '@/components/BackgroundImage';
import Promotions from '@/components/Promotions';
import Header from '@/components/Header';
import ApplyButton from '@/components/ApplyButton';
import Pointer from '@/components/Common/Pointer';
import Contact from '@/components/Contact';
import Timeline from '@/components/Promotions/Timeline';
import Footer from '@/components/Footer';
import MobileContainer from '@/components/Mobile/MobileContanier';
import { useDeviceChecker, useMousePosition } from '@/hooks';
import { MAIN_COLOR } from '@/constants';
import Loading from '@/components/Common/Loading';
import { useIsLoading } from '@/hooks/useIsLoading';
import { PointerWrapper } from './styled';

const Index = () => {
  const color = MAIN_COLOR;
  const isLoading = useIsLoading();
  const { isMobile } = useDeviceChecker();
  const { position, handleMouseMove } = useMousePosition();

  if (isLoading) {
    return <Loading color={color} backgroundColor="black" />;
  }
  if (isMobile) {
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

// 관리자 < - > 유저 간 데이터를 확인할 수 없어야 한다.
// 유저 -> 관리자 accessToken이 있어야 하고 role: 'admin'이어야 한다.
// 관리자 -> 유저 accessToken이 있어야 하고 role: 'admin'이 아니어야 한다.
