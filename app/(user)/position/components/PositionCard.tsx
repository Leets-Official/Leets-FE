'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { colors } from '@/styles/theme';
import { USER, APPLY_PERIOD, SUBMIT_STATUS } from '@/constants';
import { Schedule, Alert } from '@/utils';
import { useSessionData } from '@/hooks';
import * as gtag from '@/lib/gtag';
import { PositionData } from '../types/position';

// ============ Card Container ============

const Card = styled.div`
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

  &:hover {
    border-color: rgba(53, 132, 251, 0.35);
    box-shadow: 0 4px 16px rgba(53, 132, 251, 0.25);
  }

  @media (min-width: 821px) and (max-width: 1180px) {
    height: 300px;
  }

  @media (max-width: 820px) {
    height: auto;
    border: 1px solid rgba(53, 132, 251, 0.2);

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
  justify-content: space-between;
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
  font-size: 20px;
  font-weight: 700;
  color: #3584fb;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const ApplyLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: rgba(21, 52, 100, 0.8);
  line-height: 14.4px;
  letter-spacing: -0.24px;
  white-space: nowrap;
`;

const HoverDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(21, 52, 100, 0.8);
  line-height: 20.4px;
  letter-spacing: -0.34px;
`;

const DetailBox = styled.div`
  background: rgba(21, 52, 100, 0.04);
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid rgba(31, 79, 150, 0.18);
  font-size: 14px;
  font-weight: 400;
  color: rgba(21, 52, 100, 0.8);
  line-height: 19.2px;
  letter-spacing: -0.32px;
`;

const ChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const PCChip = styled.span`
  color: rgba(21, 52, 100, 0.7);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  border: 1px solid rgba(31, 79, 150, 0.18);
`;

// ============ Mobile View ============

const MobileView = styled.div`
  display: none;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 20px;
  }
`;

const MobileTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileTitle = styled.span`
  font-size: 14px;
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
  font-weight: 400;
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
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.2px;
`;

// ============ Component ============

interface PositionCardProps {
  position: PositionData;
}

export default function PositionCard({ position }: PositionCardProps) {
  const router = useRouter();
  const { submitStatus } = useSessionData();

  const handleApply = () => {
    const period = Schedule.getCurrentPeriod();
    gtag.event({
      action: `click_position_card_${position.title}`,
      category: 'Position Card for apply',
      label: position.title,
      value: 1,
    });

    if (period === APPLY_PERIOD.BEFORE) {
      Alert.error('지원 기간이 아닙니다.');
      return;
    }

    if (period === APPLY_PERIOD.RECRUIT) {
      if (submitStatus === SUBMIT_STATUS.SUBMIT) {
        router.push(USER.APPLY_COMPLETE);
        return;
      }
      sessionStorage.setItem('selectedApplyPosition', position.applyPosition);
      router.push(USER.APPLY);
      return;
    }

    // AFTER: 지원기간 종료 후
    if (submitStatus === SUBMIT_STATUS.SUBMIT) {
      router.push(USER.APPLY_STATUS);
      return;
    }

    Swal.fire({
      icon: 'info',
      title: '지원 기간이 종료되었습니다',
      text: '다음 기수에서 만나요! 🙂',
      confirmButtonText: '확인',
      customClass: { popup: 'swal-custom-popup' },
    });
  };

  const { colorTheme } = position;

  return (
    <Card onClick={handleApply}>
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
