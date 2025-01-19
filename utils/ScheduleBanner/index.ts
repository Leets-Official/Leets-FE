import { SchedulePhase } from '@/types/type/Schedule';

export const schedulePhases: SchedulePhase[] = [
  {
    id: 1,
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-02-31'),
    title: '함께 성장할 5번째',
    subtitle: 'Leet를 찾습니다',
    showInput: true,
    notice: '2025년 3월 모집예정',
    buttonText: '오픈 알림 신청하기',
  },
  {
    id: 2,
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-03-23'),
    title: '함께 Elite가 될 5기 엘릿을 찾습니다',
    subtitle: '',
    showInput: true,
    notice: '2025년 3월 24일 모집시작',
    buttonText: '오픈 알림 신청하기',
  },
  {
    id: 3,
    startDate: new Date('2025-03-24'),
    endDate: new Date('2025-04-31'),
    title: '5기 Elite 모집이 시작되었습니다!',
    subtitle: '',
    showInput: false,
    notice: '2025년 3월 15일 마감',
    buttonText: '5기 지원하러 가기',
  },
];

export function getCurrentPhase(): SchedulePhase | null {
  const now = new Date('2025-02-16');
  console.log(now);
  console.log(schedulePhases.find((phase) => now >= phase.startDate && now <= phase.endDate));
  return schedulePhases.find((phase) => now >= phase.startDate && now <= phase.endDate) || null;
}
