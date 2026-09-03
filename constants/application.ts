export const APPLICATION_DEFAULT_FILTER_CONDITION = {
  fixedInterviewDate: '면접 일시',
  applicationStatus: '합격 여부',
  hasInterview: '면접 응시 여부',
};

export const APPLICATION_TEXT_DEFAULT = {
  motive: '',
  capability: '',
  conflict: '',
  expectation: '',
  passion: '',
};

export const APPLICATION_INPUT_DEFAULT = {
  grade: '',
  name: '',
  phone: '',
  major: '',
  algorithm: '',
  project: '',

  portfolio: '',
  interviewDay: '',
  interviewTime: '',
  // 문자열 'null' 을 보내면 서버의 "빈 값 제외" 필터를 통과해 실제 학번을 덮어쓴다.
  // 지원서 폼에서 sid 를 입력받지 않으므로 빈 문자열로 보내 갱신 대상에서 제외시킨다.
  sid: '',
};

export const APPLICATION_DEFAULT = {
  ...APPLICATION_TEXT_DEFAULT,
  ...APPLICATION_INPUT_DEFAULT,
  user: {
    phone: '',
  },
  position: 'FRONTEND' as 'FRONTEND' | 'BACKEND' | 'UX_UI' | 'PM',
};
