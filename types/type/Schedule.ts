export interface SchedulePhase {
  id: number;
  startDate: Date;
  endDate: Date;
  title: string;
  subtitle: string;
  showInput: boolean;
  buttonText: string;
  notice: string;
}

export interface ScheduleBannerProps {
  className?: string;
}
