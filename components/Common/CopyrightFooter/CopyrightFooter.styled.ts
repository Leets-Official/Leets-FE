'use client';

import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';

export const FooterBar = styled.footer`
  width: 100%;
  max-width: ${spacing.page.contentWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px 36px;

  @media (max-width: 820px) {
    padding: 0 20px 24px;
  }
`;

export const Divider = styled.hr<{ $variant: 'white' | 'dark' }>`
  width: 100%;
  border: none;
  border-top: 1px solid
    ${({ $variant }) => ($variant === 'white' ? colors.neutral.white : 'rgba(21, 52, 100, 0.2)')};
  margin: 0;
`;

export const Copyright = styled.p<{ $variant: 'white' | 'dark' }>`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.4px;
  letter-spacing: -0.24px;
  text-align: center;
  margin-top: 32px;
  color: ${({ $variant }) =>
    $variant === 'white' ? colors.neutral.white : 'rgba(21, 52, 100, 0.2)'};

  @media (max-width: 820px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.2px;
  }
`;
