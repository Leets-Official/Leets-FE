'use client';

import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CommentTextarea = styled.textarea`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #153464;
  letter-spacing: -0.28px;
  line-height: 1.5;
  width: 100%;
  min-height: 80px;
  background: #a8cafd;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 16px 20px;
  resize: vertical;
  outline: none;

  &::placeholder {
    color: rgba(2, 8, 18, 0.4);
  }

  &:focus {
    border-color: #3584fb;
  }
`;

export const TextareaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CharCount = styled.span<{ $isOver: boolean }>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ $isOver }) => ($isOver ? '#e53935' : 'rgba(21, 52, 100, 0.45)')};
  text-align: right;
  letter-spacing: -0.24px;
`;

export const AddCommentButton = styled.button`
  all: unset;
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  background: #3584fb;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: #2a69c8;
  }
`;
