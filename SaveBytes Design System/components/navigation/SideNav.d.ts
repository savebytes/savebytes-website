export interface SideNavItem { id?: string; label?: string; icon?: string; count?: number; /** Renders a mono section label instead of an item. */ section?: string; }
export interface SideNavProps {
  items: SideNavItem[];
  active?: string;
  onSelect?: (id: string) => void;
  tone?: 'light' | 'dark';
  header?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}
export declare function SideNav(props: SideNavProps): JSX.Element;
