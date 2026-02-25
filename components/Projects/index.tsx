'use client';

import { ReactNode } from 'react';
import { GetProjectListResponse } from '@/types';
import { AnimatePresence } from 'framer-motion';
import * as S from './Projects.styled';

const Title = ({ children }: { children: ReactNode }) => {
  return <S.Title>{children}</S.Title>;
};

const Projects = ({
  projects,
  children,
}: {
  projects: Array<FlatArray<GetProjectListResponse, 1>>;
  children?: ReactNode;
}) => {
  if (!projects.length) {
    return null;
  }

  return (
    <>
      {children}

      <S.ProjectContainer>
        <AnimatePresence mode="wait">
          {projects.map(({ portfolioId, name, mainImgName }, idx) => (
            <S.Project
              initial={{ scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.02 }}
              key={portfolioId}
              href={`/project/${portfolioId}`}>
              <S.ImageStyle
                src={`/assets/image/Portfolio/${mainImgName}`}
                alt={name}
                fill
                sizes="(max-width: 820px) 100vw, 320px"
                priority={idx < 3}
              />
              <S.Blur>{name}</S.Blur>
            </S.Project>
          ))}
        </AnimatePresence>
      </S.ProjectContainer>
    </>
  );
};

Projects.Title = Title;

export default Projects;
