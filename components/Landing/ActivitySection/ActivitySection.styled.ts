'use client';

import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import Link from 'next/link';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px ${spacing.page.mobilePadding};

  @media (min-width: 820px) {
    padding: 120px 0;
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
  margin-bottom: 36px;

  @media (min-width: 820px) {
    margin-bottom: 64px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  color: ${colors.blue[800]};
  white-space: pre-line;
  font-size: 36px;
  line-height: 43.2px;
  letter-spacing: -0.72px;

  @media (min-width: 820px) {
    font-size: 80px;
    line-height: 96px;
    letter-spacing: -1.6px;
  }
`;

export const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.blue[500]};
  text-decoration: none;
  margin-top: 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 820px) {
    font-size: 28px;
  }
`;

export const ProjectArrow = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: 100%;
  }

  ${ProjectLink}:hover & {
    transform: translateX(6px);
  }

  @media (min-width: 820px) {
    width: 32px;
    height: 32px;
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

// ============ Bubble (MT& Recreation) ============

export const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 820px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px 36px;
  }
`;

export const BubbleCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;

  @media (min-width: 820px) {
    width: 388px;
    max-width: none;
  }
`;

export const BubbleSVGPC = styled.div`
  display: none;

  @media (min-width: 820px) {
    display: block;
  }

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const BubbleSVGMobile = styled.div`
  display: block;

  @media (min-width: 820px) {
    display: none;
  }

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const BubbleText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue[800]};
  font-weight: 700;
  white-space: nowrap;

  /* Mobile: bubble shape is ~90% of card height */
  height: 90%;
  font-size: 14px;
  line-height: 16.8px;
  letter-spacing: -0.28px;

  @media (min-width: 820px) {
    height: 84%;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.4px;
  }
`;
