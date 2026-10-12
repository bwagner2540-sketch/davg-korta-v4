// Parses the eight hub build-master files into page data. Files are loaded with import.meta.glob in [...route].astro.
// Implementation notes (Visual, Study, Interaction, Publish hold, source links, directives) are excluded from public copy.
import { SERVICES } from '../data/services';


export type Block =
  | { type: 'p'; html: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'faq'; items: { q: string; a: string }[] };

export interface Section { nn: string; id: string; title: string; layout: string; blocks: Block[]; meta: Record<string, string> }
export interface Hub { n: string; name: string; route: string; path: string; slug: string; h1: string; eyebrow: string; word: string; sections: Section[] }

const META = /^\*\*(Headline|Deck|CTA|Caption|Final headline|Support line):\*\*\s*(.*?)\s*$/;
const NOTE_LINE = /^\*\*(Visual|Study|Interaction|Image|Images|Photo sequence|Publish hold|Section job|Core lesson|Model-specific release note|Build this[^*]*|Editorial use|Decision reached|Reviewer note|Source check)[^*]*\*\*/i;
const NOTE_PARA = /^(Use [`t]|Rebuild labels|Do not |Use the |Sources?:|Connect first|Rebuild |Confirm |Assign |Phase-Two|These are \*\*example briefs)/;
const DIRECTIVE = /^(Show (a|an|one|the|every|real)\b|Do not (present|publish|put|add|promise|print|use|show|claim)\b|Don't (present|publish|put|add)\b|DAVG must verify|DAVG verifies the current|Insert DAVG|Keep (the|this) (module|slot|proof)|Caption every|Label |Replace |Credit |Manufacturer imagery|Give one short recommendation|Confirm [^.]*before (publish|release))/i;

const stripSources = (t: string) => t.replace(/\s*Sources?:\s*(\[[^\]]+\]\([^)]+\)[,;\s]*(and\s*)?)+\.?/g, '').trim();
const dropDirectives = (t: string) =>
  t.split(/(?<=[.!?])\s+(?=[A-Z*“"])/).filter((x) => !DIRECTIVE.test(x.replace(/^\*\*/, '')) && !/DAVG must verify|before publishing|before release/i.test(x)).join(' ');

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let routeFor: (href: string) => string = (h) => h;

/** Markdown inline → HTML (bold, italics, code, links). Internal hub links are remapped to real routes. */
export function inline(md: string): string {
  let s = esc(md);
  s = s.replace(/`([^`]+)`/g, '<span class="font-mono text-[0.9em]">$1</span>');
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, h) => {
    const href = routeFor(h);
    const ext = /^https?:/.test(href);
    return `<a href="${href}"${ext ? ' target="_blank" rel="noreferrer"' : ''} class="underline decoration-rule-accent underline-offset-4 hover:text-signal">${t}</a>`;
  });
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-medium">$1</strong>');
  s = s.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
  return s;
}

function parseTable(lines: string[]) {
  const rows = lines.filter((l) => !/^\|\s*-/.test(l)).map((l) => l.replace(/^\||\|\s*$/g, '').split('|').map((c) => c.trim()));
  return { head: rows[0] ?? [], rows: rows.slice(1) };
}

