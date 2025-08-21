'use client';

import React from 'react';
import styled from 'styled-components';
import PositionGrid from './components/PositionGrid';
import PositionFooter from './components/PositonFooter';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  padding: 80px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 60px;
  text-align: center;
  letter-spacing: -0.02em;
`;

export default function PositionPage() {
  return (
    <Container>
      <Title>어떤 분야에 함께하고 싶으신가요?</Title>
      <PositionGrid />
      <PositionFooter />
    </Container>
  );
}
