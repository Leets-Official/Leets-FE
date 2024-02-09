'use client';

import styled from 'styled-components';
import { MQ } from '@/constants';
import { motion } from 'framer-motion';

export const SectionContainer = styled.div`
  ${MQ({
    width: '100%',
    height: 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: 'white',
  })}

  @media screen and (max-width: 541px) {
    margin-top: 120px;
  }
`;

export const ContentContainer = styled.div`
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

export const BottomContainer = styled.div`
  ${MQ({
    width: '92%',

    display: 'flex',

    marginTop: [45.5, 45.6, 65.6, 80.0],
    paddingLeft: '35%',
  })}
`;

export const InfoStyle = styled.div`
  ${MQ({
    display: 'flex',
    flexDirection: 'column',

    marginTop: [95.5, 95.7, 137.7, 168.0],
    marginLeft: [22.8, 22.8, 32.8, 40.0],
  })}
`;

export const DateStyle = styled(motion.div)`
  ${MQ({
    fontFamily: 'Pretendard',

    marginBottom: [70, 70, 101, 124.0],
  })}
`;

export const KeyStyle = styled.div`
  ${MQ({
    fontWeight: '500',
    fontSize: [11.4, 11.4, 16.4, 20.0],

    color: '#cccccc',
    marginBottom: [4.5, 4.6, 6.6, 8.0],
  })}
`;

export const ValueStyle = styled.div`
  ${MQ({
    fontWeight: '500',
    fontSize: [15.9, 15.9, 22.9, 28.0],

    color: '#cccccc',
  })}
`;
