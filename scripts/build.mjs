import { cp, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { resolve, join, relative } from 'node:path';
let mode = process.argv[2] || 'production';
if (!['production', 'sandbox', 'preview'].includes(mode)) throw new Error('Unknown build mode');
const policy = JSON.parse(await readFile('src/config/publication.json', 'utf8'));
const gitBranch = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], { encoding: 'utf8' }).stdout?.trim() || '';
const branch = process.env.WORKERS_CI_BRANCH || process.env.GITHUB_REF_NAME || gitBranch;
const ci = ['1', 'true'].includes(String(process.env.WORKERS_CI || ''))
  || ['1', 'true'].includes(String(process.env.CI || ''))
  || Boolean(process.env.WORKERS_CI_BUILD_UUID);
const workersPreview = ci && branch && !['HEAD', 'main'].includes(branch);
if (mode === 'production' && !policy.approvedPages.length && workersPreview) {
  console.log(`Production approval is empty. CI branch "${branch}" is not main, so this command writes the sandbox site to dist/ for a branch preview only.`);
  mode = 'preview';
}
const output = mode === 'sandbox' ? 'dist-sandbox' : 'dist';
// Delete stale generated output before any failed release check can leave deployable files behind.
await rm(output, { recursive: true, force: true });
if (mode === 'production' && !policy.approvedPages.length) {
  console.error(`PUBLIC BUILD BLOCKED: no pages are approved for release. Use npm run build:sandbox for local design review. (ci=${ci} branch=${branch || 'unknown'})`);
  process.exit(1);
}
if (policy.approvedPages.some(page => policy.sandboxOnlyPages.includes(page))) throw new Error('A sandbox-only page cannot enter production');
const images = spawnSync(process.execPath, ['scripts/prepare-images.mjs'], { stdio: 'inherit' });
if (images.status !== 0) process.exit(images.status || 1);
let staging;
try {
  if (mode === 'production') {
    staging = await mkdtemp(resolve('.build-src-'));
    await cp('src', staging, { recursive: true });
    const visit = async (dir) => { for (const entry of await readdir(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) await visit(path);
      else if (!policy.approvedPages.includes('src/' + relative(staging, path).replaceAll('\\', '/'))) await rm(path);
    }};
    await visit(join(staging, 'pages'));
  }
  const revision = (process.env.WORKERS_CI_COMMIT_SHA || spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).stdout || '').trim();
  const astroMode = mode === 'preview' ? 'preview' : mode;
  const result = spawnSync(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build'], {
    stdio: 'inherit', env: { ...process.env, DAVG_BUILD_MODE: astroMode, DAVG_REVISION: revision, ...(staging ? { DAVG_SOURCE_DIR: staging } : {}) },
  });
  if (result.status !== 0) { await rm(output, { recursive: true, force: true }); process.exitCode = result.status || 1; }
  else {
    if (mode === 'sandbox' || mode === 'preview') {
      await writeFile(join(output, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
      await writeFile(join(output, '_headers'), (await readFile('public/_headers', 'utf8')) + '\n/*\n  X-Robots-Tag: noindex, nofollow\n');
    }
    await writeFile(join(output, 'build-policy.json'), JSON.stringify({ mode: mode === 'preview' ? 'preview' : mode, pages: mode === 'production' ? policy.approvedPages : [], sourceCheckpoint: 'dc9ff37a34bd65c9c7ad6fefe8f998bc524c0031' }, null, 2));
  }
} finally { if (staging) await rm(staging, { recursive: true, force: true }); }
