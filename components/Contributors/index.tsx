import * as S from './Contributors.styled';

const Contributors = ({
  contributors,
}: {
  contributors: { name: string; position: string; githubUrl: string; profile: string; profileUrl: string }[];
}) => {
  const FE = contributors.filter(({ position }) => position === 'FRONT_END');
  const BE = contributors.filter(({ position }) => position === 'BACK_END');
  const DE = contributors.filter(({ position }) => position === 'UX_UI' || position === 'BX_BI');

  return (
    <S.ContributorsContainer>
      <S.Teams>팀원 소개</S.Teams>

      {DE.length > 0 && (
        <>
          <S.Part>디자이너</S.Part>
          <S.ContributorsWrapper>
            {DE.map(({ name: contributor, githubUrl, profileUrl, profile }) => (
              <S.Contributor key={githubUrl} href={githubUrl || profileUrl} target="_blank">
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
              <S.Contributor key={githubUrl} href={githubUrl || profileUrl} target="_blank">
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
              <S.Contributor key={githubUrl} href={githubUrl || profileUrl} target="_blank">
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
