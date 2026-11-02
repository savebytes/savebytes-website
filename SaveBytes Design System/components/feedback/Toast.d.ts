export interface ToastProps {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  children?: React.ReactNode;
  /** e.g. "Undo" */
  actionLabel?: string;
  onAction?: () => void;
  /** Called on dismiss and after `duration` (never auto-hides for danger). */
  onClose?: () => void;
  duration?: number;
  /** Fix to bottom-right of the viewport. */
  floating?: boolean;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
