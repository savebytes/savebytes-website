/**
 * @startingPoint section="Core" subtitle="Primary, secondary, ghost, danger, link" viewport="700x320"
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link';
  /** sm 32 · md 40 (default) · lg 48 (website CTAs, touch). */
  size?: 'sm' | 'md' | 'lg';
  /** Leading Lucide icon name. */
  icon?: string;
  /** Trailing Lucide icon name, e.g. "arrow-right". */
  iconRight?: string;
  /** Shows the cut-loader; label is kept. */
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Renders an <a>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
