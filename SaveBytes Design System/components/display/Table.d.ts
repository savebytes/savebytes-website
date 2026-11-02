export interface TableColumn<T = any> {
  key: string;
  label: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  /** Right-aligned mono. */
  numeric?: boolean;
  mono?: boolean;
  width?: number | string;
  render?: (row: T) => React.ReactNode;
}
export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  rows: T[];
  rowKey?: string;
  /** 36px rows for doctor/reception screens. */
  dense?: boolean;
  selectedKey?: string | number;
  onRowClick?: (row: T) => void;
  caption?: string;
  style?: React.CSSProperties;
}
export declare function Table(props: TableProps): JSX.Element;
