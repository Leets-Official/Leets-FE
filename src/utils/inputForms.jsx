export const inputs = [
  { id: 'name', title: '이름', holderText: '이름을 입력하세요.', required: true },
  { id: 'SID', title: '학번', holderText: '학번을 입력하세요.', required: true },
  { id: 'major', title: '학과', holderText: '학과를 입력하세요.', required: true },
  {
    id: 'career',
    title: '희망 직무',
    holderText: '희망 직무를 입력하세요. (ex 백엔드, 프론트엔드)',
    required: false,
  },
  { id: 'GPA', title: '학점', holderText: '학점을 입력하세요.', required: true },
  {
    id: 'algorithm',
    title: '알고리즘',
    holderText: '알고리즘을 입력하세요. ex) 백준/릿코드/프로그래머스',
    required: false,
  },
  {
    id: 'project',
    title: '프로젝트',
    holderText: '프로젝트 경험을 입력하세요. ex) TODO 프로젝트 배포 1회/기여 내용 등',
    required: false,
  },
  { id: 'link', title: 'Github/Figma', holderText: 'Github/Figma 주소를 입력하세요', required: true },
  {
    id: 'phone',
    title: '전화번호',
    holderText: '전화번호를 입력하세요. 개인 정보는 안내 이외에는 사용되지 않습니다.',
    required: true,
  },
];

export const textareas = [
  {
    id: 'goal',
    title: '우리 동아리에 들어와서 얻어가고 싶은 것은 무엇인가요?',
    holderText: '내용을 입력해주세요.',
    required: true,
  },
  {
    id: 'completion',
    title: '무언가 열심히 해서 결과물을 낸 경험을 적어주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
  },
  {
    id: 'fight',
    title: '갈등을 마주쳤을 때의 해결 경험을 설명해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
  },
];
