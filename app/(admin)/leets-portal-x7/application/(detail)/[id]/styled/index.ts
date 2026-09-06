'use client';

import { styled } from 'styled-components';

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

  /* 인쇄(PDF 저장) 시에는 여백을 줄여 한 면에 더 많이 담는다. */
  @media print {
    max-width: none;
    padding: 0;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  @media print {
    margin-bottom: 12px;
  }
`;

export const HeaderActions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;

  @media print {
    display: none;
  }
`;

export const ActionButton = styled.button`
  all: unset;
  font-size: 13px;
  font-weight: 600;
  color: rgba(21, 52, 100, 0.75);
  background: #ffffff;
  border: 1px solid rgba(21, 52, 100, 0.25);
  border-radius: 8px;
  padding: 7px 12px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #f4f8fe;
    color: #153464;
  }

  @media (max-width: 819px) {
    font-size: 12px;
    padding: 6px 9px;
  }
`;

export const BackLink = styled.button`
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

  @media print {
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
