import { ROUND, ROUND_SCHEDULE } from '@/constants';

export type RoundType = keyof typeof ROUND;

export type RoundSchedule = (typeof ROUND_SCHEDULE)[RoundType];

export interface SchedulePhase {
  id: number;
  startDate: Date;
  endDate: Date;
  title: string;
  subtitle: string;
  buttonText: string;
  notice: string;
}

export interface ScheduleBannerProps {
  className?: string;
}
