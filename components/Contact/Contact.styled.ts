'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { MQ } from '@/constants';

export const SectionContainer = styled.section`
  ${MQ({
    width: '100%',
    height: [159.3, 159.4, 229.4, 280.0],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: 'white',
    marginBottom: '100px',
  })}

  @media screen and (max-width: 541px) {
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 92%;
  height: 100%;
`;

export const HrStyle = styled.hr`
  border: 0;
  height: 1px;
  background: #666666;
`;

export const Content = styled.div`
  ${MQ({
    marginTop: [36.4, 36.4, 52.4, 64.0],
  })}
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 541px) {
    flex-direction: column;
  }
`;

export const HeadContainer = styled.div`
  ${MQ({
    fontSize: [27.3, 27.3, 39.3, 48.0],
  })}
  font-weight: 500;

  @media screen and (max-width: 541px) {
    width: 100%;

    display: flex;
    justify-content: center;
  }
`;

export const GridContainer = styled.div`
  ${MQ({
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: '500',

    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    rowGap: [22.8, 22.8, 32.8, 40.0],
    colGap: [95.5, 95.7, 137.7, 168.0],

    width: 'content',
    height: '100%',

    marginRight: [54.6, 54.7, 78.7, 96.0],
  })}

  @media screen and (max-width: 541px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const InfoContainer = styled.div`
  ${MQ({
    fontWeight: '500',
    lineHeight: '24px',

    height: [31.9, 31.9, 45.9, 56.0],
  })}

  @media screen and (max-width: 541px) {
    padding-top: 48px;
    height: 100%;
  }
`;

export const TitleStyle = styled.div`
  ${MQ({
    fontSize: [15, 15, 16.4, 20.0],
    marginBottom: [1, 2, 6.6, 8.0],
    color: '#666666',
  })}

  @media screen and (max-width: 541px) {
    font-size: 16px;
  }
`;

export const InfoStyle = styled.div`
  ${MQ({
    fontSize: [13, 13, 16.4, 20.0],
    letterSpacing: '-0.01em',
    color: '#e6e6e6',
  })}

  @media screen and (max-width: 541px) {
    font-size: 16px;
  }
`;

export const LinkStyle = styled(Link)`
  color: #e6e6e6;
  cursor: pointer;
  text-decoration: none;
`;
