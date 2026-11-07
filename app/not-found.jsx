import Link from 'next/link';

export const metadata = { title: 'Page not found · SaveBytes' };
export default function NotFound() {
  return (
    <div className="frame read">
      <section className="lede">
        <h1 className="t-display">That page does not exist.</h1>
        <p className="t-lead">It may have moved. Start from the home page.</p>
        <div className="lede-act"><Link href="/" className="act">Go to the home page</Link></div>
      </section>
    </div>
  );
}
