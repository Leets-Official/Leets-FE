'use client';

import { getProject } from '@/api';
import Link from 'next/link';
import Contributors from '@/components/Contributors';
import { useEffect, useState } from 'react';
import { GetProjectResponse } from '@/types';
import * as S from './styled';

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const [projectDetail, setProjectDetail] = useState<GetProjectResponse>();

  useEffect(() => {
    const fetch = async () => {
      const { result } = await getProject({ portfolioId: id });
      setProjectDetail(result);
    };
    fetch();
  }, []);

  if (!projectDetail) {
    return null;
  }
  const { summary, description, type, startDate, endDate, logoImgName, mainImgName, serviceUrl, contributors } =
    projectDetail!;

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
          <Link href={serviceUrl ?? '#'} target="_blank">
            <S.MainImage src={`/assets/image/Portfolio/${mainImgName}`} alt="main-image" fill />
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
