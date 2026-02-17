'use client';

import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import { MQ } from '@/constants/viewports';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 80px ${spacing.page.mobilePadding};

  @media (min-width: 820px) {
    padding: 120px 0;
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  max-width: ${spacing.page.innerWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 600;
  color: ${colors.blue[800]};
  margin-bottom: 60px;
  width: 100%;
  max-width: 480px;
  text-align: left;

  ${MQ({
    fontSize: ['32px', '48px', '72px', '80px'],
  })}
`;

export const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 480px;

  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
      180deg,
      rgba(53, 132, 251, 0) 0%,
      rgba(53, 132, 251, 1) 40%
    );
    z-index: 0;
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(53, 132, 251, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${colors.blue[500]};
  }
`;

export const TimelineSpacer = styled.div`
  height: 64px;
  flex-shrink: 0;
`;

export const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 4px;
`;

export const EntryKey = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.blue[800]};

  @media (min-width: 820px) {
    font-size: 20px;
  }
`;

export const EntryValue = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.blue[900]};

  @media (min-width: 820px) {
    font-size: 28px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 480px;
  margin-top: 60px;

  > button {
    min-width: 280px;
  }

  @media (max-width: 820px) {
    margin-top: 40px;

    > button {
      width: 100%;
    }
  }
`;
