import { ApplicationDetailType } from '@/types';
import { APPLY_POSITION } from '@/constants';
import ApplicationStatus from '../ApplicationStatus';
import * as S from './Application.styled';

const Application = ({ application }: { application: ApplicationDetailType }) => {
  const {
    id,
    name,
    grade,
    major,
    gpa,
    career,
    algorithm,
    portfolio,
    phone,
    project,
    enhancement,
    level,
    pros,
    goal,
    completion,
    updatedAt,
    appliedAt,
    applicationStatus,
    interviewDay,
    interviewTime,
    position,
    interview,
  } = application;

  return (
    <S.ApplicationContainer>
      <S.ApplicationTextContainer>
        <S.PersonalInformationContainer>
          <S.SubTitle>인적 정보</S.SubTitle>
          <S.PersonalInformation>
            <S.Info>
              <S.Key>이름</S.Key>
              <S.Value>{name}</S.Value>
            </S.Info>
            <S.Info>
              <S.Key>학년</S.Key>
              <S.Value>{grade}</S.Value>
            </S.Info>
            <S.Info>
              <S.Key>전공</S.Key>
              <S.Value>{major}</S.Value>
            </S.Info>
            <S.Info>
              <S.Key>학점</S.Key>
              <S.Value>{gpa}</S.Value>
            </S.Info>
            <S.Info>
              <S.Key>희망 직무</S.Key>
              <S.Value>{career}</S.Value>
            </S.Info>
            <S.Info>
              <S.Key>전화번호</S.Key>
              <S.Value>{phone}</S.Value>
            </S.Info>
            <S.Info>
              <S.Key>희망 면접 날짜</S.Key>
              <S.Value>{interviewDay}</S.Value>
            </S.Info>
            <S.Info>
              <S.Key>희망 면접 시간</S.Key>
              <S.Value>{interviewTime}</S.Value>
            </S.Info>
            <S.Info>
              <S.Key>지원 직무</S.Key>
              <S.Value>{APPLY_POSITION[position]}</S.Value>
            </S.Info>
            <S.Info>
              <S.Key>알고리즘</S.Key>
              <S.LongValue>{algorithm}</S.LongValue>
            </S.Info>
            <S.Info>
              <S.Key>프로젝트 경험</S.Key>
              <S.LongValue>{project}</S.LongValue>
            </S.Info>
          </S.PersonalInformation>
        </S.PersonalInformationContainer>
        <S.LinkContainer>
          <S.SubTitle>링크</S.SubTitle>
          {portfolio.toLowerCase().includes('github') && <S.Key>Github</S.Key>}
          {portfolio.toLowerCase().includes('figma') && <S.Key>Figma</S.Key>}
          <S.LongValue>{portfolio}</S.LongValue>
        </S.LinkContainer>
        <S.SelfIntroductionContainer>
          <S.SelfIntroduction>
            <S.SubTitle>Leets에 들어와서 얻어가고 싶은 것은 무엇인가요?</S.SubTitle>
            <S.Text>{goal}</S.Text>
          </S.SelfIntroduction>
          <S.SelfIntroduction>
            <S.SubTitle>무언가 열심히 해서 얻은 경험은 무엇인가요?</S.SubTitle>
            <S.Text>{completion}</S.Text>
          </S.SelfIntroduction>
          <S.SelfIntroduction>
            <S.SubTitle>본인의 장단점을 구체적인 경험을 바탕으로 소개해주세요.</S.SubTitle>
            <S.Text>{pros}</S.Text>
          </S.SelfIntroduction>
          <S.SelfIntroduction>
            <S.SubTitle>
              개발 실력을 1부터 10까지 점수로 표현해주세요. 점수에 대한 이유를 공부한 과정을 기반으로 작성해주시고,
              앞으로의 학습 계획에 대해 자세히 소개해주세요.
            </S.SubTitle>
            <S.Text>{level}</S.Text>
          </S.SelfIntroduction>
          <S.SelfIntroduction>
            <S.SubTitle>소프트웨어 개발을 더 잘하고 싶어서 시도했던 경험을 적어주세요.</S.SubTitle>
            <S.Text>{enhancement}</S.Text>
          </S.SelfIntroduction>
        </S.SelfIntroductionContainer>
      </S.ApplicationTextContainer>
      <ApplicationStatus
        id={id}
        applicationStatus={applicationStatus}
        updatedAt={updatedAt}
        appliedAt={appliedAt}
        interview={interview}
      />
    </S.ApplicationContainer>
  );
};

export default Application;
