export interface RadioProps {
  name?: string;
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: 'row' | 'column';
  disabled?: boolean;
}
export declare function Radio(props: RadioProps): JSX.Element;
