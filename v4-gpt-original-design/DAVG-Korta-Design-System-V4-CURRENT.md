# DAVG Korta Design System — V4

# LOCKED CONSTRAINTS

> The tokens, type scale, spacing, and components defined in this document are locked constraints for this project — not inspiration or reference material. Use only the values and components defined here. Do not introduce new colors, fonts, spacing values, radii, or component patterns that are not explicitly listed in this file.
>
> **Exception:** `--color-surface-forest: #183B31` is **PROPOSED / PENDING CONFIRMATION**. It was derived from image analysis and is not an approved brand-source value. Every other token and canonical ruling in this document remains confirmed/locked as stated.

## 1. Color Tokens

**Build directive:** Use only the tokens below. All values are **LOCKED** except `--color-surface-forest: #183B31`, which is **PROPOSED / PENDING CONFIRMATION** and must not be treated as an approved brand-source value until confirmed.

```css
@theme {
  /* Four-surface system */
  --color-surface-ink: #090B0A;
  --color-surface-forest: #183B31;
  --color-surface-paper: #EDE9E0;
  --color-surface-image: transparent;

  /* Approved V4 cream-family variants */
  --color-cream-01: #F2EFE7;
  --color-cream-02: #EBE7DC;
  --color-cream-03: #E2DDCE;

  /* Dark-field typography */
  --color-text-primary-dark: #F1F0EB;
  --color-text-secondary-dark: #A7AAA5;
  --color-text-tertiary-dark: #7F847E;

  /* Paper typography */
  --color-text-primary-paper: #0B0D0C;
  --color-text-secondary-paper: #51544F;

  /* Signal color */
  --color-accent-signal: #1A8F6E;

  /* Hairlines and low-emphasis structure */
  --color-border-dark: rgb(241 240 235 / 18%);
  --color-border-dark-soft: rgb(241 240 235 / 10%);
  --color-border-paper: rgb(11 13 12 / 16%);
  --color-rule-accent: rgb(26 143 110 / 78%);

  /* Image scrims observed behind light type */
  --color-scrim-ink-soft: rgb(9 11 10 / 38%);
  --color-scrim-ink-strong: rgb(9 11 10 / 66%);

  /* Oversized spatial typography */
  --color-spatial-word-dark: rgb(241 240 235 / 12%);
  --color-spatial-word-forest: rgb(241 240 235 / 14%);
}
```

- **Ink — `#090B0A` — LOCKED:** default near-black field.
- **Forest — `#183B31` — PROPOSED / PENDING CONFIRMATION:** deep-green atmospheric field; do not promote this value to approved brand status until confirmed.
- **Paper — `#EDE9E0` — LOCKED:** warm ivory editorial reset; never replace with pure white.
- **Text on dark — `#F1F0EB` — LOCKED:** primary headline and high-priority text.
- **Muted text on dark — `#A7AAA5` / `#7F847E` — LOCKED:** secondary copy, tertiary metadata, and specifications.
- **Text on Paper — `#0B0D0C` / `#51544F` — LOCKED:** primary and secondary Paper-surface text.
- **Accent signal — `#1A8F6E` — LOCKED:** use only for annotation nodes, selected states, progress, rules, and small technical emphasis; never as default text, a broad fill, or a decorative wash.
- **Accent opacity — LOCKED:** use the listed alpha-bearing tokens; do not create a second mint/green accent.
- **Photography colors:** image content only; do not convert wood, stone, sky, landscape, or device-screen colors into design tokens.
- **Gradients:** no reusable page/background gradient token is authorized. The only locked exception is the component-local translucent text gradient defined for the Cream Oversized Architectural Background Typography component in Section 4; it may not be repurposed as a surface, card, button, glow, or general decorative gradient.

## 2. Typography Scale

**Build directive:** Use only **Schibsted Grotesk** for display/headlines, **Instrument Sans** for body/interface/navigation, and **JetBrains Mono** for technical metadata. Self-host all three families; do not substitute fonts or use externally hosted font services.

