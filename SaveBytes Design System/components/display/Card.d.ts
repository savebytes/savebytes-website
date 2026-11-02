/**
 * @startingPoint section="Core" subtitle="Product and website cards" viewport="700x400"
 */
export interface CardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  /** product: radius-md, 16 padding. website: radius-lg, 24 padding, h2 title. */
  variant?: 'product' | 'website';
  padding?: number | string;
  /** Adds shadow-sm (resting card). */
  elevated?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
