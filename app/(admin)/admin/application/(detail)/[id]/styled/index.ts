'use client';

import { styled } from 'styled-components';
import Link from 'next/link';

export const ContentWrapper = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 32px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 819px) {
    padding: 20px 16px;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const BackLink = styled(Link)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  color: #153464;
  background: rgba(53, 132, 251, 0.08);
  font-size: 16px;

  &:hover {
    background: rgba(53, 132, 251, 0.15);
  }

  @media (min-width: 820px) {
    display: none;
  }
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
