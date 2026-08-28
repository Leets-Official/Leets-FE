import { SchedulePhase } from '@/types/type/Schedule';

export const schedulePhases: SchedulePhase[] = [
  {
    id: 1,
    startDate: getKSTDate(new Date('2026-08-20')),
    endDate: getKSTDate(new Date('2026-08-27'), true),
    title: 'Leets와 함께 도전할 당신을\n기다리고 있어요.',
    subtitle: '',
    notice: '2026년 8월 28일 모집 시작',
    buttonText: '',
  },
  {
    id: 2,
    startDate: getKSTDate(new Date('2026-08-28')),
    endDate: getKSTDate(new Date('2026-09-03'), true),
    title: 'Leets 8기 모집이 시작되었습니다!',
    subtitle: '',
    notice: '9월 3일 23:59에 접수 마감',
    buttonText: '지원하기',
  },
  {
    id: 3,
    startDate: getKSTDate(new Date('2026-09-04')),
    endDate: getKSTDate(new Date('2026-09-12'), true),
    title: 'Leets 8기 지원이 마감되었습니다.',
    subtitle: '',
    notice: '',
    buttonText: '',
  },
];

function getKSTDate(date: Date, isEndOfDay = false): Date {
  const utcUnixTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const diffKSTFromUTC = 9 * 60 * 60 * 1000;
  const adjustedDate = new Date(utcUnixTime + diffKSTFromUTC);
  if (isEndOfDay) {
    adjustedDate.setHours(23, 59, 59, 999);
  } else {
    adjustedDate.setHours(0, 0, 0, 0);
  }
  return adjustedDate;
}

export function getCurrentPhase(): SchedulePhase | null {
  const now = getKSTDate(new Date());
  return (
    schedulePhases.find((phase) => {
      return now >= phase.startDate && now <= phase.endDate;
    }) || null
  );
}
