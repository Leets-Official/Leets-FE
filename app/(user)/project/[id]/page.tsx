'use client';

import Link from 'next/link';
import { getProject as getProjectDetail } from '@/api';
import Contributors from '@/components/Contributors';
import { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import type { GetProjectResponse } from '@/types';
import * as gtag from '@/lib/gtag';
import * as S from './styled';

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const [project, setProject] = useState<GetProjectResponse | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    const fetch = async () => {
      const { result } = await getProjectDetail({ portfolioId: id });
      if (!isAxiosError(result)) {
        setProject(result);
        return;
      }
      push('/project');
    };

    fetch();
  }, []);

  if (!project) {
    return null;
  }

  const { summary, description, type, startDate, endDate, logoImgName, mainImgName, serviceUrl, contributors } =
    project;

  const handleProjectClick = () => {
    gtag.event({
      action: 'click_project',
      category: 'Outbound Link_project',
      label: `${mainImgName} - ${serviceUrl}`,
      value: 10,
    });
  };

  return (
    <>
      <S.ContentContainer>
        <S.LogoContainer>
          <S.LogoImage src={`/assets/image/Portfolio/${logoImgName}`} alt="logo-image" fill />
        </S.LogoContainer>
        <S.Summary>{summary}</S.Summary>
        <S.ShortInformation>
          <S.Information>
            <p>프로젝트 형태:</p> <p>{type}</p>
          </S.Information>
          <S.Information>
            <p>기간:</p>
            <p>
              {startDate} - {endDate}
            </p>
          </S.Information>
        </S.ShortInformation>
        <S.ImageContainer>
          <Link href={serviceUrl ?? '#'} target="_blank" onClick={handleProjectClick}>
            <S.MainImage
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
              src={`/assets/image/Portfolio/${mainImgName}`}
              alt="main-image"
              fill
            />
          </Link>
        </S.ImageContainer>
        <S.Hr />
        <S.DescriptionContainer>
          <S.DescriptionTitle>프로젝트 설명</S.DescriptionTitle>
          <S.Description>{description}</S.Description>
        </S.DescriptionContainer>
        <S.Hr />
        <Contributors contributors={contributors} />
      </S.ContentContainer>
    </>
  );
};

export default Page;
