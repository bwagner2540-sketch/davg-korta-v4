import { cp,mkdtemp,writeFile,readFile,rm,symlink,access } from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {spawnSync} from 'node:child_process';
import assert from 'node:assert/strict';
const directory=await mkdtemp(join(tmpdir(),'davg-release-test-'));
try{
 for(const name of ['src','scripts','public','astro.config.mjs','package.json','tsconfig.json'])await cp(name,join(directory,name),{recursive:true});
 await symlink(resolve('node_modules'),join(directory,'node_modules'),'dir');
 const build=()=>spawnSync(process.execPath,['scripts/build.mjs','production'],{cwd:directory,encoding:'utf8',env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'}});
 let result=build();assert.notEqual(result.status,0);assert.match(result.stderr+' '+result.stdout,/no pages are approved/);
 let policy=JSON.parse(await readFile(join(directory,'src/config/publication.json'),'utf8'));
 policy.approvedPages=['src/pages/solutions/motorized-shades.astro'];await writeFile(join(directory,'src/config/publication.json'),JSON.stringify(policy));
 result=build();assert.notEqual(result.status,0);assert.match(result.stderr+' '+result.stdout,/sandbox-only/);
 // Fixture approval is confined to this temporary test copy, never the actual repository.
 policy.approvedPages=['src/pages/index.astro','src/pages/404.astro','src/pages/robots.txt.ts','src/pages/sitemap.xml.ts'];await writeFile(join(directory,'src/config/publication.json'),JSON.stringify(policy));
 await writeFile(join(directory,'src/pages/index.astro'),'<html lang="en"><head><title>Isolated release fixture</title></head><body><h1>Approved fixture</h1></body></html>');
 result=build();assert.equal(result.status,0,result.stderr+'\n'+result.stdout);
 assert.match(await readFile(join(directory,'dist/index.html'),'utf8'),/Approved fixture/);
 for(const excluded of ['solutions/motorized-shades/index.html','systems/motorized-shades/index.html','systems/architectural-lighting/index.html'])await assert.rejects(access(join(directory,'dist',excluded)));
 const deployment=spawnSync(process.execPath,['scripts/assert-production.mjs'],{cwd:directory,encoding:'utf8'});assert.equal(deployment.status,0,deployment.stderr);
 console.log('PASS: empty approval list blocks public build; sandbox approval is rejected; approved-only build omits all sandbox and draft routes; deploy guard accepts only isolated production output.');
}finally{await rm(directory,{recursive:true,force:true});}
