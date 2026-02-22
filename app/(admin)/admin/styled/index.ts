'use client';

import { styled } from 'styled-components';

export const AdminContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif;
  background: #f4f8fe;
  color: #153464;
  display: flex;
  flex-direction: column;
`;

/* ── Login page ── */

export const LoginPageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const LoginHeader = styled.header`
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 208px;
  height: 60px;
  flex-shrink: 0;

  @media (max-width: 819px) {
    padding: 0 20px;
  }
`;

export const LoginSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;

  @media (max-width: 819px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 20px;

    /* 상단 1/3 지점에 배치: 위 공간 1 : 아래 공간 2 */
    &::before {
      content: '';
      flex: 1;
    }
    &::after {
      content: '';
      flex: 2;
    }
  }
`;

/* 타이틀 + 카드를 함께 묶는 래퍼 */
export const LoginCardWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;

  @media (max-width: 819px) {
    width: 100%;
    max-width: 500px;
  }
`;

export const LoginTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #153464;
  letter-spacing: -0.72px;
  margin: 0 0 40px 0;
  text-align: center;

  @media (max-width: 819px) {
    font-size: 26px;
    margin-bottom: 24px;
  }
`;

export const LoginCard = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  padding: 50px;
  box-shadow: 0 4px 8px rgba(53, 132, 251, 0.4);

  @media (max-width: 819px) {
    padding: 28px 24px;
  }
`;

/* PC에서 카드 아래 로그인 버튼 (모바일에서는 숨김 → LoginForm 내부 버튼 사용) */
export const PcLoginButton = styled.button`
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;

  width: 100%;
  height: 52px;
  margin-top: 16px;

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

  @media (max-width: 819px) {
    display: none;
  }
`;

export const LoginFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 0;
  flex-shrink: 0;
`;

export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(21, 52, 100, 0.2);
`;

export const Copyright = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.2);
  letter-spacing: -0.24px;
  margin: 0;
`;
