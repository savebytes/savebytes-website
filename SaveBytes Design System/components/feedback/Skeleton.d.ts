export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  /** Multiple lines; the last is 60% wide. */
  lines?: number;
  gap?: number;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
