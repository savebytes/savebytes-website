export interface AvatarProps {
  name: string;
  /** Real photo only — never stock. */
  src?: string;
  size?: number;
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
