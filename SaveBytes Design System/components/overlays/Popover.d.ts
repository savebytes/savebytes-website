export interface PopoverProps {
  trigger: React.ReactNode;
  /** Content, or a render fn receiving close(). */
  children?: React.ReactNode | ((close: () => void) => React.ReactNode);
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: 'start' | 'end';
  width?: number;
  style?: React.CSSProperties;
}
export declare function Popover(props: PopoverProps): JSX.Element;
