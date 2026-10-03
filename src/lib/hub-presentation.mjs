import { parseFragment, serialize, serializeOuter } from 'parse5';

const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const descendants = (node, tag) => [...(node.tagName === tag ? [node] : []), ...(node.childNodes || []).flatMap(child => descendants(child, tag))];

/** Present existing parsed Git copy; never supplies a second content source. */
export function presentationGroups(html, frame) {
  const nodes = parseFragment(html).childNodes.filter(node => node.tagName);
  const groups = [{ heading: '', blocks: [] }];
  for (const node of nodes) {
    if (node.tagName === 'h3') groups.push({ heading: serialize(node), blocks: [] });
    else groups.at(-1).blocks.push(toBlock(node, frame));
  }
  // The first useful comparison remains exposed; supplemental matrices are optional depth.
  let primaryTable = true;
  return groups.filter(group => group.blocks.length).map(group => {
    const hasTable = group.blocks.some(block => block.kind === 'matrix');
    const primary = hasTable && primaryTable && frame !== 'pitfalls';
    if (hasTable) primaryTable = false;
    const expandable = frame !== 'questions' && Boolean(group.heading) && (hasTable && !primary || !hasTable && group.blocks.reduce((n,b) => n + b.textLength, 0) > (frame === 'system' ? 650 : 1100));
    return { ...group, primary, expandable };
  });
}

function toBlock(node, frame) {
  const html = serializeOuter(node);
  const textLength = text(node).length;
  if (node.tagName === 'div' && descendants(node, 'table').length) {
    const table = descendants(node, 'table')[0];
    const headers = descendants(table, 'thead').flatMap(head => descendants(head, 'th')).map(cell => serialize(cell));
    const rows = descendants(table, 'tbody').flatMap(body => descendants(body, 'tr')).map(row => row.childNodes.filter(cell => cell.tagName === 'th' || cell.tagName === 'td').map(cell => serialize(cell)));
    return { kind: 'matrix', html, headers, rows, textLength };
  }
  if (frame === 'questions' && node.tagName === 'p') {
    const first = node.childNodes.find(child => child.tagName || child.nodeName === '#text' && child.value.trim());
    if (first?.tagName === 'strong' && /\?\s*$/.test(text(first))) {
      return { kind: 'question', title: serialize(first), html: node.childNodes.filter(child => child !== first).map(serializeOuter).join(''), textLength };
    }
  }
  if (['process', 'handoff', 'pitfalls'].includes(frame)) {
    if (node.tagName === 'ul' || node.tagName === 'ol') return { kind: 'steps', items: node.childNodes.filter(child => child.tagName === 'li').map(serialize), textLength };
    if (node.tagName === 'p') {
      const labels = node.childNodes.filter(child => child.tagName === 'strong' && /:\s*$/.test(text(child)));
      if (labels.length > 1) {
        const items = [];
        for (const child of node.childNodes) {
          if (labels.includes(child)) items.push(serializeOuter(child));
          else if (items.length) items[items.length - 1] += serializeOuter(child);
        }
        return { kind: 'steps', items, textLength };
      }
    }
  }
  return { kind: 'prose', html, textLength };
}

export function hasPublicSection(section, role, photo, products) {
  return section.id === '01' || section.id === '15' || Boolean(section.html.trim() || section.deck || section.support || role.study || photo || products.length);
}
