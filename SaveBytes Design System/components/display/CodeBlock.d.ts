export interface CodeBlockProps {
  code: string;
  /** Shown as a mono overline label. */
  language?: string;
  style?: React.CSSProperties;
}
export declare function CodeBlock(props: CodeBlockProps): JSX.Element;
