export interface StepItem { label: string; description?: string; }
export interface StepperProps {
  steps: Array<string | StepItem>;
  /** Zero-based index of the current step. */
  current?: number;
  onStepClick?: (index: number) => void;
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}
export declare function Stepper(props: StepperProps): JSX.Element;
