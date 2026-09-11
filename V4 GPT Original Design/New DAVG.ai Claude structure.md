# DAVG Solution Page Architecture — The Six-Phase Confidence Build
### An unbiased, research-grounded UX framework for davg.ai's technical solution pages

---

## Why this exists

Most integrator websites do one of two things badly: they either read like a spec sheet (jargon, no story, no trust) or they read like a SaaS landing page (icons, vague promises, no depth). Neither earns a $150K+ decision from a homeowner who's never bought a "system" before, and neither gives an architect anything to actually coordinate around.

This framework is a sales-psychology + AEO/GEO research build, not a copy of DAVG's existing site IA or design tokens. It's meant to be applied fresh to every major solution page (Motorized Shades, Lighting Control, Home Theater, Whole-Home Audio, Networking, Security). The Motorized Shades page is used as the running example throughout because it's the best stress-test — it's the category homeowners understand least and underestimate most.

**Research grounding (Sept 2026):**
- GEO/AEO in 2026 rewards **entity clarity** (your firm as a node connected to Lutron, Control4, CEDIA, HTA — not just keywords), **citation-worthy content** (stats, named specs, expert-attributed statements), and **E-E-A-T signals** (named credentials, verifiable experience, real project data). Keyword density does not move AI citation rates — specificity and structure do.
- The gap between what ranks in classic Google and what gets cited inside AI Overviews/ChatGPT/Perplexity has widened significantly through 2026 — meaning a page can rank fine and still never get cited by an answer engine if it isn't structured for extraction (direct answer first, then depth).
- HTA Certification (Foundation / Luxury / Estate tiers) is a real, verifiable third-party credential system — if DAVG pursues Estate-tier HTA certification, it becomes a legitimate E-E-A-T and schema asset. Right now DAVG's verified credential set is **Lutron Certified HomeWorks Integrator, Control4 Platinum Dealer, and 2026 CEDIA Member** — those three should anchor every trust block until/unless HTA is added.
- Brand vocabulary constraint applied throughout: no "luxury," "premier," "solutions," "custom," "effortless," or "exclusive." Preferred: "architectural AV," "intelligent automation," "designing," "estate-level," "engineered for," "across Colorado," "since 2013."

---

## The Six Phases

Each phase has one job. A user should never have to backtrack to get what a phase owes them — if Phase 2 hasn't actually taught them anything, Phase 3 won't land emotionally, and Phase 5 won't feel earned.

---

### Phase 1 — The Definitive Answer
**Functional purpose:** Answer the exact question that brought the visitor (or the AI answering on their behalf) to the page, in the first 100 words, with zero sales language. This is the AEO/GEO capture layer — it exists to get quoted, snippet-extracted, and cited, not to persuade yet. Persuasion comes later; extraction has to happen first or nothing else on the page gets seen by a generative engine.

**Content depth & structure:**
- Opens with a direct-answer block formatted for extraction: a bolded 2-3 sentence answer to the literal query, e.g. *"What's the pocket depth for motorized Lutron Palladiom shades behind a floor-to-ceiling window wall?"* → answered in plain numbers before any brand talk.
- Structured as a `FAQPage` + `HowTo`/`Article` schema hybrid, with the visible on-page copy mirroring the schema almost verbatim (2026 GEO practice: LLMs weight pages where the human-readable text and the structured data agree — no divergence between what's marked up and what's written).
- Named entity block near the top: firm name, HomeWorks/Control4/CEDIA credentials, service area (South Metro Denver — Cherry Hills Village, Castle Pines, Greenwood Village, Littleton, Centennial, Lone Tree), and manufacturer partnerships (Lutron, Control4) stated as facts, not claims.
- Includes at least one concrete, citable statistic or spec (load rating, pocket dimension range, motor torque spec) — GEO research shows cited/stat-bearing content gets synthesized into AI answers at meaningfully higher rates than generic marketing copy.
- No pricing, no CTA yet. This section exists purely to be correct and quotable.

**Visual/interactive constraints:** Static, text-first, minimal motion. This is the one section on the page that should look almost like a technical reference entry — because that's exactly the trust signal it's selling.

