'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Schedule, Alert } from '@/utils';
import styled from 'styled-components';
import { colors } from '@/styles/theme';
import * as gtag from '@/lib/gtag';
import { PositionData } from '../types/position';

interface PositionCardProps {
  position: PositionData;
}

const CardContainer = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  background: #eef4fd;
  border: 1px solid rgba(21, 52, 100, 0.08);
  box-shadow: 0 2px 8px rgba(21, 52, 100, 0.06);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(6, 79, 255, 0.2);
  }
`;

const DefaultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  flex: 1;
  gap: 16px;
`;

const IconImage = styled(Image)`
  object-fit: contain;
`;

const PositionTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.blue[800]};
`;

const HoverOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #064fff 0%, #3685fc 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 28px;
  z-index: 2;
`;

const HoverHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const HoverTitle = styled.h3`
  font-size: 28px;
  font-weight: 800;
  color: #ffffff;
`;

const ApplyPill = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 100px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const HoverDescription = styled.p`
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.5;
  margin-bottom: 4px;
`;

const HoverDetail = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  margin-bottom: 16px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const SkillChip = styled.span`
  background: #153464;
  color: #ffffff;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
`;

export default function PositionCard({ position }: PositionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleApply = (e: React.MouseEvent) => {
    e.stopPropagation();
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
    window.open(position.url, '_blank');
  };

  return (
    <CardContainer
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleApply}>
      <DefaultContent>
        <IconImage src={position.iconSrc} alt={position.title} width={150} height={150} />
        <PositionTitle>{position.title}</PositionTitle>
      </DefaultContent>

      <AnimatePresence>
        {isHovered && (
          <HoverOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}>
            <HoverHeader>
              <HoverTitle>{position.title}</HoverTitle>
              <ApplyPill href={position.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                지원서 작성하기 →
              </ApplyPill>
            </HoverHeader>
            <HoverDescription>{position.description}</HoverDescription>
            <HoverDetail>{position.hoverDescription}</HoverDetail>
            <SkillsContainer>
              {position.skills.map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </SkillsContainer>
          </HoverOverlay>
        )}
      </AnimatePresence>
    </CardContainer>
  );
}
