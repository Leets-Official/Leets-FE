'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { colors, typography } from '@/styles/theme';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.blue[800]};
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 0;
  gap: 40px;

  @media (max-width: 820px) {
    padding: 30px 0;
    gap: 30px;
  }
`;

/* === Hero Section (PC: horizontal, Mobile: vertical) === */

export const HeroSection = styled.div`
  display: flex;
  gap: 100px;
  align-items: flex-start;

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const HeroText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 820px) {
    gap: 12px;
    width: 100%;
  }
`;

export const MobileTitleRow = styled.div`
  display: none;

  @media (max-width: 820px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const FaviconWrapper = styled.div`
  display: none;

  @media (max-width: 820px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    padding: 4px;
    flex-shrink: 0;
    overflow: hidden;
    background: ${colors.neutral.white};
  }
`;

export const Favicon = styled(Image)`
  object-fit: contain;
`;

export const ProjectTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 72px;
  color: ${colors.blue[800]};
  letter-spacing: ${typography.letterSpacing};

  @media (max-width: 820px) {
    display: none;
  }
`;

export const MobileTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 43.2px;
  color: ${colors.blue[800]};
  letter-spacing: ${typography.letterSpacing};
`;

export const Summary = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: rgba(21, 52, 100, 0.8);
  white-space: pre-wrap;

  @media (max-width: 820px) {
    font-size: 16px;
    line-height: 19.2px;
  }
`;

export const ChipRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 820px) {
    gap: 8px;
  }
`;

export const ChipTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 80px;
  background: rgba(53, 132, 251, 0.2);
  border: 1px solid ${colors.blue[500]};
  color: ${colors.blue[700]};
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: -0.28px;

  @media (max-width: 820px) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.2px;
  }
`;

export const ServiceLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 999px;
  background: ${colors.blue[500]};
  color: ${colors.neutral.white};
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  text-decoration: none;
  transition: opacity 0.2s ease;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 820px) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 12px;
  }
`;

export const HeroThumbnail = styled.div`
  flex-shrink: 0;
  width: 390px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  @media (max-width: 820px) {
    display: none;
  }
`;

export const ThumbnailImage = styled(Image)`
  object-fit: cover;
  border-radius: 12px;
`;

/* === Description Section === */

export const Border = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(21, 52, 100, 0.2);
`;

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 820px) {
    gap: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: ${colors.blue[800]};

  @media (max-width: 820px) {
    font-size: 24px;
    line-height: 28.8px;
  }
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  color: rgba(21, 52, 100, 0.8);
  white-space: pre-wrap;

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 16.8px;
  }
`;

/* === Team Section === */

export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 820px) {
    gap: 20px;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 21px;

  @media (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`;

export const ProfileCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-decoration: none;
  color: ${colors.blue[800]};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const ProfileName = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  letter-spacing: -0.32px;
  color: ${colors.blue[800]};

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: -0.28px;
  }
`;

export const ProfileRole = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  letter-spacing: -0.32px;
  color: rgba(21, 52, 100, 0.6);

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: -0.28px;
  }
`;
