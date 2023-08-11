export const INITAIL_INFO = {
  name: '',
  SID: '',
  major: '',
  career: '',
  GPA: '',
  algorithm: '',
  project: '',
  link: '',
  phone: '',
  interviewDay: '',
  interviewTime: '',

  goal: '',
  completion: '',
  fight: '',
} as const;

export const INPUTS = [
  { id: 'name', title: '이름', holderText: '이름을 입력하세요.', required: true, maxLength: 4 },
  { id: 'SID', title: '학번', holderText: '학번을 입력하세요. (ex 19, 20, 21)', required: true, maxLength: 2 },
  { id: 'major', title: '학과', holderText: '학과를 입력하세요.', required: true, maxLength: 10 },
  {
    id: 'career',
    title: '희망 직무',
    holderText: '희망 직무를 입력하세요. (ex 백엔드, 프론트엔드, 미정)',
    required: false,
    maxLength: 15,
  },
  {
    id: 'GPA',
    title: '학점',
    holderText: '학점을 입력하세요. (1학년은 마침표 1개만 입력하세요.)',
    required: true,
    maxLength: 4,
  },
  {
    id: 'algorithm',
    title: '알고리즘',
    holderText: '알고리즘 수준을 입력하세요. (ex 백준/릿코드/프로그래머스)',
    required: false,
    maxLength: 50,
  },
  {
    id: 'project',
    title: '프로젝트',
    holderText: '프로젝트 경험을 입력하세요. (ex TODO 프로젝트 배포 1회/기여 내용 등)',
    required: false,
    maxLength: 50,
  },
  { id: 'link', title: 'Github/Figma', holderText: 'Github/Figma 주소를 입력하세요.', required: false, maxLength: 50 },
  {
    id: 'phone',
    title: '전화번호',
    holderText: '전화번호를 입력하세요. (모든 개인 정보는 안내 이외에는 사용되지 않습니다.)',
    required: true,
    maxLength: 13,
  },
  {
    id: 'interviewDay',
    title: '면접 선호 요일',
    holderText: '3/13, 3/14 중 하루를 선택하세요. 어렵다면 다른 날짜를 적어주세요.',
    required: true,
    maxLength: 10,
  },
  {
    id: 'interviewTime',
    title: '면접 선호 시간',
    holderText: '면접이 가능한 시간대를 적어주세요. (ex 6~7시 사이)',
    required: true,
    maxLength: 13,
  },
] as const;

export const TEXTAREAS = [
  {
    id: 'goal',
    title: 'Leets에 들어와서 얻어가고 싶은 것은 무엇인가요?',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: 5000,
  },
  {
    id: 'completion',
    title: '무언가 열심히 해서 결과물을 낸 경험을 적어주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: 5000,
  },
  {
    id: 'fight',
    title: '갈등을 마주쳤을 때의 해결 경험을 설명해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: 5000,
  },
] as const;
