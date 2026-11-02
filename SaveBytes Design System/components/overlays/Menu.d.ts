export interface MenuItem { label?: string; icon?: string; shortcut?: string; danger?: boolean; disabled?: boolean; divider?: boolean; onClick?: () => void; }
export interface MenuProps {
  trigger: React.ReactNode;
  items: MenuItem[];
  align?: 'start' | 'end';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
export declare function Menu(props: MenuProps): JSX.Element;
