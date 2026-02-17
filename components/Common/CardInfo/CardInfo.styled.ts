'use client';

import styled, { css } from 'styled-components';
import { colors, radius, typography } from '@/styles/theme';

interface CardContainerProps {
  $variant: 'icon' | 'number';
  $size: 'small' | 'large';
}

const smallIconStyles = css`
  flex-direction: row;
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
  gap: 20px;
  padding: 30px 24px;
`;

const largeNumberStyles = css`
  flex-direction: column;
  gap: 30px;
  padding: 30px;
`;

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  align-items: flex-start;
  background: ${colors.neutral.cardBg};
  border: 1px solid ${colors.blue[500]};
  border-radius: ${radius.card};
  height: 100%;

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

  ${({ $size }) =>
    $size === 'large'
      ? css`
          font-size: 60px;
          line-height: 72px;
        `
      : css`
          font-size: 28px;
          line-height: 33.6px;
        `}
`;

export const CardIcon = styled.div`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardText = styled.p`
  font-size: ${typography.scale.bodyM.size};
  font-weight: 600;
  line-height: 1.5;
  color: ${colors.blue[800]};
  white-space: pre-line;
`;
