import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import {
  assertReviewHost,
  documentedReviewUrl,
  previewAlias,
  previewOrigin,
  readRevision,
  reviewPaths,
} from '../scripts/verify-live-revision.mjs';

const sha = '4e8f8a73ca2f49bff9e7e9e9db083c33044f1baf';

test('live revision is read from the published page meta tag', () => {
  assert.equal(readRevision(`<html><head><meta name="davg-revision" content="${sha}"></head></html>`), sha);
  assert.equal(readRevision(`<meta content='${sha}' name='davg-revision'>`), sha);
  assert.equal(readRevision('<meta name="davg-revision" content="stale">'), '');
  assert.equal(readRevision('<meta name="description" content="not a revision">'), '');
});

test('delivery accepts site paths and rejects off-site or query input', () => {
  assert.deepEqual(reviewPaths(['/', '/solutions/motorized-shades/']), ['/', '/solutions/motorized-shades/']);
  assert.throws(() => reviewPaths([]));
  assert.throws(() => reviewPaths(['https://example.com/']));
  assert.throws(() => reviewPaths(['//example.com/']));
  assert.throws(() => reviewPaths(['/solutions/motorized-shades/?next=1']));
});

test('preview aliases follow the Workers branch hostname', () => {
  assert.equal(previewAlias('cursor/git-hub-source-13db'), 'cursor-git-hub-source-13db');
  assert.equal(
    previewOrigin('cursor/git-hub-source-13db').hostname,
    'cursor-git-hub-source-13db-davg-korta-v4.brandon-763.workers.dev',
  );
  assert.equal(previewAlias('cursor/cloudflare-verification-and-review-link-966f'), 'cursor-cloudflare-verification-and-review-li-1120');
  const label = previewOrigin('cursor/cloudflare-verification-and-review-link-966f').hostname.split('.')[0];
  assert.equal(label.length, 63);
});

test('production hosts are not review links', () => {
  assert.throws(() => assertReviewHost('https://davg.ai/'));
  assert.throws(() => assertReviewHost('https://www.davg.ai/'));
  assert.throws(() => assertReviewHost('https://davg-korta-v4.brandon-763.workers.dev/'));
  assert.throws(() => assertReviewHost('http://cursor-git-hub-source-13db-davg-korta-v4.brandon-763.workers.dev/'));
  assert.equal(
    assertReviewHost('https://cursor-git-hub-source-13db-davg-korta-v4.brandon-763.workers.dev/').hostname,
    'cursor-git-hub-source-13db-davg-korta-v4.brandon-763.workers.dev',
  );
});

test('the recorded review URL matches this branch preview', async () => {
  const branch = process.env.GITHUB_REF_NAME
    || spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], { encoding: 'utf8' }).stdout.trim();
  if (!branch || branch === 'HEAD' || branch === 'main') return;
  const record = await readFile(new URL('../docs/live-previews.md', import.meta.url), 'utf8');
  assert.equal(documentedReviewUrl(record).origin, previewOrigin(branch).origin);
});
