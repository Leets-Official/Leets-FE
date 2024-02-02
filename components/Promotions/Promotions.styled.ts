import styled from 'styled-components';
import { MQ } from '@/constants';
import { motion } from 'framer-motion';

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
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  width: 92%;
  height: auto;

  display: flex;
  justify-content: space-between;
`;

export const Subject = styled(motion.div)`
  ${MQ({
    fontWeight: '500',
    fontSize: [54.7, 54.7, 78.7, 96],

    width: 'auto',
    height: 'content',

    color: 'white',
  })}
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
`;

export const BottomContainer = styled.div`
  ${MQ({
    width: '92%',
    height: [209, 210, 301, 368],
    marginTop: [58, 59, 84, 103],
  })}
`;
