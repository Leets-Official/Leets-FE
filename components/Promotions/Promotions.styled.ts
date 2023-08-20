import styled from 'styled-components';
import { MQ } from '@/constants';
import { motion } from 'framer-motion';

export const Section = styled.section`
  ${MQ({
    fontFamily: 'DM Sans',

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

export const Image = styled.img(({ height }) =>
  MQ({
    width: ['36.25vw', 297, 427, 522],
    height: [
      ((height as number) / 1440) * 820,
      ((height as number) / 1440) * 820,
      ((height as number) / 1440) * 1180,
      height,
    ],
  })
);

export const BottomContainer = styled.div`
  ${MQ({
    width: '92%',
    height: [209, 210, 301, 368],
    marginTop: [58, 59, 84, 103],
  })}
`;
