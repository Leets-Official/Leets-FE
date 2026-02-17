'use client';

import styled from 'styled-components';
import { spacing } from '@/styles/theme';

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: ${spacing.page.contentWidth};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 820px) {
    max-width: none;
    padding: 0;
  }
`;

export const ImageContainer = styled.div`
  width: ${spacing.page.innerWidth};
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;

  @media (max-width: 820px) {
    width: 100%;
    padding: 0;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 540px;
  object-fit: contain;

  @media (max-width: 820px) {
    max-height: none;
    width: 100%;
    height: 65vh;
    object-fit: cover;
  }
`;
