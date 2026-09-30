# DAVG Korta V4 — Current design system

29 September 2026. Concise implementation baseline. User decisions override earlier implementation notes. Values below are working starting points; adjust proportion and spacing against the screenshots. They are not a closed component inventory.

## 1. Color tokens

Use Ink, Forest, Paper and architectural photography as distinct fields. Forest is the brand primary color. It needs to be used in a way that sets it apart from the other colors and makes it stand out as the primary color. It should be used on the left sidebar, and as an accent color on other elements. 

Active implementation tokens live in `src/styles/global.css` (short names: `--color-ink`, `--color-forest`, `--color-paper`, `--color-signal`, `--color-line-*`, plus legacy aliases for older `surface-*` / `text-primary-*` class names). Forest is the service-rail primary. Signal is accent-only (nodes, active underlines, eyebrows, numbers, thin rules) and must never be a background fill.

Shell frame tokens: `--shell-rail` / `--shell-field` (25/75), `--shell-sticky-top`. Rail spacing follows the ServiceShell reference (service gap 11px, chapter gap 8px, logo 132px). Type uses self-hosted Schibsted Grotesk, Instrument Sans, and IBM Plex Mono.

This is CSS-first Tailwind 4. No `tailwind.config.js` migration. Permanent rules: `.cursor/rules/korta-v4.mdc`.

## 2. Typography

| Role | Family | Working size / weight / tracking |
|---|---|---|
| H1 | Schibsted Grotesk | 40–64px responsive; 300/400; −.035em |
| H2 | Schibsted Grotesk | 32–44px; 300/400; −.025em |
| H3 | Schibsted Grotesk | 24–36px; 400; −.02em |
| Body and interface | Instrument Sans | 16–18px; 400; ordinary tracking |
| Captions | Instrument Sans | 12–13px; 400/500 |
| Buttons / navigation | Instrument Sans | 12–14px; 500; modest tracking |
| Optional factual eyebrow / measurement | IBM Plex Mono | 11–12px; 400/500; .1em |
| Background word | Schibsted Grotesk | 300; solid, large, cropped, low opacity |

Self-host the named fonts. No JetBrains Mono. IBM is intentional and selective; most sections can have no eyebrow. Do not typeset navigation, body copy or section titles like a terminal. Keep headings upright and sentence case.

The prior PR reports that its Schibsted asset bottoms out at 400. Check the actual local asset later; retain the 300 CSS target and keep building. Do not claim an exact weight match if the available outline differs. No font-source approval gate is imposed on layout work.

## 3. Spacing, radius and borders

Work on a 4/8px rhythm: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128. Desktop content insets typically 48–64px; mobile 20–24px. Headline/body gaps 20–32px. Technical rows 14–18px. Use 1px hairlines and 0–2px corners. Adjust these for the 75% content field; do not copy full-page padding blindly.

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


