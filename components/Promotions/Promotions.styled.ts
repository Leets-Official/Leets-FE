'use client';

import styled from 'styled-components';
import { MQ } from '@/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ImageContainerProps {
  $height: number;
}

export const Section = styled.section`
  ${MQ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: [700, 800, 900, 1200],

    color: 'white',
  })}

  @media screen and (max-width: 541px) {
    height: 100%;
    margin-top: 80px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 541px) {
    justify-content: flex-start;
  }
`;

export const TopContainer = styled.div`
  width: 92%;
  height: auto;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 541px) {
    flex-direction: column;
  }
`;

export const Title = styled(motion.div)`
  ${MQ({
    fontWeight: '500',
    fontSize: [54.7, 54.7, 78.7, 96],

    width: 'auto',
    height: 'content',

    color: 'white',
  })}

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 541px) {
    font-size: 42px;
    line-height: 100%;
  }
`;

export const ProjectLink = styled(Link)`
  all: unset;

  font-size: 24px;

  width: fit-content;

  display: flex;
  align-items: center;
  gap: 10px;

  margin-top: 22px;

  cursor: pointer;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  ${MQ({
    width: ['36.25vw', 297, 427, 522],
    height: [
      ({ $height }: ImageContainerProps) => `${($height / 1440) * 820}px`,
      ({ $height }: ImageContainerProps) => `${($height / 1440) * 820}px`,
      ({ $height }: ImageContainerProps) => `${($height / 1440) * 1180}px`,
      ({ $height }: ImageContainerProps) => `${$height}px`,
    ],
  })}
  position: relative;

  @media screen and (max-width: 541px) {
    width: 240px;

    display: flex;
    justify-content: center;

    margin: 0 auto;
    margin-top: 80px;
  }
`;

export const BottomContainer = styled.div`
  ${MQ({
    width: '92%',
    height: [209, 210, 301, 368],
    marginTop: [58, 59, 84, 103],
  })}

  @media screen and (max-width: 541px) {
    margin-top: 64px;
    height: 100%;
  }
`;
