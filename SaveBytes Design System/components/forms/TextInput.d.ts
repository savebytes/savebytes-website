export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helper?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  /** sm 32 · md 40 · lg 48 */
  size?: 'sm' | 'md' | 'lg';
  /** IBM Plex Mono for IDs, phone numbers, values. */
  mono?: boolean;
  /** Leading Lucide icon. */
  icon?: string;
  /** Unit shown inside the right edge, e.g. "mmHg", "kg". */
  suffix?: string;
  inputStyle?: React.CSSProperties;
}
export declare function TextInput(props: TextInputProps): JSX.Element;
