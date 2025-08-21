'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Schedule, Alert } from '@/utils';
import styled from 'styled-components';
import { PositionData } from '../types/position';

interface PositionCardProps {
  position: PositionData;
}

const CardContainer = styled(motion.div)<{ $hoverGradient: string }>`
  background: #2d3748;
  border-radius: 16px;
  padding: 32px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  will-change: transform;
  transform: translateZ(0);
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 16px;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h3<{ $isExpanded?: boolean }>`
  color: ${({ $isExpanded }) => ($isExpanded ? 'rgba(36, 4, 67, 0.9)' : '#ffffff')};
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(36, 4, 67, 0.9);
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
`;

const HoverDescription = styled.div`
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  color: rgba(36, 4, 67, 0.9);
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
`;

const HoverContentWrapper = styled(motion.div)`
  overflow: hidden;
  transform-origin: top;
`;

const SkillsContainer = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  margin-top: ${({ $isExpanded }) => ($isExpanded ? '8px' : '6px')};
  transition: margin-top 0.3s ease;
  position: relative;
  z-index: 1;
`;

const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
`;

const MobileToggleButton = styled(motion.button)<{ $isExpanded: boolean }>`
  font-size: 0.875rem;
  margin-bottom: 16px;
  cursor: pointer;
  display: none;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
  background: none;
  border: none;
  box-shadow: none;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    display: flex;
  }

  &::after {
    content: '${({ $isExpanded }) => ($isExpanded ? '▼' : '▶')}';
    transition: transform 0.2s ease;
  }
`;

const ApplyButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin-top: auto;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    background: url('/assets/image/Project/Arrow.svg') center center no-repeat,
      linear-gradient(135deg, #4e46e59a 0%, #403aedaa 100%);
    background-size: 12px 12px, cover;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-block;
    box-shadow: 0 2px 8px rgba(79, 70, 229, 0.3);
  }
`;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

const cardVariants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      type: 'tween',
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.3,
    },
  },
};

const backgroundVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      type: 'tween',
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.2,
    },
  },
};

const hoverContentVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  hover: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        type: 'tween',
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.3,
      },
      opacity: {
        type: 'tween',
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.3,
        delay: 0.1,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        type: 'tween',
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.25,
        delay: 0.1,
      },
      opacity: {
        type: 'tween',
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.15,
      },
    },
  },
};

export default function PositionCard({ position }: PositionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const isMobile = useIsMobile();

  const isExpanded = isMobile ? isMobileExpanded : isHovered;

  const handleClick = (e: React.MouseEvent) => {
    const period = Schedule.getCurrentPeriod();
    if (period === 'CLOSE') {
      Alert.error('지원 기간이 아닙니다.');
      return;
    }

    if (isMobile && !isMobileExpanded) {
      e.preventDefault();
      return;
    }

    if (!isMobile) {
      window.open(position.url, '_blank');
    }
  };

  const handleMobileToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileExpanded(!isMobileExpanded);
  };

  return (
    <CardContainer
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      $hoverGradient={position.hoverGradient}>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: position.hoverGradient,
          borderRadius: '16px',
          zIndex: 0,
        }}
        variants={backgroundVariants}
        initial="initial"
        animate={isExpanded ? 'hover' : 'exit'}
      />

      <TitleWrapper>
        <IconWrapper>{position.icon}</IconWrapper>
        <Title>{position.title}</Title>
      </TitleWrapper>

      <Description>{position.description}</Description>

      {isMobile && (
        <MobileToggleButton $isExpanded={isMobileExpanded} onClick={handleMobileToggle} whileTap={{ scale: 0.98 }}>
          {isMobileExpanded ? '자세히 보기 접기' : '자세히 보기'}
        </MobileToggleButton>
      )}

      <HoverContentWrapper variants={hoverContentVariants} initial="initial" animate={isExpanded ? 'hover' : 'exit'}>
        <HoverDescription>{position.hoverDescription}</HoverDescription>
      </HoverContentWrapper>

      <SkillsContainer $isExpanded={isExpanded}>
        {position.skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 1 }}
            style={{ marginTop: '6px' }}
            animate={{
              opacity: 1,
              scale: isExpanded ? 1.05 : 1,
              transition: {
                delay: isExpanded ? index * 0.03 : 0,
                duration: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}>
            <SkillTag>{skill}</SkillTag>
          </motion.div>
        ))}
      </SkillsContainer>

      <ApplyButton
        onClick={() => {
          const period = Schedule.getCurrentPeriod();
          if (period === 'CLOSE') {
            Alert.error('지원 기간이 아닙니다.');
            return;
          }

          if (isMobile) {
            window.open(position.url, '_blank');
          }
        }}
        animate={{
          x: isExpanded ? 4 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}>
        지원서 작성하기
      </ApplyButton>
    </CardContainer>
  );
}
