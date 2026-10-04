# DAVG V4 — Astro Architecture and Pre-Build Audit

**Audit date:** 29 September 2026, America/Denver  
**Purpose:** Technical supplement for the existing Cursor build. Recommendations below are proposed implementation decisions, not claims that the code has already been changed.

## Decision

Use **build-time Astro Content Collections + shared Astro components + static service HTML**.

These are complementary layers:
- Content Collections validate and organize service metadata, chapters, FAQs, specifications and evidence.
- MDX lets each hub compose its own editorial sequence with shared `.astro` components.
- `src/pages/solutions/[slug].astro` generates the eight service routes at build time.
- A shared service shell owns navigation and the 25% sticky rail / 75% document-scrolling reading field.
- Contact and support POST endpoints run on Cloudflare Workers. They do not require making the service pages server rendered.

Keep the existing Motorized Shading page as the migration reference. Move one hub first, verify its content and appearance, then reuse the infrastructure for the other seven. Do not reset the local project or rewrite the page to fit a uniform fifteen-screen template.

## 1. Evidence and limits

### Sources inspected

1. Current Dropbox folder: `1 - DAVGai Master/00 - CURSOR BUILD - V4`. Its recursive listing completed with no additional pages.
2. Entry point, current design system, service layout, route/build map, business facts, reconciliation, local workflow, starter shell, starter shading page, initial/release prompts.
3. All eight separate hub documents; the later shading revisions 08 and 09.
4. Archived `DAVG_V4_SEARCH_AI_EEAT_AEO_GOVERNANCE.md`, retrieved as historical guidance, not reinstated as controlling instructions.
5. Library's current `01-DESIGN-SYSTEM.md` and the opening/shared architecture of the combined hub master.
6. GitHub `bwagner2540-sketch/davg-korta-v4`: complete main tree, current main commit, manifest, lockfile, Astro/Wrangler config, layout, global CSS, both page sources, TypeScript config, ignore rules and older design documents.
7. Current official Astro, Google Search and Cloudflare documentation linked in section 12.

### Snapshot boundary

The inspected GitHub main head is `462c90a7b49719efacd607fc22390d61b15a6953`, committed **10 September 2026 at 22:00 America/Denver** (11 September 04:00 UTC).

This is a committed-source audit. It does not inspect Brandon's uncommitted Cursor work, localhost preview, actual deployed responses, Cloudflare project settings, runtime secrets, Search Console or HubSpot account configuration. Those may be newer than GitHub. No production deployment, repository edit, commit, reset or migration was performed.

The attachment paths supplied for the eight JPEG references are absent in this workspace. No image-based visual verification is claimed. Their counterparts are present in the Dropbox pack inventory. The architecture findings rely on source files, not inferred screenshot details.

## 2. What exists now

| Area | Verified state | Implication |
|---|---|---|
| Routing | Homepage and `src/pages/solutions/motorized-shades.astro` | File-based static routes; no Content Collection routing yet |
| Astro output | `output: 'static'`, `site: 'https://davg.ai'` | Static generation is already the intended baseline |
| Installed versions in committed lockfile | Astro 7.3.2; Tailwind and Vite plugin 4.3.3; Cloudflare adapter 14.3.1 | Preserve the actual lockfile; the requested Tailwind 4.3.2 differs from this snapshot |
| Runtime requirement | Astro lockfile requires Node >=22.12.0 | Pin a currently supported compatible Node release consistently in Cursor, CI and Cloudflare |
| Tailwind | CSS `@theme` and `@tailwindcss/vite` | Correct CSS-first direction; no Tailwind config migration is needed |
| Collections/MDX | No `src/content.config.ts`, service collection entries or MDX integration | Editorial Markdown files currently do not drive the rendered routes |
| Shared SEO | Layout accepts title only | Shading has no description, canonical, social metadata or page JSON-LD |
| Homepage SEO | Separate document/head, description and inline LocalBusiness/FAQPage graph | Some metadata exists, but it is duplicated outside the shared layout |
| Forms | No form or POST handler in committed page sources | Homepage offers mailto; shading links to absent contact route |
| Starter form in Dropbox | Explicitly unconnected, with a script showing an unavailable-delivery message | Starter UI is not production form infrastructure; without JS it also needs a safe submission behavior |
| Crawl support | No repository sitemap, robots, redirects or 404 source | Release crawl/URL behavior is not implemented in this snapshot |
| Fonts | Homepage fetches Google Fonts; global mono token is JetBrains; no font assets/`@font-face` | Violates the current self-hosted/IBM Plex Mono direction |
| Current service shell | Exists in Dropbox starter, absent from committed repo | Integration is needed; local Cursor may have it already |
| Checks | Scripts cover dev/build/preview only | No committed Astro check or CI verification |
| Secrets | Ignore rules exclude `.env` and `.env.*` | Good baseline, not proof that deployed credential handling is configured |

