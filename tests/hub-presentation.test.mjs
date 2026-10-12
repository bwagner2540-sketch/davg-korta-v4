import test from 'node:test';
import assert from 'node:assert/strict';
import { loadGitHub, loadGitHubs } from '../src/lib/git-hubs.mjs';
import { presentationGroups, hasPublicSection } from '../src/lib/hub-presentation.mjs';
import { sectionRole, bodyPhoto, productsFor, studyPhotosFor } from '../src/lib/hub-composition.mjs';

test('primary comparison is exposed and secondary comparisons retain their original table content', () => {
 const source=loadGitHub('home-intelligence').sections[3];
 const groups=presentationGroups(source.html,'system');
 const primary=groups.filter(g=>g.primary);
 assert.equal(primary.length,1);
 assert.equal(primary[0].blocks.find(b=>b.kind==='matrix').rows.length,6);
 const secondary=groups.filter(g=>g.expandable&&g.blocks.some(b=>b.kind==='matrix'));
 assert.equal(secondary.length,2);
 assert.match(secondary[1].blocks.map(b=>b.html).join(''),/Remote access and away-from-home control/);
});

test('project reservations stay in Git but do not create empty visitor chapters', () => {
 for(const hub of loadGitHubs()){
  const section=hub.sections[10],role=sectionRole(hub.slug,'11');
  assert.equal(hasPublicSection(section,role,bodyPhoto(hub.slug,'Verified DAVG project wide'),[]),false,hub.slug);
 }
});

test('process and FAQ compositions preserve links and copy without manufacturing new claims', () => {
 const home=loadGitHub('home-intelligence');
 const steps=presentationGroups(home.sections[8].html,'process')[0].blocks[0];
 assert.equal(steps.kind,'steps');assert.equal(steps.items.length,4);assert.match(steps.items[0],/New construction/);
 const questions=presentationGroups(home.sections[13].html,'questions').flatMap(g=>g.blocks).filter(b=>b.kind==='question');
 assert.equal(questions.length,4);assert.match(questions[1].html,/href="https:\/\/www.control4.com\/services"/);
 assert.match(questions[2].html,/Remote access, streaming/);
});

test('study interface and product rail use different Home Intelligence photographs',()=>{
 const study=studyPhotosFor('home-intelligence').touchscreen;
 assert.ok(study?.src);
 assert(!productsFor('home-intelligence').some(photo=>photo.src===study.src));
 assert.equal(productsFor('home-intelligence').length,2);
});
