// Fails when a built page links to an internal URL that has no page in dist/.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return name.endsWith('.html') ? [path] : [];
  });
}

function exists(href) {
  const path = decodeURIComponent(href.split(/[?#]/)[0]);
  const target = join(DIST, path);
  return existsSync(path.endsWith('/') ? join(target, 'index.html') : target);
}

const broken = [];
for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
    if (!exists(href)) broken.push(`${file.replace(DIST, '/')} → ${href}`);
  }
}

if (broken.length) {
  console.error(`${broken.length} broken internal link(s):\n${[...new Set(broken)].join('\n')}`);
  process.exit(1);
}
console.log('No broken internal links.');