**Current routing answer:** the verified implementation uses a standalone static `.astro` page. Collections are the recommended next architecture, not an existing feature.

## 3. Source authority and missing source coverage

Use this order within the existing local project:

1. Explicit current user direction.
2. `00-START-HERE.md` and `06-CURSOR-LOCAL-WORKFLOW.md` for project/workflow.
3. `01-DESIGN-SYSTEM.md`, `02-SERVICE-LAYOUT.md`, `03-PAGES-AND-BUILD-ORDER.md` and `05-BUSINESS-FACTS.md`.
4. For shading: **09 replaces 08's chapter map**; 08 replaces the original shading hub's rendered sequence. Reuse consistent research/copy from the older hub without appending its entire sequence.
5. Other hubs: their own separate current hub file, with relevant GBB additions.
6. Older combined masters, original design documents and archived SEO documents: research/reference only where consistent.
7. This audit: proposed technical implementation contract; it does not override the visual or editorial decisions above.

The repo's `v4-gpt-original-design/` still contains older locked constraints and JetBrains-era instructions. Keep their historical value, but explicitly exclude them from Cursor's current instruction authority. Do not silently delete useful work.

### Coverage gaps in the active pack

| Gap | What belongs in the project now |
|---|---|
| Content architecture contract | Loader, schema, page-generation rules, shared fields, per-hub composition and preview/public behavior |
| Current SEO/AEO implementation brief | Recover useful search guidance from the archive, correct stale claims, translate it into actual metadata/schema/route behavior |
| Security and form contract | POST inputs, validation, spam controls, destination, error/success semantics, secret ownership and upload behavior |
| Deployment contract | Cloudflare project type, repo/branch, Node, build/deploy commands, generated entrypoint, environments and domain ownership |
| Cursor authority rules | Short repository instruction file pointing to the current pack and retiring old instructions |
| Business config | One public contact/entity record consumed by UI, schema, forms and footer |
| Media/evidence register | Which assets are proof versus explanation, rights, project records, model references and reviewed claims |
| Route/indexing manifest | All launch paths, draft/public states, canonical and redirect rules |
| Verification plan | Type check, build, route/link/schema checks, browser/accessibility and delivery smoke checks |

The archived SEO/AEO governance file is **not lost**. It is missing from the active implementation path. Reuse its useful principles; do not restore its old module mandates or release-process bureaucracy.

Two archived assertions need correction: Media's mandated wall X-ray conflicts with its current buyer guide; a dedicated Search Console generative-AI report should not be promised without verifying actual product availability. Current Google guidance reviewed here describes AI-feature traffic within overall Web performance reporting.

## 4. Proposed project structure

Paths below describe the target inside the existing Cursor repo; they are not newly installed files.

