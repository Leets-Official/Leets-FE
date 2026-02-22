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

