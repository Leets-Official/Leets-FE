'use client';

import * as gtag from '@/lib/gtag';
import * as S from './Contributors.styled';

const Contributors = ({
  contributors,
}: {
  contributors: { name: string; position: string; githubUrl: string; profile: string; profileUrl: string }[];
}) => {
  const FE = contributors.filter(({ position }) => position === 'FRONT_END');
  const BE = contributors.filter(({ position }) => position === 'BACK_END');
  const DE = contributors.filter(({ position }) => position === 'UX_UI' || position === 'BX_BI');

  const formatUrl = (url: string | null) => {
    if (!url) {
      return '#';
    }

    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }

    return `https://${url}`;
  };

  const handleContributorsClick = (name: string, url: string | null) => {
    gtag.event({
      action: 'click_contributor',
      category: 'Outbound Link_contributor',
      label: `${name} - ${url}`,
      value: 10,
    });
  };

  return (
    <S.ContributorsContainer>
      <S.Teams>팀원 소개</S.Teams>

      {DE.length > 0 && (
        <>
          <S.Part>디자이너</S.Part>
          <S.ContributorsWrapper>
            {DE.map(({ name: contributor, githubUrl, profileUrl, profile }) => (
              <S.Contributor
                key={githubUrl || profileUrl}
                href={formatUrl(githubUrl || profileUrl)}
                target="_blank"
                onClick={() => handleContributorsClick(contributor, githubUrl || profileUrl)}>
                <S.ContributorImageWrapper>
                  {githubUrl && <S.ContributorImage src={`${githubUrl}.png`} alt="github-image" />}

                  {profileUrl && <S.ContributorImage src={profile} alt="profile-image" />}
                </S.ContributorImageWrapper>

                <S.NameAndPosition>{contributor}</S.NameAndPosition>
              </S.Contributor>
            ))}
          </S.ContributorsWrapper>
        </>
      )}

      {FE.length > 0 && (
        <>
          <S.Part>프론트엔드</S.Part>

          <S.ContributorsWrapper>
            {FE.map(({ name: contributor, githubUrl, profileUrl, profile }) => (
              <S.Contributor
                key={githubUrl || profileUrl}
                href={formatUrl(githubUrl || profileUrl)}
                target="_blank"
                onClick={() => handleContributorsClick(contributor, githubUrl || profileUrl)}>
                <S.ContributorImageWrapper>
                  {githubUrl && <S.ContributorImage src={`${githubUrl}.png`} alt="github-image" />}

                  {profileUrl && <S.ContributorImage src={profile} alt="profile-image" />}
                </S.ContributorImageWrapper>

                <S.NameAndPosition>{contributor}</S.NameAndPosition>
              </S.Contributor>
            ))}
          </S.ContributorsWrapper>
        </>
      )}

      {FE.length > 0 && (
        <>
          <S.Part>백엔드</S.Part>
          <S.ContributorsWrapper>
            {BE.map(({ name: contributor, githubUrl, profileUrl, profile }) => (
              <S.Contributor
                key={githubUrl || profileUrl}
                href={formatUrl(githubUrl || profileUrl)}
                target="_blank"
                onClick={() => handleContributorsClick(contributor, githubUrl || profileUrl)}>
                <S.ContributorImageWrapper>
                  {githubUrl && <S.ContributorImage src={`${githubUrl}.png`} alt="github-image" />}

                  {profileUrl && <S.ContributorImage src={profile} alt="profile-image" />}
                </S.ContributorImageWrapper>

                <S.NameAndPosition>{contributor}</S.NameAndPosition>
              </S.Contributor>
            ))}
          </S.ContributorsWrapper>
        </>
      )}
    </S.ContributorsContainer>
  );
};

export default Contributors;
