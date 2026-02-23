'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { colors } from '@/styles/theme';
import { USER } from '@/constants';
import { Schedule, Alert } from '@/utils';
import * as gtag from '@/lib/gtag';
import { PositionData } from '../types/position';

// ============ Card Container ============

const Card = styled.div<{ $gradient: string; $hoverShadow: string }>`
  position: relative;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  height: 260px;
  background: #eef4fd;
  border: 1px solid rgba(21, 52, 100, 0.1);
  box-shadow: 0 2px 4px rgba(53, 132, 251, 0.2);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ $gradient }) => $gradient};
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: 0;
  }

  &:hover {
    border-color: transparent;
    box-shadow: ${({ $hoverShadow }) => $hoverShadow};
  }

  &:hover::before {
    opacity: 1;
  }

  @media (min-width: 821px) and (max-width: 1180px) {
    height: 300px;
  }

  @media (max-width: 820px) {
    height: auto;
    border: 1px solid rgba(53, 132, 251, 0.2);

    &::before {
      display: none;
    }

    &:hover {
      border-color: rgba(53, 132, 251, 0.2);
      box-shadow: 0 2px 4px rgba(53, 132, 251, 0.2);
    }
  }
`;

// ============ PC Default View ============

const DefaultView = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 32px;
  z-index: 1;
  transition: opacity 0.25s ease;

  ${Card}:hover & {
    opacity: 0;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

const PositionName = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.blue[800]};
  letter-spacing: -0.4px;
  line-height: 24px;
`;

// ============ PC Hover View ============

const HoverView = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 28px;
  gap: 12px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease 0.05s;

  ${Card}:hover & {
    opacity: 1;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

const HoverHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HoverTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  line-height: 33.6px;
  letter-spacing: -0.56px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
`;

const ApplyLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  line-height: 14.4px;
  letter-spacing: -0.24px;
  white-space: nowrap;
`;

const HoverDesc = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: #ffffff;
  line-height: 20.4px;
  letter-spacing: -0.34px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
`;

const DetailBox = styled.div`
  background: linear-gradient(
    135deg,
    rgba(2, 8, 18, 0.1) 0%,
    rgba(2, 8, 18, 0) 25%,
    rgba(2, 8, 18, 0.2) 71.2%,
    rgba(2, 8, 18, 0) 100%
  );
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  line-height: 19.2px;
  letter-spacing: -0.32px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
`;

const ChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1;
  align-items: flex-end;
`;

const PCChip = styled.span`
  background: rgba(21, 52, 100, 0.1);
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
  border: 1px solid #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
`;

// ============ Mobile View ============

const MobileView = styled.div`
  display: none;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
  }
`;

const MobileTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.blue[800]};
  letter-spacing: -0.32px;
  line-height: 19.2px;
`;

const MobileApplyLabel = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: ${colors.blue[800]};
  line-height: 13.2px;
`;

const MobileDescBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MobileTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MobileDesc = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.blue[800]};
  letter-spacing: -0.24px;
  line-height: 14.4px;
`;

const MobileDetail = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.blue[800]};
  letter-spacing: -0.24px;
  line-height: 14.4px;
`;

const MobileChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const MobileChip = styled.span<{
  $chipBg: string;
  $chipBorder: string;
  $chipText: string;
}>`
  background: ${({ $chipBg }) => $chipBg};
  border: 1px solid ${({ $chipBorder }) => $chipBorder};
  color: ${({ $chipText }) => $chipText};
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.2px;
`;

// ============ Component ============

interface PositionCardProps {
  position: PositionData;
}

export default function PositionCard({ position }: PositionCardProps) {
  const router = useRouter();

  const handleApply = () => {
    const period = Schedule.getCurrentPeriod();
    gtag.event({
      action: `click_position_card_${position.title}`,
      category: 'Position Card for apply',
      label: position.title,
      value: 1,
    });
    if (period === 'CLOSE') {
      Alert.error('지원 기간이 아닙니다.');
      return;
    }
    sessionStorage.setItem('selectedApplyPosition', position.applyPosition);
    router.push(USER.APPLY);
  };

  const { colorTheme } = position;

  return (
    <Card $gradient={colorTheme.gradient} $hoverShadow={colorTheme.hoverShadow} onClick={handleApply}>
      {/* PC Default */}
      <DefaultView>
        <Image src={position.iconSrc} alt={position.title} width={150} height={150} style={{ objectFit: 'contain' }} />
        <PositionName>{position.title}</PositionName>
      </DefaultView>

      {/* PC Hover */}
      <HoverView>
        <HoverHeader>
          <HoverTitle>{position.title}</HoverTitle>
          <ApplyLabel>지원서 작성하기 &gt;</ApplyLabel>
        </HoverHeader>
        <HoverDesc>{position.description}</HoverDesc>
        <DetailBox>{position.hoverDescription}</DetailBox>
        <ChipsRow>
          {position.skills.map((skill) => (
            <PCChip key={skill}>{skill}</PCChip>
          ))}
        </ChipsRow>
      </HoverView>

      {/* Mobile */}
      <MobileView>
        <MobileDescBlock>
          <MobileTitleRow>
            <MobileTitle>{position.title}</MobileTitle>
            <MobileApplyLabel>지원서 작성하기 &gt;</MobileApplyLabel>
          </MobileTitleRow>
          <MobileTextBlock>
            <MobileDesc>{position.description}</MobileDesc>
            <MobileDetail>{position.hoverDescription}</MobileDetail>
          </MobileTextBlock>
        </MobileDescBlock>
        <MobileChipsRow>
          {position.skills.map((skill) => (
            <MobileChip
              key={skill}
              $chipBg={colorTheme.mobileChipBg}
              $chipBorder={colorTheme.mobileChipBorder}
              $chipText={colorTheme.mobileChipText}>
              {skill}
            </MobileChip>
          ))}
        </MobileChipsRow>
      </MobileView>
    </Card>
  );
}
