'use client';

import styled from 'styled-components';

/* PC + Mobile 모두 표시 */
export const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* ── 메모 카드 (Figma: #A8CAFD bg, 12px radius) ── */
export const CommentContainer = styled.div`
  width: 100%;
  background: #a8cafd;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CommentContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #020812;
  line-height: 1.5;
  letter-spacing: -0.28px;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const CommentAuthor = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #020812;
  letter-spacing: -0.28px;
  text-align: right;
  opacity: 0.6;
`;

/* ── Mobile: 댓글 bottom sheet (FAB로 열기) ── */

export const MobileCommentsOverlay = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 819px) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(21, 52, 100, 0.4);
    z-index: 100;
  }
`;

export const MobileCommentsSheet = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 819px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 80vh;
    background: #f4f8fe;
    border-radius: 20px 20px 0 0;
    z-index: 101;
    padding: 0 16px 40px;
    overflow-y: auto;
    transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 0.3s ease;
  }
`;

export const SheetHandle = styled.div`
  width: 40px;
  height: 4px;
  background: rgba(21, 52, 100, 0.2);
  border-radius: 2px;
  margin: 12px auto 20px;
  flex-shrink: 0;
`;

export const SheetTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #153464;
  letter-spacing: -0.36px;
  margin: 0 0 16px 0;
`;

export const MobileFab = styled.button`
  display: none;

  @media (max-width: 819px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 24px;
    right: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #3584fb;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(53, 132, 251, 0.4);
    z-index: 90;
  }
`;
