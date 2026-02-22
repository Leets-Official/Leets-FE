'use client';

import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const InputSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 819px) {
    gap: 16px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #153464;
  letter-spacing: -0.32px;

  @media (max-width: 819px) {
    font-size: 14px;
    letter-spacing: -0.28px;
  }
`;

export const InputStyle = styled.input`
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 500;

  width: 100%;
  height: 48px;

  color: #153464;
  background: #fcfdff;

  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  padding: 0 16px;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(31, 79, 150, 0.2);
    font-size: 14px;
    font-weight: 500;
  }

  &:focus {
    border-color: #3584fb;
  }

  @media (max-width: 819px) {
    height: 40px;
  }
`;

/* 모바일에서만 표시 (PC는 카드 밖 PcLoginButton 사용) */
export const LoginButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;

  width: 100%;
  height: 48px;

  border: none;
  border-radius: 99px;
  color: #ffffff;
  background: #3584fb;
  cursor: pointer;

  &:hover {
    background: #2a69c8;
  }
  &:active {
    background: #1f4f96;
  }

  @media (min-width: 820px) {
    display: none;
  }
`;