```css
@theme {
  --font-display: "Schibsted Grotesk";
  --font-body: "Instrument Sans";
  --font-mono: "JetBrains Mono";

  /* Locked oversized architectural background typography */
  --text-display-spatial: clamp(12rem, 16vw, 17.25rem);
  --text-display-spatial--line-height: 0.78;
  --text-display-spatial--letter-spacing: -0.045em;
  --font-weight-spatial: 300;

  --text-h1: 64px;
  --text-h1--line-height: 0.98;
  --text-h1--letter-spacing: -0.035em;

  --text-h2: 44px;
  --text-h2--line-height: 1.02;
  --text-h2--letter-spacing: -0.025em;

  --text-body-lg: 18px;
  --text-body-lg--line-height: 1.45;
  --text-body: 16px;
  --text-body--line-height: 1.5;
  --text-caption: 13px;
  --text-caption--line-height: 1.35;
  --text-label: 11px;
  --text-label--line-height: 1.2;
  --text-label--letter-spacing: 0.16em;
  --text-mono: 11px;
  --text-mono--line-height: 1.35;
  --text-mono--letter-spacing: 0.12em;
}
```

| Role | Family | Approx. size | Weight | Tracking | Status / use |
|---|---|---:|---:|---:|---|
| Spatial display word | Schibsted Grotesk | `clamp(12rem, 16vw, 17.25rem)` desktop; 190–205px visible cap height at 1672×941 reference | 300 | `-0.045em` desktop | **LOCKED / canonical across Cream, Juniper, Ink** |
| H1 | Schibsted Grotesk | 60–72px | 400 | `-0.03em` to `-0.04em` | LOCKED / directly evidenced |
| H2 | Schibsted Grotesk | 40–48px | 400 | about `-0.025em` | LOCKED / directly evidenced |
| H3 | Schibsted Grotesk | 36px | 400 | `-0.020em` | **INTERPOLATED / NOT DIRECTLY EVIDENCED** |
| H4 | Schibsted Grotesk | 30px | 400 | `-0.015em` | **INTERPOLATED / NOT DIRECTLY EVIDENCED** |
| H5 | Schibsted Grotesk | 24px | 400 | `-0.010em` | **INTERPOLATED / NOT DIRECTLY EVIDENCED** |
| H6 | Schibsted Grotesk | 20px | 400 | `-0.005em` | **INTERPOLATED / NOT DIRECTLY EVIDENCED** |
| Body large | Instrument Sans | 17–19px | 400 | `-0.01em` to `0` | LOCKED / directly evidenced |
| Body | Instrument Sans | 15–16px | 400 | `0` | LOCKED / directly evidenced |
| Caption | Instrument Sans | 12–13px | 400–500 | `0` to `0.02em` | LOCKED / directly evidenced |
| Technical mono | JetBrains Mono | 10–12px | 400–500 | `0.10em`–`0.14em` | LOCKED / directly evidenced |
| Technical label / eyebrow | JetBrains Mono | 10–11px | 500–600 | `0.15em`–`0.20em` | LOCKED / directly evidenced |
| Nav / CTA | Instrument Sans | 10–12px | 500–600 | `0.10em`–`0.14em` | LOCKED / directly evidenced |

**Heading behavior:** H1/H2 and all directly evidenced roles remain locked to the values above. H3–H6 are required interpolation steps for implementation only and must remain clearly classified as **INTERPOLATED / NOT DIRECTLY EVIDENCED**; use regular weight, sentence case, upright styling, and progressively looser line-height as size decreases.

## 3. Spacing, Radius, Borders

**Build directive:** Use the spacing, radius, and border tokens below without adding intermediate values. Premium character must come from proportion, negative space, and 1px structure rather than card decoration, shadows, or rounded containers.

```css
@theme {
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;
  --spacing-32: 128px;

  --radius-none: 0px;
  --radius-control: 2px;

  --border-width-hairline: 1px;
}
```

### Spacing behavior

- **Outer desktop inset:** 48–64px.
- **Headline-to-body:** 20–32px.
- **Eyebrow-to-headline:** 28–44px.
- **Body-to-action:** 28–40px.
- **Major content split:** 48–80px.
- **Technical rows:** 14–18px vertical padding with 1px separators.
- **Bottom metadata strips:** 24–32px vertical breathing room.
- **Section rhythm:** one dominant near-viewport idea per section; do not compress multiple card groups into a single viewport.

### Radius

Use **0–2px** for canonical website surfaces. Device/interface content rendered inside photography may retain its native physical/UI rounding, but those radii must not become website component tokens.

### Borders and rules

Use **1px hairlines** for dividers, leaders, comparison splits, specification rows, progress, and outlined controls. Keep dark-field rules low-contrast and reserve accent-colored rules for active/selected technical emphasis; no heavy page-level drop shadows.

## 4. Component Inventory

### Full-Bleed Architectural Hero

