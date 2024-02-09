'use client';

import styled from 'styled-components';
import { MQ } from '@/constants';

export const ContentContainer = styled.div`
  ${MQ({
    width: '100%',
    height: '100%',

    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: [18, 18, 26, 32],
  })}

  @media screen and (max-width: 541px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const BenefitContainer = styled.div`
  ${MQ({
    width: '100%',
    height: [95, 110, 137, 168],

    display: 'flex',
  })}

  @media screen and (max-width: 541px) {
    width: 100%;
    height: 168px;
    flex-direction: column;

    background: #0f0f0f;
    border-radius: 24px;
    margin-top: 16px;
  }
`;

export const NumberContainer = styled.div`
  ${MQ({
    fontFamily: 'DM Sans',
    fontWeight: '400',
    fontSize: [27, 27, 39, 48],

    width: '32.5%',

    backgroundColor: '#0f0f0f',
    borderRadius: '24px',
    paddingTop: [12.5, 12.5, 12.0, 22.0],
    paddingLeft: [15, 16, 22, 28],
  })}
`;

export const NumberStyle = styled.div`
  width: 50%;
  height: auto;

  background: #0f0f0f;
  color: #666666;
`;

export const Benefit = styled.div`
  ${MQ({
    width: '80%',

    display: 'flex',
    justifyContent: 'space-between',

    background: '#0f0f0f',
    borderRadius: '24px',
  })}

  @media screen and (max-width: 541px) {
    line-height: 1.5;
    color: white;

    background: #0f0f0f;
    white-space: pre-wrap;

    margin-left: 24px;
    margin-right: 26px;
    margin-top: 22.28px;
  }
`;

export const TextStyle = styled.div`
  ${MQ({
    fontFamily: 'Pretendard',
    fontWeight: '500',
    fontSize: [9, 12, 16, 18],
    lineHeight: 1.5,

    width: '70%',
    height: 'content',

    background: '#0f0f0f',
    whiteSpace: 'pre-wrap',
    marginTop: [16, 18, 22, 33],
    marginLeft: [18, 18, 26, 32],
  })}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;

  background: #0f0f0f;
  border-radius: 24px;
  height: 100%;
`;

export const IconWrapper = styled.div`
  ${MQ({
    width: [41, 41, 59, 72],
    height: [41, 41, 59, 72],
    marginRight: [9, 9, 13, 16],
    marginBottom: [9, 9, 13, 16],
  })}
  position: relative;
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
  background: #0f0f0f;
`;
