export interface SiteLink { id: string; label: string; href?: string; }
/**
 * @startingPoint section="Website" subtitle="savebytes.in header with CTA" viewport="1280x200"
 */
export interface SiteHeaderProps {
  links?: SiteLink[];
  active?: string;
  onNavigate?: (id: string) => void;
  ctaLabel?: string;
  onCta?: () => void;
  /** White + line border + shadow-md once the page scrolls. */
  scrolled?: boolean;
  /** Logo tone, e.g. "health" on /health. */
  tone?: 'brand' | 'health' | 'platform';
  /** Hamburger + full-screen sheet. */
  mobile?: boolean;
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