- **Surfaces:** Image field + Ink/Forest scrim.
- **Anatomy:** top navigation; left-aligned eyebrow; large 2–4 line H1; short body deck; one dominant action; full-bleed residence photography; 2–3 fine leader-line annotations; oversized low-opacity spatial word anchored to the lower edge.
- **Visual priority:** the house remains the hero; labels point to architectural conditions such as light, climate, and control rather than devices.
- **Canonical behavior:** annotations remain sparse and informational. Do not convert them into icon clusters or gadget callouts.

### Forest System Study / Device Composition

- **Surfaces:** Forest with Ink falloff.
- **Anatomy:** compact technical eyebrow at upper left; manifesto-style headline block at upper right; restrained bullets/body; one physical control device occupying the lower center; oversized spatial word passing behind the device; tiny folio/footer identifier.
- **Use:** a single technology artifact presented as evidence of an integrated operating layer, not as a product catalog.
- **Important distinction:** the rounded controls shown on the touchscreen are content within the device mockup, not reusable website cards.

### Architectural Before/After Comparison

- **Surfaces:** Ink/Forest title band + two Image fields.
- **Anatomy:** factual eyebrow; headline and one-line thesis; 50/50 image split; thin vertical accent divider; each image receives a short title, sentence, and compact mono metric line.
- **Use:** compare architectural outcomes, not feature lists.
- **Visual logic:** the comparison is carried primarily by photography; metrics are secondary proof.

### Paper Interface Study

- **Surfaces:** Paper.
- **Anatomy:** small factual eyebrow; large black headline on the left; narrow body copy; oversized device render on the right; a diagram-like extension from the device showing spatial/system organization; bottom taxonomy strip divided by hairlines.
- **Use:** editorial reset between dark/image sections; makes the control layer legible without turning the whole site into a dashboard.
- **Corner treatment:** no surrounding rounded card.

### Guided Brief / Stepped Inquiry Flow

- **Surfaces:** Ink, with extremely low-contrast architectural drawing in the background.
- **Anatomy:** step eyebrow; `01 / 04` progress marker; a single question; horizontal selection row; short explanatory block; one primary Paper-filled Continue control; text-only skip action; thin progress line at the bottom.
- **Use:** project qualification framed as an architectural brief rather than a sales form.
- **Interaction:** CSS-only hover/focus/selected transitions are sufficient; no motion library is implied by the mockup.
- **Canonical constraint:** the visible large-radius choice boxes are not carried forward as a radius token; see section 6.

### Architectural Detail Cutaway

- **Surfaces:** Forest + Image field.
- **Anatomy:** enlarged construction cutaway or product section; 3–5 leader lines with signal nodes; direct headline on the opposite side; a concise explanation; optionally a compact technical specification block; low-opacity spatial word at the bottom.
- **Examples shown:** invisible acoustic transducer assembly and recessed motorized-shade pocket.
- **Use:** explain how technology disappears into architecture. The cutaway is the subject; annotations clarify construction coordination.

### Spec Matrix / Technical Rows

- **Surfaces:** usually Forest/Ink.
- **Anatomy:** 1px horizontal rules; left-side mono field name; right-side concise value; no enclosing card.
- **Examples:** pocket clearance, drive motor, integration bus, hembar finish, solar logic.
- **Use:** project/specification proof embedded in an editorial layout.

### Annotation Node + Leader Line

- **Surfaces:** Image, Forest, Ink.
- **Anatomy:** 2–4px accent dot; 1px hairline leader; uppercase mono title; optional one-line technical description.
- **Use:** precise architectural pointing. It should identify a physical condition, system location, or construction detail.
- **Constraint:** no icon bubble, badge, or glow treatment beyond the small high-contrast node required for legibility.

### LOCKED COMPONENT — Oversized Architectural Background Typography

- **Surfaces:** Cream/Paper, Juniper/Forest, Ink, and Image fields where specifically approved.
- **Use frequency:** selective architectural device for service-page/system-study compositions; **not required on every page or every section**.
- **Canonical rule:** this is one component with one geometry. Cream, Juniper, and Ink must use the **same typeface, weight, physical scale, tracking, line-height, cropping logic, and z-layer relationship**. Surface treatment may change only to preserve equivalent visual contrast.
- **Examples:** `RESIDENCE`, `INTELLIGENCE`, `LIGHT`, `INVISIBLE`, `RECESSED`, `HOME CONTROL`.

#### Core Geometry — LOCKED FOR ALL SURFACES

