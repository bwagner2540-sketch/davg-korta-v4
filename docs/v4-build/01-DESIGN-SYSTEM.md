# DAVG Korta V4 — Active visual system
Revision: 30 September 2026.

Current tokens live in `src/styles/global.css`, with CSS-first Tailwind 4 `@theme`. Ink #090B0A; Forest #183B31; Paper #EDE9E0; signal #1A8F6E. Preserve the cream variants and existing text/rule aliases. No Tailwind config migration or framework upgrade is required.

Self-hosted display: Schibsted Grotesk Variable. Body, controls and navigation: Instrument Sans Variable. Selective factual labels: JetBrains Mono. IBM Plex Mono is retired and is not installed. Mono is not a mandatory eyebrow on every section. Do not typeset the navigation like a terminal.

Display headings use upright sentence case at weight 400, −.035em for H1 and −.025em for H2. Background words still request Schibsted 300. The installed Schibsted package declares an actual wght range of 400–900, so that 300 request renders as 400. Do not describe that as a verified weight match. The registered font-family names include Variable; active tokens must match them exactly.

The names and values in `src/styles/global.css` are canonical. The live page gutter is `--page-gutter`: 1.5rem below 768px, 3rem from 768px, and 4rem from 1280px. `--spacing-page-inline` is an alias of `--page-gutter`. It is not a separate clamp.

```css
@theme {
  --color-surface-ink: #090B0A;
  --color-surface-forest: #183B31;
  --color-surface-paper: #EDE9E0;
  --color-text-primary-dark: #F1F0EB;
  --color-text-secondary-dark: #A7AAA5;
  --color-text-tertiary-dark: #7F847E;
  --color-text-primary-paper: #0B0D0C;
  --color-text-secondary-paper: #51544F;
  --color-accent-signal: #1A8F6E;
  --color-border-dark: rgb(241 240 235 / 18%);
  --color-border-paper: rgb(11 13 12 / 16%);
  --color-spatial-word-dark: rgb(241 240 235 / 12%);
  --color-spatial-word-forest: rgb(241 240 235 / 14%);
  --font-display: "Schibsted Grotesk Variable", "Schibsted Grotesk", sans-serif;
  --font-sans: "Instrument Sans Variable", "Instrument Sans", sans-serif;
  --font-body: "Instrument Sans Variable", "Instrument Sans", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --text-h1: clamp(2.5rem, 4.5vw, 4rem);
  --text-h1--line-height: 0.98;
  --text-h1--letter-spacing: -0.035em;
  --text-h1--font-weight: 400;
  --text-h2: clamp(2rem, 3vw, 2.75rem);
  --text-h2--line-height: 1.02;
  --text-h2--letter-spacing: -0.025em;
  --text-h2--font-weight: 400;
  --text-h3: clamp(1.5rem, 2.2vw, 2.25rem);
  --text-h3--line-height: 1.08;
  --text-h3--letter-spacing: -0.02em;
  --text-body: 1rem;
  --text-body--line-height: 1.5;
  --text-body-lg: 1.125rem;
  --text-body-lg--line-height: 1.45;
  --text-mono: 0.6875rem;
  --text-mono--line-height: 1.35;
  --text-mono--letter-spacing: 0.1em;
  --spacing-section: clamp(3rem, 6vw, 6rem);
  --spacing-gutter: var(--page-gutter);
}
:root { --page-gutter: 1.5rem; }          /* below 768px */
/* 768px */  :root { --page-gutter: 3rem; }
/* 1280px */ :root { --page-gutter: 4rem; }
```

Surface roles are in `13-SURFACE-COLOR-SYSTEM.md`. Ink #090B0A, Forest #183B31, Paper #EDE9E0 and signal #1A8F6E stay as they are. Charcoal #0F1310 is the Systems field. Stone is the existing cream-03, `#E2DDCE`, for Investment. Do not return Ink or Paper to `#0A0C0B` or `#F2EFE7`.

The sticky rail is Forest for the whole middle frame. The right field is Paper for the opening answer, Overview, ordinary Design, Installation and Questions. The designated signature study is the only Forest-to-Ink passage in that field. Systems is Charcoal. Investment is Stone. Hero, inquiry and the global header are Ink. Photography keeps its original colors. Signal is for focus, selection, markers and short labels, not a section fill.

Active font system, restored 2 October 2026 in `src/styles/global.css`. Self-hosted. IBM Plex Mono is retired and is not part of the active design system.

| Role | Family | Working size / weight / tracking |
|---|---|---|
| H1 | Schibsted Grotesk | 40–64px responsive; 400; −.035em; line-height 0.98 |
| H2 | Schibsted Grotesk | 32–44px; 400; −.025em; line-height 1.02 |
| H3 | Schibsted Grotesk | 24–36px; 400; −.02em; line-height 1.08 |
| Body and interface | Instrument Sans | 16px; 400; line-height 1.5; ordinary tracking |
| Captions | Instrument Sans | 13px; 400/500; line-height 1.35 |
| Buttons / navigation | Instrument Sans | 12–14px; 500; modest tracking |
| Eyebrow / measurement / technical metadata | JetBrains Mono | 11px; 400/500; .1em |
| Background word | Schibsted Grotesk | CSS still requests 300; solid, large, cropped, low opacity |

