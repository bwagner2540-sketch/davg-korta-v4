# DAVG Korta V4 — Surface color system
Revision: 30 September 2026. Adopts the owner's surface decision of the same date and replaces the previous two-surface addendum.

## Tokens

Ink `#090B0A`, Forest `#183B31`, Paper `#EDE9E0` and signal `#1A8F6E` stay unchanged. Do not restore Ink or Paper to `#0A0C0B` or `#F2EFE7`.

| Surface | Token | Value | Role |
| --- | --- | --- | --- |
| Forest | `--color-surface-forest` | `#183B31` | Sticky service rail. Right field only on the designated signature study |
| Ink | `--color-surface-ink` | `#090B0A` | Hero, inquiry, global header, backing for cinematic imagery |
| Charcoal | `--color-surface-charcoal` | `#0F1310` | Systems and device presentations |
| Paper | `--color-surface-paper` | `#EDE9E0` | Answer, Overview, ordinary Design, Installation, Questions |
| Stone | `--color-surface-stone` | `var(--color-cream-03)` / `#E2DDCE` | Investment and scope |
| Signal | `--color-accent-signal` | `#1A8F6E` | Focus, selected state, markers, short labels. Not a section fill |

Other cream tokens remain for component details. They are not page bands. Photography keeps its original colors.

## Service-page map

Roles live on the section: `hero`, `answer`, `editorial`, `systems`, `investment`, `questions`, `inquiry`, `signature-study`. They are independent of chapter ids. A chapter may contain more than one role.

| Passage | Surface |
| --- | --- |
| Hero | Ink |
| Opening answer | Paper |
| Overview, ordinary Design, Installation | Paper |
| Designated signature study | Forest-to-Ink gradient inside that component only |
| Systems | Charcoal |
| Investment | Stone |
| Questions | Paper |
| Inquiry | Ink |
| Sticky rail | Forest, constant through the middle frame |

The signature study is marked `data-surface-role="signature-study"` and `data-signature-study="true"`. On the shading specimen that is the recessed plate in Design. Do not paint the Design parent, the fabric comparison, or any ordinary section Forest. A service without a study does not get a green filler.

Each role sets local background, text, muted text and border variables. Charcoal and Ink use the dark text and border tokens. Paper and Stone use the Paper text and border tokens. Selected indicators use Signal, not Forest.

On mobile the same order applies. The compact service menu may be Forest chrome. It does not wrap the content.

## Retired

Remove the forced 60% dark / 40% cream ratio, the two-consecutive-cream limit, “when in doubt stay dark,” “every primary CTA section must be dark,” compulsory alternation, and any brass accent. Surface choice is a design decision. It is not a ranking or conversion claim.
