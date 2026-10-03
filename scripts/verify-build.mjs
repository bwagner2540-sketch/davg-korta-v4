import { readFile, readdir, access } from 'node:fs/promises';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
const root='dist-sandbox';
const attrs=node=>Object.fromEntries((node.attrs||[]).map(a=>[a.name,a.value]));
const nodes=(node,predicate)=>[...(predicate(node)?[node]:[]),...(node.childNodes||[]).flatMap(n=>nodes(n,predicate))];
const text=node=>node.nodeName==='#text'?node.value:(node.childNodes||[]).map(text).join('');
const exists=async path=>{try{await access(path);return true;}catch{return false;}};
const files=[];
const walk=async dir=>{for(const entry of await readdir(dir,{withFileTypes:true})){const path=join(dir,entry.name);if(entry.isDirectory())await walk(path);else if(entry.name.endsWith('.html'))files.push(path);}};
await walk(root);
let images=0, links=0;
for(const file of files){
 const html=await readFile(file,'utf8'),doc=parse(html);
 const ids=nodes(doc,n=>attrs(n).id).map(n=>attrs(n).id);
 assert.equal(new Set(ids).size,ids.length,`Duplicate IDs in ${file}`);
 for(const link of nodes(doc,n=>n.tagName==='a'&&attrs(n).href)){
   const href=attrs(link).href;if(/^(mailto:|tel:|https?:)/.test(href))continue;
   const [path,hash]=href.split('#');
   const target=path?(path.endsWith('/')?join(root,path,'index.html'):join(root,path)):file;
   assert(await exists(target),`Broken link ${href} in ${file}`);
   if(hash){const targetIds=path?nodes(parse(await readFile(target,'utf8')),n=>attrs(n).id).map(n=>attrs(n).id):ids;assert(targetIds.includes(decodeURIComponent(hash)),`Missing anchor ${href} in ${file}`);}
   links++;
 }
 const main=nodes(doc,n=>attrs(n)['data-design-sandbox'])[0];
 if(main){
  assert.equal(nodes(doc,n=>n.tagName==='h1').length,1,`H1 count ${file}`);
  assert(nodes(doc,n=>n.tagName==='meta'&&attrs(n).name==='robots'&&attrs(n).content==='noindex, nofollow').length,`Draft indexing ${file}`);
  const groups=nodes(main,n=>'data-chapter-group' in attrs(n));
  assert.deepEqual(groups.map(n=>attrs(n).id),['overview','design','systems','installation','investment']);
  const opening=nodes(main,n=>'data-opening-section' in attrs(n));
  const closing=nodes(main,n=>'data-closing-section' in attrs(n));
  assert.equal(opening.length,2);assert.equal(closing.length,2);
  const frame=nodes(main,n=>'data-service-frame' in attrs(n))[0];
  assert(frame);assert(!nodes(frame,n=>'data-opening-section' in attrs(n)).length);assert(!nodes(frame,n=>'data-closing-section' in attrs(n)).length);
  const aside=nodes(frame,n=>n.tagName==='aside')[0];
  const current=nodes(aside,n=>n.tagName==='a'&&attrs(n)['aria-current']==='page')[0];
  assert(current);const siblings=current.parentNode.childNodes.filter(n=>n.tagName);
  assert.equal(siblings[1].tagName,'ul','Chapter links must be nested beneath the active service');
  assert.deepEqual(nodes(siblings[1],n=>n.tagName==='a').map(text),['Overview','Design','Systems','Installation','Investment']);
  assert.equal(nodes(aside,n=>'data-chapter' in attrs(n)).length,5);
  for(const img of nodes(main,n=>n.tagName==='img')){
   const a=attrs(img);assert(a.alt&&a.width&&a.height&&a.srcset&&a.sizes,`Incomplete responsive image ${a.src}`);assert(await exists(join(root,a.src)));images++;
  }
 }
}
assert.equal((await readFile(root+'/robots.txt','utf8')).trim(),'User-agent: *\nDisallow: /');
assert(!/<url>/.test(await readFile(root+'/sitemap.xml','utf8')),'Sitemap must exclude drafts');
assert.match(await readFile(root+'/_headers','utf8'),/X-Robots-Tag: noindex, nofollow/);
const css=await readFile('src/styles/global.css','utf8');assert.match(css,/Schibsted Grotesk Variable/);assert.match(css,/Instrument Sans Variable/);assert.match(css,/IBM Plex Mono/);assert.doesNotMatch(css,/jetbrains/i);
const metadata=JSON.parse(await readFile('node_modules/@fontsource-variable/schibsted-grotesk/metadata.json','utf8'));
console.log(`PASS: ${files.length} HTML routes, ${links} local links, ${images} responsive image instances, bounded five-chapter structure, nested rail, draft SEO exclusion and registered fonts.`);
console.log(`REMAINING FONT GAP: Schibsted installed range ${metadata.variable.wght.min}–${metadata.variable.wght.max}; true 300 is unavailable.`);
