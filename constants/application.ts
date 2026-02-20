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
};

export const APPLICATION_DEFAULT = {
  ...APPLICATION_TEXT_DEFAULT,
  ...APPLICATION_INPUT_DEFAULT,
  user: {
    phone: '',
  },
  position: 'FRONTEND' as 'FRONTEND' | 'BACKEND' | 'BX_BI' | 'UX_UI' | 'PM',
};
