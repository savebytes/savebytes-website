/**
 * Privacy-friendly analytics behind one function. Select a provider with NEXT_PUBLIC_ANALYTICS
 * ("plausible" | "umami" | unset) and NEXT_PUBLIC_ANALYTICS_SRC / _SITE_ID. No cookies, no banner.
 */
export const analyticsConfig = {
  provider: process.env.NEXT_PUBLIC_ANALYTICS ?? '',
  src: process.env.NEXT_PUBLIC_ANALYTICS_SRC ?? '',
  siteId: process.env.NEXT_PUBLIC_ANALYTICS_SITE_ID ?? '',
};

type W = { plausible?: (e: string, o?: object) => void; umami?: { track: (e: string, d?: object) => void } };

export function track(event: string, props?: Record<string, string | number>) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as W;
  try {
    if (analyticsConfig.provider === 'plausible') w.plausible?.(event, { props });
    else if (analyticsConfig.provider === 'umami') w.umami?.track(event, props);
  } catch { /* analytics must never break the site */ }
}
