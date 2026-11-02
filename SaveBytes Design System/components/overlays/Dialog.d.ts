export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Buttons, right-aligned. Primary last. */
  footer?: React.ReactNode;
  width?: number;
  /** Render the panel in flow without overlay (docs/previews). */
  inline?: boolean;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