```text
AGENTS.md
.cursor/rules/v4-build.mdc
docs/v4-build/
  existing current pack
  10-ASTRO-ARCHITECTURE-AND-PREBUILD-AUDIT.md
src/
  content.config.ts
  content/
    solutions/
      home-intelligence.mdx
      architectural-lighting.mdx
      motorized-shades.mdx
      media-audio.mdx
      private-cinemas.mdx
      security-access.mdx
      infrastructure-privacy.mdx
      outdoor-entertainment.mdx
  config/
    site.ts
    navigation.ts
  layouts/
    Layout.astro
  components/
    seo/SeoHead.astro
    v4/ServicePageShell.astro
    v4/Chapter.astro
    v4/DecisionComparison.astro
    v4/SystemStudy.astro
    v4/SpecificationLedger.astro
    v4/ProjectProof.astro
    v4/Faq.astro
    media/ResponsiveMedia.astro
    forms/InquiryForm.astro
    forms/SupportForm.astro
  lib/
    seo.ts
    schema.ts
    forms/validation.ts
    forms/delivery.ts
  pages/
    index.astro
    solutions/index.astro
    solutions/[slug].astro
    contact.astro
    support.astro
    about.astro
    projects/index.astro
    trade-partners.astro
    design-build.astro
    service-areas.astro
    privacy-policy.astro
    thank-you.astro
    404.astro
    api/inquiry.ts
    api/support.ts
    robots.txt.ts
  assets/images/
  styles/global.css
public/
  fonts/
  brand/
  _headers
  _redirects
astro.config.mjs
wrangler.toml
.env.example
tsconfig.json
package.json
package-lock.json
.github/workflows/verify.yml
```

Adapt file names to useful existing code. These component names are proposed responsibilities, not a closed design catalogue. Create project case-study or resource collections only when actual content needs them.

### Composition

Use MDX for the service bodies because these pages combine prose with comparisons, galleries and studies. Frontmatter owns validated metadata and reusable structured data. The body composes shared components in the hub's own order.

Do not place the complete rich page in a single giant frontmatter string or render the editorial build briefs verbatim. Internal notes, publish holds and source checklists stay in documentation. Plain Markdown is sufficient for future text-led notes. MDX is build-time trusted source; visitors must never be able to upload executable MDX.

Use:
- `defineCollection()` and a build-time `glob()` loader.
- Schemas using the documented Astro 7 `astro/zod` import.
- `getCollection()` inside `getStaticPaths()`.
- `render(entry)` and its `Content` component in the shared route wrapper.

No client-side route lookup or CMS API call is needed for these pages.

### Migration safety

Compare Cursor's existing local code before edits. Preserve its visual work and existing URLs. Convert shading first. During transition, the explicit `motorized-shades.astro` route can coexist with `[slug].astro` only if the generated list excludes that slug. Remove the explicit file after the migrated page is verified. Never let two implementations silently compete for the same route.

## 5. Content schema to define before copying pages

| Field group | Required information | Validation |
|---|---|---|
| Identity | Service ID, slug, name, title, summary, homeowner decision | Unique known IDs; safe single-segment slug; required strings |
| Publication | draft/review/published, genuinely reviewed date, source document/revision | Production only generates published entries; preview can include drafts |
| SEO | Unique title/description; social image; canonical derived from canonical origin + route | Reject preview-host canonicals and duplicate routes; allow explicit override only for deliberate cases |
| Chapters | Stable anchor ID, display title, order, optional navigation title and aliases | Unique IDs; chapter navigation points to real rendered elements |
| Specifications | Parameter, value, unit, exact product/model, context, primary-source URL and reviewed date | No unsupported universal performance or dimensional claims |
| Comparisons | Options, best fit, limitations, construction/power/system compatibility and care | Real structured rows; no invented prices |
| FAQ | Stable question ID, question, answer, relevant evidence where needed | One content source for visible answer; no hidden alternate SEO answer |
| Media | Slot ID, source, role, status, ratio/dimensions, alt, caption, focal points | Approved assets in public output; decorative imagery may use empty alt intentionally |
| Proof | Project ID, DAVG scope, public location, permissions, photographer/source credit | Render only cleared evidence; concepts cannot be project proof |
| Related content | Existing service IDs/project references | Resolve against actual public routes |
| Inquiry | Service ID and page-specific field labels/options | Shared server validation; do not trust submitted hidden service field |
| Internal claim register | Claim ID, supporting evidence, reviewer/date, publish status | Unverified claim is omitted or withheld; registers do not leak into page copy |

