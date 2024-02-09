'use client';

import styled from 'styled-components';
import { MQ } from '@/constants';

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  color: white;
`;

export const GridContainer = styled.div`
  ${MQ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: [9.1, 9.1, 13.1, 16.0],

    height: 'content',
  })}
`;

export const BenefitContainer = styled.div`
  ${MQ({
    display: 'flex',
    flexDirection: 'column',

    height: [97, 100, 140, 172],

    background: '#0f0f0f',
    borderRadius: '24px',
    paddingLeft: [18, 18.2, 26.2, 32.0],
    paddingTop: [6.8, 6.8, 9.8, 12.0],
  })}
`;

export const NumberStyle = styled.div`
  ${MQ({
    fontFamily: 'DM Sans',
    fontWeight: '400',
    fontSize: [27, 27, 39, 48],

    width: '20%',
    height: 'auto',

    background: '#0f0f0f',
    borderRadius: '24px',
    color: '#666666',
  })}
`;

export const TextStyle = styled.div`
  ${MQ({
    fontFamily: 'Pretendard',
    fontWeight: '500',
    fontSize: [9, 11, 16, 18],
    lineHeight: 1.5,

    width: '90%',

    background: '#0f0f0f',
    marginTop: [1, 1, 3, 8.0],
    whiteSpace: 'pre-wrap',
  })}
`;

export const FlexContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const FlexBlockStyle = styled.div`
  ${MQ({
    width: '33%',
    height: [97, 100, 140, 172],

    background: '#0f0f0f',
    borderRadius: '24px',
    margin: [4.5, 4.6, 6.6, 8.0],
    marginTop: [9.1, 9.1, 13.1, 16.0],
  })}
`;

export const BenefitContainerMobile = styled.div`
  width: 100%;
  height: 168px;

  display: flex;
  flex-direction: column;

  background: #0f0f0f;
  margin-top: 16px;
  border-radius: 24px;
`;

export const Benefit = styled.div`
  line-height: 1.5;

  background: #0f0f0f;
  white-space: pre-wrap;
  color: white;
  margin-left: 24px;
  margin-right: 26px;
  margin-top: 27.63px;
`;

export const HeadContainer = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;

  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #666666;
  margin-top: 16px;
  margin-left: 24px;
  margin-right: 16px;
`;
