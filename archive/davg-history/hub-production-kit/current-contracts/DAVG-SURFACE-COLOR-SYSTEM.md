# DAVG Korta V4 — Surface Color System

Revision: 30 September 2026 · replaces the previous two-surface addendum.

**Purpose:** give Cursor one current surface specification for the service-page component system. The owner's explicit decision is Forest for the sticky 25% rail, with Forest in the 75% field reserved for the designated service study mockups. The neutral assignments below are the recommended implementation. The consolidated handoff applies these roles in source; the Mac and deployed preview are verified only after Cursor imports and deploys it.

## 1. Recommended direction

Keep the left rail Forest. It provides a stable brand color while the content changes. Treat the right field as an architectural editorial page: sustained neutral backgrounds, large photography, a concentrated Forest study, and a clear closing inquiry.

Variety comes from changing the composition as well as the surface: a photograph spread, a readable comparison, a diagram, a product presentation, or an open scope table. Changing every section's paint produces repetition even with more colors.

Use the existing Ink, Paper and cream-family colors. Add one supporting Charcoal token for product and system presentations. Use the existing deepest cream as Stone for scope and investment. These are supporting neutrals, not extra brand colors.

## 2. Surface roles and tokens

| Surface | CSS token | Value | Intended role |
| --- | --- | --- | --- |
| Forest | `--color-surface-forest` | `#183B31` | Sticky service navigation; designated signature study only in the right field |
| Ink | `--color-surface-ink` | `#090B0A` | Hero, inquiry, global header/footer, backing for cinematic imagery |
| Charcoal | `--color-surface-charcoal` | `#0F1310` | Supporting neutral for Systems and device/product presentations; new recommended token |
| Paper | `--color-surface-paper` | `#EDE9E0` | Main editorial reading surface: answer, Overview, ordinary Design, Installation, Questions |
| Stone | `--color-surface-stone` | `#E2DDCE` | Investment and scope; alias of the existing `--color-cream-03` |
| Photography | No artificial color token | Original image colors | Large visual passages; preserve original approved image/brand colors |
| Signal | `--color-accent-signal` | `#1A8F6E` | Small functional accents: focus, selected states, markers and links where legible; not a section fill |

Do not revert the current Ink/Paper tokens to the older addendum's `#0A0C0B` and `#F2EFE7`. Keep other existing cream tokens available for controlled component details; do not cycle through them as arbitrary page bands.

## 3. Service-page surface map

These are surface assignments within the existing layout, not new sections or chapter names.

| Position | Width | Surface | Composition and purpose |
| --- | --- | --- | --- |
| Hero | Full page | Ink with architectural photography | Establish the service with one strong headline and image |
| Opening question / direct answer | Full page | Paper | Clear, concise explanation before entering the chapter frame |
| Overview | Right 75% | Paper | Continue the editorial reading field; introduce openings, needs and conditions |
| Ordinary Design content | Right 75% | Paper, supported by photography | Fabric, layers, privacy, mounting and coordination; comparisons do not automatically get a dark or green background |
| Designated service study | Right 75% | Approved Forest-to-Ink treatment | Preserve the high-end architectural folio: visual study, composition, annotations and background word |
| Systems | Right 75% | Charcoal | Device/hardware presentation; use photography and light reference panels only where they improve a specific comparison |
| Installation | Right 75% | Paper with project photography where available | Process, responsibilities, coordination and handoff; diagrams and rules carry the structure |
| Investment | Right 75% | Stone | A quieter scope/decision spread; open columns or a table, without a row of boxed pricing cards |
| Questions | Full page, after the frame | Paper | Straightforward answer reading; the rail has ended |
| Inquiry | Full page | Ink | Clear project entry and honest form state |
| Footer | Full page | Ink | Continue the closing field |

**Sticky rail:** Forest throughout the bounded middle. It does not change to match each chapter. Keep the five chapter links nested beneath the active service. Keep the two full-width opening and two full-width closing sections outside the 25/75 frame.

Adjacent Paper passages may continue as one uninterrupted field. Distinguish subsections through spacing, rules, image placement and typographic hierarchy. Paper → Stone → Paper around Investment and Questions is a gentle tonal change, not an excuse to add more unrelated light bands.

The study's Forest may meet the Forest rail. Preserve the vertical hairline and the study's own internal padding so the 25/75 geometry remains clear. Do not surround the study with a green card, green outer wrapper or green transition band.

## 4. Forest restriction in the right field

Forest is allowed only on the designated signature study component or the approved study artwork it contains. Examples supplied by the owner include the RECESSED shading cutaway, the INTELLIGENCE device study and the architectural lighting comparison folio. These are visual references; their labels and numbers do not become verified product specifications or project evidence.

Mark the intended study explicitly, for example:

```astro
<section data-surface-role="signature-study" data-signature-study="true">
  <!-- approved service-specific folio composition -->
</section>
```

Apply the approved Forest-to-Ink treatment inside that component. Preserve each study's composition rather than cloning the same diagram across all services.

Ordinary right-field sections must not receive Forest backgrounds, Forest gradients, green washes or Forest-filled comparison cards. Do not turn an ordinary section into an exception by renaming it “study.” A missing service study remains a missing asset/composition; it does not justify a generic green filler panel.

Use Signal for small functional accents outside the study. Retire Forest from ordinary selected-tab underlines. Natural greens in photography and original colors in supplied brand assets are preserved; this restriction governs interface surface assignment.

## 5. Rhythm rules

