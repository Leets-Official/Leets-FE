'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeaderTemplate from '@/components/Common/HeaderTemplate';
import * as S from './HeroSection.styled';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 820);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const heroImage = isMobile
    ? '/assets/image/Logo/Landing_mobile.png'
    : '/assets/image/Logo/Landing_pc.png';

  return (
    <S.HeroContainer>
      <HeaderTemplate variant="white" />
      <S.HeroContent>
        <S.ImageContainer>
          <motion.div style={{ y }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}>
              <S.HeroImage src={heroImage} alt="Leets" />
            </motion.div>
          </motion.div>
        </S.ImageContainer>
      </S.HeroContent>
    </S.HeroContainer>
  );
};

export default HeroSection;
