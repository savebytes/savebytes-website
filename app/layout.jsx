import './site.css';
import Script from 'next/script';
import Header from '../src/site/Header';
import Footer from '../src/site/Footer';
import { site } from '../src/config/site';
import { pageMetadata } from '../src/config/routes';
import { analyticsConfig } from '../src/lib/analytics';

export const metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata('home'),
  icons: { icon: '/favicon.svg' },
};

export const viewport = { themeColor: '#ffffff', colorScheme: 'light' };

export default function RootLayout({ children }) {
  const { provider, src, siteId } = analyticsConfig;
  return (
    <html lang="en-IN">
      <head>
        <link rel="preload" href="/fonts/AtkinsonHyperlegibleNext-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {provider === 'plausible' && src && <Script defer data-domain={siteId || 'savebytes.in'} src={src} strategy="afterInteractive" />}
        {provider === 'umami' && src && <Script defer data-website-id={siteId} src={src} strategy="afterInteractive" />}
      </body>
    </html>
  );
}
