'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getProjectList } from '@/api';
import { GetProjectListResponse } from '@/types';
import { isAxiosError } from 'axios';
import styled from 'styled-components';
import { colors, typography, shadows } from '@/styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  gap: 30px;

  @media (max-width: 820px) {
    padding-top: 30px;
    align-items: flex-start;
    gap: 24px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const BackButton = styled.button`
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  color: ${colors.blue[500]};

  @media (max-width: 820px) {
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  letter-spacing: -0.96px;
  color: ${colors.blue[500]};

  @media (max-width: 820px) {
    font-size: 24px;
    line-height: 28.8px;
    letter-spacing: -0.48px;
  }
`;

const Grid = styled.div`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Link)`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  display: block;
  transition: transform 0.2s ease;
  box-shadow: ${shadows.card};

  &:hover {
    transform: scale(1.02);
  }

  &:hover img {
    filter: blur(2px) brightness(0.4);
  }

  &:hover div {
    opacity: 1;
  }
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: filter 0.3s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 20px;
  font-weight: 600;
  font-family: ${typography.fontFamily};
`;

const PortfolioPage = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<GetProjectListResponse>([[], []]);

  useEffect(() => {
    const fetch = async () => {
      const { result } = await getProjectList({ generation: 0 });
      if (!isAxiosError(result)) {
        setProjects(result);
      }
    };
    fetch();
  }, []);

  const allProjects = [...projects[0], ...projects[1]];

  return (
    <Container>
      <TitleRow>
        <BackButton onClick={() => router.back()}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M17.5 21L10.5 14L17.5 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BackButton>
        <Title>참여 프로젝트</Title>
      </TitleRow>
      <Grid>
        {allProjects.map(({ portfolioId, name, mainImgName }) => (
          <ProjectCard key={portfolioId} href={`/project/${portfolioId}`}>
            <ProjectImage src={`/assets/image/Portfolio/${mainImgName}`} alt={name} fill />
            <ProjectOverlay>{name}</ProjectOverlay>
          </ProjectCard>
        ))}
      </Grid>
    </Container>
  );
};

export default PortfolioPage;