A content schema cannot prove that a manufacturer claim is true or an owner approved an image. It makes missing evidence visible and enforces the recorded state.

Keep existing source IDs as aliases where links require them. Latest shading chapters may consolidate old IDs; they must not force extra screens. Decorative background words are presentation, not headings or navigation data.

Business name, public phone/email, territory, hours, authentic logo and verified profile links belong in `site.ts`, not eight copies of frontmatter. Never publish credentials solely because a logo is available.

## 6. Routing, SEO and AEO

### Public paths

Preserve the eight service slugs in the current build map. Keep `/support/` stable for the rack QR. Reconcile `/service-support/` only if an existing URL needs a one-hop permanent redirect.

Use one deliberate trailing-slash policy across navigation, redirects, canonicals and sitemap. Do not redirect all of denveravguy.com to davg.ai without a separate migration decision: the bridge remains a distinct project.

### Shared head

Make homepage and hubs use the same metadata owner. Add title, description, canonical, robots, social title/description/image and favicon assets. Canonical must point to the real production URL, even on a review build when appropriate. A canonical does not replace noindex or authentication.

Add Organization/site identity and relevant WebPage/Service/BreadcrumbList data through one safe JSON-LD builder. Match visible identity and claims. Serialize safely so text containing `</script>` cannot break out of a script element.

The homepage currently hardcodes a business phone and only part of the territory. Its graph also includes FAQPage. Reconcile the graph with current verified business facts; do not copy it as the new schema baseline.

DAVG has no approved public storefront address. Do not invent one for LocalBusiness validation. Organization + genuine service-area/service information is a suitable starting point. Addressless LocalBusiness semantics do not establish eligibility for Google's address-requiring LocalBusiness rich result.

### Crawl and indexing

- Use `@astrojs/sitemap` or one existing generator; include only canonical, published, indexable URLs.
- Generate intentional robots rules and a sitemap reference.
- Exclude API, draft, confirmation and error URLs from the sitemap.
- Keep `/thank-you/` noindex. A direct visit is not evidence that a submission succeeded.
- Return a real 404 for unknown pages; never configure a blanket SPA fallback.
- Apply noindex to preview pages through HTML and/or response headers; keep drafts out of the public build. Use authentication for confidential review content.
- Do not use robots disallow as a confidentiality or removal mechanism. A crawler needs access to see a noindex directive.
- Confirm custom domain, HTTPS, www/canonical host redirects and duplicate workers.dev exposure in Cloudflare.
- Keep public text available in generated HTML, including FAQ answers and useful comparison content. JS may enhance controls but must not be the only source of that content.

### AEO content decisions

Useful direct answers, accurate comparisons, specific original studies, genuine local context and verified project evidence belong in the pages. Their job is to help a homeowner make a decision. Add primary-source links when a technical statement needs attribution.

Google does not require a special AI file or schema for AI Overviews/AI Mode. `llms.txt` is optional for other consumers, not a build prerequisite or Google visibility tactic. Google's current update log says FAQ rich results have been retired; preserve useful FAQs without treating routine FAQPage injection as an SEO win.

No automatic city/spoke page expansion, invented byline, keyword-density quota or forced word count is necessary.

## 7. Front-end gaps and implementation rules

### Concrete committed-source findings

