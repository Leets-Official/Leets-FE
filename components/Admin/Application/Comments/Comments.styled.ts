'use client';

import styled from 'styled-components';

export const CommentsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 9px;

  margin-bottom: 15vh;
`;

export const CommentContainer = styled.div`
  font-weight: 400;
  font-size: 14px;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 9px;

  background: #cfe1fd;
  padding: 22px 24px;
  border-radius: 12px;
`;

export const CommentContent = styled.div`
  line-height: 1.5;
  word-break: break-all;

  white-space: pre-wrap;
`;

export const CommentAuthor = styled.div`
  color: #3685fc;
  text-align: end;
`;
