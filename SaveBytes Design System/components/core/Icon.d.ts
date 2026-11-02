export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "arrow-right", "circle-alert". */
  name: string;
  /** 16 in text, 20 in buttons and nav. */
  size?: number;
  /** Brand default 1.75. */
  strokeWidth?: number;
  color?: string;
  /** Accessible label. Omit for decorative icons (aria-hidden). */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
