'use client';

import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import { MQ } from '@/constants/viewports';
import Link from 'next/link';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px ${spacing.page.mobilePadding};

  @media (min-width: 820px) {
    padding: 80px 0;
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  max-width: ${spacing.page.innerWidth};
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-weight: 600;
  color: ${colors.blue[800]};
  white-space: pre-line;

  ${MQ({
    fontSize: ['32px', '48px', '72px', '80px'],
  })}
`;

export const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  color: ${colors.blue[500]};
  text-decoration: none;
  margin-top: 8px;
  transition:
    gap 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
    gap: 8px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BubbleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const BUBBLE_COLORS = ['#FFE8EE', '#E3EEFF', '#E0F5E9'];

export const BubbleCard = styled.div<{ $index: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px 36px;
  border-radius: 100px;
  background: ${({ $index }) => BUBBLE_COLORS[$index % BUBBLE_COLORS.length]};
  font-size: 20px;
  font-weight: 700;
  color: ${colors.blue[800]};
  white-space: nowrap;

  @media (max-width: 541px) {
    font-size: 16px;
    padding: 14px 24px;
  }
`;
