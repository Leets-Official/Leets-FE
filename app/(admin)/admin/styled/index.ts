'use client';

import { styled } from 'styled-components';

export const AdminContainer = styled.main`
  width: 100%;

  position: absolute;

  display: flex;
  justify-content: center;

  background: #f9f9fc;
  color: black;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.section`
  width: 100%;
  height: 100vh;

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