function parseBody(lines: string[]) {
  const blocks: Block[] = [];
  const meta: Record<string, string> = {};
  const pushFaq = (q: string, a: string) => {
    const last = blocks[blocks.length - 1];
    if (last && last.type === 'faq') last.items.push({ q, a: inline(a) });
    else blocks.push({ type: 'faq', items: [{ q, a: inline(a) }] });
  };
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    if (l.startsWith('|')) {
      const t: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) t.push(lines[i++]);
      const { head, rows } = parseTable(t);
      blocks.push({ type: 'table', head: head.map((h) => h.replace(/\*\*/g, '')), rows: rows.map((r) => r.map(inline)) });
      continue;
    }
    if (/^- /.test(l)) {
      const items: string[] = [];
      while (i < lines.length && /^- /.test(lines[i])) { const it = dropDirectives(stripSources(lines[i++].slice(2))); if (it) items.push(inline(it)); }
      if (items.length) blocks.push({ type: 'list', items });
      continue;
    }
    if (l.startsWith('### ')) { blocks.push({ type: 'h3', text: l.slice(4).trim() }); i++; continue; }
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith('|') && !lines[i].startsWith('### ') && !/^- /.test(lines[i])) para.push(lines[i++]);
    const qm = para[0].match(/^\*\*([^*]+\?)\*\*\s*$/);
    if (qm && para.length > 1) { pushFaq(qm[1], stripSources(para.slice(1).join(' '))); continue; }
    const kept: string[] = [];
    for (const pl of para) {
      const m = pl.match(META);
      if (m) { meta[m[1].toLowerCase().replace(' ', '_')] = m[2]; continue; }
      const inl = pl.match(/^\*\*([^*]+\?)\*\*\s+(.+)$/);
      if (inl) { pushFaq(inl[1], stripSources(inl[2])); continue; }
      if (NOTE_LINE.test(pl)) continue;
      kept.push(pl.trim());
    }
    const text = dropDirectives(stripSources(kept.join(' '))).trim();
    if (text && !NOTE_PARA.test(text) && !NOTE_LINE.test(text)) blocks.push({ type: 'p', html: inline(text) });
  }
  return { blocks, meta };
}

function parseHub(md: string, svc: (typeof SERVICES)[number]): Hub {
  const lines = md.replace(/\r/g, '').split('\n');
  const route = md.match(/\*\*Route:\*\*\s*`([^`]+)`/)?.[1] ?? `/${svc.file.slice(3)}/`;
  const path = route.replace(/^\/|\/$/g, '');
  const hub: Hub = {
    n: svc.n, name: svc.name, route, path, slug: path.split('/').pop() || svc.file,
    h1: md.match(/^\*\*H1:\*\*\s*(.+?)\s*$/m)?.[1] ?? svc.name,
    eyebrow: md.match(/^\*\*Eyebrow:\*\*\s*(.+?)\s*$/m)?.[1] ?? '',
    word: md.match(/Use `([A-Z ]+)` where a service identifier/)?.[1] ?? '',
    sections: [],
  };
  const layouts: Record<string, string> = {};
  const ci = lines.findIndex((l) => /^## Section checklist/.test(l));
  if (ci >= 0) {
    let j = ci + 1;
    while (j < lines.length && !lines[j].startsWith('|')) j++;
    const t: string[] = [];
    while (j < lines.length && lines[j].startsWith('|')) t.push(lines[j++]);
    parseTable(t).rows.forEach((r) => { if (/^\d\d$/.test(r[0])) layouts[r[0]] = (r[2] || '').toLowerCase(); });
  }
  let cur: { nn: string; title: string } | null = null;
  let buf: string[] = [];
  const flush = () => { if (cur) { const { blocks, meta } = parseBody(buf); hub.sections.push({ ...cur, id: 's' + cur.nn, layout: layouts[cur.nn] ?? '', blocks, meta }); } buf = []; };
  for (const l of lines) {
    const m = l.match(/^## (\d\d) — (.+)$/);
    if (m) { flush(); cur = { nn: m[1], title: m[2].trim() }; continue; }
    if (cur && /^---\s*$/.test(l)) { flush(); cur = null; continue; }
    if (cur) buf.push(l);
  }
  flush();
  return hub;
}

/** files: path → raw markdown; each path ends in `<service file>.md`. */
export function buildHubs(files: Record<string, string>): Hub[] {
// First pass: routes, so cross-hub links can be remapped.
const raw = SERVICES.map((s) => ({ svc: s, md: Object.entries(files).find(([k]) => k.endsWith(`/${s.file}.md`))?.[1] ?? '' }));
const routes = raw.map(({ svc, md }) => ({ key: svc.key, route: md.match(/\*\*Route:\*\*\s*`([^`]+)`/)?.[1] ?? `/${svc.file.slice(3)}/` }));
routeFor = (h) => (h.startsWith('/') ? routes.find((r) => r.key.test(h))?.route ?? h : h);

return raw.map(({ svc, md }) => parseHub(md, svc));
}
