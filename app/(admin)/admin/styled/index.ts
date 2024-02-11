'use client';

import { styled } from 'styled-components';

export const AdminContainer = styled.main`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f9f9fc;
  color: black;
`;

export const ContentContainer = styled.section`
  width: 95%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 55px;
`;
