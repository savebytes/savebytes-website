export interface EmptyStateProps {
  icon?: string;
  title?: string;
  children?: React.ReactNode;
  /** One action only. */
  action?: React.ReactNode;
  tone?: 'neutral' | 'danger';
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
