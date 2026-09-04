import { ROUND_SCHEDULE } from '@/constants';
import { SchedulePhase } from '@/types/type/Schedule';

const { REGULAR, ADDITIONAL } = ROUND_SCHEDULE;

/** 추가 모집 접수 시작 직전까지 (정규 마감 안내 구간) */
const BEFORE_ADDITIONAL_END = new Date(ADDITIONAL.applyStart.getTime() - 1000);

/**
 * 모든 경계는 '+09:00'이 명시된 절대 시각이라 new Date()와 그대로 비교한다.
 * 이전에는 getKSTDate()로 9시간을 덧붙여 비교했는데, 이는 KST 보정이 이중으로
 * 적용되는 문제가 있었고 20:00 같은 시각 경계도 표현하지 못했다.
 */
export const schedulePhases: SchedulePhase[] = [
  {
    id: 1,
    startDate: new Date('2026-08-20T00:00:00+09:00'),
    endDate: new Date('2026-08-27T23:59:59+09:00'),
    title: 'Leets와 함께 도전할 당신을\n기다리고 있어요.',
    subtitle: '',
    notice: '2026년 8월 28일 모집 시작',
    buttonText: '',
  },
  {
    id: 2,
    startDate: REGULAR.applyStart,
    endDate: REGULAR.applyEnd,
    title: 'Leets 8기 모집이 시작되었습니다!',
    subtitle: '',
    notice: '9월 3일 23:59에 접수 마감',
    buttonText: '지원하기',
  },
  {
    id: 3,
    startDate: new Date('2026-09-04T00:00:00+09:00'),
    endDate: BEFORE_ADDITIONAL_END,
    title: 'Leets 8기 지원이 마감되었습니다.',
    subtitle: '',
    notice: '9월 4일 20:00부터 추가 모집을 접수합니다.',
    buttonText: '',
  },
  {
    id: 4,
    startDate: ADDITIONAL.applyStart,
    endDate: ADDITIONAL.applyEnd,
    title: 'Leets 8기 추가 모집이 시작되었습니다!',
    subtitle: '',
    notice: '9월 6일 23:59에 접수 마감',
    buttonText: '지원하기',
  },
  {
    id: 5,
    startDate: new Date('2026-09-07T00:00:00+09:00'),
    endDate: new Date('2026-09-12T23:59:59+09:00'),
    title: 'Leets 8기 추가 모집이 마감되었습니다.',
    subtitle: '',
    notice: '',
    buttonText: '',
  },
];

export function getCurrentPhase(): SchedulePhase | null {
  const now = new Date();
  return schedulePhases.find((phase) => now >= phase.startDate && now <= phase.endDate) || null;
}

/**
 * 지금 이후로 단계가 바뀔 수 있는 가장 가까운 시각.
 * 화면을 열어둔 채로 접수 시작(예: 09.04 20:00)을 맞아도
 * 새로고침 없이 배너가 전환되도록 타이머를 거는 데 쓴다.
 */
export function getNextPhaseBoundary(now: Date = new Date()): Date | null {
  const boundaries = schedulePhases.flatMap((phase) => [
    phase.startDate,
    // endDate 는 구간에 포함되므로 1초 뒤가 실제 전환 시점이다
    new Date(phase.endDate.getTime() + 1000),
  ]);

  return boundaries.filter((boundary) => boundary > now).sort((a, b) => a.getTime() - b.getTime())[0] ?? null;
}