1. Global CSS uses JetBrains; homepage loads all three fonts from Google. Shading's shared layout supplies no font loading, so it may use generic fallbacks on a direct visit.
2. No self-hosted Schibsted/Instrument/IBM files are committed. Confirm the actual Schibsted asset includes 300; an external font request beginning at 400 cannot establish the required light outline.
3. The older Paper background-word CSS uses gradient text. Reconcile against the current filled, low-opacity treatment rather than copying that CSS automatically.
4. The shading page has no section IDs in this snapshot. Chapter deep links and sticky navigation cannot work until IDs exist.
5. The shading page links to seven unbuilt services, contact and trade partners. Homepage uses only in-page anchors and does not provide a crawlable link to the shading route.
6. The homepage's H1 is a shading pocket-dimension statement while its title describes the whole firm. Treat this as an experimental shading composition, not launch homepage intent.
7. Mobile navigation is a label controlling a `display:none` checkbox. Replace it with native disclosure or a focusable button with correct expanded state and keyboard behavior.
8. Each page contains one H1, which is a useful baseline.
9. Image tags have alt text, but lack intrinsic dimensions/responsive candidates and load-priority decisions. Confirm the pictured location/scope before preserving alt claims.
10. Homepage and shading reuse the same three images. The filename containing “orlando” warrants source/location checking before describing Front Range context; it is not proof that the image is wrong.

### Build approach

- Load self-hosted WOFF2 through `@font-face` and the current roles: Schibsted display, Instrument body/UI, selective IBM mono.
- Preserve current CSS-first tokens; adapt the starter's `text-on-dark` token names to the repo's `text-primary-dark` names or consolidate intentionally. Pasting the shell without resolving this mismatch leaves undefined variables.
- One main landmark per page. The starter shell already contains `main`; the global layout must not nest another around it.
- Use semantic sections, descriptive headings, real links, labeled form inputs, native tables/details where appropriate and visible focus.
- Use Astro image tools for suitable local assets; specify dimensions, responsive sizes/srcset and intentional crops. Eager-load the actual LCP hero; lazy-load below-fold media. Technical plates must remain readable.
- Hide decorative background words from assistive technology and keep them out of the heading hierarchy.
- Keep the document as the vertical scroller; mobile reading order follows the editorial sequence.
- CSS/native interactions are the baseline. Richer interactions can be added when useful; this audit adds no motion gate or closed layout inventory.

## 8. Backend, form delivery and security

### Recommended default

Use a same-origin Cloudflare Worker endpoint for each form with separate inquiry/support validation. Services remain static. Keep `output: 'static'` and mark POST endpoints `prerender = false` with the Cloudflare adapter. Do not use old “hybrid” output instructions or make every route SSR for two forms.

HubSpot is the likely project-inquiry destination because it is already in DAVG's operating stack. Treat it as a proposal until the actual form/pipeline destination is verified. Support routing may differ. Do not invent a portal ID, form GUID, inbox or ticketing integration.

### Contract to specify now

| Concern | Required behavior |
|---|---|
| Input | Name/email, project location, service, project path/timeframe and useful message; support includes system/issue context |
| Validation | Server-owned schema, explicit service/option allowlists, input/body limits and accepted content types |
| Spam | Turnstile verified on the server; check intended hostname/action; rate limiting and sensible honeypot if used |
| Request trust | Exact intended origin rules; cookie-backed endpoints need appropriate CSRF controls; Turnstile is not a substitute for authorization |
| Delivery | Bounded timeout; inspect downstream response; no success until accepted by configured delivery service |
| Duplicates | Submission/request ID or idempotency policy where supported; prevent accidental double sends |
| UX | Accessible pending, validation error, delivery failure and success states; preserve entered values when safe |
| Confirmation | Redirect after a successful accepted POST; exclude failed attempts from lead conversion events |
| Reliability | Decide whether provider acceptance is enough or a durable queue/retry is needed; never promise inbox delivery from a visual success state |
| Privacy | Send only needed fields; do not log full client plans, messages or contact details |
| Uploads | Optional; if no secure storage/delivery path is configured, omit the upload control |

If attachments are enabled, define allowed formats, count/size limits, private storage, expiry, access restrictions and content scanning. Never write uploaded plans into the website's public folder or treat file extensions as sufficient validation. A file-request link may be a later operational alternative.

### Environment and response security

