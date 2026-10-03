# Current Cursor source — service page structure

29 September 2026, Denver. This is the updated source pack. It supersedes the earlier pack's whole-page 25/75 shell and /solutions/ examples.

## Read this first

Keep the existing local Cursor project. Copy this pack into `docs/v4-build/` as reference/source input; merge its components and collection fields into the existing website rather than replacing the project.

The public service URLs are `/systems/<existing-hub-slug>/`. Hub names and existing slugs stay unchanged. The supplied route is `src/pages/systems/[slug].astro`; do not introduce competing /solutions/ routes or deploy an unverified legacy redirect map.

## Approved page frame

1. Full-width hero.
2. Full-width opening question and answer: the main homeowner problem and direct explanation.
3. A bounded 25% sticky Forest rail / 75% right reading field, starting at Overview and ending after Investment.
4. Full-width Questions.
5. Full-width project CTA/inquiry.

Full width means the page field; text still has a readable measure. It does not require every section to be a full viewport high.



---

# DAVG V4 — editorial layouts, system studies and project paths

29 September 2026, Denver. Proposed composition plan based on the eight supplied visual references and the current Dropbox design/layout files.

Read document 10 for website copy. Use this document for visual grouping and interaction: several copy chapters can belong inside one designed composition rather than becoming separate vertical sections.

These are concrete design recommendations, not a claim that the live site is built or that new spatial words were previously approved. Keep the existing Cursor project and current brand assets.

## The system study has a specific job

Place the study after the visitor understands the room problem and before the detailed product selection. It explains how the assembly or connected system produces the result the visitor wants.

For shades: windows and fabrics → architectural assembly study → shade families → control system and keypads → everyday scenes. The recessed dual-roller reference belongs at that architectural assembly moment.

For lighting: room and light layers → fixture/driver/control study → platform and keypad choices → scenes. For infrastructure: connection problem → residence/rack signal-path study → coverage, backhaul and access rules.

Do not append the study as another decorative image after all the education. Let it carry the architectural mechanism; move matching technical paragraphs and the short specification ledger into it.

## Study composition inside the right 75% field

Keep the 25% Forest rail only inside Overview through Investment. Inside the right field, use a Forest-to-Ink study surface with one dominant cutaway, a live headline, a few leader labels and a concise explanation.

Desktop starting proportions: artwork occupies approximately 60% of the study; live explanation and a short ledger occupy 40%. An asymmetrical overlap is appropriate when the artwork needs it; this is a starting composition, not a universal split rule.

Use a 12-column local grid: artwork can occupy columns 1–8, explanation columns 8–12, and the spatial word the lower background plane. Keep a separate clear text area even when the artwork overlaps its grid allocation.

At a narrower desktop width, place the artwork above the headline/ledger within the right field. On mobile, use headline → illustration → callout explanations → short ledger; do not shrink the entire desktop plate until its annotations become unreadable.

The supplied study image is a visual reference. The final build should separate artwork from live text and verified labels; its example dimensions, sound levels and other figures do not become product specifications.

## Motorized shades — nine designed compositions

| Order | Composition | Actual layout | Interaction and image role | Spatial type |
|---|---|---|---|---|
| 1 | Opening and window context | Ink introduction with one dominant finished-room photograph; short headline sits in an intentional quiet area or adjacent text field. Below it, an unboxed strip of opening elevations establishes large glass, bedroom, corner and door conditions. | One inquiry action. Compact project-path recognition below the opening; not a second large form. | SHADES cropped into the opening background, clear of text. |
| 2 | Fabric atelier | Paper field. A short argument above a broad same-window photograph, followed by tactile real fabric details and concise visibility/edge notes. | View-through / Privacy / Blackout tabs change the room/sample evidence. A dual-layer explanation remains visible beneath the selection. | None; let the images and materials provide texture. |
| 3 | Signature architectural study | Forest-to-Ink cutaway composition: enlarged assembly left, live mechanism explanation right, short technical ledger below the explanation. | Recessed / Fascia / Exposed can change the mounting study when accurate artwork exists. Start with the supplied recessed concept as the design reference. | RECESSED for that selected mounting study; do not imply every shade is recessed. |
| 4 | Shade-family gallery | Ink field. Short introduction, text tabs across the upper edge, then a large installed image at left and concise decision copy at right. Put hardware/detail images in a smaller adjacent or lower strip. | Triathlon / Sivoia / Palladiom. Each replaces the content within the same composition; a compact compare-all ledger sits directly below. | None; product names and images already carry identity. |
| 5 | Control atelier | Paper field. First a clear focused-control / RadioRA 3 / HomeWorks comparison; then an unboxed gallery of the actual compatible remotes/keypads, with generous front, wall and finish views. | Platform selection may focus its associated interface gallery. Keep the other platform descriptions readable; no second nested tab row inside every keypad. | None; preserve clarity at a dense decision. |
| 6 | The room through the day | One large room image with a small scene selector and a short live list of changes at its edge. Return to the same living room and bedroom used earlier. | Daylight / Evening / Sleep changes scene evidence. Bedroom and living-room captions explain the relevant condition; images are labeled illustrative if not genuine project records. | Optional only if an already-agreed word fits; not required. |
| 7 | The project you have | Quiet Paper or Ink field chosen against adjacent chapters. Three text selectors sit above a construction-detail image and a short delivery explanation. | Existing home / Remodel / Custom build. Same composition shows the relevant mounting, power, service-access and coordination work. Buyer/seller notes belong in Existing home. | None in the first pass; do not invent PROJECT or city fillers. |
| 8 | Scope and questions | A clean full-width scope ledger with three aligned project columns. Cost drivers sit below; native FAQ disclosures follow in a quieter text measure. | Keep all three scopes visible for comparison. FAQ opens within the document; no tier carousel hiding the alternatives. | None beside the ledger or FAQ. |
| 9 | Inquiry | Ink closing field with an architectural plan/detail used as a subdued visual, one direct invitation and the working inquiry component. | Carry the service and selected project path into the inquiry. Direct contact remains available. | No new closing word is needed. |

