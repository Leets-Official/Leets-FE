import * as S from './Contributors.styled';

const Contributors = ({ contributors }: { contributors: { name: string; position: string; githubUrl: string }[] }) => {
  return (
    <S.ContributorsContainer>
      <S.Teams>팀원</S.Teams>
      <S.Contributors>
        {contributors.map(({ name: contributor, position, githubUrl }) => (
          <S.Contributor href={githubUrl} target="_blank">
            <S.ContributorImageWrapper>
              <S.ContributorImage src={`${githubUrl}.png`} fill alt="image" />
            </S.ContributorImageWrapper>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {contributor} - {position}
            </div>
          </S.Contributor>
        ))}
      </S.Contributors>
    </S.ContributorsContainer>
  );
};

export default Contributors;
