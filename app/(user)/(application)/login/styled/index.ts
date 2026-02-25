'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const LoginContent = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: 'Pretendard', sans-serif;
  font-size: 100px;
  font-weight: 700;
  color: #153464;
  margin: 0;
  letter-spacing: -0.03em;

  @media (max-width: 820px) {
    font-size: 80px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(21, 52, 100, 0.6);
  line-height: 1.6;
  margin: 0;
`;

export const ErrorMessage = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 190, 190, 1);
  background: rgba(255, 80, 80, 0.15);
  border: 1px solid rgba(255, 100, 100, 0.3);
  border-radius: 8px;
  padding: 10px 16px;
  margin: 0;
  box-sizing: border-box;
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: #ffffff;
  border: 0px;
  border-radius: 12px;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin-top: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  transition:
    background 0.15s,
    box-shadow 0.15s;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 820px) {
    font-size: 14px;
  }
`;

export const GoogleIcon = styled(Image)``;