If verified project evidence exists, place a concise proof spread between project paths and scope. Omit the spread publicly when it lacks records; do not fill it with a made-up project.

This groups the copy into nine designed compositions. It does not require nine full-height screens: the window strip, scope ledger and FAQ can be compact, while the study and image-led decisions receive more space.

## Tabbed product gallery — exact anatomy

Keep the section heading, tabs and comparison link in stable positions. The selected panel owns one large installed image, one or two useful detail images, a short thesis, a practical explanation and a few decision facts.

Within the right field, use an approximately 60/40 image-to-text split on desktop. Keep text to a comfortable measure; the image should reveal the actual mounting or hardware rather than show another unrelated attractive room.

Use Instrument Sans text tabs with a thin active underline, generous spacing and an explicit selected state. Avoid boxed pricing-card styling; the product family is a choice to inspect, not an offer to buy immediately.

Reserve consistent media ratios and space for the longest panel. Allow normal section growth on small screens; do not clip longer product copy or add a little scrolling box inside the page.

Pre-render every panel's text in Astro. Enhance selection after load; provide an unenhanced sequential layout and an optional Show all view for readers who want to compare the full panels.

Implement the W3C tabs pattern with associated tab/panel labels and keyboard behavior. Immediate activation is appropriate when panels are already available without noticeable delay; images must not cause the whole chapter to jump.

Reference: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/

## A clean comparison needs a ledger, not a chart

For product or platform decisions, use a neutral Paper field with left-aligned text, quiet horizontal hairlines and no vertical grid. The first column asks the decision; the remaining columns answer it.

Use four to six meaningful rows when the comparison has that much substance. Keep each cell to a short phrase or sentence; move the explanation and extra photographs into the corresponding product panel.

Do not invent performance scores, star ratings or checkmark victories. A chart is appropriate only when you have actual comparable measurements and stated test conditions.

### Shade-family comparison example

| Decision | Triathlon | Sivoia | Palladiom |
|---|---|---|---|
| First design question | Power access and the finished room | Application and opening detail | Visible hardware and finish |
| Detail to resolve | Mounting and service/battery access | Mounting, dimensions and power/control path | Bracket placement, hembar and exact power version |
| Verify before ordering | Exact model and supported controls | Exact shade and processor connection | Exact version and supported system |

This example explains different selection reasons. It does not claim those are the only applications or rank the families by quality.

For scope/investment, keep the complete Good / Better / Best projects side by side. For lighting and shades, use tabs for deeper exploration and the ledger for comparison; the two tools do different jobs.

On mobile, a product ledger may become repeated labeled decision rows or a deliberately scrollable table. Do not reduce type to squeeze four columns into a phone.

## Design & Build: connect locally and explain the full process centrally

Each service needs the coordination details that change that service: shade pocket depth and power, lighting loads and drivers, speaker enclosures and finishes, cinema structure and ventilation, or equipment routes and access.

The central Design & Build page explains how those decisions are coordinated across the whole residence. It should follow the project from plans through installation and handover, rather than repeat eight service descriptions.

### Central page composition

1. Architectural opening: a plan and finished-space relationship, with a direct statement about making technology decisions before finishes restrict the choices.
2. One residence system study: show how lighting, shades, sound, network, security and outdoor routes share an architectural plan. Link relevant study points to the service pages.
3. Project-stage explorer: Concept / Design development / Rough-in / Finishes / Commissioning. Each shows decisions needed, outputs and the responsible collaborators.
4. Actual deliverables: opening/load schedules, interface elevations, cable routes, rack requirements, coordinated details and commissioning records. Show anonymized real examples when available.
5. Working relationships: homeowner, architect/designer, builder and relevant trades; describe responsibilities plainly. DAVG's scope does not make it the architect of record or the general contractor.
6. Genuine coordinated-project evidence and a project inquiry.

