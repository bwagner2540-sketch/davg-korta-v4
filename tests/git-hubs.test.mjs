import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadGitHub, loadGitHubs } from '../src/lib/git-hubs.mjs';
import { bodyPhoto, productsFor, sectionRole, spatialWords } from '../src/lib/hub-composition.mjs';

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

test('the hub loader reads only the live git hub directory', () => {
  const source = readFileSync('src/lib/git-hubs.mjs', 'utf8');
  assert.match(source, /docs\/v4-build\/hubs\/DAVG-V4-Hub-\*\.md/);
  assert.match(source, /docs\/v4-build\/hubs/);
  assert.doesNotMatch(source, /davg-history|hub-production-kit|DAVG-ALL-EIGHT|content-additions|src\/data\/services/);
});

test('internal notes and publication holds stay out of visitor HTML', () => {
  const home = loadGitHub('home-intelligence');
  const shades = loadGitHub('motorized-shades');
  const proof = home.sections.find((section) => section.id === '11');
  assert.doesNotMatch(proof.html, /Publish hold|Project module|Editorial use|Builder credit/);
  assert.doesNotMatch(home.sections.map((section) => section.html).join('\n'), /In Phase Two,/);
  assert.doesNotMatch(home.sections.find((section) => section.id === '08').html, /Home control mock/);
  assert.doesNotMatch(shades.sections.map((section) => section.html).join('\n'), /IBM Plex|palladiom mock/);
  assert.match(home.sections[1].html, /control layer that lets a residence behave like one system/);
});

test('composition maps each hub section by purpose', () => {
  for (const slug of slugs) {
    assert.ok(spatialWords[slug]);
    for (let index = 1; index <= 15; index += 1) {
      const id = String(index).padStart(2, '0');
      const role = sectionRole(slug, id);
      assert.ok(role.purpose);
      assert.ok(role.surface);
    }
    assert.equal(sectionRole(slug, '02').surface, 'answer');
    assert.equal(sectionRole(slug, '05').study, 'signature');
    assert.equal(sectionRole(slug, '12').surface, 'investment');
    assert.equal(sectionRole(slug, '15').surface, 'inquiry');
  }
  const homeRoom = bodyPhoto('home-intelligence', 'Distinct finished room / experience');
  assert.equal(homeRoom?.src, '/images/home-intelligence-asset-fb06409d0dde.webp');
  assert.ok(homeRoom?.alt && homeRoom.title && homeRoom.caption);
  assert.equal(bodyPhoto('motorized-shades', 'Distinct finished room / experience'), null);
  assert.equal(bodyPhoto('home-intelligence', 'Installed interface / service detail'), null);
  assert.ok(productsFor('home-intelligence').length >= 2);
  assert.equal(productsFor('motorized-shades').length, 0);
  assert.equal(sectionRole('home-intelligence', '04').study, 'technical');
  assert.equal(sectionRole('architectural-lighting', '08').study, 'technical');
  assert.equal(sectionRole('media-audio', '04').study, 'technical');
  assert.equal(sectionRole('media-audio', '10').photo, 'Installed interface / service detail');
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
