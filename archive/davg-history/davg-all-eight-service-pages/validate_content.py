import json, pathlib, re
root=pathlib.Path(__file__).parent
pages=[json.loads(p.read_text()) for p in (root/'src/content/services').glob('*.json')]
sources=json.loads((root/'research/sources.json').read_text())
assert len(pages)==8
assert len({p['slug'] for p in pages})==8
ban=re.compile(r'\b(leverage|delve|testament|paramount|seamlessly|utilize|optimize|paradigm shift|tapestry|game-changer|synergistic)\b',re.I)
for p in pages:
 assert p['seo']['canonicalPath']==f"/systems/{p['slug']}/"
 assert [x['label'] for x in p['navigation']]==['Overview','Design','Systems','Installation','Investment']
 assert [x['id'] for x in p['groups']]==['overview','design','systems','installation','investment']
 grouped=[id for g in p['groups'] for id in g['chapterIds']]
 assert len(grouped)==len(set(grouped))
 assert set(grouped)=={c['id'] for c in p['chapters']}
 assert p['signatureStudy']['group']=='design'
 assert p['layoutContract']['splitStart']=='overview' and p['layoutContract']['splitEnd']=='investment'
 assert p['openingQA']['question'] and len(p['openingQA']['answer'])>=1
 assert len({c['id'] for c in p['chapters']})==len(p['chapters'])
 assert {x['type'] for x in p['projectPaths']}=={'retrofit','remodel','custom-build'}
 assert len(p['scopeOptions'])==3 and len(p['faqs'])>=4
 public=[p['openingQA']['question'],*p['openingQA']['answer'],p['hero']['heading'],p['hero']['deck'],p['inquiry']['heading'],p['inquiry']['body']]
 for c in p['chapters']:
  public += [c['title'],*c['paragraphs']]
  assert set(c['sources']) <= set(sources)
  if c['table']:
   assert all(len(r)==len(c['table']['headers']) for r in c['table']['rows'])
   public += c['table']['headers']+[v for r in c['table']['rows'] for v in r]
 for x in p['projectPaths']:public += [x['title'],x['body']]
 for x in p['scopeOptions']:public += [x['label'],x['scope'],x['dependencies']]
 for x in p['faqs']:public += [x['question'],x['answer']]
 assert not ban.search(' '.join(public)), p['slug']
 for c in p['chapters']:
  for para in c['paragraphs']:
   assert len(re.findall(r'[.!?](?:\s|$)',para))<=3,(p['slug'],para)
 assert set(p['sources']) <= set(sources)
 for m in p['media']:
  if m['sourceKey']:assert m['sourceKey'] in sources
  if m['status']=='approved':assert m['src'] and m['alt'] and m['rightsStatus']=='approved'
print(f"PASS: {len(pages)} pages; unique routes/chapters; source keys; comparison shapes; project paths; scope/FAQ coverage; banned words; chapter paragraph limits; media gates.")
