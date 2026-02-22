'use client';

import { styled } from 'styled-components';

export const ContentWrapper = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px 32px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 819px) {
    padding: 20px 16px;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #153464;
  letter-spacing: -0.72px;
  margin: 0;

  @media (max-width: 819px) {
    font-size: 24px;
  }
`;

export const SubText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.8);
  letter-spacing: -0.28px;
  margin: 0;
`;
