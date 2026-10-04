import { productsFor, studyPhotosFor } from './hub-composition.mjs';
import { visibleCaption } from './chapter-figures.mjs';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function readImages() {
  const fromModule = join(dirname(fileURLToPath(import.meta.url)), '../data/images.json');
  const fromWorkspace = join(process.cwd(), 'src/data/images.json');
  const path = existsSync(fromModule) ? fromModule : fromWorkspace;
  return JSON.parse(readFileSync(path, 'utf8'));
}

const images = readImages();

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const FILING = /filed as|cutout preserved|finish reference|not a confirmed|model identity|product photograph|manufacturer|source file|source filename|not verified|not a before|laboratory confirmation|rights unconfirmed/i;

function cleanSentences(value) {
  return visibleCaption(value)
    .split(/(?<=[.!])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence && !FILING.test(sentence))
    .join(' ')
    .trim();
}

function lightingName(photo) {
  const title = String(photo?.title || '').trim();
  const filed = title.match(/^(.*?)\s*filed as\s+(.+)$/i);
  if (!filed) return title.replace(/\.$/, '').trim();
  const model = filed[2].replace(/\.$/, '').trim();
  const kind = /fixture/i.test(filed[1]) ? 'fixture' : 'keypad';
  return `${model} ${kind}`;
}

export function lightingFrame(photo) {
  if (photo?.fit === 'contain') return 'portrait';
  const record = images[photo?.src];
  if (!record?.width || !record?.height) return 'room';
  const ratio = record.height / record.width;
  if (ratio > 1.15) return 'portrait';
  if (ratio > 0.82) return 'plate';
  return 'room';
}

export function lightingFigure(photo, { eager = false, bleed = false, caption = '' } = {}) {
  const record = images[photo?.src];
  if (!record) return '';
  const frame = lightingFrame(photo);
  const shown = (caption && (cleanSentences(caption) || caption)) || cleanSentences(photo.caption || '') || lightingName(photo);
  const alt = cleanSentences(photo.alt || '') || lightingName(photo) || 'Architectural lighting photograph';
  const srcset = (record.variants || []).map((item) => `${item.src} ${item.width}w`).join(', ');
  const sizes = bleed
    ? '(min-width: 900px) 58vw, 100vw'
    : frame === 'portrait'
      ? '(min-width: 900px) 16rem, 70vw'
      : '(min-width: 900px) 46vw, 100vw';
  return `<figure class="lit-fig lit-fig--${frame}" data-photo-slot="${escapeHtml(photo.id)}"${bleed ? ' data-hero-bleed="true"' : ''}>
<img src="${escapeHtml(photo.src)}" alt="${escapeHtml(alt)}" width="${record.width}" height="${record.height}" srcset="${escapeHtml(srcset)}" sizes="${sizes}" loading="${eager ? 'eager' : 'lazy'}"${eager ? ' fetchpriority="high"' : ''} decoding="async" />
${shown ? `<figcaption>${escapeHtml(shown)}</figcaption>` : ''}
</figure>`;
}

export function lightingPhotos() {
  const slots = studyPhotosFor('architectural-lighting');
  const products = productsFor('architectural-lighting').slice().sort((a, b) => {
    const order = { room: 0, plate: 1, portrait: 2 };
    return (order[lightingFrame(a)] ?? 2) - (order[lightingFrame(b)] ?? 2);
  });
  return { hero: slots['01'], study: slots['02'], room: slots['03'], products };
}

/** Turn one paragraph of labeled routes into separate rows without changing the words. */
export function routeRows(html) {
  const match = String(html || '').match(/<p>([\s\S]*?)<\/p>/);
  if (!match) return html;
  const parts = match[1].split(/(?=<strong>)/).map((part) => part.trim()).filter(Boolean);
  if (parts.length < 2) return html;
  return `<div class="lit-routes">${parts.map((part) => `<p>${part}</p>`).join('')}</div>`;
}

export function splitAtHeading(html) {
  const source = String(html || '');
  const index = source.indexOf('<h3');
  if (index < 0) return { before: source, after: '' };
  return { before: source.slice(0, index), after: source.slice(index) };
}

export function markLightingTables(html) {
  let count = 0;
  return String(html || '').replace(/class="([^"]*\bk-wide\b[^"]*)"/g, (_full, classes) => {
    count += 1;
    const role = count === 1 ? 'lit-platform' : 'lit-bands';
    return `class="${classes} lit-scroll ${role}"`;
  });
}

function markProcessSteps(html) {
  return html.replace(/<ol class="k-list lit-process">([\s\S]*?)<\/ol>/g, (_full, inner) => {
    const items = inner.replace(/<li>([\s\S]*?)<\/li>/g, (_li, body) => {
      const parts = body.match(/^(<strong>[\s\S]*?<\/strong>)\s*([\s\S]*)$/);
      if (!parts) return `<li>${body}</li>`;
      return `<li>${parts[1]}<div class="lit-step">${parts[2]}</div></li>`;
    });
    return `<ol class="k-list lit-process">${items}</ol>`;
  });
}

export function markLightingCopy(html) {
  let lists = 0;
  const marked = markLightingTables(html)
    .replace(/<ol class="k-list"/g, () => {
      lists += 1;
      const role = lists === 1 ? 'lit-decisions' : lists === 2 ? 'lit-process' : 'lit-asks';
      return `<ol class="k-list ${role}"`;
    })
    .replace(/<ul class="k-list"/g, '<ul class="k-list lit-checks"');
  return markProcessSteps(marked);
}