The light-background version is not a separate typography system. It is the direct tonal translation of the Juniper/Ink oversized architectural word treatment.

```css
.architectural-background-title {
  position: absolute;
  top: 4.5%;
  left: -2%;
  z-index: 0;
  pointer-events: none;

  font-family: var(--font-display);
  font-size: clamp(12rem, 16vw, 17.25rem);
  font-weight: 300;
  line-height: 0.78;
  letter-spacing: -0.045em;
  text-transform: uppercase;
  white-space: nowrap;
}
```

At a `1672 × 941px` reference canvas:

- target visible cap height: **190–205px**
- target primary vertical stroke width: approximately **26–32px**
- capital height: approximately **20–22%** of section height
- acceptable weight range for optical matching: **250–325**, with **300 canonical**
- long phrases retain physical scale and crop beyond the viewport; **never condense or shrink to fit**
- the section must use `position: relative` and `overflow: hidden`
- foreground copy, architectural imagery, diagrams, callouts, and product renders sit above the title and naturally occlude it
- do not reposition the title merely to avoid foreground overlap

```css
.architectural-background-section {
  position: relative;
  overflow: hidden;
}

.architectural-background-section > .section-content,
.architectural-background-section > .section-visual,
.architectural-background-section > .section-annotations {
  position: relative;
  z-index: 2;
}
```

#### Surface Variant A — Cream / Paper

Use the approved cream family as section canvases when applicable:

```css
--cream-01: #F2EFE7;
--cream-02: #EBE7DC;
--cream-03: #E2DDCE;
```

The letters use **one continuous atmospheric gradient across the entire phrase**, not separate fills per glyph:

```css
.architectural-background-title[data-surface="cream"] {
  background:
    linear-gradient(
      90deg,
      rgba(91, 108, 99, 0.42) 0%,
      rgba(124, 130, 119, 0.34) 30%,
      rgba(151, 150, 136, 0.28) 58%,
      rgba(193, 184, 163, 0.22) 82%,
      rgba(226, 216, 195, 0.16) 100%
    );

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
```

The gradient must begin in muted sage-stone, move through mineral greige/quiet mushroom, and resolve into pale warm sand. It must remain translucent and subordinate; no visible texture, noise, metallic effect, bevel, glow, or shadow is permitted.

#### Surface Variant B — Juniper / Forest

Use the **same geometry and weight** as Cream. The canonical Juniper word treatment remains a low-opacity off-white atmospheric fill using the existing spatial-word token; tonal movement should come from the Juniper field itself rather than inventing a second decorative gradient.

```css
.architectural-background-title[data-surface="juniper"] {
  color: var(--color-spatial-word-forest);
  -webkit-text-fill-color: currentColor;
  background: none;
}
```

Do not brighten, bold, outline, or reduce the word to increase legibility. The target relationship is the supplied `RECESSED`, `INTELLIGENCE`, and comparable Juniper studies: huge, light, cropped, atmospheric, and structurally behind the foreground.

#### Surface Variant C — Ink / Black

Use the **same geometry and weight** as Cream and Juniper. Ink uses the existing dark-field spatial-word token:

```css
.architectural-background-title[data-surface="ink"] {
  color: var(--color-spatial-word-dark);
  -webkit-text-fill-color: currentColor;
  background: none;
}
```

The word must remain low-contrast and architectural, never become a high-contrast display headline.

#### Responsive Rules — LOCKED

```css
@media (max-width: 1024px) {
  .architectural-background-title {
    font-size: clamp(9rem, 17vw, 13rem);
    letter-spacing: -0.05em;
  }
}

@media (max-width: 640px) {
  .architectural-background-title {
    font-size: clamp(6.5rem, 29vw, 10rem);
    font-weight: 300;
    line-height: 0.78;
    letter-spacing: -0.055em;
  }
}
```

On mobile, preserve the light weight and oversized physical scale. Maintain one line unless an approved composition explicitly requires two; aggressive horizontal cropping is expected, and the component must not be removed merely because the full phrase cannot fit.

#### Exact Calibration Rule — `HOME CONTROL`

`HOME CONTROL` must use the same physical letter scale as the Juniper word `RECESSED`. At the `1672 × 941px` reference size, preserve approximately **190–205px visible cap height** and **26–32px primary strokes**, keep the phrase on one line, and permit intentional cropping beyond both horizontal edges. Do not shrink, condense, or alter the weight to make the entire phrase fit comfortably.

#### Prohibited Results

Reject the implementation if any of the following occurs:

