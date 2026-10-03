import { readFile, readdir, access } from 'node:fs/promises';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
import { bodyPhoto, productsFor, sectionRole, spatialWords } from '../src/lib/hub-composition.mjs';
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
 const main=nodes(doc,n=>attrs(n)['data-git-hub'])[0];
 if(main){
  const slug=attrs(main)['data-git-hub'];
  const {loadGitHub}=await import('../src/lib/git-hubs.mjs');
  const hub=loadGitHub(slug);
  assert.equal(nodes(doc,n=>n.tagName==='h1').length,1,`H1 count ${file}`);
  assert.equal(text(nodes(doc,n=>n.tagName==='h1')[0]).trim(),hub.h1,`H1 must be the git hub headline in ${file}`);
  assert(!text(main).includes('One command. Several systems.'),`Rewritten draft copy in ${file}`);
  assert(nodes(doc,n=>n.tagName==='meta'&&attrs(n).name==='robots'&&attrs(n).content==='noindex, nofollow').length,`Draft indexing ${file}`);
  const frame=nodes(main,n=>'data-service-frame' in attrs(n))[0];
  assert(frame,`Sticky shell missing in ${file}`);
  assert(nodes(frame,n=>n.tagName==='h1').length===1,`H1 must sit inside the 25/75 shell in ${file}`);
  const groups=nodes(frame,n=>'data-chapter-group' in attrs(n));
  assert.deepEqual(groups.map(n=>attrs(n).id),hub.sections.map(section=>`s${section.id}`),`Section order ${file}`);
  const aside=nodes(frame,n=>n.tagName==='aside')[0];
  const current=nodes(aside,n=>n.tagName==='a'&&attrs(n)['aria-current']==='page')[0];
  assert(current);const siblings=current.parentNode.childNodes.filter(n=>n.tagName);
  assert.equal(siblings[1].tagName,'ul','Chapter links must be nested beneath the active service');
  assert.deepEqual(nodes(siblings[1],n=>n.tagName==='a').map(n=>text(n).trim()),hub.sections.map(section=>section.title));
  for(const img of nodes(main,n=>n.tagName==='img'&&!String(attrs(n).src||'').startsWith('/brand/'))){
   const a=attrs(img);assert(a.alt&&a.width&&a.height&&a.srcset&&a.sizes,`Incomplete responsive image ${a.src}`);assert(await exists(join(root,a.src)));images++;
  }
  assert(!text(main).includes('Publish hold'),`Publication hold visible in ${file}`);
  assert(!text(main).includes('IBM Plex'),`Retired face named in ${file}`);
  const words=nodes(main,n=>String(attrs(n).class||'').split(/\s+/).includes('architectural-background-title'));
  assert.equal(words.length,1,`Spatial word count ${file}`);
  assert.equal(text(words[0]).trim(),spatialWords[slug],`Spatial word ${file}`);
  assert.equal(nodes(main,n=>attrs(n)['data-signature-study']==='true').length,1,`Signature study ${file}`);
  for(const section of hub.sections){
   const role=sectionRole(slug,section.id);
   const group=groups.find(n=>attrs(n).id===`s${section.id}`);
   assert.equal(attrs(group)['data-surface-role'],role.surface,`Surface ${slug} ${section.id}`);
   assert.equal(attrs(group)['data-section-purpose'],role.purpose,`Purpose ${slug} ${section.id}`);
   const photo=role.photo?bodyPhoto(slug,role.photo):null;
   if(photo)assert(nodes(group,n=>n.tagName==='img'&&attrs(n).src===photo.src).length>=1,`Missing ${photo.src} in ${file} ${section.id}`);
   if(role.study)assert(nodes(group,n=>attrs(n)['data-study-built']==='true').length>=1,`Missing ${role.study} study in ${file} ${section.id}`);
   if(role.products&&productsFor(slug).length)assert(nodes(group,n=>attrs(n)['data-product-rail']!==undefined).length===1,`Missing product rail in ${file} ${section.id}`);
  }
 }
}
assert.equal((await readFile(root+'/robots.txt','utf8')).trim(),'User-agent: *\nDisallow: /');
assert(!/<url>/.test(await readFile(root+'/sitemap.xml','utf8')),'Sitemap must exclude drafts');
assert.match(await readFile(root+'/_headers','utf8'),/X-Robots-Tag: noindex, nofollow/);
const shell=await readFile('src/components/ServicePageShell.astro','utf8');
assert.match(shell,/position:\s*sticky/);
assert.match(shell,/minmax\(0,\s*1fr\)\s*minmax\(0,\s*3fr\)/);
const css=await readFile('src/styles/global.css','utf8');assert.match(css,/Schibsted Grotesk Variable/);assert.match(css,/Instrument Sans Variable/);assert.match(css,/JetBrains Mono/);assert.doesNotMatch(css,/IBM Plex Mono/);
const metadata=JSON.parse(await readFile('node_modules/@fontsource-variable/schibsted-grotesk/metadata.json','utf8'));
console.log(`PASS: ${files.length} HTML routes, ${links} local links, ${images} responsive image instances, git-hub copy inside the sticky 25/75 shell, draft SEO exclusion and registered fonts.`);
console.log(`REMAINING FONT GAP: Schibsted installed range ${metadata.variable.wght.min}–${metadata.variable.wght.max}; true 300 is unavailable.`);
