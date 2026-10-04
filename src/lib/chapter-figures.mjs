import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { bodyPhoto, productsFor, sectionRole, studyPhotosFor } from './hub-composition.mjs';
import { escapeHtml } from './chapter-markup.mjs';

function readImages() {
  const fromModule = join(dirname(fileURLToPath(import.meta.url)), '../data/images.json');
  const fromWorkspace = join(process.cwd(), 'src/data/images.json');
  const path = existsSync(fromModule) ? fromModule : fromWorkspace;
  return JSON.parse(readFileSync(path, 'utf8'));
}

const images = readImages();

const PROVENANCE = /manufacturer|source filename|source file identifies|filename|not verified DAVG|not a before state|rights unconfirmed|product photograph|illustration\s*·|not a rack or wiring photograph|laboratory confirmation|filed as|cutout preserved|not a confirmed|model identity|not substituted onto/i;

export function visibleCaption(value) {
  return String(value || '')
    .split(/(?<=[.!])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence && !PROVENANCE.test(sentence))
    .join(' ')
    .trim();
}

export function rightsUnconfirmed(photo) {
  const blob = `${photo?.caption || ''} ${photo?.alt || ''} ${photo?.rightsStatus || ''}`;
  return /not verified DAVG|rights unconfirmed|not independently confirmed|manufacturer library|manufacturer or dealer photograph/i.test(blob);
}

function isPortrait(src) {
  const record = images[src];
  return Boolean(record && record.height >= record.width);
}

const shadeSignature = [
  {
    id: 'shading-recessed-study',
    src: '/images/davg-recessed-shade-study-01.jpg',
    alt: 'Conceptual detail study of a recessed dual roller disappearing into a ceiling pocket. Callouts mark the paired fabrics, flush closure, concealed hembar and drive.',
    title: 'Recessed dual-roller study',
    caption: 'Conceptual coordination study. Pocket size, drive, hembar finish and solar logic are set from the approved drawing for each opening.',
  },
  {
    id: 'shading-mount-fascia',
    src: '/images/davg-triathlon-fascia-boucle-01-800w.webp',
    alt: 'White Triathlon fascia box mounted on shiplap above a light woven shade',
    title: 'Fascia',
    caption: 'Triathlon fascia above a woven shade. A fascia conceals the roller without a ceiling pocket.',
  },
  {
    id: 'shading-mount-exposed',
    src: '/images/davg-palladiom-exposed-roller-bracket-01-800w.webp',
    alt: 'Palladiom exposed roller with a fabric-wrapped tube and rounded metal bracket above a night window',
    title: 'Exposed',
    caption: 'Palladiom exposed roller and bracket. Exposed hardware is a design choice, not a quality rank.',
  },
];

const shadeTechnical = [
  {
    id: 'shading-compare-sheer',
    src: '/images/davg-living-room-sheer-roller-shades-sun-01-1600w.webp',
    alt: 'Floor-to-ceiling sheer roller shades on a living-room glass wall, with the sun still visible through the fabric',
    title: 'Keep the view',
    caption: 'Sheer roller shades with the sun still visible through the fabric. Night privacy is a separate check.',
  },
  {
    id: 'shading-compare-closed',
    src: '/images/davg-triathlon-bedroom-shades-closed-01-800w.webp',
    alt: 'Bedroom with two white Triathlon shades fully closed across a wide window',
    title: 'Close the room',
    caption: 'Closed Triathlon shades. Light can still enter at the edges unless the mounting addresses those gaps.',
  },
];

function signaturePhotos(slug) {
  const photos = studyPhotosFor(slug);
  if (slug === 'architectural-lighting' && photos['02']) return [photos['02']];
  if (slug === 'home-intelligence' && photos.touchscreen) return [photos.touchscreen];
  if (slug === 'motorized-shades') return shadeSignature;
  return [];
}

function technicalPhotos(slug) {
  if (slug === 'motorized-shades') return shadeTechnical;
  return [];
}

export function figuresFor(slug, sectionId) {
  const role = sectionRole(slug, sectionId);
  const figures = [];
  const push = (photo) => {
    if (photo?.src && !figures.some((item) => item.src === photo.src)) figures.push(photo);
  };
  if (role.photo) push(bodyPhoto(slug, role.photo));
  if (role.products) productsFor(slug).forEach(push);
  if (role.study === 'signature') signaturePhotos(slug).forEach(push);
  if (role.study === 'technical') technicalPhotos(slug).forEach(push);
  return figures;
}

export function chapterLayout(figures) {
  return figures.length === 1 && isPortrait(figures[0].src) ? 'aside' : 'single';
}

function figureMarkup(photo, { dev = false, caption = '', wide = false, eager = false, bleed = false } = {}) {
  const record = images[photo.src];
  if (!record) return '';
  const rights = rightsUnconfirmed(photo);
  const shown = caption || visibleCaption(photo.caption || '') || visibleCaption(photo.title || '');
  const alt = visibleCaption(photo.alt || photo.title || '') || 'Product photograph';
  const srcset = (record.variants || []).map((item) => `${item.src} ${item.width}w`).join(', ');
  const classes = ['k-fig', photo.fit === 'contain' ? 'k-fig--contain' : '', wide ? 'k-wide' : '', bleed ? 'k-hero__fig' : ''].filter(Boolean).join(' ');
  const sizes = bleed ? '(min-width: 900px) 82vw, 100vw' : '(min-width: 900px) 36vw, 100vw';
  return `<figure class="${classes}" data-photo-slot="${escapeHtml(photo.id)}"${bleed ? ' data-hero-bleed="true"' : ''}${rights ? ' data-rights="unconfirmed"' : ''}>
<img src="${escapeHtml(photo.src)}" alt="${escapeHtml(alt)}" width="${record.width}" height="${record.height}" srcset="${escapeHtml(srcset)}" sizes="${sizes}" loading="${eager ? 'eager' : 'lazy'}"${eager ? ' fetchpriority="high"' : ''} decoding="async" />
${shown ? `<figcaption>${escapeHtml(shown)}</figcaption>` : ''}
${dev && rights ? '<span class="k-rights">Rights unconfirmed</span>' : ''}
</figure>`;
}

export function inlineFigures(figures, options = {}) {
  if (!figures.length || chapterLayout(figures) === 'aside') return '';
  const items = figures.map((photo, index) => figureMarkup(photo, {
    ...options,
    caption: index === 0 ? options.caption || '' : '',
    wide: figures.length === 1,
  })).filter(Boolean);
  if (items.length === 1) return items[0];
  const chunks = [];
  for (let index = 0; index < items.length; index += 2) {
    const pair = items.slice(index, index + 2);
    if (pair.length === 2) chunks.push(`<div class="k-pair k-wide">${pair.join('')}</div>`);
    else chunks.push(pair[0].replace('class="k-fig', 'class="k-fig k-wide'));
  }
  return chunks.join('');
}

export function asideFigure(figures, options = {}) {
  if (chapterLayout(figures) !== 'aside') return '';
  return figureMarkup(figures[0], { ...options, caption: options.caption || '' });
}

export function heroFigure(photo, options = {}) {
  if (!photo?.src) return '';
  return figureMarkup(photo, { ...options, eager: true, bleed: true });
}
