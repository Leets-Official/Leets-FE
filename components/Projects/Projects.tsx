import { ReactNode } from 'react';
import { GetProjectListResponse } from '@/types';
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
        {projects.map(({ portfolioId, name, mainImgName }) => (
          <S.Project key={portfolioId} href={`/project/${portfolioId}`}>
            <S.ImageStyle src={`${process.env.NEXT_PUBLIC_API_URL}/images/${mainImgName}`} alt={name} fill />
            <S.Blur>{name}</S.Blur>
          </S.Project>
        ))}
      </S.ProjectContainer>
    </>
  );
};

Projects.Title = Title;

export default Projects;