- weight is bold, semibold, black, extra-bold, `400+`, or visually heavier than the Juniper reference
- a condensed/compressed typeface or horizontal scaling is used
- capital height drops below approximately **19%** of section height in the reference composition
- the phrase fits comfortably only because it was reduced
- glyphs are outline, stroke-only, hollow, inline, beveled, shadowed, or textured
- Cream uses one flat gray/beige fill instead of the locked continuous atmospheric text gradient
- the word is placed above foreground content instead of behind it
- the word is stopped, resized, or moved to avoid copy/image overlap
- Cream, Juniper, and Ink use different display typefaces, glyph proportions, weights, or scale logic
- a card, box, border, glow, or drop shadow is added behind the title
- the component is repeated mechanically on every page instead of used selectively
### Bottom Metric / Folio Strip

- **Surfaces:** Paper, Forest, Ink.
- **Anatomy:** small mono/system labels distributed horizontally; 1px dividers or short accent rule; project/study number at the far edge.
- **Use:** closes the composition like a technical folio plate rather than a conventional marketing footer.

### Centralized Infrastructure Cutaway

- **Surfaces:** Image field + Ink background.
- **Anatomy:** sectional/isometric residence; centralized rack/utility core; labeled rooms; traced pathways from the core to architectural zones.
- **Canonical portion:** the architectural sectional cutaway and centralized-service concept.
- **Non-canonical portion:** the multi-color system tracing/legend is an inconsistency and should not become a reusable DAVG pattern; see section 6.

## 5. Layout & Grid Patterns

### Viewport and section rhythm

Build sections as editorial folio spreads with **one dominant idea per viewport**. Preserve large negative-space fields; secondary information belongs in captions, annotations, technical rows, or bottom folio strips rather than stacked feature-card clusters.

### Implied grid

Use a disciplined editorial grid equivalent to roughly 12 columns. Canonical splits are **5/7 or 4.5/7.5** for copy + architecture/device, **6/6** for comparisons, **7/5** for cutaway + explanation, and full-width fields with anchored content islands for guided/system studies.

### Image-to-text ratios

- **Architectural hero:** 60–70% visual / 30–40% copy-navigation.
- **Technical cutaway:** 60–65% cutaway / 35–40% explanation-specification.
- **Paper interface study:** 40% text / 60% device composition.
- **Comparison:** image-dominant below a 25–30% title band.
- **Guided brief:** approximately 70% negative space/structure / 30% text-control.

### Full-bleed vs. contained imagery

Use finished architectural photography full-bleed or edge-to-edge inside a major split. Present construction cutaways and device renders as large isolated objects; do not place them inside decorative website cards.

### Engineered asymmetry

Asymmetry must be anchored to clear alignment, physical annotation points, deliberate edge crops, or visual-mass counterbalance. Do not use arbitrary offsets, floating cards, decorative misalignment, or scattered widgets.

## 6. Inconsistency Flags

1. **Multi-color infrastructure tracing is an outlier.** The centralized-house cutaway uses teal, cyan, amber, and white path lines plus a legend. That conflicts with the one-accent baseline and pushes the section toward an infographic/MEP-diagram aesthetic. **Canonical:** keep the architectural sectional cutaway and centralized-core story; reduce system tracing to the single teal signal color or neutral hairlines. Do not formalize cyan or amber as brand tokens.

2. **The guided-brief choice boxes are too rounded for the baseline.** Their visible radius is closer to roughly 8–10px, while the rest of the system is square/near-square. This is the clearest radius inconsistency. **Canonical:** the site-wide radius remains 0–2px; do not create a large-radius card token from this screen.

3. **Rounded device UI cards are not website components.** The touchscreen and phone renders contain rounded subsystem cards, pills, and interface controls. They are valid because they depict a control interface, but importing that language into page sections would create the generic SaaS/card-grid failure mode. **Canonical:** page structure stays unboxed and editorial.

4. **Forest lighting falloff must not become a gradient/glow system.** The Forest mockups contain natural-looking dark-to-green atmospheric variation and some accent-node bloom. Formalizing that as CSS gradients, aurora backgrounds, or decorative glow would contradict the brand baseline. **Canonical:** use solid Ink/Forest surfaces; allow photographic/composited image treatment to create depth where the source image already supports it.

5. **The main architectural hero contains two actions, but only one is visually primary.** `BEGIN A PROJECT` is boxed; `EXPLORE OUR SYSTEMS` is a lower-weight text link. Treat the latter as subordinate navigation, not a second competing CTA. **Canonical:** never present two equal-weight buttons in the same section.

