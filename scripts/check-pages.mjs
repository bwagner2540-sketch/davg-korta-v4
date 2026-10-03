import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const inventory = JSON.parse(readFileSync(join(root, 'src/data/page-inventory.json'), 'utf8'));
const removals = existsSync(join(root, 'docs/v4-build/named-removals.md'))
  ? readFileSync(join(root, 'docs/v4-build/named-removals.md'), 'utf8')
  : '';

const dist = join(root, 'dist', 'client');
const failures = [];

function distFile(href) {
  if (href === '/') return join(dist, 'index.html');
  return join(dist, href.replace(/^\//, ''), 'index.html');
}

for (const page of inventory.pages) {
  if (page.source && !existsSync(join(root, page.source))) {
    failures.push(`Missing source for ${page.href}: ${page.source}`);
  }
  const htmlPath = distFile(page.href);
  if (!existsSync(htmlPath)) {
    failures.push(`Missing built page ${page.href} (${htmlPath})`);
    continue;
  }
  const html = readFileSync(htmlPath, 'utf8');
  if (!html.includes('data-site-index')) {
    failures.push(`${page.href} has no page index`);
  }
  if (page.href === '/') {
    for (const hub of inventory.pages.filter((item) => item.kind === 'hub')) {
      if (!html.includes(`href="${hub.href}"`)) failures.push(`Homepage is missing a link to ${hub.href}`);
    }
  }
}

const retired = join(dist, '_old', 'motorized-shades', 'index.html');
if (existsSync(retired)) {
  failures.push('Retired shades mockup route /_old/motorized-shades/ was built. Do not publish it.');
}

const requiredHub = join(root, 'src/pages/solutions/motorized-shades.astro');
if (!existsSync(requiredHub)) {
  failures.push('src/pages/solutions/motorized-shades.astro is missing. That is the live shading hub.');
}

if (removals.includes('/solutions/motorized-shades/') && !existsSync(requiredHub)) {
  failures.push('A named removal cannot drop /solutions/motorized-shades/ unless that exact route is the named request and a replacement hub exists.');
}

if (failures.length) {
  console.error('Page inventory check failed:\n' + failures.map((line) => `- ${line}`).join('\n'));
  console.error('\nDo not delete a page, hub, route, or section unless the request names it. Record a named removal in docs/v4-build/named-removals.md before removing its inventory entry.');
  process.exit(1);
}

console.log(`Page inventory check passed (${inventory.pages.length} pages).`);
