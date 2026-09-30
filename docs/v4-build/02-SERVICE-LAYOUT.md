# Eight service pages — 25/75 layout

## Page frame

Desktop: left rail is exactly one quarter of the page frame; right field is three quarters. Use `grid-template-columns: minmax(0,1fr) minmax(0,3fr)`. These are frame proportions before internal padding. Keep the document as the vertical scroller. Make the rail sticky below the existing masthead; do not make the 75% column a second wheel-scroll pane.

Zones: the photo hero (section 01) stays full width above the split. Section 02 is the first block of the Overview chapter inside the 75% field, directly under the rail, ahead of section 03. Sections 14 and 15 stay full width below the split.

Rail: original DAVG mark, service navigation with current service emphasized, and a small set of chapter anchors relevant to that page. Use the source-copy groups to keep the navigation short. Do not cram fifteen labels beside the page. If the rail exceeds the available viewport, only its menu may overflow. No portrait or required staff title.

Right: actual service headline, opening explanation and primary action, followed by the hub's ordered chapters. Use the full right field for media/studies. Readable body copy has a comfortable measure around 55–70 characters. A comparison can divide the field 50/50. A technical study can divide image/text around 60/40. These are local section choices inside the 75% field.

Mobile starting breakpoint: 1024px; adjust if the actual navigation becomes cramped. Replace the desktop rail with a compact native disclosure menu or reuse the existing mobile navigation. Keep the source-copy order, full-width media, anchor offsets and readable tables. Selection tables can become stacked rows or a deliberate horizontal table scroll. Do not shrink text to fit all columns.

## Working section anatomy

| Pattern | Build it this way |
|---|---|
| Editorial hero | Headline, short deck, one primary action, broad blank media field. Put category context in ordinary text if no eyebrow is needed. |
| Direct answer | Short lead and meaningful explanation, with a service identifier only if the composition has room. |
| Room experience | Wide image slot plus a few useful room/time examples. |
| System architecture | Unboxed text/specification split or diagram slot with a plain system explanation. |
| Signature study | Large diagram/comparison slot, live headline and caption; static state first. |
| Selection guide | Several purposeful modules: decision tables, best-fit/tradeoff text and associated product/photo slots. Do not collapse the deep education into three marketing cards. |
| Applied examples | Actual source-copy scenarios with a matched slot per example where useful. |
| Technical detail | Large cutaway/detail rectangle and adjacent leader-label/specification text. |
| Build route / pitfalls | Short construction/retrofit branches and useful mistakes to avoid. |
| Project proof | Reserved image/caption structure in preview. Hide it publicly until real evidence is available. |
| Investment | Scope comparison and cost drivers. No invented installed prices. |
| Ownership | Steps for measure/install/program/test/handoff in an unboxed sequence. |
| FAQ | Native `details/summary` or existing accessible accordion; preserve the supplied questions/answers. |
| Inquiry | Guided brief step 01 (`GuidedBrief`) in the full-width close, after the hub’s existing final headline and support line. CONTINUE and SKIP TO CONTACT move to that close (`#s15-close`). Questions 2–4 are not specified. The older field form is not shown. |

## Blank media now; images later

Use simple square-edged blank rectangles at the intended aspect ratio. A 16:9 room slot, 4:3 rack/detail slot and 1:1 product slot are starting choices; change them to fit the exact screenshot composition. Every slot has a stable ID such as `shading-06-palladiom`, subject and ratio in the content manifest. The visible placeholder can be blank; its purpose remains documented outside public copy. Do not require one literal square aspect ratio for every image.

Replace a slot by changing its source, not rebuilding the section. Keep final images from moving the text after loading. Empty filenames should render a placeholder rather than a broken `<img>`. Concept studies can explain systems; they do not become completed-project claims.

## Section maps

Each hub begins with an ordered 01–15 checklist containing a layout and visible completion criterion. It continues with the substantive copy recovered on September 28. Build from that copy; do not rewrite the full service to fit a generic template. The common shell does not make the topics or section layouts identical.

## Starter code

`starter/` contains small portable components and the CSS token block. They are optional implementation starters, not a replacement Astro project. Cursor should adapt them to existing layout, navigation, assets and imports. Set the sticky offset to the actual masthead height. The snippets still need integration and browser checking inside your project.


