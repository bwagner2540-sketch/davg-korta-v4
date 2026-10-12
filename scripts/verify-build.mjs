import { readFile, readdir, access } from 'node:fs/promises';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
import { hasPublicSection } from '../src/lib/hub-presentation.mjs';
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
  const frame=nodes(main,n=>'data-shell' in attrs(n))[0];
  assert(frame,`Sticky shell missing in ${file}`);
  assert(nodes(frame,n=>n.tagName==='h1').length===1,`H1 must sit inside the shell in ${file}`);
  const publicSections=hub.sections.filter(section=>{const role=sectionRole(slug,section.id);return hasPublicSection(section,role,role.photo?bodyPhoto(slug,role.photo):null,role.products?productsFor(slug):[]);});
  const groups=nodes(frame,n=>'data-chapter-group' in attrs(n));
  assert.deepEqual(groups.map(n=>attrs(n).id),publicSections.map(section=>`s${section.id}`),`Section order ${file}`);
  const aside=nodes(frame,n=>n.tagName==='aside')[0];
  assert.equal(nodes(aside,n=>n.tagName==='img').length,0,`Rail must not contain a logo in ${file}`);
  const chapterLinks=nodes(aside,n=>n.tagName==='a'&&'data-chapter-link' in attrs(n));
  const chapterSections=publicSections.filter(section=>section.id!=='01'&&section.id!=='15');
  assert.deepEqual(chapterLinks.map(n=>text((n.childNodes||[]).filter(c=>c.tagName==='span').at(-1)).trim()),chapterSections.map(section=>section.title),`Chapter index ${file}`);
  for(const img of nodes(main,n=>n.tagName==='img'&&!String(attrs(n).src||'').startsWith('/brand/'))){
   const a=attrs(img);assert(a.alt&&a.width&&a.height&&a.srcset&&a.sizes,`Incomplete responsive image ${a.src}`);assert(await exists(join(root,a.src)));images++;
  }
  assert(!text(main).includes('Publish hold'),`Publication hold visible in ${file}`);
  assert(!text(main).includes('IBM Plex'),`Retired face named in ${file}`);
  const words=nodes(main,n=>String(attrs(n).class||'').split(/\s+/).includes('architectural-background-title'));
  assert.equal(words.length,1,`Spatial word count ${file}`);
  assert.equal(text(words[0]).trim(),spatialWords[slug],`Spatial word ${file}`);
  assert.equal(nodes(main,n=>attrs(n)['data-signature-study']==='true').length,1,`Signature study ${file}`);
  const ink=groups.filter(n=>String(attrs(n).class||'').includes('k-ch--ink')&&'data-chapter' in attrs(n));
  assert.ok(ink.length<=1,`More than one ink chapter in ${file}`);
  for(const section of publicSections){
   const role=sectionRole(slug,section.id);
   const group=groups.find(n=>attrs(n).id===`s${section.id}`);
   const photo=role.photo?bodyPhoto(slug,role.photo):null;
   if(photo)assert(nodes(group,n=>n.tagName==='img'&&attrs(n).src===photo.src).length>=1,`Missing ${photo.src} in ${file} ${section.id}`);
   if(role.products&&productsFor(slug).length)assert(nodes(group,n=>n.tagName==='img').length>=1,`Missing product photograph in ${file} ${section.id}`);
   if(section.id!=='01'&&section.id!=='15')assert(String(attrs(group).class||'').includes('k-ch'),`Chapter frame ${slug} ${section.id}`);
  }
  assert(String(attrs(groups[0]).class||'').includes('k-hero'),`Opening ${file}`);
  assert.equal(nodes(groups[0],n=>attrs(n)['data-hero-bleed']==='true').length,1,`Opening photograph must bleed in ${file}`);
  assert(nodes(main,n=>attrs(n)['data-composed-copy']!==undefined).length,`Composed copy missing ${file}`);
  const visible=text(main).replace(/<!--[\s\S]*?-->/g,'');
  assert(!visible.includes('rights unconfirmed'),`Asset review notes visible ${file}`);
  assert(!visible.includes('not verified DAVG project proof'),`Provenance visible ${file}`);
  assert(!visible.includes('Core lesson:'),`Production label visible ${file}`);
  assert(!visible.includes('sticky explanatory'),`Layout brief visible ${file}`);
  assert(!nodes(main,n=>n.tagName==='h2').some(n=>text(n).includes('verify the installed scope')),`Empty proof heading ${file}`);
  for(const section of publicSections){
   const source=section.html.replace(/<!--[\s\S]*?-->/g,'');
   for(const cell of nodes(parse(source),n=>n.tagName==='td'||n.tagName==='th')){
    assert(text(main).includes(text(cell)),`Lost comparison content ${slug} ${section.id}: ${text(cell)}`);
   }
  }
  const ledger=nodes(main,n=>n.tagName==='table');
  if(ledger.length)assert(ledger.every(table=>String(attrs(table).class||'').includes('k-table')),`Chapter table ${file}`);
 }
}
assert.equal((await readFile(root+'/robots.txt','utf8')).trim(),'User-agent: *\nDisallow: /');
assert(!/<url>/.test(await readFile(root+'/sitemap.xml','utf8')),'Sitemap must exclude drafts');
assert.match(await readFile(root+'/_headers','utf8'),/X-Robots-Tag: noindex, nofollow/);
const motion=await readFile('src/styles/motion.css','utf8');
assert.match(motion,/position:\s*sticky/);
assert.match(motion,/var\(--rail-width\)/);
const css=await readFile('src/styles/global.css','utf8');assert.match(css,/Schibsted Grotesk Variable/);assert.match(css,/Instrument Sans Variable/);assert.match(css,/JetBrains Mono/);assert.doesNotMatch(css,/IBM Plex Mono/);assert.match(css,/minmax\(240px,\s*18%\)/);
const hubPage=await readFile('src/components/services/hubs/HubPage.astro','utf8');
assert.match(hubPage,/k-hero/);
assert.match(hubPage,/k-ch--ink/);
const metadata=JSON.parse(await readFile('node_modules/@fontsource-variable/schibsted-grotesk/metadata.json','utf8'));
console.log(`PASS: ${files.length} HTML routes, ${links} local links, ${images} responsive image instances, git-hub copy inside the chapter shell, draft SEO exclusion and registered fonts.`);
console.log(`REMAINING FONT GAP: Schibsted installed range ${metadata.variable.wght.min}–${metadata.variable.wght.max}; true 300 is unavailable.`);
