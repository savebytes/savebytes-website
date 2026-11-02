export interface ResultFlagProps {
  flag?: 'high' | 'low' | 'critical-high' | 'critical-low' | 'normal' | null;
  /** Show muted "Normal" instead of nothing. */
  showNormal?: boolean;
}
export declare function ResultFlag(props: ResultFlagProps): JSX.Element | null;