1. Assign the surface to a meaningful content passage, not to every subsection or every chapter anchor.
2. Keep related reading on the same surface. There is no maximum count of consecutive Paper subsections.
3. Use an image spread, a change in scale, an open comparison, whitespace or a study to change pace. A color flip is one option, not the default separator.
4. Reserve Charcoal for the Systems passage and supporting dark component details. Its subtle difference from Ink is intentional; it cannot supply all the visual variety by itself.
5. Use Stone for the investment/scope passage. Within other chapters, an occasional Stone reference panel must have a real grouping purpose rather than becoming a repeating card style.
6. A primary link or button inside an editorial section does not require recoloring the whole section. The full-width inquiry remains Ink.
7. Keep the signature study visually concentrated. Do not add Forest to surrounding passages to “smooth” the transition.
8. Read the complete desktop and mobile page, including the permanent rail and the natural colors of photographs. Do not evaluate color balance by counting sections.

Do not force the same number of subsections, image placements or screen heights across all eight services. The shared surface roles provide continuity; each service's content determines its composition.

## 6. Component implementation in Cursor

Use semantic surface roles on the actual section component. Suggested roles: `hero`, `answer`, `editorial`, `systems`, `investment`, `questions`, `inquiry`, `signature-study`. Keep these independent of chapter IDs and content order. A chapter may contain more than one role.

Add or alias only the required tokens in the existing Tailwind 4 CSS-first `@theme` block:

```css
/* Existing Ink, Forest, Paper and Signal values remain unchanged. */
--color-surface-charcoal: #0F1310;
--color-surface-stone: var(--color-cream-03);
```

Each role should provide local background, primary text, muted text and border variables. Children should inherit those local variables. Charcoal/Ink use the existing dark text and border tokens; Paper/Stone use the existing Paper text and border tokens. This prevents a shared product component from retaining dark text on a dark field or pale captions on Paper.

Maintain image scrims only where text actually overlays a photograph. Keep controls and captions legible against their actual backgrounds. Choose button text/fill together; do not assume brand green is automatically a readable text or button color. Preserve supplied logos exactly.

On mobile, retain the same surface order and exception rules. The compact service menu may use Forest as navigation chrome; it must not become a Forest content wrapper. The signature study adapts within the single-column flow. Do not create a separate alternating mobile palette.

## 7. Specific changes to the supplied repair specimen

The earlier repair ZIP predated this surface decision; the consolidated final handoff implements the roles below. This document supersedes its surface assignments, not its page structure, content or functionality.

- `#privacy` / `.fabric-study`: remove `band-forest` and the Forest-to-Ink gradient. Make it a Paper photographic comparison. Use readable Paper text/rules and consistent image captions; preserve the photographs and content.
- `ShadingStudy.astro` / `#signature-study`: retain its designated Forest-to-Ink study treatment. Do not extend that treatment to the Design parent group.
- `#systems`: use the Charcoal passage. Audit each child/tab/panel: foreground, muted text, rules and focus states must inherit the appropriate surface. A purposeful light comparison panel is allowed, not mandatory.
- `#overview`, the rest of `#design`, and `#installation`: Paper is the shared reading field. Remove inherited or leftover Forest fills in their subsections.
- `#investment`: Stone with Paper text/rules. Keep existing scope content; do not invent prices.
- Full-width opening answer and Questions: Paper. Hero, Inquiry and footer: Ink.
- `ServiceDraft.astro`: replace the blanket `.paper,.group` surface assignment with role-based assignments. Do not fabricate a green study for routes that do not yet have one.
- `ShadeFamilies.astro` and other reusable components: replace hardcoded Paper-only caption/rule colors with local surface variables; use Signal for the selected indicator.
- `ServicePageShell.astro`: keep the bounded Forest rail and existing chapter nesting. No width, scroll-owner or navigation-name change.

Update the current surface document, `01-DESIGN-SYSTEM.md`, `02-SERVICE-LAYOUT.md`, source index and relevant Cursor instructions in the same change. Keep retired instructions in an archive. Record actual code changes and preview verification separately in BUILD-STATE.

## 8. Retired rules from the previous addendum

Remove the forced 60% dark / 40% cream ratio, the limit of two consecutive cream sections, “when in doubt stay dark,” “every primary CTA section must be dark,” and compulsory dark/cream alternation. Retire the old page stack examples where they conflict with the current service frame. Remove the brass suggestion; no new brass accent is introduced here.

Also remove unsupported claims that dark/cream transitions improve rankings, that dwell time from those transitions is a proven ranking benefit, or that dark CTAs necessarily convert better. Surface choices express design intent; conversion claims require actual measurement.

## 9. Cursor acceptance check

Inspect the actual running page at `/systems/motorized-shades/`, not an old starter or screenshot alone. Verify the same implementation serves the existing shading alias.

- Forest rail stays constant and ends with the middle frame.
- Ordinary right-field sections have no Forest fill/gradient; only the explicitly designated study uses the exception.
- The opening answer and Overview read as a sustained editorial passage, with purposeful composition changes.
- Systems reads as a Charcoal product presentation; child text, tabs and images remain usable.
- Investment uses Stone; Questions and Inquiry remain full width after the frame.
- Desktop/mobile text, focus states and captions work on their actual surfaces.
- No forced alternating pattern, new chapter names, new claims, recolored logos or generic filler studies were introduced.

Run the existing build/check verification, then capture desktop and mobile evidence. Report what was applied and what is still missing. Deployment of the temporary Motorized Shading test page is authorized by the owner. Build, verify and deploy through the existing test/preview project. The former no-push/no-deploy instruction is retired; do not change or connect custom domains.
