export interface Allergy { substance: string; reaction?: string; }
/**
 * @startingPoint section="Health" subtitle="Patient banner with allergy strip" viewport="1280x140"
 */
export interface PatientBannerProps {
  /** Never truncated. */
  name: string;
  /** e.g. "34 y", "8 m", "12 d" */
  age: string;
  gender: string;
  /** "12 Mar 1992" */
  born?: string;
  bornEstimated?: boolean;
  mrn?: string;
  mobile?: string;
  /** Array = recorded (empty = No known allergies). undefined/null = Allergies not recorded. */
  allergies?: Allergy[] | null;
  status?: 'booked' | 'arrived' | 'vitals' | 'in-consult' | 'signed' | 'closed' | 'noshow';
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function PatientBanner(props: PatientBannerProps): JSX.Element;
