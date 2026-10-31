import Link from 'next/link';

export const metadata = { title: 'Page not found · SaveBytes' };
export default function NotFound() {
  return (
    <section className="sb-section sb-hero"><div className="sb-container" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="sb-overline" style={{ color: 'var(--color-text-muted)' }}>404</div>
      <h1 className="sb-display">That page doesn't exist.</h1>
      <p className="sb-lead" style={{ color: 'var(--color-text-secondary)' }}>It may have moved. Start from the <Link href="/">home page</Link>.</p>
    </div></section>
  );
}
