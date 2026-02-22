'use client';

import React from 'react';
import styled from 'styled-components';
import { spacing } from '@/styles/theme';
import PositionCard from './PositionCard';
import { PositionData } from '../types/position';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  max-width: ${spacing.page.innerWidth};

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const positionData: PositionData[] = [
  {
    id: 'frontend',
    title: '프론트엔드 개발자',
    description: '사용자가 직접 마주하는 화면과 인터랙션을 구현합니다.',
    hoverDescription:
      '동아리 프로젝트를 통해 디자인과 기획이 실현되는 과정을 끝까지 경험하며, 실무에 가까운 협업 역량을 키울 수 있습니다.',
    iconSrc: '/assets/image/Icons/position-fe.png',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    applyPosition: 'FRONTEND',
    colorTheme: {
      gradient: 'radial-gradient(ellipse at 50% 105%, #054FFF 0%, #3584FB 100%)',
      hoverShadow: '0 4px 6px rgba(31, 79, 150, 0.4)',
      mobileChipBg: 'rgba(53, 132, 251, 0.12)',
      mobileChipBorder: '#3584FB',
      mobileChipText: '#2A69C8',
    },
  },
  {
    id: 'backend',
    title: '백엔드 개발자',
    description: '서비스의 데이터와 로직을 책임지는 핵심 엔진을 만듭니다.',
    hoverDescription:
      '실제 유저가 사용하는 서비스를 운영하며, 성능·보안·확장성 같은 백엔드의 진짜 과제를 직접 다뤄볼 수 있습니다.',
    iconSrc: '/assets/image/Icons/position-be.png',
    skills: ['Java', 'Spring Boot', 'MySQL', 'AWS'],
    applyPosition: 'BACKEND',
    colorTheme: {
      gradient: 'radial-gradient(ellipse at 50% 105%, #00E192 0%, #10D9B2 100%)',
      hoverShadow: '0 4px 6px rgba(0, 178, 138, 0.4)',
      mobileChipBg: 'rgba(16, 217, 178, 0.12)',
      mobileChipBorder: '#00B28A',
      mobileChipText: '#00B28A',
    },
  },
  {
    id: 'designer',
    title: '디자이너',
    description: '사용자가 직관적으로 이해하고 즐길 수 있는 경험을 설계합니다.',
    hoverDescription:
      '단순 시안이 아닌, 실제 배포되는 서비스 디자인을 경험하고 데이터 기반으로 개선하는 과정까지 함께할 수 있습니다.',
    iconSrc: '/assets/image/Icons/position-design.png',
    skills: ['Figma', 'Adobe Tools', 'Data-Driven', 'Collaboration'],
    applyPosition: 'UX_UI',
    colorTheme: {
      gradient: 'radial-gradient(ellipse at 50% 105%, #FF2BE8 0%, #FD8AF1 100%)',
      hoverShadow: '0 4px 6px rgba(245, 74, 239, 0.4)',
      mobileChipBg: 'rgba(253, 138, 241, 0.12)',
      mobileChipBorder: '#F54AEF',
      mobileChipText: '#F54AEF',
    },
  },
  {
    id: 'planner',
    title: '기획자',
    description: '서비스의 방향성과 사용자 가치, 그리고 팀의 목표를 정의합니다.',
    hoverDescription:
      '아이디어 발굴에서 지표 분석까지, 서비스가 완성되는 모든 과정을 경험하며 PM으로서의 시야를 넓힐 수 있습니다.',
    iconSrc: '/assets/image/Icons/position-pm.png',
    skills: ['User Research', 'Pretotyping', 'Collaboration', 'Product Metrics'],
    applyPosition: 'PM',
    colorTheme: {
      gradient: 'radial-gradient(ellipse at 50% 105%, #5C16F4 0%, #8658EA 100%)',
      hoverShadow: '0 4px 6px rgba(92, 22, 244, 0.4)',
      mobileChipBg: 'rgba(151, 71, 255, 0.12)',
      mobileChipBorder: '#9747FF',
      mobileChipText: '#7F2AEE',
    },
  },
];

export default function PositionGrid() {
  return (
    <GridContainer>
      {positionData.map((position) => (
        <PositionCard key={position.id} position={position} />
      ))}
    </GridContainer>
  );
}
