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
  /* 인쇄 시에는 한 단으로 펼쳐 사이드바(면접 정보·코멘트)까지 모두 출력한다. */
  @media print {
    flex-direction: column;
    gap: 12px;
    padding-bottom: 0;
    overflow-x: visible;
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
  @media print {
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
  @media print {
    padding: 12px 0;
    border-radius: 0;
    gap: 8px;
    break-inside: avoid;
    page-break-inside: avoid;
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
  /* 화면에서는 한 줄 말줄임이지만 인쇄물에는 전문이 나와야 한다. */
  @media print {
    display: block;
    height: auto;
    padding: 8px 12px;
    overflow: visible;
    text-overflow: clip;
    white-space: pre-wrap;
    word-break: break-word;
    break-inside: avoid;
  }
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
  /* 화면에서는 한 줄 말줄임이지만 인쇄물에는 전문이 나와야 한다. */
  @media print {
    display: block;
    height: auto;
    padding: 8px 12px;
    overflow: visible;
    text-overflow: clip;
    white-space: pre-wrap;
    word-break: break-word;
    break-inside: avoid;
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
  /* 화면에서는 한 줄 말줄임이지만 인쇄물에는 전문이 나와야 한다. */
  @media print {
    display: block;
    height: auto;
    padding: 8px 12px;
    overflow: visible;
    text-overflow: clip;
    white-space: pre-wrap;
    word-break: break-word;
    break-inside: avoid;
  }
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
  /* 화면에서는 스크롤이지만 인쇄물에서는 잘리면 안 된다. */
  @media print {
    min-height: 0;
    max-height: none;
    overflow: visible;
    break-inside: avoid;
  }
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
  @media print {
    padding: 12px 0;
    border-radius: 0;
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;

export const SelfIntroductionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* flex 컨테이너에서는 자식의 break-inside 가 무시되므로 인쇄 시 block 으로 바꾼다. */
  @media print {
    display: block;
  }
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
  /* 문항 단위로 페이지가 끊기지 않게 하고, 인쇄 여백을 줄여 밀도를 높인다. */
  @media print {
    padding: 12px 0;
    border-radius: 0;
    border-bottom: 1px solid #e5e7eb;
    gap: 6px;
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;

export const CharCount = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #6b93c8;
  letter-spacing: -0.24px;
  text-align: right;
  @media print {
    display: none;
  }
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
  /* 화면에서는 스크롤이지만 인쇄물에서는 잘리면 안 된다. */
  @media print {
    min-height: 0;
    max-height: none;
    overflow: visible;
    break-inside: avoid;
  }
`;

/* 사이드바에서 모바일 숨김 (시트에서는 그냥 렌더링) */
export const DesktopOnly = styled.div`
  @media (max-width: 819px) {
    display: none;
  }
  /* 합격 상태·면접 정보는 입력 폼이라 인쇄물에 담지 않는다. (값은 MD 로 확인) */
  @media print {
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
  @media print {
    display: none;
  }
`;

