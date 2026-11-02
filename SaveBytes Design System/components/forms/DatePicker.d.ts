export interface DatePickerProps {
  label?: string;
  helper?: string;
  error?: string;
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (date: Date) => void;
  /** Adds a time select beside the date ("10:30 am"). */
  withTime?: boolean;
  time?: string;
  onTimeChange?: (time: string) => void;
  times?: string[];
  style?: React.CSSProperties;
}
export declare function DatePicker(props: DatePickerProps): JSX.Element;
