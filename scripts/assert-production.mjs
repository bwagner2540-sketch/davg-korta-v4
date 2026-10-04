import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
const metadata = JSON.parse(await readFile('dist/build-policy.json', 'utf8').catch(() => { throw new Error('DEPLOY BLOCKED: no verified production build in dist/. Sandbox output is never deployable.'); }));
if (metadata.mode !== 'production' || !metadata.pages.length) throw new Error('DEPLOY BLOCKED: production approval is absent');
const visit = async dir => { for (const entry of await readdir(dir, { withFileTypes: true })) {
  const path = join(dir, entry.name);
  if (entry.isDirectory()) await visit(path);
  else if (entry.name.endsWith('.html') && (/data-design-sandbox/.test(await readFile(path, 'utf8')) || (path !== join('dist', '404.html') && /noindex/.test(await readFile(path, 'utf8'))))) throw new Error(`DEPLOY BLOCKED: draft HTML at ${path}`);
}};
await visit('dist');
console.log('Production output verified.');