---

### Phase 2 — Category Authority
**Functional purpose:** Teach the visitor what the actual product category *is*, on their terms, so every later claim in the page lands on informed ground instead of jargon. This is where DAVG stops sounding like every other AV site by refusing to assume literacy the visitor doesn't have — and refusing to dumb it down into meaninglessness either.

**Content depth & structure:**
- Direct category disambiguation, plainly stated: what "motorized shades" actually means as a system (fabric, tube motor, control protocol, power/wiring path) versus what a big-box smart-blind kit gets them. Same pattern used elsewhere on the site for lighting (Ketra tunable-white/color architectural lighting vs. a smart LED bulb) — teach the distinction, don't just assert superiority.
- A short "how it actually works" sequence: fabric selection → motor/tube sizing → control integration (Lutron HomeWorks QSX processor talking to Control4 or standalone) → the invisible layer (low-voltage wiring, pocket or valance concealment) that homeowners never see but always feel the absence of if it's done wrong.
- Written in DAVG's voice: direct, conversational, technically precise — explain *why* a spec matters, not just that it exists. "The pocket depth isn't cosmetic — undersize it and the shade fabric roll binds against the window trim within a season."
- Terminology is introduced once, defined in plain language, then used confidently for the rest of the page. No sidebar glossary — the definition is baked into the sentence that needs it.

**Visual/interactive constraints:** A single interactive cutaway or exploded diagram (motor → tube → fabric → pocket) works well here — one visual, high information density, no decorative clutter.

---

### Phase 3 — Tactile & Sensory Proof
**Functional purpose:** Move the visitor from understanding the system to *wanting* the experience. This is the only phase built for emotion over information — it exists to answer the unspoken question "what does living with this actually feel like," which no spec sheet answers.

**Content depth & structure:**
- Short, specific scenario copy over generic lifestyle language: "6:15 AM, the primary bedroom shades rise three inches to let in light without waking anyone in the room next door, then fully open at the scene you set for actual wake time" — concrete, systemic, believable — not "effortless luxury living" (banned words, banned tone).
- Sound and motion described honestly: motor decibel range, travel speed, what silence actually sounds like next to a box-store motor for comparison. Homeowners with a bad experience from a cheaper system respond hard to this kind of specific contrast.
- Real project photography/video (not stock) showing the shade in an actual completed Colorado home, ideally with a natural-light before/after or a scene-transition clip.
- One quick embedded proof point tying back to a completed local project (without over-claiming project count) — this also feeds GEO's preference for real, specific, verifiable detail over vague "trusted by homeowners" language.

**Visual/interactive constraints:** This is the emotional high point of the page visually — full-width imagery or video, generous whitespace, minimal text overlay. Editorial photography instructions apply here more than anywhere else on the page.

---

### Phase 4 — Tiered Scope & Investment Framing
**Functional purpose:** Give the visitor a real mental model of what "more" actually buys — not a vague price range, but a visible difference in engineering, materials, and outcome between a room-level install and a zero-compromise estate-level build. This phase exists to pre-qualify budget without ever feeling like a paywall.

**Content depth & structure:**
- Three concrete scope tiers shown side by side (Room-level / Home-level / Estate-level), each defined by what's actually different — fabric/motor grade, number of controlled openings, integration depth (standalone vs. whole-home scene integration), and what infrastructure work is required behind the wall.
- Each tier answers: what's included, what problem it solves, and who it's actually right for — an Estate-tier visitor should be able to self-select in, and a Room-level visitor should never feel talked down to.
- Framing avoids raw price numbers (which age poorly and invite lowest-bid comparison) in favor of scope specificity — what's engineered differently, not just what costs more.
- This is also where the "why coordinate before drywall" argument belongs — the cost/quality gap between pre-wired and retrofitted shade pockets is one of the most concrete, defensible claims DAVG can make, and it naturally bridges into Phase 5.

**Visual/interactive constraints:** A horizontal or toggle-based comparison layout works better than a static table — letting the visitor slide between tiers reinforces the idea that this is a spectrum of engineering, not a menu of price points.

---

