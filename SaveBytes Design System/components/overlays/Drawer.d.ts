export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  title: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  side?: 'left' | 'right';
  width?: number;
}
export declare function Drawer(props: DrawerProps): JSX.Element | null;
