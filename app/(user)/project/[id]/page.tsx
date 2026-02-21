'use client';

import { getProject as getProjectDetail } from '@/api';
import { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import type { GetProjectResponse } from '@/types';
import * as gtag from '@/lib/gtag';
import * as S from './styled';

const Page = ({ params: { id } }: { params: { id: string } }) => {
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

  const handleContributorsClick = (name: string, url: string | null) => {
    gtag.event({
      action: 'click_contributor',
      category: 'Outbound Link_contributor',
      label: `${name} - ${url}`,
      value: 10,
    });
  };

  const formatUrl = (url: string | null) => {
    if (!url) return '#';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `https://${url}`;
  };

  const POSITION_LABELS: Record<string, string> = {
    FRONT_END: 'FE',
    BACK_END: 'BE',
    UX_UI: 'UX/UI',
    BX_BI: 'BX/BI',
    PM: 'PM',
  };

  const POSITION_ORDER: Record<string, number> = {
    UX_UI: 0,
    BX_BI: 1,
    PM: 2,
    FRONT_END: 3,
    BACK_END: 4,
  };

  const sortedContributors = [...(contributors ?? [])].sort(
    (a, b) => (POSITION_ORDER[a.position] ?? 99) - (POSITION_ORDER[b.position] ?? 99),
  );

  return (
    <S.ContentContainer>
      {/* Hero Section */}
      <S.HeroSection>
        <S.HeroText>
          {/* PC: just title */}
          <S.ProjectTitle>{summary?.split('\n')[0] || 'Project Name'}</S.ProjectTitle>

          {/* Mobile: favicon + title row */}
          <S.MobileTitleRow>
            {logoImgName && (
              <S.Favicon src={`/assets/image/Portfolio/${logoImgName}`} alt="logo" width={48} height={48} />
            )}
            <S.MobileTitle>{summary?.split('\n')[0] || 'Project Name'}</S.MobileTitle>
          </S.MobileTitleRow>

          <S.Summary>{summary}</S.Summary>

          <S.ChipRow>
            {type && <S.ChipTag>{type}</S.ChipTag>}
            {startDate && endDate && (
              <S.ChipTag>
                {startDate} ~ {endDate}
              </S.ChipTag>
            )}
            {serviceUrl && (
              <S.ServiceLink href={serviceUrl} target="_blank" onClick={handleProjectClick}>
                서비스로 이동 →
              </S.ServiceLink>
            )}
          </S.ChipRow>
        </S.HeroText>

        {mainImgName && (
          <S.HeroThumbnail>
            <S.ThumbnailImage src={`/assets/image/Portfolio/${mainImgName}`} alt="thumbnail" fill />
          </S.HeroThumbnail>
        )}
      </S.HeroSection>

      {/* Description Section */}
      <S.DescriptionSection>
        <S.SectionTitle>프로젝트 설명</S.SectionTitle>
        <S.Description>{description}</S.Description>
      </S.DescriptionSection>

      <S.Border />

      {/* Team Section */}
      <S.TeamSection>
        <S.SectionTitle>팀원</S.SectionTitle>
        <S.TeamGrid>
          {sortedContributors.map(({ name, position, githubUrl, profileUrl, profile }) => (
            <S.ProfileCard
              key={githubUrl || profileUrl || name}
              href={formatUrl(githubUrl || profileUrl)}
              target="_blank"
              onClick={() => handleContributorsClick(name, githubUrl || profileUrl)}>
              <S.ProfileImage
                src={githubUrl ? `${githubUrl}.png` : profileUrl ? profile : '/assets/image/default-profile.png'}
                alt={name}
              />
              <S.ProfileInfo>
                <S.ProfileName>{name}</S.ProfileName>
                {position && <S.ProfileRole>{POSITION_LABELS[position] || position}</S.ProfileRole>}
              </S.ProfileInfo>
            </S.ProfileCard>
          ))}
        </S.TeamGrid>
      </S.TeamSection>
    </S.ContentContainer>
  );
};

export default Page;