6. **The infrastructure cutaway is more infographic-like than the rest of the set.** Its four numbered room callouts, multiple path types, line-style legend, and exposed rack create higher visual density than the editorial examples. **Canonical:** use it sparingly as a technical systems plate, not as the default service-page language. The quieter detail-study compositions are the stronger pattern.

7. **The invisible-audio study approaches the density ceiling.** It combines a cutaway, four construction labels, dispersion arcs, finished-room photography, a foreground control device, a large spatial word, and a technical footer. The composition still has one core idea, but adding any more labels/cards would make it busy. **Canonical:** preserve one dominant cutaway and only the annotations required to explain architectural integration.

8. **The floating control device in the invisible-audio study must remain evidentiary, not decorative.** It works because it is subordinate to the room/cutaway and displays a relevant whole-home audio state. Reusing floating dashboard devices merely to signal “smart home” would conflict with the architecture-first positioning. **Canonical:** show a device only when it proves a specific operating-layer concept.

9. **No conflict is visible on the Paper surface.** The Paper study uses a warm ivory rather than pure white, large black typography, minimal dividers, and one device composition. It is the clearest evidence for the editorial reset surface.

10. **No colored italic pre-headline is present.** Eyebrows remain upright, factual, technical metadata. The baseline should be retained without modification.

11. **No generic SaaS feature grid, decorative chip row, glassmorphism, purple/blue gradient text, testimonial card, or heavy page-level shadow appears in the canonical examples.** If later mockups introduce those patterns, they should be treated as non-canonical rather than added to this system.

## Appendix: Evidence Notes

### Color evidence

- The reusable palette was derived from the supplied mockups as a four-surface system: Ink, Forest, Paper, and Image field, with warm/cool neutrals, low-opacity hairlines, and one teal-green signal color.
- Ink visually resolves around `#090B0A` and is effectively consistent with the known near-black baseline; tiny raster/channel variation is attributable to image compression.
- Forest was estimated from atmospheric green fields in the system/detail studies. Source imagery ranges approximately from `#102A23` in shadow to `#346051` in illuminated regions, which is why `#183B31` is now explicitly **PROPOSED / PENDING CONFIRMATION** rather than approved brand truth.
- Paper is visibly warm ivory rather than white. Accent-node edge brightness reads as antialiasing/bloom from the same `#1A8F6E` signal family, not a separate mint token.
- Green falloff in Forest/Image compositions reads as photographic/composited lighting, not evidence for a reusable CSS gradient system.

### Typography evidence

- The flattened mockups visually support the assigned roles for Schibsted Grotesk, Instrument Sans, and JetBrains Mono, although raster imagery cannot independently prove exact font-file identity.
- Spatial words such as `RESIDENCE`, `INTELLIGENCE`, `LIGHT`, `INVISIBLE`, and `RECESSED` establish the oversized display treatment. The final V4 calibration locks this component at weight `300`, the shared cross-surface scale/cropping rules in Section 4, and the Cream atmospheric text gradient; H1 and H2 remain separate heading roles, while H3–H6 are implementation interpolations only.
- Directly evidenced display typography uses regular weight, tight leading, and negative tracking; hierarchy comes from scale and line breaks rather than heavy bold weight.
- Body copy remains narrow in measure, technical labels are factual metadata rather than marketing kickers, and the large spatial words function as low-opacity structural typography.

### Spacing, radius, and border evidence

- Repeated measurements indicate an approximately 8px rhythm with 4px optical adjustments; large empty intervals contribute more to the premium feel than container styling.
- Most page-level surfaces are square or near-square. Larger radii appear mainly inside depicted device UIs and in the guided-brief answer boxes; Section 6 governs those exceptions.
- 1px hairlines repeatedly carry navigation outlines, leaders, dividers, comparison splits, specifications, and progress. Page-level heavy shadows are absent; visible device shadows are physically motivated render shadows.

### Layout evidence

- The supplied compositions are predominantly 16:9 or near-16:9 and consistently devote a full frame to one primary idea.
- Repeated alignments imply a 12-column editorial logic even though literal grid lines are not shown. Full-bleed photography, large isolated cutaways, sparse annotations, and deliberately cropped spatial type create the recurring asymmetry.
- The observed image-to-text ratios in Section 5 are approximate implementation guides derived from those repeated compositions, not independent brand tokens.
