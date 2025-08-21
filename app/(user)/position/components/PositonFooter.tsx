'use client';

import Footer from '@/components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 15vh;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: normal;
  color: #fbfbfb;
`;

const Description = styled.p`
  width: 50%;
  text-align: center;
  font-size: 16px;
  font-weight: lighter;
  color: #fbfbfb;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 16px 0;
`;

const Button = styled.button`
  padding: 12px 16px;
  font-size: 12px;
  border: 1px solid #fbfbfb;
  border-radius: 20px;
  cursor: pointer;
  background: none;
  color: #fbfbfb;

  &:hover {
    background: linear-gradient(135deg, #6a5acd 0%, #b6b2fc 50%, #403aed 100%);
  }
`;

const Divider = styled.div`
  height: 0.5px;
  background-color: #666666;
  width: 100vw;
  margin: 16px 0;
`;

export default function PositionFooter() {
  return (
    <Container>
      <Title>고민중이신가요?</Title>
      <Description>
        Leets에서는 다양한 분야의 사람들과 함께 성장할 수 있는 기회를 제공합니다. <br />
        지금 지원하고 새로운 도전을 시작해보세요!
      </Description>

      <ButtonContainer>
        <Button
          onClick={() => {
            window.location.href = '/';
          }}>
          동아리 더 알아보기
        </Button>
        <Button
          onClick={() => {
            window.location.href = '/project';
          }}>
          프로젝트 보러가기
        </Button>
      </ButtonContainer>

      <Divider />

      <Footer />
    </Container>
  );
}
