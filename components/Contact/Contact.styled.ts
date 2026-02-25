'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { MQ } from '@/constants';
import { colors } from '@/styles/theme';

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 60px;
`;

export const ContentContainer = styled.div`
  width: 92%;
`;

export const HrStyle = styled.hr`
  border: 0;
  height: 1px;
  background: #666666;
`;

export const Content = styled.div`
  ${MQ({
    marginTop: [24, 24, 36, 48],
    marginBottom: [24, 24, 36, 48],
  })}
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 541px) {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
`;

export const HeadContainer = styled.div`
  ${MQ({
    fontSize: [27.3, 27.3, 39.3, 48.0],
  })}
  font-weight: 500;
`;

export const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 820px) {
    gap: 20px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999999;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;

  svg {
    width: 22px;
    height: 22px;

    @media (min-width: 820px) {
      width: 28px;
      height: 28px;
    }
  }

  &:hover {
    color: ${colors.blue[500]};
    transform: translateY(-2px);
  }
`;
