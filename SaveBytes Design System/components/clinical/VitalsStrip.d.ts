export interface Vital {
  label: string;
  /** null shows an em dash (not recorded). */
  value: string | number | null;
  unit?: string;
  /** e.g. "10:12 am" */
  time?: string;
  flag?: 'high' | 'low' | 'critical-high' | 'critical-low' | 'normal';
  /** e.g. "Calculated" for BMI */
  note?: string;
}
export interface VitalsStripProps {
  vitals: Vital[];
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function VitalsStrip(props: VitalsStripProps): JSX.Element;
