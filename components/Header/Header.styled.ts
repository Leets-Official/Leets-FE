'use client';

import styled from 'styled-components';
import { MQ } from '@/constants';
import { motion } from 'framer-motion';
import facepaint from 'facepaint';

const MOBILE_VIEWPORTS = [360, 375, 390, 412] as const;
export const mobileMQ = facepaint(MOBILE_VIEWPORTS.map((breakpoint) => `@media(min-width: ${breakpoint}px)`));

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

  @media screen and (max-width: 541px) {
    height: 380px;
    margin-bottom: 50px;
  }
`;

export const TitleStyle = styled.h1`
  font-weight: 400;
  font-size: 10vw;
  letter-spacing: -0.03em;

  width: content;
  height: content;

  color: white;
`;
