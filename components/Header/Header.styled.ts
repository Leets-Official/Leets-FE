'use client';

import styled from 'styled-components';
import { MQ, mobileMQ } from '@/constants';
import { motion } from 'framer-motion';

export const HeadContainer = styled(motion.header)`
  ${MQ({
    width: '100%',
    height: [500, 550, 450, 400],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

    marginBottom: [100, 200, 0, 0],
    background: 'black',
  })}

  ${mobileMQ({
    width: '100%',
    height: [100, 420, 520],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  })}
`;

export const TitleStyle = styled.h1`
  font-weight: 400;
  font-size: 10vw;
  letter-spacing: -0.03em;

  width: content;
  height: content;

  color: white;
`;
