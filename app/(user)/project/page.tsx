'use client';

import { useEffect, useState } from 'react';
import { getProjectList } from '@/api';
import { GetProjectListResponse } from '@/types';
import Projects from '@/components/Projects';
import { isAxiosError } from 'axios';
import * as S from './styled';

const generations = [
  {
    title: '전체',
  },
  {
    title: '1기',
  },
  {
    title: '2기',
  },
  {
    title: '3기',
  },
  {
    title: '4기',
  },
] as const;

const Page = () => {
  const [generation, setGeneration] = useState<number>(0);
  const [projects, setProjects] = useState<GetProjectListResponse>([[], []]);
  const [finalProjects, toryProjects] = projects;

  useEffect(() => {
    const fetch = async () => {
      const { result } = await getProjectList({ generation })!;
      if (!isAxiosError(result)) {
        setProjects(result);
      }
    };
    fetch();
  }, [generation]);

  return (
    <>
      <S.Header>Project</S.Header>
      <S.TabContainer>
        {generations.map(({ title }, idx) => (
          <div key={title}>
            <S.Tab key={title} type="button" selected={idx === generation} onClick={() => setGeneration(idx)}>
              {title}
            </S.Tab>
            {idx === generation && <S.Underline layoutId="underline" />}
          </div>
        ))}
      </S.TabContainer>

      <S.ProjectsContainer>
        <Projects projects={finalProjects}>
          <Projects.Title>최종 프로젝트</Projects.Title>
        </Projects>

        <Projects projects={toryProjects}>
          <Projects.Title>토이 프로젝트</Projects.Title>
        </Projects>
      </S.ProjectsContainer>
    </>
  );
};

export default Page;
