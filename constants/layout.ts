export const CONTACT_LAYOUT = [
  { title: 'Github', value: 'https://github.com/Leets-Official', hasLink: true },
  { title: 'Mail', value: 'leetsland@gmail.com', hasLink: false },
  { title: 'Open Kakao', value: 'https://pf.kakao.com/_LtLyG', hasLink: true },
  { title: 'Insta', value: 'https://instagram.com/leets.official', hasLink: true },
] as const;

const PROJECT_TEXT = {
  title: 'Project',
  height: 384,
  benefits: [
    '웹페이지, 모바일 앱을 만들어 배포하며\n실무 경험을 쌓아요.',
    '프로젝트를 통해 분야에 대해 깊게 공부해요.',
    '여러 사람들과 함께 프로젝트를 진행하며\n소프트 스킬을 개발하고, 효과적으로\n협업하는 방법을 배워요.',
    '프로젝트 결과물은 기업, 대학원, 공모전\n등에 지원하거나 참여할 때 자신의 기술을\n보여주는 물리적 근거로 사용해요.',
  ],
};

const STUDY_TEXT = {
  title: `Study & Networking`,
  height: 455,
  benefits: [
    '전공과 직무와 관련된\n스터디를 통해 전문성을 갖춰요.',
    '정기적으로 진행되는 스터디를 통해\n지속적으로 성장해요.',
    '비슷한 관심사를 갖고 있는 사람과\n어울리며 인적 네트워크를 연결해요.',
    '사람들과의 네트워크는 미래의 협업과\n취업에서 유리하게 작용해요.',
    '서로의 성장을 응원하는 분위기에서\n더 넓고 더 깊게 공부해요.',
  ],
};

const ENTERTIANMENT_TEXT = {
  title: 'Entertainment',
  height: 434,
  benefits: [`공부할 때 열심히 공부하고, \n놀 때 신나게 즐겨요.`, '월 1회 진행되는 \nLeets DAY!', 'Leet’s PLAY!'],
};

export const MOBILE_PROMOTION_LAYOUT = [
  {
    ...PROJECT_TEXT,
    height: 176,
  },
  {
    ...STUDY_TEXT,
    height: 210,
  },
  {
    ...ENTERTIANMENT_TEXT,
    height: 200,
  },
];

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
  { title: '희망 직무', value: 'career' },
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
