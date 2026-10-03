import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadGitHub, loadGitHubs } from '../src/lib/git-hubs.mjs';

const slugs = [
  'home-intelligence',
  'architectural-lighting',
  'motorized-shades',
  'media-audio',
  'private-cinemas',
  'security-access',
  'infrastructure-privacy',
  'outdoor-entertainment',
];

test('git hubs are eight files with fifteen sections each', () => {
  const hubs = loadGitHubs();
  assert.deepEqual(hubs.map((hub) => hub.slug).sort(), [...slugs].sort());
  for (const slug of slugs) {
    const hub = loadGitHub(slug);
    assert.equal(hub.sections.length, 15);
    assert.equal(hub.route, `/solutions/${slug}/`);
    assert.equal(hub.sections[0].headline || hub.h1, hub.h1);
    assert.match(hub.sections[1].html, /<p>/);
  }
});

test('home intelligence renders the git headline, not a rewritten draft', () => {
  const hub = loadGitHub('home-intelligence');
  assert.equal(hub.h1, 'A home that responds as one.');
  assert.equal(hub.sections[1].title, 'What does home intelligence actually change?');
  assert.match(hub.sections[1].html, /control layer that lets a residence behave like one system/);
  assert.match(hub.sections[3].html, /<table>/);
  assert.doesNotMatch(hub.sections[3].html, /---/);
  assert.doesNotMatch(`${hub.h1} ${hub.sections[0].headline} ${hub.sections[0].deck}`, /One command/);
});

test('retired JSON drafts are not the page renderer', () => {
  const page = readFileSync('src/components/services/hubs/HubPage.astro', 'utf8');
  const solutions = readFileSync('src/pages/solutions/[slug].astro', 'utf8');
  const systems = readFileSync('src/pages/systems/[slug].astro', 'utf8');
  for (const source of [page, solutions, systems]) {
    assert.doesNotMatch(source, /data\/services\//);
    assert.match(source, /git-hubs/);
  }
});