Do not typeset navigation, body copy or section titles like a terminal. Keep headings upright and sentence case. Display weights stay at 400 in the base rules. Existing page utilities still set the composed heading sizes.

The installed Schibsted variable file covers weights 400–900 only. Instrument Sans variable covers 400–700. A `font-weight: 300` declaration therefore resolves to 400. The 300 target stays in the spatial-word rules. No separate 300 cut exists in the self-hosted files or in the earlier Google Fonts stylesheet. No `font-feature-settings` were present in the recovered CSS.

Foundation tokens, applied on the homepage and on every git hub:

| Token | Value |
|---|---|
| Narrow measure | 42ch |
| Standard body measure | 62ch |
| Wider measure | 72ch |
| Content width | 90rem (1440px, current homepage folio) |
| Page gutter | 1.5rem / 3rem / 4rem at 768px and 1280px |
| Micro / text / component / section spacing | 0.5rem; clamp(1.25rem, 2vw, 2rem); clamp(1.5rem, 2.5vw, 2.5rem); clamp(3rem, 6vw, 6rem) |

## 3. Spacing, radius and borders

Work on a 4/8px rhythm: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128. The live page gutter is 24px below 768px, 48px from 768px, and 64px from 1280px. Headline/body gaps 20–32px. Technical rows 14–18px. Use 1px hairlines and 0–2px corners. Adjust these for the 75% content field; do not copy full-page padding blindly.

Allow long selection guides to breathe across multiple viewports. Dense chapters do not have to fit one screen. Background words should match the same light, filled, cropped treatment on Paper and green fields. Keep them away from readable text and controls. Scale them to the available field, not automatically the whole browser width.

The earlier compulsory six-column separation, 160px cushion, mobile ban and fixed section-number placement are retired as global rules. They may be useful locally. Keep at least an ordinary content interval between large word moments when using the earlier spaced rhythm. The service identifiers are recovered; remaining words can wait. Do not restore PROJECT/city fillers or mechanically stamp SYSTEM/CONCEALED/INVESTMENT across every page.

## 4. Components

Use the shared service shell, unboxed editorial text, full-width media, side-by-side comparison, selection table, image/text product study, annotated cutaway, specification ledger, native FAQ, investment scopes and inquiry form when the content needs them.

Reuse mechanics, not a forced universal page story. Media's speaker-count/TV/Atmos flow differs from Shading's fabric/hardware/power flow. Each hub's section map is authoritative for this build pass.

Prefer one clear primary action in a composition. A quieter supporting link can coexist. Keep architecture dominant. Devices or product images should explain a choice. Avoid default SaaS card grids, decorative pills, glow and stock lifestyle imagery. This is a visual direction, not a ban on every future layout or technique.

## 5. Layout

All eight service pages use the requested 25% sticky left rail / 75% right reading field on desktop. The right field scrolls vertically with the document. Its sections can be unboxed splits, wide photographs, comparisons, tables and studies. Mobile stacks into a readable single column with a compact service/chapter menu.

Homepage, About and Projects can use the horizontal magazine-style direction. Build a simple useful version first; the horizontal treatment is available, not a prerequisite for completing the service pages. No JS motion library is assumed. Native CSS and a small focused script can handle ordinary navigation and controls. Further motion is judged by its usefulness and does not require a separate Claude sign-off.

## 6. Reference reconciliation

The September 3 files guide Korta typography, paper/green/dark fields, architecture, comparisons and cutaways. The September 28 screenshots guide the sticky rail and scrolling editorial field. Use DAVG typography and colors instead of copying the reference's portrait, gold labels, social links or branding.

Raster mockups cannot establish font-file identity or exact product dimensions. Their rendered metrics and project claims are visual examples. Keep those numbers out of public claims until checked. Website controls use the restrained radius even when a photographed device has rounded UI. Blank media boxes are valid in the build preview.

The two supplied lockups are the only logo artwork. `davg-lockup-on-black.png` is the green mark with the cream Denver AV Group line, used on Ink, Forest, and the black header. `davg-lockup-on-cream.png` is the same mark with the black line, used on Paper. Do not redraw or recolor them.

Spacing uses the locked scale in `src/styles/global.css`. Page gutters are `--page-gutter`: 1.5rem, then 3rem from 768px, then 4rem from 1280px. `.folio` is the shared homepage content frame. `--spacing-micro`, `--spacing-text`, `--spacing-component`, and `--spacing-section` are a scale. Service chapters choose from that scale by role: an answer is tighter than an opening, a study can bleed, a ledger can run wide. Do not give every hub section the same `--spacing-section` padding. Body is `--text-body`; emphasized body is `--text-body-lg` (1.125rem / 1.45). Narrow, standard, and wide measures are 42ch, 62ch, and 72ch. Headings use `--text-h1`, `--text-h2`, and `--text-h3`. Eyebrows and rail numbers use JetBrains Mono at `--text-mono`. Headings are upright Schibsted Grotesk. See `02-SERVICE-LAYOUT.md` for which frame uses which interval.
