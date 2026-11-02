export interface SearchOption { value: string; label: string; /** Mono secondary text, e.g. MRN or mobile. */ meta?: string; }
export interface SearchInputProps {
  label?: string;
  helper?: string;
  id?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** When options are given, it behaves as a combobox. */
  options?: Array<string | SearchOption>;
  onSelect?: (option: string | SearchOption) => void;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function SearchInput(props: SearchInputProps): JSX.Element;
