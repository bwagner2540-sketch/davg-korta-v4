import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function readHubFilesFromDisk() {
  const fromFile = join(dirname(fileURLToPath(import.meta.url)), '../../docs/v4-build/hubs');
  const dir = existsSync(fromFile) ? fromFile : join(process.cwd(), 'docs/v4-build/hubs');
  if (!existsSync(dir)) throw new Error(`Git hubs not found. Tried ${fromFile} and ${dir}.`);
  return readdirSync(dir)
    .filter((file) => /^DAVG-V4-Hub-\d{2}-.+\.md$/.test(file))
    .sort()
    .map((file) => readFileSync(join(dir, file), 'utf8'));
}
const NOTE_LABEL = /^(Visual|Study|Interaction|Decision reached|Status|Reviewer|Source check)\b/i;

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inline(value) {
  const escaped = escapeHtml(value.trim());
  return escaped
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
}

function isNote(line) {
  const plain = line.replace(/^\*\*/, '').replace(/\*\*$/, '');
  return NOTE_LABEL.test(plain);
}

function grab(body, label) {
  const match = body.match(new RegExp(`^\\*\\*${label}:\\*\\*\\s*(.+)$`, 'm'));
  return match?.[1]?.trim() ?? '';
}

function renderTable(rows) {
  const cells = rows
    .filter((row) => !/^\|[-:\s|]+\|$/.test(row.replace(/ /g, '')))
    .map((row) => row.split('|').slice(1, -1).map((cell) => cell.trim()));
  if (cells.length === 0) return '';
  const [head, ...body] = cells;
  const headHtml = head.map((cell) => `<th scope="col">${inline(cell)}</th>`).join('');
  const bodyHtml = body
    .map((row) => `<tr>${row.map((cell, index) => index === 0 ? `<th scope="row">${inline(cell)}</th>` : `<td>${inline(cell)}</td>`).join('')}</tr>`)
    .join('');
  return `<div class="hub-table"><table><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`;
}

function renderBlocks(body) {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let paragraph = [];
  let index = 0;

  const flush = () => {
    if (paragraph.length === 0) return;
    out.push(`<p>${inline(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  while (index < lines.length) {
    const trimmed = lines[index].trim();
    if (!trimmed || trimmed === '---') {
      flush();
      index += 1;
      continue;
    }
    if (isNote(trimmed) || /^\*\*(Headline|Deck|CTA|Secondary|Eyebrow|Final headline|Support line|H1|SEO title|Meta description):\*\*/.test(trimmed)) {
      flush();
      index += 1;
      continue;
    }
    if (trimmed.startsWith('|')) {
      flush();
      const table = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        table.push(lines[index].trim());
        index += 1;
      }
      out.push(renderTable(table));
      continue;
    }
    if (trimmed.startsWith('### ')) {
      flush();
      out.push(`<h3>${inline(trimmed.slice(4))}</h3>`);
      index += 1;
      continue;
    }
    if (/^\d+\.\s/.test(trimmed)) {
      flush();
      const items = [];
      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s/, ''));
        index += 1;
      }
      out.push(`<ol>${items.map((item) => `<li>${inline(item)}</li>`).join('')}</ol>`);
      continue;
    }
    if (trimmed.startsWith('- ')) {
      flush();
      const items = [];
      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      out.push(`<ul>${items.map((item) => `<li>${inline(item)}</li>`).join('')}</ul>`);
      continue;
    }
    paragraph.push(trimmed);
    index += 1;
  }

  flush();
  return out.join('\n');
}

export function parseHubMarkdown(markdown) {
  const name = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? 'Service';
  const route = markdown.match(/\*\*Route:\*\*\s*`([^`]+)`/)?.[1] ?? '/';
  const slug = route.replace(/^\/solutions\//, '').replace(/\/$/, '');
  const preamble = markdown.split(/\n(?=## \d{2} — )/)[0] ?? '';
  const chunks = markdown.split(/\n(?=## \d{2} — )/).slice(1);
  const sections = chunks.map((chunk) => {
    const heading = chunk.match(/^## (\d{2}) — (.+)\n/);
    const body = chunk.replace(/^## \d{2} — .+\n/, '');
    return {
      id: heading?.[1] ?? '00',
      title: heading?.[2]?.trim() ?? name,
      headline: grab(body, 'Headline') || grab(body, 'Final headline'),
      deck: grab(body, 'Deck'),
      cta: grab(body, 'CTA'),
      secondary: grab(body, 'Secondary'),
      support: grab(body, 'Support line'),
      html: renderBlocks(body),
    };
  });
  return {
    name,
    slug,
    route,
    h1: grab(preamble, 'H1'),
    seoTitle: grab(preamble, 'SEO title') || `${name} | DAVG`,
    description: grab(preamble, 'Meta description'),
    sections,
  };
}

let cache;

function markdownSources() {
  try {
    const modules = import.meta.glob('../../docs/v4-build/hubs/DAVG-V4-Hub-*.md', {
      query: '?raw',
      import: 'default',
      eager: true,
    });
    const values = Object.values(modules).filter((value) => typeof value === 'string');
    if (values.length > 0) return values;
  } catch {
    // Node's test runner has no Vite glob. The filesystem read below covers that case.
  }
  return readHubFilesFromDisk();
}

export function loadGitHubs() {
  if (cache) return cache;
  cache = markdownSources().map((markdown) => parseHubMarkdown(markdown));
  const slugs = cache.map((hub) => hub.slug);
  if (new Set(slugs).size !== slugs.length) throw new Error('Git hub routes are not unique.');
  return cache;
}

export function loadGitHub(slug) {
  const hub = loadGitHubs().find((item) => item.slug === slug);
  if (!hub) throw new Error(`No git hub for "${slug}" in docs/v4-build/hubs/.`);
  if (hub.sections.length !== 15) throw new Error(`${slug} parsed ${hub.sections.length} sections; the git hub has 15.`);
  if (!hub.h1) throw new Error(`${slug} is missing its git H1.`);
  return hub;
}
