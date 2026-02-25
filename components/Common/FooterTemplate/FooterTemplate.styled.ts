'use client';

import styled from 'styled-components';
import { colors, spacing, typography } from '@/styles/theme';
import { mobileMQ } from '@/constants/viewports';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 ${spacing.page.mobilePadding};

  @media (min-width: 820px) {
    padding: 0;
  }
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: ${spacing.page.innerWidth};
`;

export const ContactSection = styled.div`
  padding: 40px 0;

  @media (min-width: 820px) {
    padding: 60px 0;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 820px) {
    flex-direction: row;
    gap: 48px;
    align-items: center;
  }
`;

export const ContactHeading = styled.h3`
  font-size: ${typography.scale.heading4.size};
  font-weight: 600;
  line-height: ${typography.scale.heading4.lineHeight};
  color: ${colors.blue[800]};
  white-space: nowrap;

  ${mobileMQ({
    fontSize: ['20px', '24px'],
  })}
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue[700]};
  font-size: 26px;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${colors.blue[500]};
    transform: translateY(-2px);
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${colors.blue[200]};
  margin: 0;
`;

export const CopyrightSection = styled.div`
  padding: 20px 0 36px;
  text-align: center;

  @media (max-width: 541px) {
    padding: 16px 0 24px;
  }
`;

export const CopyrightText = styled.p`
  font-size: ${typography.scale.captionL.size};
  font-weight: 400;
  color: ${colors.blue[800]};

  @media (max-width: 541px) {
    font-size: ${typography.scale.captionS.size};
  }
`;
