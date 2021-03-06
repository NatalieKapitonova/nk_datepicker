export interface DatepickerProps {
  date?: Date | string | null;
  name: string;
  disabled?: boolean;
  onChange: (d: Date | string | null, name: string) => void;
  pattern?: DateFormat;
  outputDateFormat?: OutputDateFormat;
  selectMethod?: SelectMethod;
  showClear?: boolean;
  showToday?: boolean;
  color?: string;
}

export type DateFormat =
  | "DD/MM/YYYY"
  | "DD.MM.YYYY"
  | "DD-MM-YYYY"
  | "MM/DD/YYYY"
  | "MM.DD.YYYY"
  | "MM-DD-YYYY"
  | "YYYY/MM/DD"
  | "YYYY.MM.DD"
  | "YYYY-MM-DD";

export type SelectMethod = "ok_button" | "lose_focus" | "click_and_close";
export type OutputDateFormat = "Date" | "ISO";
