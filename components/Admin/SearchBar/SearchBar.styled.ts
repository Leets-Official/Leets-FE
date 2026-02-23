'use client';

import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  height: 40px;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  background: #fcfdff;
  flex: 1;
  max-width: 300px;

  @media (max-width: 819px) {
    max-width: 100%;
    flex: 1;
  }
`;

export const SearchBarImageContainer = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  opacity: 0.4;
`;

export const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #153464;
  width: 100%;
  border: none;
  outline: none;
  background: transparent;

  &::placeholder {
    color: rgba(31, 79, 150, 0.2);
    font-size: 14px;
  }
`;
