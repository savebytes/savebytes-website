import React from 'react';
import Link from 'next/link';

const date = (iso) => new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

/** The list of articles, newest first. */
export function WritingIndex({ posts }) {
  return (
    <div className="frame read">
      <section className="lede" aria-labelledby="writing-title">
        <h1 id="writing-title" className="t-display">Writing.</h1>
        <p className="t-lead">Notes on technology, strategy and how we build.</p>
      </section>
      <ul className="posts">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={'/writing/' + p.slug}>
              <span className="post-title">{p.title}</span>
              <span className="post-sum">{p.summary}</span>
              <time dateTime={p.date}>{date(p.date)}</time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** One article: title, date, then paragraphs; a paragraph starting with "## " is a heading. */
export function Post({ post }) {
  return (
    <article className="frame read article">
      <header className="lede">
        <h1 className="t-display">{post.title}</h1>
        <p className="small"><time dateTime={post.date}>{date(post.date)}</time></p>
      </header>
      <div className="prose">
        {post.body.map((b, i) => (b.startsWith('## ') ? <h2 key={i} className="t-head">{b.slice(3)}</h2> : <p key={i}>{b}</p>))}
      </div>
      <p className="back"><Link href="/writing">All writing</Link></p>
    </article>
  );
}
