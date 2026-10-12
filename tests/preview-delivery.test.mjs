import test from 'node:test';
import assert from 'node:assert/strict';
import { readRevision, reviewPaths } from '../scripts/deliver-preview.mjs';

const sha = '4e8f8a73ca2f49bff9e7e9e9db083c33044f1baf';

test('live revision is read from the published page meta tag', () => {
  assert.equal(readRevision(`<html><head><meta name="davg-revision" content="${sha}"></head></html>`), sha);
  assert.equal(readRevision(`<meta content='${sha}' name='davg-revision'>`), sha);
  assert.equal(readRevision('<meta name="davg-revision" content="stale">'), '');
});

test('delivery accepts explicit site paths and rejects off-site or query input', () => {
  assert.deepEqual(reviewPaths(['/solutions/architectural-lighting/', '/systems/motorized-shades/', '/']), ['/solutions/architectural-lighting/', '/systems/motorized-shades/', '/']);
  assert.throws(() => reviewPaths([]));
  assert.throws(() => reviewPaths(['https://example.com/']));
  assert.throws(() => reviewPaths(['//example.com/']));
  assert.throws(() => reviewPaths(['/solutions/home/?foo=bar']));
});
