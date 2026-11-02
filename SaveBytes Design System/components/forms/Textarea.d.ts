export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helper?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  rows?: number;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
