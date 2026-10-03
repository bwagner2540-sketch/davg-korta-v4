# DAVG Korta V4 — Active visual system
Revision: 30 September 2026.

Current tokens live in `src/styles/global.css`, with CSS-first Tailwind 4 `@theme`. Ink #090B0A; Forest #183B31; Paper #EDE9E0; signal #1A8F6E. Preserve the cream variants and existing text/rule aliases. No Tailwind config migration or framework upgrade is required.

Self-hosted display: Schibsted Grotesk Variable. Body, controls and navigation: Instrument Sans Variable. Selective factual labels: IBM Plex Mono 400/500 through `@fontsource/ibm-plex-mono`. The prior JetBrains import and dependency are removed. IBM is not a mandatory eyebrow on every section. Do not typeset the navigation like a terminal.

Display headings use upright sentence case, 300/400, −.035em for display and −.025em for H2. Background words use Schibsted 300, filled glyphs, large scale and intentional cropping. The installed Schibsted package declares an actual wght range of 400–900. The CSS 300 target therefore renders its minimum outline; a true 300 asset remains missing. Do not describe that as a verified weight match. The registered font-family names include Variable; active tokens must match them exactly.

Shading uses SHADES in the opening and RECESSED in the Design study. This is not a hero-only restriction. Do not invent a universal background-word set or restore PROJECT/city fillers. Keep words subordinate to readable copy and controls.

Surface roles are in `13-SURFACE-COLOR-SYSTEM.md`. Ink #090B0A, Forest #183B31, Paper #EDE9E0 and signal #1A8F6E stay as they are. Charcoal #0F1310 is the Systems field. Stone is the existing cream-03, `#E2DDCE`, for Investment. Do not return Ink or Paper to `#0A0C0B` or `#F2EFE7`.

The sticky rail is Forest for the whole middle frame. The right field is Paper for the opening answer, Overview, ordinary Design, Installation and Questions. The designated signature study is the only Forest-to-Ink passage in that field. Systems is Charcoal. Investment is Stone. Hero, inquiry and the global header are Ink. Photography keeps its original colors. Signal is for focus, selection, markers and short labels, not a section fill.

Build comparisons, studies, tables and diagrams from the content. Reuse mechanics without forcing the same composition onto all eight services. No blanket motion ban, screen-count rule, card-template requirement, forced dark/cream ratio or separate design-approval bureaucracy exists.

The two supplied lockups are the only logo artwork. `davg-lockup-on-black.png` is the green mark with the cream Denver AV Group line, used on Ink, Forest, and the black header. `davg-lockup-on-cream.png` is the same mark with the black line, used on Paper. Do not redraw or recolor them.

Spacing uses the locked scale in `src/styles/global.css`: `--spacing-1` 4px through `--spacing-32` 128px, plus `--spacing-section` and `--spacing-page-inline`. Stacks use the parent `gap`. Element margins start at 0. Eyebrows, rail numbers, and tier labels use IBM Plex Mono at `--text-mono`. Headings are upright Schibsted Grotesk. See `02-SERVICE-LAYOUT.md` for the page width contract.
