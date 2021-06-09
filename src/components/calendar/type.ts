export interface CalemdarProps {
  date?: Date | null;
  day?: number;
  month?: number;
  year?: number;
  color?: string;
  onSelectDate: (date: Date) => void;
}
