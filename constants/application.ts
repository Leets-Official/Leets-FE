export const APPLICATION_FILTER_LIST = {
  gpa: '학점',
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
  gpa: '',
  major: '',
  algorithm: '',
  project: '',
  job: '',
  portfolio: '',
  interviewDay: '',
  interviewTime: '',
};

export const APPLICATION_DETAIL_DEFAULT = {
  uid: '',
  id: 0,
  updatedAt: '',
  appliedAt: '',
  user: {
    uid: '',
    name: '',
    phone: '',
    email: '',
  },
  position: 'DEV',
  applicationStatus: 'PENDING',
  interview: {
    place: '',
    fixedInterviewDate: '',
  },
  ...APPLICATION_INPUT_DEFAULT,
  ...APPLICATION_TEXT_DEFAULT,
} as const;
