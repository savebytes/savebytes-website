import React from 'react';
import Link from 'next/link';
import Icon from '../site/Icon';
import { SCREENS } from '../products/screens';

/** The standard product page. Every product uses it; a product leaves out blocks it has nothing for. */
export default function Product({ product: p }) {
  const Picture = p.picture ? SCREENS[p.picture] : null;
  return (
    <div className="frame product">
      <section className="lede" aria-labelledby="product-title">
        <h1 id="product-title" className="t-display">{p.name}</h1>
        <p className="t-lead">{p.line}</p>
        <p className="status"><Icon name="check" size={18} />{p.status}</p>
        <div className="lede-act"><Link href="/contact" className="act">Get in touch</Link></div>
      </section>

      {Picture && <figure className="picture"><Picture /></figure>}

      {p.now && (
        <section className="block" aria-labelledby="now">
          <h2 id="now" className="t-head">{p.now.title}</h2>
          <dl className="facts">
            {p.now.items.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}
          </dl>
        </section>
      )}

      {p.soon && (
        <section className="block" aria-labelledby="soon">
          <h2 id="soon" className="t-head">{p.soon.title}</h2>
          <ul className="soon">{p.soon.items.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>
      )}

      {p.data && (
        <section className="block" aria-labelledby="data">
          <h2 id="data" className="t-head">{p.data.title}</h2>
          <ul className="plain">{p.data.items.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>
      )}

      {p.close && (
        <section className="close" aria-labelledby="close">
          <h2 id="close" className="t-head">{p.close.title}</h2>
          <Link href="/contact" className="act">{p.close.action}</Link>
        </section>
      )}
    </div>
  );
}
