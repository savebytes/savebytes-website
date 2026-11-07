// After `next build`: work out what each page really weighs (its HTML plus every script, stylesheet,
// font and image it references, compressed the way a server sends them) and write out/page-weights.json.
// The footer reads that file, so the figure is the same however the visitor arrived.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const OUT = 'out';
const gz = (buf) => zlib.gzipSync(buf, { level: 9 }).length;
const sizeOf = (rel) => {
  const f = path.join(OUT, decodeURIComponent(rel.split('?')[0]));
  if (!fs.existsSync(f)) return 0;
  const buf = fs.readFileSync(f);
  return /\.(woff2|jpe?g|png|webp|avif)$/i.test(f) ? buf.length : gz(buf);
};

const weights = {};
const walk = (dir) => {
  for (const name of fs.readdirSync(dir)) {
    const f = path.join(dir, name);
    if (fs.statSync(f).isDirectory()) { if (name !== '_next') walk(f); continue; }
    if (!name.endsWith('.html') || name === '404.html' || name.startsWith('_')) continue;
    const html = fs.readFileSync(f);
    const refs = new Set([...html.toString().matchAll(/(?:src|href)="(\/[^"#]+?\.(?:js|css|woff2|jpe?g|png|webp|svg))"/g)].map((m) => m[1]));
    let bytes = gz(html);
    for (const r of refs) bytes += sizeOf(r);
    let route = '/' + path.relative(OUT, f).replace(/\\/g, '/').replace(/\.html$/, '');
    if (route === '/index') route = '/';
    weights[route] = Math.round(bytes / 1024);
  }
};
walk(OUT);
fs.writeFileSync(path.join(OUT, 'page-weights.json'), JSON.stringify(weights));
console.log('page weights (KB):', weights);
