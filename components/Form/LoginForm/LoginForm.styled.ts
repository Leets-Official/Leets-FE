'use client';

import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const InputSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputStyle = styled.input`
  font-size: 16px;

  width: 100%;
  height: 56px;

  ::placeholder {
    color: #94a3b8;
    ${({ placeholder }) => placeholder}
  }

  &:focus {
    outline: none;
    border-color: #4a93ff;
  }

  padding: 12px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  box-sizing: border-box;
  margin-bottom: 13px;
`;

export const LoginButton = styled.button`
  font-weight: 700;
  font-size: 16px;

  width: 100%;
  height: 52px;

  border: none;
  border-radius: 8px;
  margin-top: 55px;
  color: white;
  background: #4a93ff;
  cursor: pointer;
`;
