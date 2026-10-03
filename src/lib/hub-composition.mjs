import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function readProjectJson(relativePath) {
  const fromModule = join(dirname(fileURLToPath(import.meta.url)), '..', relativePath);
  const fromWorkspace = join(process.cwd(), 'src', relativePath);
  const path = existsSync(fromModule) ? fromModule : fromWorkspace;
  return JSON.parse(readFileSync(path, 'utf8'));
}

const catalog = readProjectJson('data/hubs/catalog.json');
const images = readProjectJson('data/images.json');

const BODY_STATUS = new Set(['selected-illustration', 'placed']);

export const spatialWords = {
  'home-intelligence': 'CONTROL',
  'architectural-lighting': 'LIGHTING',
  'motorized-shades': 'SHADES',
  'media-audio': 'MEDIA',
  'private-cinemas': 'CINEMA',
  'security-access': 'SECURITY',
  'infrastructure-privacy': 'NETWORK',
  'outdoor-entertainment': 'OUTDOOR',
};

const shared = {
  '01': { purpose: 'opening', surface: 'hero' },
  '02': { purpose: 'answer', surface: 'answer' },
  '03': { purpose: 'moments', surface: 'editorial', photo: 'Distinct finished room / experience' },
  '04': { purpose: 'system-layers', surface: 'systems' },
  '05': { purpose: 'studies', surface: 'editorial', study: 'signature' },
  '06': { purpose: 'comparison', surface: 'editorial' },
  '07': { purpose: 'examples', surface: 'editorial' },
  '08': { purpose: 'detail', surface: 'editorial', study: 'technical' },
  '09': { purpose: 'installation', surface: 'editorial' },
  '10': { purpose: 'pitfalls', surface: 'editorial' },
  '11': { purpose: 'proof', surface: 'editorial' },
  '12': { purpose: 'investment', surface: 'investment' },
  '13': { purpose: 'handoff', surface: 'editorial' },
  '14': { purpose: 'questions', surface: 'questions' },
  '15': { purpose: 'inquiry', surface: 'inquiry' },
};

const overrides = {
  'home-intelligence': {
    '04': { study: 'technical' },
    '07': { purpose: 'interfaces', products: true },
    '08': { study: null },
  },
  'architectural-lighting': {
    '06': { products: true },
  },
  'motorized-shades': {
    '07': { photo: 'Opening study / bedroom' },
    '09': { photo: 'Installed interface / service detail' },
    '06': { study: 'technical' },
    '08': { study: null },
  },
  'media-audio': {
    '04': { study: 'technical' },
    '06': { products: true },
    '08': { purpose: 'comparison', study: null },
    '09': { purpose: 'detail' },
    '10': { purpose: 'interfaces', photo: 'Installed interface / service detail' },
  },
  'private-cinemas': {
    '04': { photo: 'Installed interface / service detail' },
  },
  'security-access': {
    '04': { products: true },
    '06': { photo: 'Installed interface / service detail' },
    '08': { study: null },
    '09': { study: 'technical' },
  },
  'infrastructure-privacy': {
    '04': { products: true },
    '06': { study: 'technical' },
    '08': { study: null },
  },
  'outdoor-entertainment': {
    '06': { products: true, photo: 'Installed interface / service detail' },
  },
};

const frameByPurpose = {
  opening: 'opening',
  answer: 'answer',
  moments: 'moments',
  'system-layers': 'system',
  studies: 'study',
  comparison: 'ledger',
  examples: 'reading',
  interfaces: 'interfaces',
  detail: 'detail',
  installation: 'process',
  pitfalls: 'pitfalls',
  proof: 'quiet',
  investment: 'investment',
  handoff: 'handoff',
  questions: 'questions',
  inquiry: 'inquiry',
};

function frameFor(role) {
  if (role.purpose === 'comparison' && (role.products || role.photo)) return 'comparison';
  if ((role.purpose === 'interfaces' || role.purpose === 'examples') && role.products) return 'products';
  return frameByPurpose[role.purpose] || 'reading';
}

function asFigure(record) {
  if (!record?.src || !record.alt || !record.title || !record.caption) return null;
  if (!images[record.src]) return null;
  return {
    id: record.id,
    src: record.src,
    alt: record.alt,
    title: record.title,
    caption: record.caption,
    fit: record.fit === 'contain' ? 'contain' : 'cover',
    purpose: record.purpose || 'Product view',
    status: 'placed',
  };
}

export function sectionRole(slug, id) {
  if (!spatialWords[slug] || !overrides[slug]) throw new Error(`No hub composition for "${slug}".`);
  if (!shared[id]) throw new Error(`No section composition for "${id}".`);
  const role = { ...shared[id], ...(overrides[slug][id] || {}) };
  return { ...role, frame: frameFor(role) };
}

export function bodyPhoto(slug, purpose) {
  const slot = (catalog[slug]?.slots ?? []).find((item) => (
    item.kind === 'photo'
    && item.number !== '01'
    && item.purpose === purpose
    && BODY_STATUS.has(item.status)
  ));
  return asFigure(slot);
}

export function productsFor(slug) {
  return (catalog[slug]?.products ?? [])
    .filter((product) => product.status === 'placed' && !(slug === 'home-intelligence' && product.id === 'asset-8b8986fe09f4'))
    .map((product) => asFigure(product))
    .filter(Boolean);
}

export function studyPhotosFor(slug) {
  const photos = {};
  for (const slot of catalog[slug]?.slots ?? []) {
    if (slot.kind !== 'photo' || !BODY_STATUS.has(slot.status)) continue;
    const figure = asFigure(slot);
    if (figure) photos[slot.number] = figure;
  }
  const products = Object.fromEntries((catalog[slug]?.products ?? []).map((product) => [product.id, product]));
  const touchscreen = asFigure(products['asset-8b8986fe09f4']);
  if (touchscreen) photos.touchscreen = touchscreen;
  return photos;
}
