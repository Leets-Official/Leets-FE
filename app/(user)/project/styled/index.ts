'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors, spacing, typography } from '@/styles/theme';

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${colors.neutral.lightBg};
`;

export const PageWrapper = styled.div`
  width: 100%;
  max-width: ${spacing.page.innerWidth};
  padding: 0 ${spacing.page.mobilePadding};
  padding-bottom: 80px;
  flex: 1;

  @media (min-width: 820px) {
    padding: 0 ${spacing.page.mobilePadding};
    padding-bottom: 120px;
  }
`;

export const Header = styled.header`
  font-size: ${typography.scale.heading2.size};
  font-weight: 700;
  line-height: 57.6px;
  color: ${colors.blue[500]};
  margin-top: 30px;
  text-align: center;

  @media (min-width: 820px) {
    font-size: ${typography.scale.display.size};
    font-weight: 600;
    line-height: 96px;
  }
`;

export const TabScrollWrapper = styled.div`
  position: relative;
  margin-top: 60px;
  margin-bottom: 40px;

  @media screen and (max-width: 680px) {
    margin-left: -${spacing.page.mobilePadding};
    width: calc(100% + 2 * ${spacing.page.mobilePadding});
  }
`;

export const TabContainer = styled.div`
  list-style: none;
  display: flex;
  gap: 30px;
  justify-content: center;

  @media screen and (max-width: 680px) {
    gap: 8px;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0 ${spacing.page.mobilePadding};
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Tab = styled.button<{ selected: boolean }>`
  all: unset;
  font-size: 16px;
  font-weight: 600;
  width: 64px;
  height: 40px;
  text-align: center;
  color: ${({ selected }) => (selected ? colors.blue[800] : colors.blue[300])};
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    color: ${colors.blue[800]};
  }

  @media screen and (max-width: 680px) {
    font-size: 14px;
    width: 60px;
    height: 40px;
    flex-shrink: 0;
  }
`;

export const Underline = styled(motion.div)`
  width: 100%;
  border-top: 2px solid ${colors.blue[500]};
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 820px) {
    gap: 30px;
  }
`;