On each service page, the custom-build/remodel panel includes a short link such as “See how we coordinate with your design team.” The central page links back to the exact service decisions, not merely the top of a general services directory.

## Retrofit, remodel, custom build and upgrades

Use Existing home / Remodel / Custom build as the three primary construction conditions. Upgrading or taking over a system is an objective within one of those conditions, not a competing fourth construction stage.

A service page's project-path composition explains the relevant work locally. The homeowner should not have to leave the shades page to learn whether battery access or a ceiling pocket suits the current house.

A dedicated Existing Homes & System Upgrades page can also serve visitors whose first question is about inherited equipment, repairs or staged improvements across services. Its story is inventory → ownership/access → retain or replace → staged work → testing and handover.

Do not create separate thin retrofit, remodel and custom-build pages for every service. The central Design & Build page can cover remodel and custom-build coordination; the existing-home page has a distinct cross-system purpose.

These central pages are recommended additions or refinements. Reuse the actual existing routes after checking the repository; the labels here are not an instruction to create competing URLs.

## Spatial words: place them around the visual argument

The current design file leaves the remaining final word selections open. Do not claim a newly invented universal set was already approved.

For the shading test, start with SHADES at the opening and RECESSED in the matching architectural study, as grounded in the supplied reference. Keep the material, family, platform, comparison and FAQ compositions quieter.

That is a composition recommendation, not a two-word cap for every page. An additional agreed word can be used where a later image-led spread benefits from it; it does not need to appear because a numbered slot exists.

Use Schibsted Grotesk 300, filled glyphs, intentional cropping and low opacity. Paper and Forest/Ink words use the same geometry and weight; the word sits behind the composition and never substitutes for a real heading.

## How the other seven pages become distinct compositions

| Service | Opening question | Signature study placement and subject | Deeper selection interface | Daily-use / construction evidence |
|---|---|---|---|---|
| Home Intelligence | Which moments should coordinate? | After daily moments: one residence's systems and their control roles | Interface gallery for keypad, remote, touchscreen and app; compact local/cloud behavior ledger | Arrival/Evening/Away on the same home, then retrofit/takeover/design coordination |
| Architectural Lighting | What should the room illuminate? | After layers: fixture, driver, control and wall elevation | Platform explorer and real keypad gallery; separate fixed-white/warm-dim/tunable evidence | Same-room Cooking/Dinner/Late Night; load schedule and rough-in details |
| Media & Audio | What is each room for? | After listening/viewing needs: room zones and speaker positions | Architectural speaker gallery; TV comparison ledger; one sound-layout selector | Watch/Listen examples, invisible-speaker finish detail and practical cable access |
| Private Cinemas | Where do the seats belong? | After room/seat choice: same-room sightline and sound-field cutaway | Projection/direct-view comparison, screen-wall detail and selected speaker geometry | Treatment versus isolation assemblies; ventilation and service-access section |
| Security & Access | Which events and entrances matter? | After event definition: views, exclusions, recording and entry path | Camera-detail/recording ledger and entry hardware gallery | Day/night evidence, permissions and outage-chain testing |
| Infrastructure & Privacy | Which part of the connection is weak? | After connection diagnosis: residence signal path and serviceable rack | Wired/wireless backhaul comparison; readable network-boundary matrix | Genuine room tests, route details and handover map |
| Outdoor Entertainment | Where are people, sun and weather? | After activity zones: landscape listening locations and display exposure | Surface/landscape/subwoofer gallery; model-specific display exposure ledger | Same terrace in Dining/Viewing states, buried routes and seasonal instructions |

Keep each signature study a designed focal point. A product selector, compact ledger, quiet editorial explanation and broad image spread can share mechanics across pages while preserving those different stories.

## Cursor task for the first visual pass

Use document 10 as copy input and document 11 as composition input. Keep the current project and masthead; use /systems/ routes and the bounded 25/75 middle wrapper defined in 00-START-HERE.md.

Rebuild the shading opening/material/study/family-gallery sequence first. Use the supplied shade concept for composition reference, blank stable slots for missing approved product images, live text and functioning Triathlon/Sivoia/Palladiom tabs.

Place the quiet compare-all ledger under the gallery. Build the control atelier next, with separate system explanations and actual keypad image slots rather than repeating the shade-family layout.

Verify the visual rhythm at desktop and mobile before extending the remaining compositions. Measure success by clear decisions, image scale and variation in composition—not by how many full screens the page occupies.
