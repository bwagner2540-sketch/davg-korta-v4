import { appendFile, readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const branch = 'cursor/git-hub-source-13db';
const verifyOnly = process.argv.includes('--verify-only');
const paths = process.argv.slice(2).filter(argument => argument !== '--verify-only');
// A GitHub push event itself establishes the published commit. The checkout in
// Actions is detached, so this mode only waits for Cloudflare's public result.
const ciSha = process.env.GITHUB_ACTIONS === 'true' ? (process.env.GITHUB_SHA || '').toLowerCase() : '';
const timeoutMs = Number(process.env.DAVG_PREVIEW_TIMEOUT_MS || 8 * 60_000);
const intervalMs = Number(process.env.DAVG_PREVIEW_INTERVAL_MS || 10_000);

function git(args) {
  const result = spawnSync('git', args, { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(`git ${args[0]} failed: ${(result.stderr || result.stdout || '').trim()}`);
  return result.stdout.trim();
}

export function readRevision(html) {
  const tag = html.match(/<meta\b[^>]*>/gi)?.find(element => /\bname\s*=\s*["']davg-revision["']/i.test(element));
  return tag?.match(/\bcontent\s*=\s*["']([a-f0-9]{40})["']/i)?.[1]?.toLowerCase() || '';
}

export function reviewPaths(input) {
  if (!input.length) throw new Error('Provide the affected route, for example: /solutions/architectural-lighting/');
  return input.map(path => {
    if (!/^\/(?:[a-z0-9-]+\/)*$/.test(path)) throw new Error(`Invalid site route: ${path}`);
    return path;
  });
}

async function main() {
  const routes = reviewPaths(paths);
  if (ciSha && !/^[a-f0-9]{40}$/.test(ciSha)) throw new Error(`Invalid GitHub event revision: ${ciSha}`);
  if (!ciSha) {
    const currentBranch = git(['branch', '--show-current']);
    if (currentBranch !== branch) throw new Error(`Open ${branch} before delivery (currently ${currentBranch || 'detached HEAD'}).`);
    if (git(['status', '--porcelain'])) throw new Error('Uncommitted files are not in the preview. Commit the intended changes first.');
  }
  const sha = ciSha || git(['rev-parse', 'HEAD']).toLowerCase();
  const record = await readFile(new URL('../docs/live-previews.md', import.meta.url), 'utf8');
  const base = record.match(/^Current review URL: (https:\/\/\S+)$/m)?.[1];
  if (!base) throw new Error('The stable branch preview is missing from docs/live-previews.md.');
  const origin = new URL(base);
  if (origin.protocol !== 'https:' || !origin.hostname.endsWith('.workers.dev') || origin.hostname === 'davg-korta-v4.brandon-763.workers.dev') {
    throw new Error(`Refusing to deliver to a non-preview host: ${base}`);
  }

  if (!verifyOnly && !ciSha) {
    const remote = git(['ls-remote', 'origin', `refs/heads/${branch}`]).split(/\s+/)[0].toLowerCase();
    if (!remote) throw new Error(`Remote branch ${branch} was not found.`);
    if (remote !== sha) {
      const fetch = spawnSync('git', ['fetch', 'origin', branch], { encoding: 'utf8' });
      if (fetch.status !== 0) throw new Error(`Could not check the remote branch: ${fetch.stderr.trim()}`);
      const ancestor = spawnSync('git', ['merge-base', '--is-ancestor', 'FETCH_HEAD', 'HEAD']);
      if (ancestor.status !== 0) throw new Error('Remote branch has newer or divergent work. Integrate it safely before pushing.');
      console.log(`Pushing ${sha} to ${branch}…`);
      git(['push', 'origin', `HEAD:refs/heads/${branch}`]);
    }
  }
  if (!ciSha) {
    const publishedHead = git(['ls-remote', 'origin', `refs/heads/${branch}`]).split(/\s+/)[0].toLowerCase();
    if (publishedHead !== sha) throw new Error(`Remote is at ${publishedHead}; current commit is ${sha}. The requested revision is not published.`);
  }

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
      } catch (error) { return { url, revision: error.message }; }
    }));
    if (results.every(result => result.revision === sha)) {
      console.log(`LIVE PREVIEW VERIFIED: ${sha}`);
      for (const result of results) console.log(`Page: ${result.url.href}`);
      if (process.env.GITHUB_STEP_SUMMARY) {
        await appendFile(process.env.GITHUB_STEP_SUMMARY, `\n### Live preview verified at \`${sha}\`\n\n${results.map(result => `- [${result.url.pathname}](${result.url.href})`).join('\n')}\n`);
      }
      return;
    }
    last = results.map(result => `${result.url.pathname}: ${result.revision}`).join('; ');
    console.log(`Waiting for preview (${last})`);
    if (Date.now() >= deadline) break;
    await new Promise(resolve => setTimeout(resolve, Math.min(intervalMs, deadline - Date.now())));
  } while (Date.now() <= deadline);
  if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, `\n### Preview is stale\n\nExpected \`${sha}\`; last observed ${last}. The links above still serve an older build.\n`);
  throw new Error(`Preview is stale after ${Math.round(timeoutMs / 1000)}s. Expected ${sha}; last observed ${last}. Do not report the page as updated.`);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch(error => { console.error(`PREVIEW DELIVERY FAILED: ${error.message}`); process.exitCode = 1; });
}
