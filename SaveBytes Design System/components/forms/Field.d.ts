export interface FieldProps {
  label?: string;
  htmlFor?: string;
  helper?: string;
  /** Replaces helper; shows the error icon + message in danger. */
  error?: string;
  required?: boolean;
  optional?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
