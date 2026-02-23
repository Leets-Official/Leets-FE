'use client';

import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';

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
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 600;
  color: ${colors.blue[800]};
  font-size: 36px;
  line-height: 43.2px;
  letter-spacing: -0.72px;
  margin-bottom: 36px;

  @media (min-width: 820px) {
    font-size: 80px;
    line-height: 96px;
    letter-spacing: -1.6px;
    margin-bottom: 64px;
  }
`;

export const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding-top: 40px;

  /* Vertical line - starts ABOVE first marker, ends at last marker center */
  &::before {
    content: '';
    position: absolute;
    left: 9px;
    top: 0;
    bottom: 37px;
    width: 3px;
    background: linear-gradient(
      180deg,
      rgba(53, 132, 251, 0) 0%,
      rgba(53, 132, 251, 1) 40%
    );
    z-index: 0;
  }

  @media (min-width: 820px) {
    padding-top: 48px;

    &::before {
      left: 16px;
      bottom: 44px;
    }
  }
`;

export const TimelineRow = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 24px;
`;

export const MarkerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

export const TimelineMarker = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: rgba(53, 132, 251, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${colors.blue[500]};
  }

  @media (min-width: 820px) {
    width: 35px;
    height: 35px;

    &::after {
      width: 15px;
      height: 15px;
    }
  }
`;

export const TimelineSpacer = styled.div`
  height: 64px;
  flex-shrink: 0;

  @media (min-width: 820px) {
    height: 80px;
  }
`;

export const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 0;
`;

export const EntryKey = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.blue[800]};
  line-height: 19.2px;
  letter-spacing: -0.32px;

  @media (min-width: 820px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.4px;
  }
`;

export const EntryValue = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.blue[800]};
  line-height: 24px;
  letter-spacing: -0.4px;

  @media (min-width: 820px) {
    font-size: 28px;
    line-height: 33.6px;
    letter-spacing: -0.56px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 480px;
  margin: 40px auto 0;

  > button {
    width: 100%;
  }

  @media (min-width: 820px) {
    margin-top: 60px;

    > button {
      width: 360px;
      font-size: 28px;
      line-height: 33.6px;
      padding: 16px 36px;
    }
  }
`;
