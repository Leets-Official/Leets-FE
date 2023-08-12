export const APPPLICATION_FILTER_LIST = {
  gpa: '학점',
  interviewDate: '면접 일시',
  applicationStatus: '합격 여부',
  interviewStatus: '면접 응시 여부',
};

export const DETAIL_APPLICATION_DATA = {
  interviewDate: '면접 일시',
  applicationStatus: '합격 여부',
};

export const APPLICATION_TEXT_DEFAULT = {
  enhancement: '',
  level: '',
  pros: '',
  goal: '',
  completion: '',
};

export const APPLICATION_INPUT_DEFAULT = {
  sid: '',
  name: '',
  email: '',
  phone: '',
  gpa: '',
  major: '',
  algorithm: '',
  project: '',
  career: '',
  portfolio: '',
  interviewDay: '',
  interviewTime: '',
};

export const APPLICATION_DETAIL_DEFAULT = {
  uid: '',
  id: 0,
  updatedAt: '',
  createdAt: '',
  interviewDate: '',
  applicationStatus: 'PENDING',

  ...APPLICATION_INPUT_DEFAULT,
  ...APPLICATION_TEXT_DEFAULT,
} as const;
