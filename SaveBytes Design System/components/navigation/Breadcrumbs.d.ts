export interface Crumb { label: string; href?: string; }
export interface BreadcrumbsProps {
  items: Crumb[];
  onNavigate?: (item: Crumb) => void;
  style?: React.CSSProperties;
}
export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
