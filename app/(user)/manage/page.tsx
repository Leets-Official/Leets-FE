'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { colors, typography } from '@/styles/theme';
import { MANAGE } from '@/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  gap: 40px;

  @media (max-width: 820px) {
    padding-top: 60px;
    gap: 30px;
  }
`;

const Greeting = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  letter-spacing: -0.96px;
  color: ${colors.blue[800]};
  text-align: center;

  span {
    color: ${colors.blue[500]};
  }

  @media (max-width: 820px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.6px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 380px;

  @media (max-width: 820px) {
    width: 320px;
  }
`;

const CTAButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 99px;
  background: ${colors.blue[500]};
  color: ${colors.neutral.white};
  font-family: ${typography.fontFamily};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  padding: 12px 24px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const GhostButton = styled.button`
  width: 100%;
  height: 48px;
  border: 1px solid ${colors.blue[500]};
  border-radius: 99px;
  background: transparent;
  color: ${colors.blue[500]};
  font-family: ${typography.fontFamily};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(53, 132, 251, 0.05);
  }
`;

const ManagePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const name = session?.user?.name ?? '';

  const handleProjectManage = () => {
    if (window.confirm('팀장만 접근 가능합니다. 팀장이 맞으신가요?')) {
      router.push(MANAGE.PROJECT);
    }
  };

  return (
    <Container>
      <Greeting>
        <span>{name}</span>님 안녕하세요!
      </Greeting>
      <ButtonGroup>
        <CTAButton onClick={() => router.push(MANAGE.PROFILE)}>프로필 관리하기</CTAButton>
        <CTAButton onClick={handleProjectManage}>프로젝트 관리하기</CTAButton>
        <GhostButton onClick={() => router.push(MANAGE.PORTFOLIO)}>참여한 프로젝트 보기</GhostButton>
      </ButtonGroup>
    </Container>
  );
};

export default ManagePage;
