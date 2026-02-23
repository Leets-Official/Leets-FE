export const CONTACT_LAYOUT = [
  { title: 'Github', value: 'https://github.com/Leets-Official', hasLink: true },
  { title: 'Mail', value: 'contact@leets.land', hasLink: false },
  { title: 'Open Kakao', value: 'https://pf.kakao.com/_LtLyG', hasLink: true },
  { title: 'Insta', value: 'https://instagram.com/leets_official', hasLink: true },
] as const;

const PROJECT_TEXT = {
  title: 'Project',
  imageName: 'Project',
  variant: 'number' as const,
  height: 384,
  benefits: [
    '웹페이지, 모바일 앱을 만들어 배포하며\n실무 경험을 쌓아요.',
    '프로젝트를 통해 분야에 대해 깊게 공부해요.',
    '여러 사람들과 함께 프로젝트를 진행하며\n소프트 스킬을 개발하고, 효과적으로\n협업하는 방법을 배워요.',
    '프로젝트 결과물은 기업, 대학원, 공모전\n등에 지원하거나 참여할 때 자신의 기술을\n보여주는 물리적 근거로 사용해요.',
  ],
};

const STUDY_TEXT = {
  title: `Study&\nNetworking`,
  imageName: 'Study & Networking',
  variant: 'icon' as const,
  height: 455,
  benefits: [
    '진로에 대해 같은 관심사를 갖고 있는 사람과 어울릴 수 있어요.',
    '흥미 직무에 대한 고민을 깊게 지속할 수 있는 원동력을 제공해요.',
    '졸업 관련 프로젝트를 진행할 때 원활하게 팀원을 모을 수 있어요.',
    '동작하는 프로젝트를 실제로 배포해 보며 실무에 가까운 경험을 쌓아요.',
    '매 기수마다 현업 전문가를 초청한 컨퍼런스를 진행해요.\n현업의 시선과 관점을 경험하고, 자신만의 커리어 방향을 구체적으로 설계해요.',
    '실력을 보다 깊게 쌓을 수 있는 스터디 환경이 조성돼요.\n스터디는 자율적으로 참가 및 개설할 수 있어요.',
  ],
  icons: [
    '/assets/image/Icons/study-1.png',
    '/assets/image/Icons/study-2.png',
    '/assets/image/Icons/study-3.png',
    '/assets/image/Icons/study-4.png',
    '/assets/image/Icons/study-5.png',
    '/assets/image/Icons/study-6.png',
  ],
};

const ENTERTIANMENT_TEXT = {
  title: 'MT&\nRecreation',
  imageName: 'Entertainment',
  variant: 'bubble' as const,
  height: 434,
  benefits: [
    '운영진이 기획하는 다양한 행사!',
    '동아리원 간 친밀한 유대감을 쌓아요.',
    'MT에서 잊지 못할 추억도 만들어요.',
  ],
};

export const PROMOTION_LAYOUT = [
  {
    ...PROJECT_TEXT,
  },
  {
    ...STUDY_TEXT,
    height: 455,
  },
  {
    ...ENTERTIANMENT_TEXT,
    height: 434,
  },
];

export const SHORT_INFO_LAYOUT = [
  { title: '이름', value: 'name' },
  { title: '학년', value: 'grade' },
  { title: '전공', value: 'major' },
  { title: '전화번호', value: 'phone' },
  { title: '희망 면접 날짜', value: 'interviewDay' },
  { title: '희망 면접 시간', value: 'interviewTime' },
  { title: '지원 파트', value: 'position' },
] as const;

export const LONG_INFO_LAYOUT = [
  { title: '알고리즘', value: 'algorithm' },
  { title: '프로젝트 경험', value: 'project' },
] as const;

export const SELF_INTRODUCTION_LAYOUT = [
  {
    title: '여러 동아리 중 Leets를 선택한 이유와 개발자/디자이너/기획자가 되고자 다짐하게 된 계기를 작성해 주세요.',
    value: 'motive',
  },
  {
    title:
      'Leets에서 어떠한 서비스를 완성해내고 싶은지 듣고 싶어요. 그리고 내가 어떤 모습으로 Leets에서 활동하고 있을지 작성해주세요.',
    value: 'expectation',
  },
  {
    title:
      '개발자/디자이너/기획자로서 가장 중요하다고 생각되는 능력과 본인이 그 능력을 향상하기 위해 어떤 노력을 하셨는지 작성해 주세요.',
    value: 'capability',
  },
  {
    title:
      '지금까지 살아오면서 갈등을 경험했을 때, 이를 어떻게 해결했는지 적어주세요. 갈등 경험이 없다면 갈등 상황이 생겼을 때 이를 어떻게 해결할 것인지 작성해 주세요.',
    value: 'conflict',
  },
  {
    title:
      '지금까지 결과와 무관하게 끝까지 열정을 다했던 경험, 가장 애정을 갖고 후회 없이 최선을 다했다고 생각하는 경험을 말씀해 주시고 이를 통해 깨달은 점과 스스로 변화한 점을 작성해 주세요.',
    value: 'passion',
  },
] as const;
