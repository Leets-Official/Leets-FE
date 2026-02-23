'use client';

import styled from 'styled-components';
import { colors, radius, spacing } from '@/styles/theme';
import { MQ, mobileMQ } from '@/constants/viewports';

export const CTAContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px ${spacing.page.mobilePadding} 60px;

  @media (min-width: 820px) {
    padding: 0 0 120px;
  }
`;

export const CTAContent = styled.div`
  width: 100%;
  max-width: ${spacing.page.innerWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: ${radius.chip};
  border: 1px solid ${colors.blue[500]};
  background: rgba(53, 132, 251, 0.2);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${colors.blue[700]};
  margin-bottom: 4px;

  @media (max-width: 541px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

export const Slogan = styled.h2`
  font-weight: 700;
  color: ${colors.blue[950]};
  text-align: center;
  line-height: 1.15;
  white-space: pre-line;
  font-size: min(36px, 7vw);
  margin-bottom: 14px;

  @media (min-width: 820px) {
    font-size: 56px;
  }

  @media (min-width: 1180px) {
    font-size: 72px;
  }

  @media (min-width: 1440px) {
    font-size: 80px;
  }
`;

export const SubHeadline = styled.p`
  font-weight: 600;
  color: ${colors.blue[800]};
  text-align: center;
  line-height: 1.3;
  white-space: pre-line;

  ${MQ({
    fontSize: ['20px', '28px', '32px', '36px'],
  })}
`;

export const Tagline = styled.p<{ $mobileOnly?: boolean }>`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.blue[500]};
  text-align: center;
  white-space: pre-line;

  ${mobileMQ({
    fontSize: ['14px', '16px'],
  })}

  @media (min-width: 820px) {
    font-size: 24px;
    ${({ $mobileOnly }) => $mobileOnly && 'display: none;'}
  }
`;

export const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  color: ${colors.blue[800]};
  margin-top: 20px;

  @media (max-width: 541px) {
    gap: 0.75rem;
  }
`;

export const TimeBox = styled.div`
  text-align: center;

  .time {
    font-weight: 500;
    color: ${colors.blue[800]};

    ${MQ({
      fontSize: ['40px', '64px', '88px', '108px'],
    })}
  }

  .label {
    font-size: 24px;
    font-weight: 500;
    color: ${colors.blue[800]};
    margin-top: 4px;

    ${mobileMQ({
      fontSize: ['14px', '16px'],
    })}

    @media (min-width: 820px) {
      font-size: 24px;
    }
  }
`;

export const Separator = styled.div`
  font-weight: 500;
  color: ${colors.blue[800]};
  display: flex;
  align-items: center;
  padding-bottom: 28px;

  ${MQ({
    fontSize: ['32px', '56px', '80px', '100px'],
  })}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
  max-width: 320px;

  > button {
    width: 100%;
  }
`;
