'use client';

import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import * as gtag from '@/lib/gtag';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  max-width: ${spacing.page.innerWidth};
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.blue[800]};
`;

const Description = styled.p`
  width: 60%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.blue[900]};
  line-height: 1.6;

  @media (max-width: 820px) {
    width: 90%;
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 16px 0;
`;

const GhostButton = styled.button`
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border: 1.5px solid ${colors.blue[300]};
  border-radius: 100px;
  cursor: pointer;
  background: transparent;
  color: ${colors.blue[700]};
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.blue[500]};
    border-color: ${colors.blue[500]};
    color: #ffffff;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  color: ${colors.blue[400]};
  margin-top: 40px;
  padding-bottom: 24px;
`;

export default function PositionFooter() {
  return (
    <Container>
      <Title>고민중이신가요?</Title>
      <Description>
        Leets에서는 다양한 분야의 사람들과 함께 성장할 수 있는 기회를 제공합니다.
        <br />
        지금 지원하고 새로운 도전을 시작해보세요!
      </Description>

      <ButtonContainer>
        <GhostButton
          onClick={() => {
            gtag.event({
              action: 'click_club_info_button',
              category: 'Bottom Button_club',
              label: '동아리 더 알아보기 Clicked',
              value: 10,
            });
            window.location.href = '/';
          }}>
          동아리 더 알아보기
        </GhostButton>
        <GhostButton
          onClick={() => {
            gtag.event({
              action: 'click_project_info_button',
              category: 'Bottom Button_project',
              label: '프로젝트 보러가기 Clicked',
              value: 10,
            });
            window.location.href = '/project';
          }}>
          프로젝트 둘러보기
        </GhostButton>
      </ButtonContainer>

      <Copyright>&copy; Leets. All rights reserved.</Copyright>
    </Container>
  );
}