- Put secrets in Cloudflare runtime secret storage, with separate preview/production values.
- `.env.example` documents variable names and purpose only.
- Only browser-safe values such as a Turnstile site key may be public. Never place API tokens/secret keys in `PUBLIC_*`, MDX, source documents or committed config.
- Validate redirects/return paths; no user-controlled external success redirect.
- Add and verify suitable Content-Security-Policy, nosniff, framing restrictions, referrer policy and permissions policy. Roll out CSP against the actual Astro inline scripts/styles, Turnstile and selected analytics; do not paste a policy that breaks forms.
- Configure static-asset headers through `public/_headers`. Worker-generated API responses need their own headers; the static file does not cover them.
- Use no-store for submission responses. Cache immutable hashed assets; do not cache personal POST results.
- Preserve existing HTTPS/account protections. Validate HSTS scope before adding includeSubDomains or preload.
- Review dependency advisories against the actual lockfile. This audit did not run a package vulnerability scan and does not certify the site secure.
- No website account system, database or customer portal is required for launch unless a real feature calls for it.

## 9. Hosting and integrations

The committed Wrangler file contains only a name, compatibility date and `assets.directory = './dist'`. There is no configured form runtime. Verify the build-generated Worker entrypoint/assets layout before choosing a deployment command; do not hardcode a guessed entrypoint or assume `dist` works unchanged after adding runtime routes.

Current Astro Cloudflare adapter documentation supports Workers and says its Pages deployment support was removed. This does not force migrating an already working static-only Pages site. It does mean the chosen runtime adapter/deployment must match the actual Cloudflare project.

| Integration | Timing | Recommendation |
|---|---|---|
| Existing Tailwind Vite integration | Keep | Already correct |
| MDX | Before migrating rich hubs | Add compatible `@astrojs/mdx`; no React dependency needed for Astro components |
| Sitemap | Before indexing | Add compatible `@astrojs/sitemap` unless a useful generator already exists |
| Astro/TypeScript checks | Before replication | Add `@astrojs/check` and compatible TypeScript; run check alongside build |
| Cloudflare adapter | Runtime forms/deploy | Keep compatible installed adapter and verify build output against hosting |
| Turnstile | Before public form launch | Both widget and server validation |
| HubSpot destination | Before form launch | Verify exact IDs/mappings and supported submission route |
| Search Console | Before/at launch | Verify domain property and submit canonical sitemap |
| Analytics | Decide now, implement when selected | Use existing analytics if suitable; track successful inquiry/support separately |
| Error monitoring | When runtime is introduced | Start with useful Cloudflare logs; redact PII |
| CMS | Later if needed | Local collections are enough now |
| Cloudflare Images/D1/KV/R2 | Only for a concrete need | Do not automatically provision paid services or storage |
| React/motion library | Only if an actual component needs it | No default installation |

Use build-time image processing for static editorial assets where suitable. Review the adapter's image-service behavior rather than accidentally provisioning runtime image processing.

## 10. What still needs to be supplied

### Before repeating the service build

- Read local `git remote -v`, branch/status and installed versions without resetting work.
- Reconcile this remote snapshot with newer Cursor code.
- Declare source authority in a concise instruction file.
- Agree the collection/MDX structure; build the shared schema/head/shell once.
- Define preview/public states and route policy.
- Locate the original logo and licensed self-hosted font files.
- Record form field/destination contracts; credentials can follow before release.

### Before public release

- Confirm public phone, email, hours and current service territory. The fact file names conflicting phone values; the older homepage adds another. Do not silently choose one.
- Confirm HubSpot portal/form or alternative provider details, field mapping and inquiry/support recipients.
- Supply a Turnstile site key and runtime secret through the appropriate environments.
- Verify Cloudflare project type, deployment repo/branch, production domain, runtime settings and build commands.
- Provide cleared photographs, exact project scope and credits, or hide unsupported proof.
- Review exact model/dimensional/compatibility claims or omit them.
- Define actual privacy/data-retention practice and analytics choice. This audit is not a legal review.
- Complete form delivery, public crawl/indexing and browser checks.

These factual release tasks do not stop layout work with placeholders. The foundation should be defined before multiplying eight pages; all photography and third-party accounts need not be completed first.

## 11. Verification and Cursor implementation task

