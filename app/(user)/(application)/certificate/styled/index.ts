'use client';

import { styled } from 'styled-components';

export const CertificateContainer = styled.main`
  width: 100%;
  height: 100%;

  background: white;
`;

export const ContentContainer = styled.section`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadStyle = styled.div`
  font-weight: 500;
  font-size: 6vw;
  letter-spacing: -0.03em;

  width: content;
  height: auto;

  margin-bottom: 30px;
  background: white;
`;

export const PrivacyContainer = styled.article`
  line-height: 2;

  width: 80%;
  height: 70%;

  border-radius: 20px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  overflow-y: scroll;
`;

export const MainTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

export const TitleContainer = styled.div`
  font-size: 24px;
  font-weight: 600;

  margin-top: 24px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
