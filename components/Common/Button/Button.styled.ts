'use client';

import styled, { css } from 'styled-components';
import { colors, radius } from '@/styles/theme';

type ButtonSize = 'large' | 'medium' | 'small';
type ButtonVariant = 'solid' | 'ghost' | 'outline';
type ButtonColorScheme = 'blue' | 'white';

interface StyledButtonProps {
  $variant: ButtonVariant;
  $colorScheme: ButtonColorScheme;
  $size: ButtonSize;
}

const sizeStyles = {
  large: css`
    font-size: 28px;
    font-weight: 600;
    line-height: 33.6px;
    padding: 16px 36px;
  `,
  medium: css`
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding: 12px 24px;
  `,
  small: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 16.8px;
    padding: 8px 14px;
  `,
};

const variantStyles = {
  solid: {
    blue: css`
      background: ${colors.blue[500]};
      color: ${colors.neutral.white};
      border: none;

      &:hover:not(:disabled) {
        background: ${colors.blue[400]};
      }
      &:active:not(:disabled) {
        background: ${colors.blue[600]};
      }
    `,
    white: css`
      background: ${colors.neutral.lightBg};
      color: ${colors.blue[500]};
      border: none;

      &:hover:not(:disabled) {
        background: ${colors.blue[200]};
      }
      &:active:not(:disabled) {
        background: ${colors.blue[200]};
      }
    `,
  },
  ghost: {
    blue: css`
      background: transparent;
      color: ${colors.blue[500]};
      border: 1.4px solid ${colors.blue[500]};

      &:hover:not(:disabled) {
        background: rgba(53, 132, 251, 0.08);
      }
      &:active:not(:disabled) {
        background: rgba(53, 132, 251, 0.15);
      }
    `,
    white: css`
      background: transparent;
      color: ${colors.neutral.white};
      border: 1.4px solid ${colors.neutral.white};

      &:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.08);
      }
      &:active:not(:disabled) {
        background: rgba(255, 255, 255, 0.15);
      }
    `,
  },
  outline: {
    blue: css`
      background: transparent;
      color: ${colors.blue[500]};
      border: 1px solid ${colors.blue[500]};

      &:hover:not(:disabled) {
        background: ${colors.blue[500]};
        color: ${colors.neutral.white};
      }
      &:active:not(:disabled) {
        background: ${colors.blue[600]};
        color: ${colors.neutral.white};
      }
    `,
    white: css`
      background: transparent;
      color: ${colors.neutral.white};
      border: 1px solid ${colors.neutral.white};

      &:hover:not(:disabled) {
        background: ${colors.neutral.white};
        color: ${colors.blue[500]};
      }
    `,
  },
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: ${radius.button};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  text-decoration: none;
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  letter-spacing: -0.02em;
  white-space: nowrap;

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant, $colorScheme }) => variantStyles[$variant][$colorScheme]}

  &:disabled {
    background: ${colors.neutral.disabledBg};
    color: ${colors.neutral.disabledText};
    border: none;
    cursor: not-allowed;
  }
`;
