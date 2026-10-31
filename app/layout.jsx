import './globals.css';
import Script from 'next/script';
import SiteShell from '../src/components/layout/SiteShell';
import { site } from '../src/config/site';
import { pageMetadata } from '../src/config/routes';
import { analyticsConfig } from '../src/lib/analytics';

export const metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata('home'),
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  const { provider, src, siteId } = analyticsConfig;
  return (
    <html lang="en-IN">
      <body className="sb-compact">
        <SiteShell>{children}</SiteShell>
        {provider === 'plausible' && src && <Script defer data-domain={siteId || 'savebytes.in'} src={src} strategy="afterInteractive" />}
        {provider === 'umami' && src && <Script defer data-website-id={siteId} src={src} strategy="afterInteractive" />}
      </body>
    </html>
  );
}
