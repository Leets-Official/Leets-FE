'use client';

import styled, { css } from 'styled-components';
import { colors, radius, shadows } from '@/styles/theme';

interface CardContainerProps {
  $variant: 'icon' | 'number';
  $size: 'small' | 'large';
}

const smallIconStyles = css`
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 20px 16px;
`;

const smallNumberStyles = css`
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`;

const largeIconStyles = css`
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 30px 24px;

  @media (max-width: 820px) {
    padding: 20px 16px;
  }
`;

const largeNumberStyles = css`
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  min-height: 200px;

  @media (max-width: 820px) {
    min-height: auto;
    gap: 20px;
    padding: 20px;
  }
`;

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  background: ${colors.neutral.cardBg};
  border: 1px solid ${colors.blue[500]};
  border-radius: ${radius.card};
  height: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.cardStrong};
  }

  ${({ $variant, $size }) => {
    if ($size === 'small' && $variant === 'icon') return smallIconStyles;
    if ($size === 'small' && $variant === 'number') return smallNumberStyles;
    if ($size === 'large' && $variant === 'icon') return largeIconStyles;
    return largeNumberStyles;
  }}
`;

export const CardNumber = styled.span<{ $size: 'small' | 'large' }>`
  font-weight: 300;
  color: ${colors.blue[800]};
  letter-spacing: -1.2px;

  ${({ $size }) =>
    $size === 'large'
      ? css`
          font-size: 60px;
          line-height: 72px;

          @media (max-width: 820px) {
            font-size: 28px;
            line-height: 33.6px;
          }
        `
      : css`
          font-size: 28px;
          line-height: 33.6px;
        `}
`;

export const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 820px) {
    width: 64px;
    height: 64px;
  }
`;

export const CardText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: -0.28px;
  color: ${colors.blue[800]};
  white-space: pre-line;
  word-break: keep-all;

  @media (min-width: 820px) {
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: -0.32px;
  }
`;
