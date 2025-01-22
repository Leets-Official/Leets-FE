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