### Checks performed in this audit

Complete committed tree inspection; installed lockfile versions; configuration/head/CSS/form inspection; static count of headings, route links, IDs and image attributes; comparison of current and older source authority. The two source pages each have one H1. Shading has nine distinct internal destination paths that do not exist as explicit page routes in the inspected tree.

Not performed: `npm ci`, `astro check`, production build, browser rendering, measured Core Web Vitals, deployed header/404 checks, dependency vulnerability scan, real form delivery, or account integration testing. Do not convert these into “passed” items.

### Required local verification

1. Preserve local changes; compare current code before importing this audit.
2. Run install/check/build with the project's lockfile and supported Node.
3. Verify generated route list, metadata, duplicate canonicals, broken links/anchors and schema JSON.
4. Check 25/75 shell, keyboard/menu behavior, mobile tables/media/form states and direct page font loading.
5. Confirm unknown routes return 404 and preview/public indexing differ as intended.
6. Submit inquiry/support successfully to a test destination; exercise invalid inputs, replayed/failed challenge, downstream failure and double submit.
7. Verify production headers, redirects, asset caching and runtime responses before indexing.
8. Review release output for placeholders, internal notes and unverified claims; run Lighthouse/appropriate accessibility checks for representative pages.
9. Record actual results. Do not add tests that merely mirror low-impact CSS.

### Paste-ready Cursor task

> Work inside the current local DAVG project. Do not reset, replace it, switch repositories, discard experiments or deploy production.
>
> First read the local git remote/branch/status and installed package/lockfile versions. Compare the current implementation with this audit; its GitHub snapshot is older than the latest Dropbox briefs.
>
> Use docs/v4-build/00-START-HERE.md, 01-DESIGN-SYSTEM.md, 02-SERVICE-LAYOUT.md, 03-PAGES-AND-BUILD-ORDER.md, 05-BUSINESS-FACTS.md and this technical audit. For Motorized Shading, 09-SHADING-STORY-SYSTEMS-AND-PROJECT-PATHS.md overrides 08's chapter order; use 08 and the hub master only where consistent. Do not revive v4-gpt-original-design locked rules or the combined master's retired constraints.
>
> Establish build-time Content Collections with an explicit schema, trusted MDX service content, a shared static solutions/[slug].astro route, shared SEO head and 25/75 service shell. Preserve each service's individual composition. Migrate Motorized Shading only first, keeping its route and current visual work. Avoid duplicate explicit/generated routes.
>
> Keep Astro static output for editorial pages. Define inquiry/support POST endpoints for Workers as the form runtime; do not mark delivery complete or fake success without a configured provider. Record missing destination/secrets in internal configuration notes, not public product copy.
>
> Add compatible MDX/sitemap/check dependencies only as needed, preserving the current lockfile and Tailwind CSS-first approach. Self-host Schibsted, Instrument and IBM fonts; identify missing files without substitutions. Consolidate contact/schema data without guessing a phone, address or project fact.
>
> Make preview/public indexing explicit, add one sitemap/robots owner, real 404 behavior and deliberate redirects. Define static and runtime response headers separately.
>
> Run appropriate local check/build and browser/form checks; report what actually passed, what changed and remaining release-only inputs. Once shading is verified, reuse the infrastructure for the other hubs without copying its content sequence.

## 12. Primary technical sources checked

- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro routing](https://docs.astro.build/en/guides/routing/)
- [Astro MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [Astro sitemap integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Astro Cloudflare adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [Cloudflare Turnstile server verification](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- [Google AI features and website guidance](https://developers.google.com/search/docs/appearance/ai-features)
- [Google Search documentation updates](https://developers.google.com/search/updates)
- [Google LocalBusiness requirements](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Inspected DAVG repository](https://github.com/bwagner2540-sketch/davg-korta-v4/tree/462c90a7b49719efacd607fc22390d61b15a6953)

This audit adds a technical foundation to the existing design/content pack. It does not introduce a new approval process, mandatory CMS, universal component story or photography gate for continued layout work.

