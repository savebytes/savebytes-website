/**
 * Writing: notes on technology, strategy and how we build. Nothing is published yet, so the
 * Writing page, its nav link and its home-page row stay hidden until the first post is added.
 *
 * To publish, add an entry:
 *   {
 *     slug: 'why-quiet-software',            // the address: /writing/why-quiet-software
 *     title: 'Why quiet software',
 *     summary: 'One sentence shown in the list.',
 *     date: '2026-11-20',                    // ISO date
 *     body: [                                // paragraphs; a string starting with '## ' is a heading
 *       'First paragraph.',
 *       '## A heading',
 *       'Another paragraph.',
 *     ],
 *   }
 */
export const POSTS = [];

export const published = () => [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
export const hasWriting = () => POSTS.length > 0;
