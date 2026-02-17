'use client';

import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import * as gtag from '@/lib/gtag';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: ${spacing.page.innerWidth};

  @media (max-width: 820px) {
    gap: 12px;
  }
`;

const MoreText = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.blue[800]};
  text-align: center;
  line-height: 18px;
  letter-spacing: -0.3px;
  white-space: pre-line;

  @media (max-width: 820px) {
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: -0.2px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const GhostButton = styled.button`
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  border: 1px solid ${colors.blue[500]};
  border-radius: 99px;
  cursor: pointer;
  background: transparent;
  color: ${colors.blue[500]};
  letter-spacing: -0.28px;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.blue[500]};
    border-color: ${colors.blue[500]};
    color: #ffffff;
  }

  @media (max-width: 820px) {
    font-size: 11px;
    letter-spacing: -0.22px;
  }
`;

export default function PositionFooter() {
  return (
    <Container>
      <MoreText>
        {'고민중이신가요?\nLeets에서는 다양한 분야의 사람들과 함께 성장할 수 있는 기회를 제공합니다. 지금 지원하고 새로운 도전을 시작해보세요!'}
      </MoreText>

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
    </Container>
  );
}
