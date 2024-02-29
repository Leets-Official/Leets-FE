import { ApplicationDetailType, CommentsResponse } from '@/types';
import { APPLY_POSITION, SHORT_INFO_LAYOUT, LONG_INFO_LAYOUT, SELF_INTRODUCTION_LAYOUT } from '@/constants';
import ApplicationStatus from './ApplicationStatus';
import * as S from './Application.styled';
import Comments from './Comments';

const Application = ({ application, comments }: { application: ApplicationDetailType; comments: CommentsResponse }) => {
  const applicationWithPosition = { ...application, position: APPLY_POSITION[application.position] };

  return (
    <S.ApplicationContainer>
      <S.ApplicationTextContainer>
        <S.PersonalInformationContainer>
          <S.SubTitle>인적 정보</S.SubTitle>
          <S.PersonalInformation>
            {SHORT_INFO_LAYOUT.map(({ title, value }) => (
              <Info key={title} title={title} value={applicationWithPosition[value]} />
            ))}
            {LONG_INFO_LAYOUT.map(({ title, value }) => (
              <LongInfo key={title} title={title} value={applicationWithPosition[value]} />
            ))}
          </S.PersonalInformation>
        </S.PersonalInformationContainer>

        <S.LinkContainer>
          <S.SubTitle>링크</S.SubTitle>
          {application.portfolio.toLowerCase().includes('github') && <S.Key>Github</S.Key>}
          {application.portfolio.toLowerCase().includes('figma') && <S.Key>Figma</S.Key>}
          <S.LongValue>{application.portfolio}</S.LongValue>
        </S.LinkContainer>

        <S.SelfIntroductionContainer>
          {SELF_INTRODUCTION_LAYOUT.map(({ title, value }) => (
            <SelfIntroduction key={title} title={title} value={applicationWithPosition[value]} />
          ))}
        </S.SelfIntroductionContainer>
      </S.ApplicationTextContainer>
      <S.SideBar>
        <ApplicationStatus {...application} />
        <Comments comments={comments} />
      </S.SideBar>
    </S.ApplicationContainer>
  );
};

export default Application;

interface ApplicationProps {
  title: string;
  value: string;
}

const Info = ({ title, value }: ApplicationProps) => (
  <S.Info>
    <S.Key>{title}</S.Key>
    <S.Value>{value}</S.Value>
  </S.Info>
);

const LongInfo = ({ title, value }: ApplicationProps) => (
  <S.Info>
    <S.Key>{title}</S.Key>
    <S.LongValue>{value}</S.LongValue>
  </S.Info>
);

const SelfIntroduction = ({ title, value }: ApplicationProps) => (
  <S.SelfIntroduction>
    <S.SubTitle>{title}</S.SubTitle>
    <S.Text>{value}</S.Text>
  </S.SelfIntroduction>
);
