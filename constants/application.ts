export const APPLICATION_DEFAULT_FILTER_CONDITION = {
  fixedInterviewDate: '면접 일시',
  applicationStatus: '합격 여부',
  hasInterview: '면접 응시 여부',
};

export const APPLICATION_TEXT_DEFAULT = {
  enhancement: '',
  level: '',
  pros: '',
  goal: '',
  completion: '',
};

export const APPLICATION_INPUT_DEFAULT = {
  grade: '',
  name: '',
  phone: '',
  major: '',
  algorithm: '',
  project: '',
  career: '',
  portfolio: '',
  interviewDay: '',
  interviewTime: '',
};

export const APPLICATION_DEFAULT = {
  ...APPLICATION_TEXT_DEFAULT,
  ...APPLICATION_INPUT_DEFAULT,
  position: 'DEV' as 'DEV' | 'DESIGN',
};
