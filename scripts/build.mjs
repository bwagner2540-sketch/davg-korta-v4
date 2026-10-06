import { spawnSync } from 'node:child_process';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeRevisionModule } from './revision-module.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));

function gitHead() {
  const result = spawnSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' });
  return result.status === 0 ? result.stdout.trim() : '';
}

const revision = (process.env.WORKERS_CI_COMMIT_SHA || process.env.GITHUB_SHA || gitHead()).trim().toLowerCase();
if (!/^[a-f0-9]{40}$/.test(revision)) {
  console.error('npm run build needs a 40-character git revision in WORKERS_CI_COMMIT_SHA, GITHUB_SHA, or git HEAD.');
  process.exit(1);
}

const branch = process.env.WORKERS_CI_BRANCH || process.env.GITHUB_REF_NAME || '';
const ci = ['1', 'true'].includes(String(process.env.WORKERS_CI || '').toLowerCase())
  || process.env.GITHUB_ACTIONS === 'true'
  || Boolean(process.env.WORKERS_CI_BUILD_UUID);
const preview = Boolean(ci && branch && !['main', 'HEAD'].includes(branch));
await writeRevisionModule(root, revision, preview);

const result = spawnSync(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build'], {
  cwd: root,
  stdio: 'inherit',
  env: {
    ...process.env,
    DAVG_REVISION: revision,
    ...(preview ? { DAVG_PREVIEW: '1' } : {}),
  },
});
if ((result.status ?? 1) !== 0) process.exit(result.status || 1);

const output = await siteOutputDir(root);
await stampHtml(output, revision, preview);
if (preview) {
  await writeFile(join(output, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  console.log(`Preview build ${revision} on ${branch}: indexing disabled.`);
}
console.log(`Stamped davg-revision ${revision} in ${output}`);

export async function siteOutputDir(rootDir) {
  for (const dir of ['dist/client', 'dist']) {
    const path = join(rootDir, dir, 'index.html');
    try {
      await readFile(path);
      return join(rootDir, dir);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  throw new Error('Build output is missing index.html in dist/client or dist.');
}

async function stampHtml(dir, revision, preview) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      await stampHtml(path, revision, preview);
      continue;
    }
    if (!entry.name.endsWith('.html')) continue;
    let html = await readFile(path, 'utf8');
    if (!html.includes('name="davg-revision"')) {
      html = html.replace(/<head[^>]*>/i, match => `${match}<meta name="davg-revision" content="${revision}">`);
    }
    if (preview && !html.includes('name="robots"')) {
      html = html.replace(/<head[^>]*>/i, match => `${match}<meta name="robots" content="noindex, nofollow">`);
    }
    await writeFile(path, html);
  }
}
