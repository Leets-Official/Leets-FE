'use client';

import { styled } from 'styled-components';

export { MobileFab, MobileOverlay, SheetHandle, SheetTitle } from '@/components/Admin/admin.shared.styled';

/* ── Layout ── */

export const ApplicationContainer = styled.section`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding-bottom: 40px;

  @media (max-width: 819px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ApplicationTextContainer = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SideBar = styled.article`
  width: 258px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 819px) {
    width: 100%;
  }
`;

/* ── Info cards ── */

export const PersonalInformationContainer = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  padding: 40px 50px;

  @media (max-width: 819px) {
    padding: 24px 20px;
  }
`;

export const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #153464;
  letter-spacing: -0.36px;
  margin-bottom: 20px;
`;

export const PersonalInformation = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px 36px;

  @media (max-width: 819px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Key = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #153464;
  letter-spacing: -0.32px;
`;

export const Value = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #153464;
  letter-spacing: -0.28px;
  background: #e4eeff;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  padding: 0 16px;
  height: 44px;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PortfolioLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #3584fb;
  letter-spacing: -0.28px;
  background: #e4eeff;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  padding: 0 16px;
  height: 44px;
  display: flex;
  align-items: center;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  grid-column: 1 / -1;
  min-width: 0;
  width: 100%;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #2a69c8;
  }
`;

export const LongValue = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #153464;
  letter-spacing: -0.28px;
  background: #e4eeff;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  padding: 0 16px;
  height: 44px;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  grid-column: 1 / -1;
  min-width: 0;
  width: 100%;
`;

export const LongInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const LongTextValue = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #153464;
  line-height: 1.6;
  letter-spacing: -0.28px;
  background: #e4eeff;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  padding: 14px 16px;
  min-height: 44px;
  max-height: 160px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const LinkContainer = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 819px) {
    padding: 24px 20px;
  }
`;

export const SelfIntroductionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SelfIntroduction = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 819px) {
    padding: 24px 20px;
  }
`;

export const CharCount = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #6b93c8;
  letter-spacing: -0.24px;
  text-align: right;
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #153464;
  line-height: 1.6;
  letter-spacing: -0.28px;
  background: #e4eeff;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  padding: 14px 16px;
  min-height: 100px;
  max-height: 280px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-break: break-word;
`;

/* 사이드바에서 모바일 숨김 (시트에서는 그냥 렌더링) */
export const DesktopOnly = styled.div`
  @media (max-width: 819px) {
    display: none;
  }
`;

/* ── Mobile: FAB + Bottom Sheet (면접 정보 입력) ── */
/* MobileFab, MobileOverlay, SheetHandle, SheetTitle → admin.shared.styled.ts */

export const MobileSheet = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 819px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 85vh;
    background: #f4f8fe;
    border-radius: 20px 20px 0 0;
    z-index: 101;
    padding: 0 16px 40px;
    overflow-y: auto;
    transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 0.3s ease;
  }
`;

