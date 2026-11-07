import React from 'react';
import Directory from '../site/Directory';
import { PRODUCTS } from '../products/index.js';
import { hasWriting } from '../writing/index.js';

export default function Home() {
  const items = [
    ...PRODUCTS.map((p) => ({ href: '/' + p.slug, title: p.name, line: p.line })),
    ...(hasWriting() ? [{ href: '/writing', title: 'Writing', line: 'Technology, strategy and how we build.' }] : []),
    { href: '/about', title: 'About SaveBytes', line: 'Why we build this way.' },
    { href: '/contact', title: 'Get in touch', line: 'Email, WhatsApp or a form.' },
  ];
  return (
    <div className="frame home">
      <section className="lede" aria-labelledby="home-title">
        <h1 id="home-title" className="t-display">Quiet software for busy places.</h1>
        <p className="t-lead">SaveBytes builds focused software from Navi Mumbai, starting with patient records for clinics.</p>
      </section>
      <Directory items={items} label="Where to go" />
    </div>
  );
}
