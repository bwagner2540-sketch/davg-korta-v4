export interface HubSection {
  id: string;
  title: string;
  headline: string;
  deck: string;
  cta: string;
  secondary: string;
  support: string;
  html: string;
}

export interface HubDocument {
  name: string;
  slug: string;
  route: string;
  seoTitle: string;
  description: string;
  sections: HubSection[];
}

const NOTE_LABEL = /^(Visual|Study|Interaction|Decision reached|Status|Reviewer|Source check)\b/i;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inline(value: string) {
  const escaped = escapeHtml(value.trim());
  return escaped
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
}

function isNote(line: string) {
  const plain = line.replace(/^\*\*/, '').replace(/\*\*$/, '');
  return NOTE_LABEL.test(plain);
}

function grab(body: string, label: string) {
  const match = body.match(new RegExp(`^\\*\\*${label}:\\*\\*\\s*(.+)$`, 'm'));
  return match?.[1]?.trim() ?? '';
}

function renderTable(rows: string[]) {
  const cells = rows
    .filter((row) => !/^\|\s*-+/.test(row.replace(/ /g, '')))
    .map((row) => row.split('|').slice(1, -1).map((cell) => cell.trim()));
  if (cells.length === 0) return '';
  const [head, ...body] = cells;
  const headHtml = head.map((cell) => `<th>${inline(cell)}</th>`).join('');
  const bodyHtml = body
    .map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join('')}</tr>`)
    .join('');
  return `<div class="hub-table"><table><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`;
}

function renderBlocks(body: string) {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const out: string[] = [];
  let paragraph: string[] = [];
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
      const table: string[] = [];
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
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s/, ''));
        index += 1;
      }
      out.push(`<ol>${items.map((item) => `<li>${inline(item)}</li>`).join('')}</ol>`);
      continue;
    }
    if (trimmed.startsWith('- ')) {
      flush();
      const items: string[] = [];
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

export function parseHubMarkdown(markdown: string): HubDocument {
  const name = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? 'Service';
  const route = markdown.match(/\*\*Route:\*\*\s*`([^`]+)`/)?.[1] ?? '/';
  const slug = route.replace(/^\/solutions\//, '').replace(/\/$/, '');
  const preamble = markdown.split(/\n(?=## \d{2} — )/)[0] ?? '';
  const seoTitle = grab(preamble, 'SEO title') || `${name} | DAVG`;
  const description = grab(preamble, 'Meta description');
  const chunks = markdown.split(/\n(?=## \d{2} — )/).slice(1);

  const sections = chunks.map((chunk) => {
    const heading = chunk.match(/^## (\d{2}) — (.+)\n/);
    const id = heading?.[1] ?? '00';
    const title = heading?.[2]?.trim() ?? name;
    const body = chunk.replace(/^## \d{2} — .+\n/, '');
    return {
      id,
      title,
      headline: grab(body, 'Headline') || grab(body, 'Final headline'),
      deck: grab(body, 'Deck'),
      cta: grab(body, 'CTA'),
      secondary: grab(body, 'Secondary'),
      support: grab(body, 'Support line'),
      html: renderBlocks(body),
    };
  });

  return { name, slug, route, seoTitle, description, sections };
}
