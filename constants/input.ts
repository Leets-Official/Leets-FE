const MAX_LENGTH = {
  NAME: 5,
  GRADE: 1,
  MAJOR: 10,
  CAREER: 10,
  ALGORITHM: 50,
  PROJECT: 50,
  PORTFOLIO: 50,
  PHONE: 13,
  INTERVIEW_DAY: 10,
  INTERVIEW_TIME: 13,

  MOTIVE: 600,
  SCHEDULE: 600,
  CAPABILITY: 600,
  CONFLICT: 600,
  PASSION: 600,
} as const;

export const DEV_INPUTS = [
  { id: 'name', title: '이름', holderText: '이름을 입력하세요.', required: true, maxLength: MAX_LENGTH.NAME },
  {
    id: 'grade',
    title: '학년',
    holderText: '학년을 입력하세요. (ex 1, 2, 3, 4)',
    required: true,
    maxLength: MAX_LENGTH.GRADE,
  },
  { id: 'major', title: '학과', holderText: '학과를 입력하세요.', required: true, maxLength: MAX_LENGTH.MAJOR },
  {
    id: 'career',
    title: '희망 직무',
    holderText: '희망 직무를 입력하세요. (ex 백엔드, 프론트엔드, 미정)',
    required: false,
    maxLength: MAX_LENGTH.CAREER,
  },
  {
    id: 'algorithm',
    title: '알고리즘',
    holderText: '알고리즘 수준을 입력하세요. (ex 백준/릿코드/프로그래머스)',
    required: false,
    maxLength: MAX_LENGTH.ALGORITHM,
  },
  {
    id: 'project',
    title: '프로젝트',
    holderText: '프로젝트 경험을 입력하세요. (ex TODO 프로젝트 배포 1회/기여 내용 등)',
    required: false,
    maxLength: MAX_LENGTH.PROJECT,
  },
  {
    id: 'portfolio',
    title: 'Github/포트폴리오',
    holderText: 'Github 주소를 입력하세요.',
    required: false,
    maxLength: MAX_LENGTH.PORTFOLIO,
  },
  {
    id: 'phone',
    title: '전화번호',
    holderText: '전화번호를 입력하세요. (모든 개인 정보는 안내 이외에는 사용되지 않습니다.)',
    required: true,
    maxLength: MAX_LENGTH.PHONE,
  },
  {
    id: 'interviewDay',
    title: '면접 선호 요일',
    holderText: '3.20 ~ 3.26 중 평일을 선택하세요. 어렵다면 다른 날짜를 적어주세요.',
    required: true,
    maxLength: MAX_LENGTH.INTERVIEW_DAY,
  },
  {
    id: 'interviewTime',
    title: '면접 선호 시간',
    holderText: '면접이 가능한 시간대를 적어주세요. (ex 6~7시 사이)',
    required: true,
    maxLength: MAX_LENGTH.INTERVIEW_TIME,
  },
] as const;

export const DESING_INPUTS = [
  { id: 'name', title: '이름', holderText: '이름을 입력하세요.', required: true, maxLength: MAX_LENGTH.NAME },
  {
    id: 'grade',
    title: '학년',
    holderText: '학년을 입력하세요. (ex 1, 2, 3, 4)',
    required: true,
    maxLength: MAX_LENGTH.GRADE,
  },
  { id: 'major', title: '학과', holderText: '학과를 입력하세요.', required: true, maxLength: MAX_LENGTH.MAJOR },
  {
    id: 'career',
    title: '희망 직무',
    holderText: '희망 직무를 입력하세요. (ex UI/UX 디자이너)',
    required: false,
    maxLength: MAX_LENGTH.CAREER,
  },
  {
    id: 'project',
    title: '프로젝트',
    holderText: '프로젝트 경험을 입력하세요. (ex UI/UX 디자인 제작, 디자인시스템 제작 등)',
    required: false,
    maxLength: MAX_LENGTH.PROJECT,
  },
  {
    id: 'portfolio',
    title: 'Figma/포트폴리오',
    holderText: 'Figma/포트폴리오 주소를 입력하세요.',
    required: false,
    maxLength: MAX_LENGTH.PORTFOLIO,
  },
  {
    id: 'phone',
    title: '전화번호',
    holderText: '전화번호를 입력하세요. (ex 010-1234-5678)',
    required: true,
    maxLength: MAX_LENGTH.PHONE,
  },
  {
    id: 'interviewDay',
    title: '면접 선호 요일',
    holderText: '3.20 ~ 3.26 중 평일을 선택하세요. 어렵다면 다른 날짜를 적어주세요.',
    required: true,
    maxLength: MAX_LENGTH.INTERVIEW_DAY,
  },
  {
    id: 'interviewTime',
    title: '면접 선호 시간',
    holderText: '면접이 가능한 시간대를 적어주세요. (ex 6~7시 사이)',
    required: true,
    maxLength: MAX_LENGTH.INTERVIEW_TIME,
  },
] as const;

export const DEV_TEXTAREAS = [
  {
    id: 'motive',
    title: 'Leets에 지원한 동기와 개발 동아리 중 Leets를 선택한 이유는 무엇인지 작성해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.MOTIVE,
  },
  {
    id: 'schedule',
    title: '지난 방학 동안 자기개발을 위해 어떠한 노력을 했는지와 이번 학기 목표나 계획을 작성해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.SCHEDULE,
  },
  {
    id: 'capability',
    title:
      '개발자로서 가장 중요하다고 생각되는 능력은 무엇이며, 해당 능력을 향상시키기 위해 어떠한 노력을 했는지 작성해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.CAPABILITY,
  },
  {
    id: 'conflict',
    title: '갈등 상황을 해결하였던 경험이나, 갈등 상황이 발생하였을 때 어떻게 해결할 것인지에 대하여 작성해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.CONFLICT,
  },
  {
    id: 'passion',
    title: '결과와 상관없이 열정과 최선을 다했던 경험과, 그 과정에서 변화한 점과 느낀점은 무엇이었는지 작성해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.PASSION,
  },
] as const;

export const DESIGN_TEXTAREAS = [
  {
    id: 'motive',
    title: 'Leets에 지원한 동기와 개발 동아리 중 Leets를 선택한 이유는 무엇인지 작성해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.MOTIVE,
  },
  {
    id: 'schedule',
    title: '지난 방학 동안 자기개발을 위해 어떠한 노력을 했는지와 이번 학기 목표나 계획을 작성해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.SCHEDULE,
  },
  {
    id: 'capability',
    title:
      '디자이너로서 가장 중요하다고 생각되는 능력은 무엇이며, 해당 능력을 향상시키기 위해 어떠한 노력을 했는지 작성해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.CAPABILITY,
  },
  {
    id: 'conflict',
    title: '갈등 상황을 해결하였던 경험이나, 갈등 상황이 발생하였을 때 어떻게 해결할 것인지에 대하여 작성해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.CONFLICT,
  },
  {
    id: 'passion',
    title: '결과와 상관없이 열정과 최선을 다했던 경험과, 그 과정에서 변화한 점과 느낀점은 무엇이었는지 작성해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.PASSION,
  },
] as const;

export const LOGIN_DEFAULT_VALUE = {
  id: '',
  password: '',
} as const;
