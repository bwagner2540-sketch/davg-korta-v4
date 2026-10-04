import { parseFragment, serializeOuter } from 'parse5';

const textOf = (node) => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(textOf).join('');

function attr(node, name, value) {
  const found = node.attrs?.find((item) => item.name === name);
  if (found) found.value = value;
  else node.attrs.push({ name, value });
}

function addClass(node, value) {
  const found = node.attrs?.find((item) => item.name === 'class');
  const current = found?.value?.split(/\s+/).filter(Boolean) ?? [];
  if (!current.includes(value)) current.push(value);
  attr(node, 'class', current.join(' '));
}

function containsTable(node) {
  if (!node?.tagName) return false;
  if (node.tagName === 'table') return true;
  return (node.childNodes || []).some(containsTable);
}

function walk(node, visit) {
  if (!node?.tagName) return;
  visit(node);
  (node.childNodes || []).forEach((child) => walk(child, visit));
}

function labelTable(table) {
  addClass(table, 'k-table');
  const headers = [];
  walk(table, (node) => {
    if (node.tagName === 'th' && node.parentNode?.parentNode?.tagName === 'thead') headers.push(textOf(node).trim());
  });
  const rows = (table.childNodes || []).filter((node) => node.tagName === 'tbody')
    .flatMap((body) => (body.childNodes || []).filter((node) => node.tagName === 'tr'));
  if (!rows.length) {
    (table.childNodes || []).filter((node) => node.tagName === 'tr').forEach((row) => rows.push(row));
  }
  rows.forEach((row) => {
    (row.childNodes || []).filter((cell) => cell.tagName === 'td' || cell.tagName === 'th').forEach((cell, index) => {
      if (cell.tagName === 'th') {
        cell.tagName = 'td';
        cell.nodeName = 'td';
      }
      const label = headers[index] || headers[0] || '';
      if (label) attr(cell, 'data-label', label);
    });
  });
}

function transform(node) {
  walk(node, (current) => {
    if (current.tagName === 'ul' || current.tagName === 'ol') addClass(current, 'k-list');
    if (current.tagName === 'table') labelTable(current);
  });
  if (node.tagName === 'div' && containsTable(node)) {
    addClass(node, 'k-wide');
    const classes = node.attrs.find((item) => item.name === 'class');
    if (classes) classes.value = classes.value.split(/\s+/).filter((item) => item && item !== 'hub-table').concat('k-wide').filter((item, index, all) => all.indexOf(item) === index).join(' ');
  }
  return serializeOuter(node);
}

function summaryText(nodes) {
  const heading = nodes.find((node) => node.tagName === 'h3');
  if (heading) return textOf(heading).trim();
  const table = nodes.find(containsTable);
  const header = [];
  if (table) walk(table, (node) => {
    if (node.tagName === 'th' && header.length < 1) header.push(textOf(node).trim());
  });
  return header[0] || '';
}

function more(nodes) {
  const summary = summaryText(nodes);
  const body = nodes.filter((node) => node.tagName !== 'h3').map(transform).join('');
  return `<details class="k-more"><summary>${summary}</summary>${body}</details>`;
}

function nextHeading(nodes, start) {
  for (let index = start; index < nodes.length; index += 1) {
    if (nodes[index].tagName === 'h3') return index;
  }
  return nodes.length;
}

/** One visible table per chapter. Further tables keep their heading inside `.k-more`. */
export function composeChapterHtml(html) {
  const source = String(html || '').replace(/<!--[\s\S]*?-->/g, '');
  const fragment = parseFragment(`<div id="chapter-root">${source}</div>`);
  const root = fragment.childNodes.find((node) => node.tagName === 'div');
  const nodes = (root?.childNodes || []).filter((node) => node.tagName);
  const out = [];
  let seenTable = false;
  let index = 0;
  while (index < nodes.length) {
    const node = nodes[index];
    if (node.tagName === 'h3') {
      const end = nextHeading(nodes, index + 1);
      const group = nodes.slice(index, end);
      const tabular = group.some(containsTable);
      if (tabular && seenTable) out.push(more(group));
      else {
        group.forEach((item) => out.push(transform(item)));
        if (tabular) seenTable = true;
      }
      index = end;
      continue;
    }
    if (containsTable(node)) {
      if (seenTable) out.push(more([node]));
      else {
        out.push(transform(node));
        seenTable = true;
      }
      index += 1;
      continue;
    }
    out.push(transform(node));
    index += 1;
  }
  return out.join('\n');
}

export function insertAfterLead(html, insertion) {
  if (!insertion) return html;
  const match = String(html || '').match(/^\s*<p\b[^>]*>[\s\S]*?<\/p>/i);
  if (!match) return `${insertion}${html || ''}`;
  const end = match.index + match[0].length;
  return `${html.slice(0, end)}${insertion}${html.slice(end)}`;
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function noteComments(notes) {
  return (notes || []).map((note) => `<!-- ${String(note).replace(/--/g, '—')} -->`).join('');
}
