'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '@/styles/theme';

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: ${colors.blue[800]};

  width: 100%;
  max-width: 960px;

  @media screen and (max-width: 820px) {
    font-size: 24px;
    line-height: 28.8px;
  }

  margin: 0 auto;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Project = styled(motion(Link))`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  color: ${colors.blue[800]};
  overflow: hidden;
  border-radius: 12px;

  &:hover img {
    filter: drop-shadow(0 0 0.5rem rgba(53, 132, 251, 0.3)) blur(2px) brightness(0.4);
  }

  &:hover div {
    opacity: 1;
  }
`;

export const ImageStyle = styled(Image)`
  width: 100%;
  height: 100%;

  border-radius: 12px;

  object-fit: cover;
  object-position: center;
`;

export const Blur = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border-radius: 12px;
  padding: 24px;
  transition: opacity 0.3s ease;
  opacity: 0;
  color: white;
`;
