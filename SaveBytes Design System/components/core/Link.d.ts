export interface LinkProps {
  href?: string;
  /** On navy-900: uses blue-400. */
  inverse?: boolean;
  /** Adds a trailing arrow, e.g. "Learn more →". */
  arrow?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Link(props: LinkProps): JSX.Element;
