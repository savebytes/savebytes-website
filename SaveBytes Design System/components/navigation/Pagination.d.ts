export interface PaginationProps {
  page?: number;
  pageCount?: number;
  /** Shows "1–20 of 148". */
  total?: number;
  pageSize?: number;
  onChange?: (page: number) => void;
  style?: React.CSSProperties;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
