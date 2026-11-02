export interface BadgeProps {
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'health';
  variant?: 'soft' | 'solid';
  dot?: boolean;
  /** Lucide icon name at 12px. */
  icon?: string;
  /** Pill tag shape (radius-full). */
  pill?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
