export interface LogoProps {
  /** mark = symbol only; horizontal = mark + wordmark (primary); stacked = mark over wordmark. */
  lockup?: 'mark' | 'horizontal' | 'stacked';
  /** brand = blue mark + navy word. health/platform recolour only the right half. current = currentColor. */
  tone?: 'brand' | 'navy' | 'white' | 'current' | 'health' | 'platform';
  /** Mark height in px. Minimum 16. */
  size?: number;
  /** Product word after the wordmark. Defaults from tone (Health / Platform). */
  product?: string;
  /** intro = 1.6s land → cut → breathe → settle (plays once). loader = cut redraws every 1.4s. */
  animate?: 'none' | 'intro' | 'loader';
  /** Halves part 1.5 units on hover (header logo). */
  hoverBreathe?: boolean;
  title?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