### Phase 5 — Trade & Engineering Validation
**Functional purpose:** Prove — visually and technically — that DAVG can be trusted inside the pre-construction process, not just the finished home. This phase is aimed at two audiences at once: the technically-minded homeowner doing due diligence, and the architect/builder/GC who needs to see that this firm won't blow up their timeline or their wall details.

**Content depth & structure:**
- Real technical artifacts: pocket/valance CAD details, structural load and mounting requirements for large-format glass walls, low-voltage rough-in diagrams, and a rack/wiring schematic showing how shade control ties into the broader HomeWorks/Control4 system.
- Explicit framing as a pre-construction coordination resource, not just a portfolio flex: "This is the same pocket detail we hand to framers before drywall goes up" — positions DAVG as a design-team partner, which is the exact language HTA and the industry increasingly use for how integrators should be positioned to architects.
- Named credentials repeated here in technical context (Lutron Certified HomeWorks Integrator, Control4 Platinum Dealer) — not as a badge wall, but attached directly to the specific technical claim they support.
- Optional downloadable trade resource (spec sheet or pre-wire template) gated lightly or not at all — the goal is to get into an architect's project folder early, and friction kills that.

**Visual/interactive constraints:** This is the one section where dense, technical-looking visuals (line drawings, schematics, annotated CAD) are the right call — it should look like it came out of a project set, not a marketing deck.

---

### Phase 6 — Stewardship & Conversion
**Functional purpose:** Close two loops at once — reframe "service" as an ongoing, high-touch relationship (justifying a long-term contract instead of a one-time install), and give the visitor a single, low-friction next step. This phase carries the conversion weight the first five phases built up.

**Content depth & structure:**
- Reframes post-install language away from "support tickets" and toward proactive stewardship: firmware/health monitoring, seasonal scene tuning, priority response — the argument being that a system this integrated needs an ongoing relationship the same way an estate needs an ongoing property manager, not a break-fix vendor.
- Names what happens in year one, year three, and beyond — concrete, not vague ("we'll check in") — this is where "since 2013" and DAVG's actual longevity does real trust work.
- Single, specific CTA matched to where the visitor is in the journey — for a page this deep, that's a design consultation or an in-home assessment, not a generic "contact us." Local intent language belongs here (service area named plainly), since this is the transactional layer that hyper-local map/LSA traffic lands on directly.
- Identity line ("Your Home, Automated by Design") is appropriate as a closing note here — it's the one place on a technical page where brand voice can breathe without competing with information density.

**Visual/interactive constraints:** Simple, calm, single CTA — this is not the place for a second comparison table or a wall of options. One clear action, one clear next step.

---

## Cross-Phase Technical Notes

| Phase | Primary schema type | GEO/AEO role |
|---|---|---|
| 1 — Definitive Answer | `FAQPage`, `HowTo` | Extraction target for AI Overviews/citations |
| 2 — Category Authority | `Article`, `DefinedTerm` | Entity/semantic clarity, E-E-A-T |
| 3 — Tactile Proof | `ImageObject`/`VideoObject` | Engagement signal, dwell time |
| 4 — Tiered Scope | `Product`/`OfferCatalog` | Qualifies intent, supports rich results |
| 5 — Trade Validation | `Organization` credential markup | Trust/authority signal for both humans and models |
| 6 — Stewardship & Conversion | `LocalBusiness`, `Service` | Transactional/local-intent capture |

**Implementation notes:**
- Keep visible copy and structured data in agreement — don't mark up a claim in schema that the on-page text doesn't also say in plain language.
- Confirm AI crawlers aren't blocked — Cloudflare's default config has shipped with AI bots blocked before; worth a one-time check on davg.ai's Cloudflare settings given the stack already runs on Cloudflare Pages.
- Every named credential (Lutron Certified HomeWorks Integrator, Control4 Platinum Dealer, CEDIA Member) should appear as both visible text and structured `hasCredential` data — don't let it live only in an image/badge graphic, since that's invisible to both AEO and GEO extraction.

---

*This is a content/UX framework, not a locked design system — apply it independent of any prior page layout or visual build decisions already in progress for davg.ai.*
