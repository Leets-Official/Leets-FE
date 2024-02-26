import * as S from './Contributors.styled';

const Contributors = ({ contributors }: { contributors: { name: string; position: string; githubUrl: string }[] }) => {
  return (
    <S.ContributorsContainer>
      <S.Teams>팀원</S.Teams>
      <S.ContributorsWrapper>
        {contributors.map(({ name: contributor, position, githubUrl }) => (
          <S.Contributor key={githubUrl} href={githubUrl} target="_blank">
            <S.ContributorImageWrapper>
              <S.ContributorImage src={`${githubUrl}.png`} alt="github-image" />
            </S.ContributorImageWrapper>
            <S.NameAndPosition>
              {contributor} - {position}
            </S.NameAndPosition>
          </S.Contributor>
        ))}
      </S.ContributorsWrapper>
    </S.ContributorsContainer>
  );
};

export default Contributors;
