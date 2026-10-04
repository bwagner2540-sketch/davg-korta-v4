import { appendFile, readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
export const WORKER_NAME = 'davg-korta-v4';
export const WORKERS_SUBDOMAIN = 'brandon-763';
const PRODUCTION_HOSTS = new Set([
  'davg.ai',
  'www.davg.ai',
  `${WORKER_NAME}.${WORKERS_SUBDOMAIN}.workers.dev`,
]);
const DIST_PAGES = [
  join(root, 'dist/client/index.html'),
  join(root, 'dist/client/solutions/motorized-shades/index.html'),
];

function git(args) {
  const result = spawnSync('git', args, { cwd: root, encoding: 'utf8' });
  if (result.status !== 0) throw new Error(`git ${args[0]} failed: ${(result.stderr || result.stdout || '').trim()}`);
  return result.stdout.trim();
}

export function sanitizeBranchName(branchName) {
  return branchName.replace(/[^a-zA-Z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
}

// Same alias Cloudflare derives for a Workers branch preview, including the
// 63-character DNS limit and the four-character sha256 suffix.
export function previewAlias(branchName, scriptName = WORKER_NAME) {
  const sanitized = sanitizeBranchName(branchName);
  if (!/^[a-z](?:[a-z0-9-]*[a-z0-9])?$/i.test(sanitized)) {
    throw new Error(`Branch name cannot become a preview alias: ${branchName}`);
  }
  const available = 63 - scriptName.length - 1;
  if (sanitized.length <= available) return sanitized;
  const hash = createHash('sha256').update(branchName).digest('hex').slice(0, 4);
  const suffix = `-${hash}`;
  if (available - suffix.length < 1) throw new Error(`Branch name is too long for a preview alias: ${branchName}`);
  return `${sanitized.slice(0, available - suffix.length)}${suffix}`;
}

export function previewOrigin(branchName, subdomain = WORKERS_SUBDOMAIN) {
  const alias = previewAlias(branchName);
  return new URL(`https://${alias}-${WORKER_NAME}.${subdomain}.workers.dev/`);
}

export function assertReviewHost(href) {
  const url = new URL(href);
  if (url.protocol !== 'https:') throw new Error(`Review links must be https: ${href}`);
  if (PRODUCTION_HOSTS.has(url.hostname) || !url.hostname.endsWith(`-${WORKER_NAME}.${WORKERS_SUBDOMAIN}.workers.dev`)) {
    throw new Error(`Refusing a host that is not this Worker's branch preview: ${url.hostname}`);
  }
  return url;
}

export function readRevision(html) {
  const tag = html.match(/<meta\b[^>]*>/gi)?.find(element => /\bname\s*=\s*["']davg-revision["']/i.test(element));
  return tag?.match(/\bcontent\s*=\s*["']([a-f0-9]{40})["']/i)?.[1]?.toLowerCase() || '';
}

export function reviewPaths(input) {
  if (!input.length) throw new Error('Provide a site route, for example /solutions/motorized-shades/');
  return input.map(path => {
    if (!/^\/(?:[a-z0-9-]+\/)*$/.test(path)) throw new Error(`Invalid site route: ${path}`);
    return path;
  });
}

export function documentedReviewUrl(record) {
  const match = record.match(/^Current review URL: (https:\/\/\S+)$/m);
  if (!match) throw new Error('docs/live-previews.md is missing a Current review URL line.');
  return new URL(match[1]);
}

function currentBranch() {
  const fromEnv = process.env.WORKERS_CI_BRANCH || process.env.GITHUB_REF_NAME || '';
  if (fromEnv && fromEnv !== 'HEAD') return fromEnv;
  return git(['rev-parse', '--abbrev-ref', 'HEAD']);
}

function currentSha() {
  const sha = (process.env.GITHUB_SHA || git(['rev-parse', 'HEAD'])).trim().toLowerCase();
  if (!/^[a-f0-9]{40}$/.test(sha)) throw new Error(`Invalid revision: ${sha}`);
  return sha;
}

async function writeSummary(markdown) {
  if (!process.env.GITHUB_STEP_SUMMARY) return;
  await appendFile(process.env.GITHUB_STEP_SUMMARY, markdown.endsWith('\n') ? markdown : `${markdown}\n`);
}

function reviewContext() {
  const branch = currentBranch();
  if (!branch || branch === 'HEAD') throw new Error('The preview check needs a branch name.');
  if (branch === 'main') throw new Error('main publishes the production Worker. This check verifies a branch preview only.');
  const origin = assertReviewHost(previewOrigin(branch));
  return { branch, origin, sha: currentSha() };
}

async function assertDocumented(origin) {
  const record = await readFile(join(root, 'docs/live-previews.md'), 'utf8');
  const documented = assertReviewHost(documentedReviewUrl(record));
  if (documented.origin !== origin.origin) {
    throw new Error(`docs/live-previews.md says ${documented.origin} but this branch publishes ${origin.origin}. Update the review link.`);
  }
}

async function summaryLink() {
  const { origin, sha } = reviewContext();
  const review = new URL('/', origin).href;
  await writeSummary(`## Review link\n\n[Open the branch preview](${review})\n\nCommit \`${sha}\`. This run turns green only after Cloudflare serves that revision on the live pages.\n`);
  console.log(review);
  await assertDocumented(origin);
}

async function checkDist() {
  const { sha } = reviewContext();
  for (const file of DIST_PAGES) {
    const found = readRevision(await readFile(file, 'utf8'));
    if (found !== sha) throw new Error(`${file} revision is ${found || 'missing'}; expected ${sha}`);
    console.log(`${file} stamped ${found}`);
  }
}

async function verifyLive(paths) {
  const { origin, sha } = reviewContext();
  await assertDocumented(origin);
  const routes = reviewPaths(paths.length ? paths : ['/', '/solutions/motorized-shades/']);
  const timeoutMs = Number(process.env.DAVG_PREVIEW_TIMEOUT_MS || 12 * 60_000);
  const intervalMs = Number(process.env.DAVG_PREVIEW_INTERVAL_MS || 10_000);
  const deadline = Date.now() + timeoutMs;
  let last = 'No response yet';
  do {
    const results = await Promise.all(routes.map(async route => {
      const url = new URL(route, origin);
      const probe = new URL(url);
      probe.searchParams.set('davg_preview_check', sha);
      try {
        const response = await fetch(probe, { redirect: 'error', headers: { 'Cache-Control': 'no-cache' }, signal: AbortSignal.timeout(12_000) });
        if (!response.ok) return { url, revision: `HTTP ${response.status}` };
        return { url, revision: readRevision(await response.text()) || 'revision tag missing' };
      } catch (error) {
        return { url, revision: error instanceof Error ? error.message : String(error) };
      }
    }));
    if (results.every(result => result.revision === sha)) {
      console.log(`LIVE REVISION VERIFIED: ${sha}`);
      for (const result of results) console.log(`Page: ${result.url.href}`);
      await writeSummary(`### Live revision verified\n\n\`${sha}\`\n\n${results.map(result => `- [${result.url.pathname}](${result.url.href})`).join('\n')}\n`);
      return;
    }
    last = results.map(result => `${result.url.pathname}: ${result.revision}`).join('; ');
    console.log(`Waiting for Cloudflare (${last})`);
    if (Date.now() >= deadline) break;
    await new Promise(resolve => setTimeout(resolve, Math.min(intervalMs, Math.max(0, deadline - Date.now()))));
  } while (Date.now() <= deadline);
  await writeSummary(`### Preview is stale\n\nExpected \`${sha}\`. Last observed: ${last}.\n`);
  throw new Error(`Preview is stale after ${Math.round(timeoutMs / 1000)}s. Expected ${sha}; last observed ${last}.`);
}

async function main() {
  const args = process.argv.slice(2);
  const flags = new Set(args.filter(argument => argument.startsWith('--')));
  const paths = args.filter(argument => !argument.startsWith('--'));
  if (flags.has('--summary-link')) await summaryLink();
  else if (flags.has('--check-dist')) await checkDist();
  else await verifyLive(paths);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch(error => {
    console.error(`LIVE REVISION CHECK FAILED: ${error.message}`);
    process.exitCode = 1;
  });
}
