# DAVG — all eight service pages: content and build master

Source reconciled 30 September 2026. The global frame, surface and architecture instructions are updated; all eight service education bodies below are retained from the inspected SYSTEMS master. This document replaces the earlier shading-only chapter order with a complete eight-page editorial system. The original hub files remain technical reference material; their fifteen-section research sequence is no longer the website sequence.

## Start here

1. Read the page’s website copy in order. That is the visitor’s decision story.
2. Build its visual study and chapter layouts from the associated direction. Layout notes and research links are internal; do not publish them as body copy.
3. Use the project paths, complete-scope comparison, FAQs and inquiry after the core story. Add genuine project proof before the scope comparison only when records and publishable images exist.
4. Use the integrated JSON records as runtime copy after reconciling them with this education input. Record omissions or changed claims explicitly. This Markdown preserves the complete supplied education; it is not a second runtime CMS or a compulsory navigation sequence.

## Why the flow changes

A visitor first recognizes a room or property problem. The page then explains the mechanism, shows the choices and their consequences, and brings those choices back to everyday use.

The project path explains what can change at this stage of construction. Scope options come after that context, so the visitor compares actual work rather than unexplained product ranks.

Each page has a different visual argument. Shared components keep navigation, typography and content fields consistent; they do not force every service into the same row of cards.

## Shared visual language

Use two full-width openers (Hero and opening Question/direct answer), then a bounded desktop 25% Forest sticky service rail / 75% editorial middle, then two full-width closers (Questions and Inquiry). The middle has exactly Overview, Design, Systems, Installation and Investment. Nest those five links immediately under the active service in the eight-service menu. Numbered education modules below belong within those groups; they are not rail labels. The document owns vertical scrolling. Mobile uses a single-column layout and compact service/chapter menu.

The Forest #183B31 rail remains constant. Forest fills and gradients in the right field are reserved for designated service-study mockups. Ordinary editorial content uses sustained neutrals and photography rather than alternating green, cream and black bands. Follow DAVG-SURFACE-COLOR-SYSTEM.md; its supporting Charcoal/Stone assignments are recommendations. Preserve Ink #090B0A, Paper #EDE9E0, Signal #1A8F6E and original brand artwork colors.

Schibsted Grotesk 300/400 carries display type. Instrument Sans carries body and interface text; IBM Plex Mono is reserved for technical labels where it helps reading.

Give the hero one architectural image and a short argument. Alternate close detail, large studies, concise comparisons and quiet text; do not add a media panel beside every paragraph.

Use a background word selectively when the crop and contrast help the composition. Do not repeat it behind every chapter or obscure useful text.

Interactive studies must have a readable default state and static labels. On mobile, stack the evidence in narrative order; keep comparison tables scrollable and give diagrams legible text alternatives.

## Content and evidence rules

Open with a concrete problem or mechanism. Explain how a choice works before describing its outcome; use short paragraphs with no more than three sentences.

Keep product, system, interface and construction scope on separate axes. “Best” does not automatically mean HomeWorks, Palladiom, more channels or more cameras.

Actual product images need an exact model, finish, system compatibility, useful view and permission to publish. Manufacturer research links are references, not permission to reuse images.

Do not fabricate a project, client quote, price, measurement or performance result. A design study is labeled illustrative; a case study uses documented DAVG scope and publishable evidence.

Sources support product mechanics. The proposed page order, project scopes and art direction are editorial recommendations, not manufacturer endorsements or established DAVG package offers.

## Build architecture

The checkpoint repair adopts standalone Astro routes, shared .astro components and build-time JSON records in src/data/services/. This does not require a Content Collections or MDX migration. The original collection schema and dynamic-route starter are archived reference scaffolds. Preserve installed versions, existing routes, user edits and form handling; inspect the actual Mac checkout before integration.

Content files hold hero, chapters, comparison rows, project paths, scope options, FAQs, SEO fields and media metadata. Components interpret a finite set of chapter layout variants; each page’s study defines the composition.

Render educational content in HTML at build time. Use browser code only where the focused study benefits from it; keep all essential text available without that code.

An inquiry form still needs a working server or form-service endpoint. Static page generation does not send messages by itself.

## Integration order

Build motorized shades first as the temporary visual test page. Deployment to the existing test/preview project is authorized. Preserve its educational content and keep its implementation current. Validate its fabric, hardware, system and keypad story; then apply the component vocabulary to lighting without duplicating the same composition.

Continue with media/audio and cinema, then home intelligence, infrastructure, security and outdoor. Preserve the independent decision story for each service.

Before launch: resolve media and rights, confirm exact products and service terms, add genuine proof where available, connect the form, check accessibility and SEO, and run the actual repository’s build.

## Eight-page decision map

| Page | Visitor’s first decision | Signature study |
|---|---|---|
| Home Intelligence | Which daily moments should coordinate? | Same residence in Arrival / Evening / Away |
| Architectural Lighting | What should the room illuminate? | Light layers and wall-control elevation |
| Motorized Shades | What should each opening do? | Window → fabric → hardware → control |
| Media & Audio | What is each room for? | Zone map with one living-room close-up |
| Private Cinemas | Where do the seats belong? | Same-room cutaway, sightline and sound field |
| Security & Access | Which events and entrances matter? | Property views, recording and permission paths |
| Infrastructure & Privacy | Which part of the connection is weak? | Provider-to-room path and network boundaries |
| Outdoor Entertainment | Where are people and what is exposed? | Landscape listening zones and sun study |

The following eight sections include finished copy and internal build direction. Keep those layers distinct during implementation.


---

# Home Intelligence

Route: `/systems/home-intelligence/`

## Website copy

# One command. Several systems. A predictable result.

A scene coordinates lighting, shades, music, and other compatible systems. The design starts with what your household wants to happen.

Action: **Discuss your project** → project inquiry.

## 01. Start with the moments you repeat.

You come home carrying bags. You want a lit entry, comfortable living-room light, and a clear way to stop the music left playing upstairs.

An Arrival scene sends a defined set of commands to the connected systems. A keypad can start that scene without opening an app or speaking to the house.

We begin with those repeatable moments. Then we decide what belongs in the scene, what stays independent, and who can change it.

**Build direction — scene-study:** Three states of the same room: Arrival, Evening, Away. Show exactly which devices change, with a static text list alongside.

Research: [control4](https://www.control4.com/solutions/products/controllers).

## 02. What actually connects the house?

A Control4 controller runs the project and communicates with supported equipment through its available network and control connections. Integration software tells it how each device accepts commands and reports its state.

A command sent is not always a command confirmed. A system that reports its actual state gives better feedback than one that only receives a power command.

The home network carries much of this communication. Controller selection follows the devices, rooms, connections, and processing needs of the project; it is not a ladder of prestige.

**Build direction — system-diagram:** Draw controller, network, lighting processor, audio, shades and interfaces as distinct roles. Mark confirmed feedback versus command-only examples.

Research: [control4](https://www.control4.com/solutions/products/controllers).

## 03. Choose the control you will reach for.

A keypad works well for actions you know by heart. A remote keeps viewing controls in your hand; a touchscreen can show rooms, sources, and compatible intercom functions.

The app gives a broader view of the residence. It should not be the only way to turn on the lights in a guest room.

Use fewer labels and make them literal. Evening is useful only when everyone knows what it changes.

| Interface | Useful for | Decision to make |
|---|---|---|
| Keypad | Repeatable room or whole-home scenes | Button labels, location and feedback |
| Halo / Halo Touch | TV and media control | Physical controls, screen preference and charging |
| Touchscreen | Room selection and compatible intercom | Location, power and daily users |
| App | House-wide selection and supported remote access | Accounts, permissions and service terms |

**Build direction — product-gallery:** Real Control4 Halo/Halo Touch, touchscreen and keypad front views beside installed-use photographs. Confirm current model and finish.

Research: [control4](https://www.control4.com/solutions/products/controllers).

## 04. A focused room or a whole residence?

A room system can coordinate a television, sound, and a few lighting scenes. A residence-wide design adds shared sources, more interfaces, cross-room scenes, and a larger set of things that must work together.

Independent devices can remain independent when their existing controls suit the household. Every extra integration adds setup and an ongoing compatibility responsibility.

Write the intended behavior before selecting equipment. That makes the scope review about the house rather than a controller model number.

**Build direction — comparison:** Compare a media-room scene with the same residence expanded to entry, bedroom and outdoor zones.

Research: [control4](https://www.control4.com/solutions/products/controllers).

## 05. What happens when the internet stops?

Some commands run within the local system. Streaming services, off-site access, and other cloud-dependent functions need their own internet or service connections.

A power outage is a different failure. The controller, network, and devices all need power; backing up one box does not keep the whole chain running.

The proposal should identify local functions, internet-dependent functions, subscriptions, and the expected behavior during each outage. Current Control4 service terms must be checked against the installed system and account.

**Build direction — detail-study:** Two legible states: internet unavailable and utility power unavailable. List affected functions without a blanket “works offline” badge.

Research: [connect](https://www.control4.com/services), [control4](https://www.control4.com/solutions/products/controllers).

## 06. The last step is living with it.

Commissioning means testing each agreed scene from the interfaces your family will use. It also means checking room names, volume limits, access permissions, and what happens when a device is unavailable.

A takeover starts with an inventory. Existing controllers, software, wiring, account ownership, and unsupported devices can change the work before any new hardware is chosen.

At handover, the household should know how to use the everyday controls and how to request changes. Documentation keeps a future service visit from starting over.

**Build direction — process-strip:** Show an example scene schedule, labeled rack and household handover sheet. Label sample documents as illustrative.

Research: [control4](https://www.control4.com/solutions/products/controllers).

## Your project path

Select one route. Show its full copy in static HTML; enhancement may focus the selected route.

### An existing home

Inventory current equipment and cable paths first. Add scenes around controls that already make sense; use available routes for interfaces and network improvements.

### Rooms already opening up

Coordinate interface positions, cable routes and lighting changes before finishes close. Decide which existing devices remain in the system.

### A house still on paper

Set room names, system boundaries, interface locations and rack requirements with the architect, builder and trades. Test the daily-use plan before ordering controls.

### Buying or preparing to sell an existing home

For a buyer, review equipment, account ownership, documentation and likely changes before assuming a system transfers intact. For a seller, prepare an inventory and clear handover of accounts and controls; upgrades do not come with a resale-value promise.

## Compare the scope

Good / Better / Best describes complete project scope. It is not a fixed brand, platform, model or price ladder.

| Option | Included design intent | Dependencies and boundaries |
|---|---|---|
| Good — focused control | One defined room or group of daily scenes, compatible devices, interface setup, network review and handover. | Existing equipment must be assessed; network repairs and unsupported integrations are separate scope. |
| Better — coordinated residence | Several rooms, shared scene logic, interface planning, documented integration behavior and commissioning across zones. | Controller capacity, wiring, third-party systems and service subscriptions follow the actual design. |
| Best — comprehensive design | Whole-residence coordination, early trade design, detailed scene schedule, account planning and agreed support arrangements. | Scope can include more design and testing without requiring every device to join the system. |

## Questions before you commit

### Can I keep my existing equipment?

Often, but model numbers and control methods matter. We assess what can be integrated, what needs replacement, and what is better left on its own.

### Does everything need a subscription?

No single answer applies to every function. The proposal should list current service requirements for remote access, integrations and streaming on your specific system.

### Can my family use it without a phone?

Yes, when the design includes local interfaces for everyday actions. Keypads and remotes should cover the commands used most often.

### What changes the project cost?

Room count, interfaces, device compatibility, cable work, network condition, programming depth and takeover repairs. Support terms are a separate decision.

## Start with the project you have.

Tell us which rooms matter, what already exists, and when construction starts. Share plans or photographs if you have them.

Inquiry fields: Project path, Rooms or zones, Existing systems, Construction timing, Contact details.

## Visual study

Follow one residence from arrival to evening to away. Keep the same floor plan and device positions; change only the active scene.

## Required real imagery

| Asset | Subject | Views | Status |
|---|---|---|---|
| hi-hero | One real residence at evening | Installed room; visible keypad without a product pile | Needed; model/rights/alt text must be verified |
| hi-remote | Halo and Halo Touch | Exact-model front and hand-held views | Needed; model/rights/alt text must be verified |
| hi-interface | Control4 keypad and touchscreen | Front, installed and finish detail | Needed; model/rights/alt text must be verified |

## Search fields

Title: Home Intelligence | DAVG

Description: A scene coordinates lighting, shades, music, and other compatible systems. The design starts with what your household wants to happen.

Use the production origin for the canonical URL. Service-area text must match the company’s verified coverage; do not invent city pages.


---

# Architectural Lighting

Route: `/systems/architectural-lighting/`

## Website copy

# Design the light before you choose the keypad.

Fixture position, beam shape, driver behavior, and control all affect how a room feels. We plan those decisions together.

Action: **Discuss your project** → project inquiry.

## 01. What should the room illuminate?

A bright ceiling does not guarantee a comfortable room. Light aimed at a work surface serves a different job from light on a painting or a quiet path to the kitchen.

Ambient light sets the room. Task light puts light where work happens; accent light gives materials and objects shape.

We map those layers against furniture, finishes, sightlines, and daily use. Then we group the fixtures into circuits that can be adjusted independently.

**Build direction — layer-study:** Use the same room photograph for ambient, task and accent states. Annotate actual fixture locations rather than decorative glowing lines.

## 02. A dimmer is only one part of the chain.

An LED driver converts power for the light source. The dimmer and driver must work together across the brightness range you expect to use.

A mismatch can produce flicker, audible noise, abrupt shutoff, or a low setting that is still too bright. A compatibility check and a representative installed test reveal more than a dimmable label.

Low-end adjustment is part of commissioning. We test the selected fixture, driver, load and control together before repeating that combination throughout the house.

**Build direction — detail-study:** Exploded fixture → driver → dimming method → control diagram with a low-end test photograph.

Research: [drivers](https://webtools.lutron.com/compatibility/us/en/dimmers).

## 03. Dimming and changing color are different decisions.

Warm-dim light gets warmer as brightness falls. Tunable-white light allows color temperature to change separately from brightness, within the selected product’s range.

Neither approach fixes poor fixture placement or glare. Matching products also requires checking their color behavior together; equal numbers on two specifications do not guarantee an identical appearance.

Choose the behavior by room. An evening living room and a detailed work area may need different control ranges and scene settings.

| Behavior | What changes | Good reason to select it |
|---|---|---|
| Fixed white | Brightness; color temperature is nominally fixed | A consistent light character |
| Warm dim | Brightness and warmth move together | A warmer evening atmosphere |
| Tunable white | Brightness and color temperature can be set separately | Different tasks or times of day |

**Build direction — comparison:** Three labeled sample states, photographed with consistent exposure and white balance. Include actual product range only after selection.

Research: [lumaris](https://assets.lutron.com/a/documents/3691335_eng.pdf).

## 04. Choose the Lutron system around the design.

Caséta can suit focused connected-lighting projects. RadioRA 3 extends the residential system with its supported controls and integrations; HomeWorks supports a broader custom design with additional control and wiring choices.

Centralized dimming moves selected load-control equipment into panels. Local dimming keeps the control at the room; either approach has wiring, service-access and architectural implications.

The right system follows the load schedule, fixtures, interfaces, shades and construction plan. HomeWorks is not required just because a house is expensive.

| Platform | Decision it helps answer | Check before selection |
|---|---|---|
| Caséta | Can a focused project use its supported devices and app control? | Current device support, limits and requested scenes |
| RadioRA 3 | Does the residence fit its supported lighting, shade and interface design? | Loads, RF layout, integrations and selected keypad families |
| HomeWorks | Does the architecture need custom interfaces, panelized loads or broader system design? | Processor generation, link type, load modules and wiring |

**Build direction — comparison:** Compare local wall controls and a centralized panel using actual wiring roles. Keep system capacities in current project specifications.

Research: [ra3](https://www.lutron.com/us/en/controls/systems/radiora3), [homeworks](https://www.lutron.com/us/en/controls/systems/homeworks), [drivers](https://webtools.lutron.com/compatibility/us/en/dimmers).

## 05. The wall should explain the room.

A dimmer directly controls a compatible load. A scene keypad sends instructions to the system, so one button can adjust several lighting layers and supported shades.

Sunnata offers a contemporary control language. HomeWorks designs can also use interfaces such as Palladiom, seeTouch and Alisse where the selected system supports them.

Alisse belongs to HomeWorks QSX and uses a wired QS connection. A RadioRA 3 Sunnata RF keypad uses radio for communication but still requires its specified electrical supply; RF does not mean battery-powered.

**Build direction — product-gallery:** Front, wall-installed and material-close-up images for Sunnata, seeTouch, Palladiom and Alisse. Caption exact system, model, finish and button configuration.

Research: [sunnata](https://assets.lutron.com/a/documents/3691168_eng.pdf), [alisse](https://assets.lutron.com/a/documents/3691154_eng.pdf), [keypads](https://www.lutron.com/us/en/controls/keypads-remotes).

## 06. Keep the same room. Change the occasion.

Cooking brings the work surfaces forward. Dinner reduces task light and puts more emphasis on the table and surrounding walls.

An evening scene can lower light and close selected shades. A late-night path can light circulation without waking the whole room.

Scene levels are set in the finished space. Stone, timber, fabrics and wall color all change what a percentage setting looks like.

**Build direction — scene-study:** Repeat the opening room in Cooking, Dinner and Late Night states. Beside it, show one short keypad label list.

Research: [ra3](https://www.lutron.com/us/en/controls/systems/radiora3), [homeworks](https://www.lutron.com/us/en/controls/systems/homeworks).

## Your project path

Select one route. Show its full copy in static HTML; enhancement may focus the selected route.

### Work with the existing circuits

Check box wiring, drivers, fixtures and circuit groups before selecting replacements. Keep the plan honest about what can change without opening walls.

### Use the open walls well

Coordinate circuit separation, driver locations, wall elevations and new fixtures before electrical rough-in. Test a fixture-and-driver sample before bulk purchase.

### Coordinate light with architecture

Develop fixture locations, beam intent, load schedule, panel space and keypad elevations with the architect, lighting designer and electrician. Reserve access for future service.

### Buying or preparing to sell an existing home

For a buyer, review equipment, account ownership, documentation and likely changes before assuming a system transfers intact. For a seller, prepare an inventory and clear handover of accounts and controls; upgrades do not come with a resale-value promise.

## Compare the scope

Good / Better / Best describes complete project scope. It is not a fixed brand, platform, model or price ladder.

| Option | Included design intent | Dependencies and boundaries |
|---|---|---|
| Good — room-led scenes | Selected rooms, compatible dimming, clear everyday controls and commissioned scene levels. | Existing circuit groups may limit independent layers; fixture replacement is explicitly itemized. |
| Better — coordinated lighting | Multiple rooms, a lighting-layer plan, interface schedule and coordinated shade scenes. | Platform choice follows load and interface requirements, not the tier label. |
| Best — architectural lighting design | Whole-residence planning, detailed fixture/driver review, architectural keypad coordination and full commissioning. | Panelized loads and tunable light are selected only where the design benefits from them. |

## Questions before you commit

### Can existing LEDs stay?

Only after the fixture and driver combination is checked with the proposed control. Some replacements may be needed for the requested dimming behavior.

### Is a keypad just a more expensive switch?

A switch operates a circuit. A scene keypad can instruct several loads and systems, which changes both the wiring plan and the way the room is used.

### Does HomeWorks replace the lighting designer?

No. Fixture placement, optics and light quality still need design; the control system manages the agreed loads and scenes.

### What drives cost?

Fixture and driver choices, circuit count, wiring access, panel work, interfaces, tunable lighting and commissioning depth.

## Start with the project you have.

Tell us which rooms matter, what already exists, and when construction starts. Share plans or photographs if you have them.

Inquiry fields: Project path, Rooms or zones, Existing systems, Construction timing, Contact details.

## Visual study

One room, three light layers, three times of day. A wall-elevation study connects the lighting design to the actual keypad.

## Required real imagery

| Asset | Subject | Views | Status |
|---|---|---|---|
| al-hero | One architectural room with layered light | Installed ambient/task/accent views | Needed; model/rights/alt text must be verified |
| al-keypads | Sunnata, seeTouch, Palladiom, Alisse | Separate exact-model front, installed and finish views | Needed; model/rights/alt text must be verified |
| al-driver | Selected LED fixture and driver | Real component and accessible installation detail | Needed; model/rights/alt text must be verified |

## Search fields

Title: Architectural Lighting | DAVG

Description: Fixture position, beam shape, driver behavior, and control all affect how a room feels. We plan those decisions together.

Use the production origin for the canonical URL. Service-area text must match the company’s verified coverage; do not invent city pages.


---

# Motorized Shades

Route: `/systems/motorized-shades/`

## Website copy

# Start with the window. Then decide what the shade should do.

Glass, daylight, privacy, fabric, and mounting determine the shade. The motor and control system follow those decisions.

Action: **Discuss your project** → project inquiry.

## 01. A wall of glass and a bedroom need different answers.

A large west-facing window can make a beautiful room difficult to use late in the day. A bedroom may need privacy at dusk and control over early light.

Map orientation, window size, frame depth, door movement and access before selecting a shade. Corner glass, narrow mullions and sliding doors each change the available mounting space.

The first decision is the job at each opening. Glare control, view, privacy and darkness can call for different materials or two layers.

**Build direction — window-study:** Four real opening types: large glass, bedroom, corner and sliding door. Mark mounting depth and operational clearance.

Research: [fabric](https://www.lutronfabrics.com/us/en/resources/faq), [sivoia](https://www.lutron.com/us/en/window-treatments/sivoia-shades).

## 02. What do you want to see through it?

A solar fabric filters daylight while preserving some view. Its openness describes the open area of the weave, but color, glass and lighting conditions also affect glare and visibility.

Daytime view-through does not guarantee privacy at night. When the room is brighter than the exterior, people outside may be able to see inward.

A blackout fabric blocks light through the material. Light can still enter at its edges unless the mounting and side details address those gaps.

| Choice | What it changes | Tradeoff |
|---|---|---|
| Solar / view-through | Daylight and outward view | Night privacy needs a separate check |
| Privacy fabric | Visibility through the material | View and daylight depend on the exact weave |
| Blackout fabric | Light transmission through the fabric | Edges and mounting still control room darkness |
| Dual layer | Separate daylight and darkness roles | More depth, hardware and coordination |

**Build direction — material-study:** Physical fabric samples at the same real window: view-through, privacy-focused and blackout. Include a night photograph and edge-gap detail.

Research: [fabric](https://www.lutronfabrics.com/us/en/resources/faq), [blackout](https://www.lutron.com/TechnicalDocumentLibrary/048736.pdf).

## 03. Conceal the mechanism or make it part of the detail.

A pocket can hide a roller in the ceiling. A fascia covers the mechanism at the opening; an exposed roller makes brackets, tube and hembar part of the architecture.

Lutron Triathlon offers battery and wired-power shade choices. Sivoia supports a range of shade applications; Palladiom gives particular attention to exposed roller hardware and is also available in a wire-free design.

These are hardware and application choices. A concealed Sivoia installation can be the more involved architectural solution; exposed Palladiom is not automatically the final step in a quality ladder.

**Build direction — product-gallery:** Actual Triathlon, Sivoia and Palladiom product images plus installed pocket, fascia and exposed details. Show exact power and mounting version.

Research: [triathlon](https://www.lutron.com/us/en/window-treatments/triathlon-shades), [sivoia](https://www.lutron.com/us/en/window-treatments/sivoia-shades), [palladiom](https://www.lutron.com/us/en/window-treatments/shades/palladiom-roller-shades).

## 04. The shade and the house system are separate choices.

A compatible standalone shade design can use its supported local controls. RadioRA 3 or HomeWorks can coordinate compatible shades with lighting; Control4 can coordinate the supported Lutron system with other services.

Compatibility follows the exact shade, communication method, processor and interface. A system name alone does not establish that every product in a family can join it.

We decide whether the household needs simple room controls or shared scenes first. Then we verify the full combination before it becomes a specification.

**Build direction — comparison:** Two axes: shade hardware and control platform. Connect only documented supported combinations.

Research: [ra3](https://www.lutron.com/us/en/controls/systems/radiora3), [homeworks](https://www.lutron.com/us/en/controls/systems/homeworks), [triathlon](https://www.lutron.com/us/en/window-treatments/triathlon-shades), [sivoia](https://www.lutron.com/us/en/window-treatments/sivoia-shades), [control4](https://www.control4.com/solutions/products/controllers).

## 05. Give the hand a clear choice.

A Pico can provide focused shade control where the selected system supports it. A scene keypad can coordinate shade position and lighting from one button.

RadioRA 3 designs can use supported Sunnata controls. HomeWorks opens other interface choices, including supported seeTouch, Palladiom and Alisse configurations.

Show the actual button arrangements and finishes. Alisse requires HomeWorks QSX and a wired QS link; select the keypad with the system rather than choosing a photograph first.

**Build direction — product-gallery:** Pico, Sunnata, seeTouch, Palladiom and Alisse: front, installed and close-up views with exact compatibility captions.

Research: [keypads](https://www.lutron.com/us/en/controls/keypads-remotes), [sunnata](https://assets.lutron.com/a/documents/3691168_eng.pdf), [alisse](https://assets.lutron.com/a/documents/3691154_eng.pdf).

## 06. Return to the same two rooms.

In the living room, a daytime scene can lower the view-through layer to reduce glare. An evening scene can lower the privacy layer and adjust the room’s light.

In the bedroom, a sleep scene can lower the blackout layer. The result depends on the fabric, mounting gaps and window detail already chosen.

Schedules follow the household’s routine. Position limits and alignment are commissioned on the installed openings, with a manual control available when plans change.

**Build direction — scene-study:** Reuse the hero living room and bedroom. Show Daylight, Evening and Sleep with a short list of actual changes.

Research: [ra3](https://www.lutron.com/us/en/controls/systems/radiora3), [homeworks](https://www.lutron.com/us/en/controls/systems/homeworks), [blackout](https://www.lutron.com/TechnicalDocumentLibrary/048736.pdf).

## 07. Decide the detail before the ceiling closes.

A recessed pocket needs room for the selected shade, its cable path, and future service access. Dual rollers require a different detail from a single roller.

Battery power can reduce cable work in an existing home, but battery access and replacement remain part of ownership. Wired power trades that routine for a planned electrical path.

The architect, builder and shade installer need the same opening schedule. That schedule carries dimensions, mounting, fabric, power and finish so the order follows the actual design.

**Build direction — construction-detail:** Real pocket section, dual-roller section and battery-access detail. Dimensions come from approved product/shop drawings.

Research: [triathlon](https://www.lutron.com/us/en/window-treatments/triathlon-shades), [sivoia](https://www.lutron.com/us/en/window-treatments/sivoia-shades), [palladiom](https://www.lutron.com/us/en/window-treatments/shades/palladiom-roller-shades).

## Your project path

Select one route. Show its full copy in static HTML; enhancement may focus the selected route.

### Shades for an existing home

Survey each opening and cable route. Compare battery and wired power, visible mounting options and the privacy result before selecting fabric.

### Build the mounting into the work

Coordinate blocking, power, pocket depth and finish transitions while access is available. Keep service access visible in the drawings.

### Detail every opening with the design team

Issue a shade schedule early. Review corner glass, large spans, dual layers and pocket sections with the architect and builder before structural and ceiling details are fixed.

### Buying or preparing to sell an existing home

For a buyer, review equipment, account ownership, documentation and likely changes before assuming a system transfers intact. For a seller, prepare an inventory and clear handover of accounts and controls; upgrades do not come with a resale-value promise.

## Compare the scope

Good / Better / Best describes complete project scope. It is not a fixed brand, platform, model or price ladder.

| Option | Included design intent | Dependencies and boundaries |
|---|---|---|
| Good — focused openings | Selected rooms, surveyed mounting, matched fabric, supported local control and alignment commissioning. | Battery access or wiring, edge gaps and finish work are stated in the scope. |
| Better — coordinated rooms | Multiple rooms, separate daylight/privacy choices where needed, planned interfaces and compatible lighting scenes. | Dual layers, mounting depth and system integration are specified per opening. |
| Best — architectural shade plan | Whole-residence opening schedule, custom mounting coordination, detailed controls and agreed blackout construction. | Hardware family follows the detail; this tier does not automatically require Palladiom or HomeWorks. |

## Questions before you commit

### Will blackout fabric make a room completely dark?

The fabric blocks light through its material. Edges, side channels, ceiling detail and other light sources determine the finished room result.

### Can shades work without opening walls?

Often. Battery and available wired routes are assessed per opening, along with mounting space and future access.

### RadioRA 3 or HomeWorks?

Choose around the whole lighting-and-shade plan, interfaces and wiring. Verify the exact shade and processor combination before ordering.

### What changes the cost?

Opening size and count, fabrics, dual layers, power, mounting details, access, keypads and integration work.

## Start with the project you have.

Tell us which rooms matter, what already exists, and when construction starts. Share plans or photographs if you have them.

Inquiry fields: Project path, Rooms or zones, Existing systems, Construction timing, Contact details.

## Visual study

Carry one living room and one bedroom through window, fabric, hardware and scene decisions. Use daylight and evening views of those same rooms.

## Required real imagery

| Asset | Subject | Views | Status |
|---|---|---|---|
| ms-window | Living room and bedroom openings | Same-room day and evening views | Needed; model/rights/alt text must be verified |
| ms-fabric | Actual selected fabrics | Sample, view-through, night and edge-gap detail | Needed; model/rights/alt text must be verified |
| ms-shades | Triathlon, Sivoia, Palladiom | Exact family/version installed and hardware views | Needed; model/rights/alt text must be verified |
| ms-keypads | Pico, Sunnata, seeTouch, Palladiom, Alisse | Exact-model front, installed and material views | Needed; model/rights/alt text must be verified |

## Search fields

Title: Motorized Shades | DAVG

Description: Glass, daylight, privacy, fabric, and mounting determine the shade. The motor and control system follow those decisions.

Use the production origin for the canonical URL. Service-area text must match the company’s verified coverage; do not invent city pages.


---

# Media & Audio

Route: `/systems/media-audio/`

## Website copy

# Give every room the sound and picture it needs.

Listening areas, seats, daylight, and visible finishes determine the equipment. A living room should work for conversation as well as a film.

Action: **Discuss your project** → project inquiry.

## 01. Music follows people, not a speaker count.

A kitchen island and a reading chair are different listening positions. An open-plan room may need several speakers at moderate levels so music stays even as people move.

A listening room may need a clear stereo image at a particular seat. Ceiling speakers designed for background coverage are not automatically the best choice for that job.

Map where people sit, work and gather. Speaker count follows the coverage, ceiling height, room shape and intended volume; square footage alone is not enough.

**Build direction — zone-map:** Floor plan with people/activities and proposed zones. Use an illustrative plan label unless it is a documented project.

Research: [sonance](https://sonance.com/pages/designed-to-disappear), [triad](https://www.triadspeakers.com/the-triad-collection).

## 02. How visible should the sound be?

In-ceiling and in-wall speakers leave a grille visible. Invisible speakers sit behind a specified finish system; installation depth and finish thickness are part of their performance.

Visible speakers can be placed and aimed for a listening position. Concealed speakers preserve more of the room’s visual surface, but their location still needs acoustic planning.

Sonance and Triad offer different product families for architectural, listening and cinema use. Compare the actual speaker, enclosure, placement and system role rather than assigning one brand a higher rank.

| Type | Useful role | Design responsibility |
|---|---|---|
| In-ceiling | Distributed music coverage | Position around activities and ceiling constraints |
| In-wall | Architectural stereo or front-stage use | Wall depth, enclosure and listening geometry |
| Invisible | Sound behind a continuous finish | Specified finish system and installation inspection |
| Visible speaker | Dedicated listening or flexible placement | Furniture, aiming and visual presence |

A single-stereo speaker can reproduce left and right signals from one location, which may suit a small room. It does not create the same separated stereo image as a properly placed pair.

**Build direction — product-gallery:** Real grille, invisible-before-finish, invisible-finished and visible-speaker views. Include actual Sonance VX/Invisible and selected Triad models.

Research: [sonance](https://sonance.com/pages/designed-to-disappear), [invisible](https://www.sonance.com/assets/media/files/downloads/IS_InstallationManual_Reduced.pdf), [triad](https://www.triadspeakers.com/the-triad-collection).

## 03. Choose the screen for the light in the room.

OLED pixels produce their own light. Mini LED televisions use small LEDs behind an LCD panel, with performance that depends on the panel and backlight design.

A bright room calls for a review of reflections, sustained brightness and viewing positions. A darker room may put more emphasis on shadow detail and black levels.

QLED describes a display technology feature, not one fixed level of picture quality. An art-style television solves a visual-design problem; 8K resolution alone does not solve seating distance, glare or source quality.

| Decision | Start here | Then verify |
|---|---|---|
| OLED or LCD/Mini LED | Daylight, contrast preference and use | Actual model performance and reflections |
| Art-style display | How the wall should look when idle | Picture priorities, installation and cable detail |
| Screen size | Seat distance and viewing comfort | Wall proportions and sightlines |
| 4K or 8K | Content and normal viewing distance | Whether extra resolution changes the experience |

**Build direction — comparison:** Same wall from daytime and evening, with measured seat distances. Real model views; no invented comparative screen photographs.

Research: [display](https://www.samsung.com/us/tvs/tv-buying-guide/mini-led-vs-oled/).

## 04. Background music and surround sound have different geometry.

Movie dialogue should come from the screen area. Surround speakers create the sound field around the seats; overhead speakers add a distinct height layer in a compatible Atmos layout.

A 3.1 layout uses three main channels and a subwoofer role. A 5.1.4 layout adds two surround channels and four height channels; the notation describes the intended layout, not a promise about the room’s result.

Start with the seats, then place the speakers. Do not put every channel in the ceiling simply because the ceiling is easy to access.

**Build direction — sound-map:** Switch between 3.1, 5.1 and 5.1.4 on one plan; distinguish ear-level and overhead positions. Provide static labels and a default diagram.

Research: [dolby](https://www.dolby.com/about/support/guide/speaker-setup-guides/5.1.4-overhead-speaker-setup-guide/).

## 05. Watch and Listen should be literal.

A Watch command selects the intended video source, display and sound path. A Listen command chooses the music source and room; grouping adds other supported zones.

The system still depends on the selected sources and services. A streaming account, network problem or unsupported device can affect one part of the chain.

Set practical volume limits and straightforward room names. The best everyday control is the one a guest can understand without a tour.

**Build direction — scene-study:** Show one remote and a short Watch/Listen action list; use a real or clearly labeled sample interface.

Research: [control4](https://www.control4.com/solutions/products/controllers), [connect](https://www.control4.com/services).

## 06. The finish work is part of the system.

In-wall equipment needs space, cable paths and access. An invisible speaker also needs coordination with the finish contractor before paint makes the work disappear.

Subwoofers need placement and testing because bass changes across the room. More output does not guarantee even bass at every seat.

Commission the installed system with the furniture and normal listening positions in place. Check source selection, channel levels, zone grouping and everyday controls.

**Build direction — construction-detail:** Cable detail, speaker before finishing, finished room and commissioning positions.

Research: [invisible](https://www.sonance.com/assets/media/files/downloads/IS_InstallationManual_Reduced.pdf), [triad](https://www.triadspeakers.com/the-triad-collection), [dolby](https://www.dolby.com/about/support/guide/speaker-setup-guides/5.1.4-overhead-speaker-setup-guide/).

## Your project path

Select one route. Show its full copy in static HTML; enhancement may focus the selected route.

### Improve the rooms you already use

Audit sources, speaker positions and cable routes. Reuse sound equipment where it suits the room, and address placement before replacing everything.

### Plan sound before surfaces close

Coordinate grilles, invisible speakers, wall depth, display recesses and service access with the interior designer and trades.

### Give each room an audio role

Separate background zones, focused listening and media-room geometry on the plans. Coordinate wiring, enclosures, equipment cooling and display walls early.

### Buying or preparing to sell an existing home

For a buyer, review equipment, account ownership, documentation and likely changes before assuming a system transfers intact. For a seller, prepare an inventory and clear handover of accounts and controls; upgrades do not come with a resale-value promise.

## Compare the scope

Good / Better / Best describes complete project scope. It is not a fixed brand, platform, model or price ladder.

| Option | Included design intent | Dependencies and boundaries |
|---|---|---|
| Good — focused rooms | A defined TV or music area, suitable equipment, clear source control and installed-system setup. | Existing wiring and sources are checked; concealment work is priced separately. |
| Better — connected zones | Several music zones and a planned media-room system, source grouping, display selection and commissioning. | Speaker count and surround layout follow room geometry and listening needs. |
| Best — architecture-led media | Whole-home audio planning, coordinated concealment, dedicated listening/media design and documented controls. | Invisible speakers, premium displays and additional channels are selected for a stated room benefit. |

## Questions before you commit

### How many ceiling speakers do I need?

That follows the room shape, activities, ceiling height and speaker coverage. We map listening areas before recommending a count.

### Is Sonance better than Triad?

The meaningful comparison is between selected models and their roles. Coverage, enclosure, placement and listening goals matter more than a brand ladder.

### Does every TV need Atmos?

No. A suitable front-stage or simpler surround system may fit the room better; height channels need appropriate positions and content.

### What changes cost?

Zones, speaker and display models, wall/ceiling work, sources, amplification, control and installation access.

## Start with the project you have.

Tell us which rooms matter, what already exists, and when construction starts. Share plans or photographs if you have them.

Inquiry fields: Project path, Rooms or zones, Existing systems, Construction timing, Contact details.

## Visual study

Begin with a room-use map, then zoom into one living room. Speaker positions, TV choice and control remain tied to that map.

## Required real imagery

| Asset | Subject | Views | Status |
|---|---|---|---|
| ma-room | One living room with seated positions | Wide daytime and evening installed views | Needed; model/rights/alt text must be verified |
| ma-speakers | Sonance VX, Invisible and selected Triad | Exact front/grille, installation and finish views | Needed; model/rights/alt text must be verified |
| ma-tv | Selected OLED, Mini LED and art-style models | Exact model and installation detail | Needed; model/rights/alt text must be verified |

## Search fields

Title: Media & Audio | DAVG

Description: Listening areas, seats, daylight, and visible finishes determine the equipment. A living room should work for conversation as well as a film.

Use the production origin for the canonical URL. Service-area text must match the company’s verified coverage; do not invent city pages.


---

# Private Cinemas

Route: `/systems/private-cinemas/`

## Website copy

# Start with the seats. Build the room around them.

Seat positions determine sightlines, screen size, speaker geometry, and much of the room design. Equipment comes after that plan.

Action: **Discuss your project** → project inquiry.

## 01. Does this need to be a dedicated cinema?

A dedicated room lets you control light, seating and sound more closely. A shared media room has to accommodate daylight, circulation and other uses.

Decide how the room will be used and how often. A cinema is justified by that use, not by filling a spare room with the largest possible screen.

The room dimensions and structure create limits before a projector is selected. Doors, soffits, ceiling height and equipment access all belong in the first survey.

**Build direction — room-cutaway:** One measured or clearly illustrative room cutaway with doors, soffits and intended seat rows.

Research: [dolby](https://www.dolby.com/about/support/guide/speaker-setup-guides/5.1.4-overhead-speaker-setup-guide/), [screens](https://www.screeninnovations.com/materials/).

## 02. The second row needs a sightline too.

Screen height and seat distance determine how comfortably people can watch. A rear row needs to see over the front row without forcing the screen too high.

Reclining seats change clearances and eye positions. Riser height follows those positions and the room’s available headroom.

Review the plan and section together. The last seat should be part of the design from the start, not added after the screen is ordered.

**Build direction — sightline-study:** Section drawing showing actual eye positions and sightlines. No universal seat-distance or riser rule.

## 03. Projection or direct view?

Projection can create a large image with equipment outside the screen plane. It also depends on throw distance, screen material, light control and projector placement.

A direct-view display brings its own light source to the screen. Its size, installation access, reflections and wall construction still need review.

An acoustically transparent projection screen allows suitable speakers behind it. Screen material must fit the projector geometry and lighting conditions; an ambient-light-rejecting label is not a cure for every room.

| Choice | Reason to consider it | Check |
|---|---|---|
| Projection | Large image and flexible screen integration | Throw, room light, ventilation and material |
| Direct view | Emissive picture without projection throw | Size, reflections, access and support |
| Acoustically transparent screen | Sound from behind the image | Speaker clearance and selected material |
| Light-rejecting material | Specific ambient-light conditions | Projector position and viewing geometry |

**Build direction — comparison:** Show projector/light path and speakers behind an AT screen. Pair with a direct-view wall section.

Research: [screens](https://www.screeninnovations.com/materials/), [unity](https://www.screeninnovations.com/materials/unity-at/), [display](https://www.samsung.com/us/tvs/tv-buying-guide/mini-led-vs-oled/).

## 04. Channels describe positions, not quality.

A 7.2.4 installation describes seven main-channel speaker positions, two subwoofers in the design, and four height-channel positions. The source format’s LFE channel and the number of installed subwoofers are different things.

Ear-level speakers establish the horizontal sound field. Overhead speakers provide the height layer; placing both groups in the ceiling weakens that separation.

Subwoofer positions and calibration affect how evenly bass reaches the seats. Additional speakers or subwoofers should solve a defined coverage problem.

**Build direction — sound-map:** Plan and section of the same room with separate ear-level, height and subwoofer labels. Do not call any existing DAVG project 7.2.4 without records.

Research: [dolby](https://www.dolby.com/about/support/guide/speaker-setup-guides/5.1.4-overhead-speaker-setup-guide/), [triad](https://www.triadspeakers.com/the-triad-collection).

## 05. Treating the room and isolating it are different work.

Acoustic treatment changes reflections and decay inside the room. Sound isolation reduces transmission through the room’s boundaries.

Isolation depends on walls, ceilings, doors, penetrations and paths around them. A treated wall does not stop sound escaping through an untreated door or duct.

Ventilation has to move air without creating an obvious noise or sound path. That coordination belongs with the builder and mechanical team before the finish package is set.

**Build direction — construction-detail:** Real assembly sections, door seal and ventilation path. Clearly label design concepts; no unverified decibel claims.

## 06. Make the room ready in one deliberate sequence.

A movie scene can select the source, set the sound path, lower supported shades and fade lights to their agreed levels. A Pause scene can bring enough light back to move around.

Commissioning checks the image, sound, sources and controls at the intended seats. The target is a consistent experience across the designed seating area.

Leave access for projector filters, equipment replacement and cable service. The room should remain serviceable after the decorative panels are installed.

**Build direction — scene-study:** Movie and Pause states of the same room, with a labeled service-access elevation.

Research: [control4](https://www.control4.com/solutions/products/controllers), [dolby](https://www.dolby.com/about/support/guide/speaker-setup-guides/5.1.4-overhead-speaker-setup-guide/).

## Your project path

Select one route. Show its full copy in static HTML; enhancement may focus the selected route.

### Assess the available room

Measure structure, doors, seating and noise paths. Decide what can be improved within the existing envelope and what requires construction.

### Use access to solve the room

Coordinate risers, isolation details, ventilation, wiring and screen wall before finishing. Review sightlines with the selected seating.

### Reserve the right envelope

Coordinate dimensions, structure, mechanical noise, equipment access and adjoining rooms with the architect and builder. Allow the cinema design to shape the shell early.

### Buying or preparing to sell an existing home

For a buyer, review equipment, account ownership, documentation and likely changes before assuming a system transfers intact. For a seller, prepare an inventory and clear handover of accounts and controls; upgrades do not come with a resale-value promise.

## Compare the scope

Good / Better / Best describes complete project scope. It is not a fixed brand, platform, model or price ladder.

| Option | Included design intent | Dependencies and boundaries |
|---|---|---|
| Good — dedicated viewing | Defined seating plan, suitable image and sound, basic light control and commissioned operation. | Existing envelope limits and required construction are explicit. |
| Better — designed cinema | Coordinated sightlines, screen/speaker geometry, subwoofer placement, acoustic treatment and scene control. | Isolation work is a separate assembly scope, not implied by treatment. |
| Best — room and structure together | Early architectural coordination, detailed isolation/ventilation design, custom integration and documented commissioning. | Channel count and equipment choices follow the room; no automatic hardware ladder. |

## Questions before you commit

### How big does the room need to be?

Enough for the chosen seats, clearances, image and speaker geometry. A measured plan determines the usable layout; one minimum dimension does not describe every cinema.

### Will acoustic panels keep sound upstairs quiet?

Panels mainly change sound inside the cinema. Reducing transmission upstairs requires a review of structure, boundaries and flanking paths.

### Is more Atmos always better?

No. Each channel needs a useful position and appropriate coverage; the room and seats determine whether more channels help.

### What drives cost?

Construction, seating, screen and projector/display, speaker system, acoustic work, isolation, ventilation and commissioning.

## Start with the project you have.

Tell us which rooms matter, what already exists, and when construction starts. Share plans or photographs if you have them.

Inquiry fields: Project path, Rooms or zones, Existing systems, Construction timing, Contact details.

## Visual study

A cutaway of one room carries the story: seats → screen → sound → isolation and air paths → construction. Avoid unrelated equipment collages.

## Required real imagery

| Asset | Subject | Views | Status |
|---|---|---|---|
| pc-room | Actual cinema or labeled design study | Wide view and same-room section | Needed; model/rights/alt text must be verified |
| pc-screen | Selected screen material and projector | Material, behind-screen and throw detail | Needed; model/rights/alt text must be verified |
| pc-build | Isolation and treatment assemblies | Real construction-stage and finished views | Needed; model/rights/alt text must be verified |

## Search fields

Title: Private Cinemas | DAVG

Description: Seat positions determine sightlines, screen size, speaker geometry, and much of the room design. Equipment comes after that plan.

Use the production origin for the canonical URL. Service-area text must match the company’s verified coverage; do not invent city pages.


---

# Security Cameras & Access Control

Route: `/systems/security-access/`

## Website copy

# Decide what you need to see. Decide who can enter.

Camera views and entry permissions solve different problems. We plan useful detail, recording, privacy boundaries, and access as one property-specific scope.

Action: **Discuss your project** → project inquiry.

## 01. Start with the event, not the camera count.

You may need to recognize a visitor at the front door, review a driveway event, or check whether a delivery reached the service entrance. Each requires a different view.

A wide camera can show the overall scene while missing useful detail at a distant entrance. Lens choice, distance, mounting and lighting affect the detail available on a person or vehicle.

Mark what matters on the property plan. Also mark what should be excluded, including private household areas and unnecessary views beyond the property.

**Build direction — property-map:** Illustrative property plan with overview views, detail views and exclusion zones. Never publish a client security map.

Research: [pixels](https://whitepapers.axis.com/en-us/pixel-density-based-on-iec-62676-4-2014), [privacy](https://whitepapers.axis.com/en-us/privacy-in-surveillance).

## 02. More pixels do not solve every view.

Pixel density describes how much image detail covers the subject. A camera with more total pixels can still give poor recognition if the subject occupies too little of the frame.

Low light introduces another set of tradeoffs: exposure, motion blur, illumination and reflections. A clear still image does not prove that a moving person will be clear at night.

Test the intended view under the conditions that matter. Detection features can help sort events, but they do not guarantee that every meaningful event will be caught.

| View | Job | Check on site |
|---|---|---|
| Overview | Understand an event across an area | Blind spots and usable context |
| Entry detail | See a person near a defined point | Subject size, angle and nighttime motion |
| Driveway | Review vehicle arrival and movement | Distance, headlights and exposure |
| Doorbell/intercom | Speak with a visitor at the entrance | View, audio, network and control compatibility |

**Build direction — comparison:** Actual same-camera day and night event samples with time, conditions and model. No generic AI surveillance imagery.

Research: [pixels](https://whitepapers.axis.com/en-us/pixel-density-based-on-iec-62676-4-2014), [luma](https://help.snapone.com/luma-x20-guide/Content/Topic-NVRUI/Fxn-Camera.htm).

## 03. Where does the footage live?

A local recorder stores footage at the property. Cloud recording sends selected footage or recordings to a service; some designs combine both.

Retention depends on camera count, recording schedule, bitrate and storage capacity. The proposal should state the recording assumptions rather than promise a universal number of days.

Off-site viewing needs a working remote-access path. Local recording also needs powered cameras, network connections and a functioning recorder; internet loss and power loss are different events.

**Build direction — data-path:** Camera → network → recorder → permitted viewer diagram. Show optional cloud path separately.

Research: [luma-nvr](https://www.snapav.com/shop/en/snapav/luma-surveillance%E2%84%A2-220-series-nvr-lum-220-nvr-a), [luma](https://help.snapone.com/luma-x20-guide/Content/Topic-NVRUI/Fxn-Camera.htm).

## 04. Seeing a visitor is not the same as admitting one.

An intercom lets you speak with someone at an entrance. A lock or gate-control integration changes entry permission; the systems may work together, but they are separate functions.

Permanent household access, temporary visitor access and staff access need different rules. Define where each credential works, when it expires and who can revoke it.

Door hardware, gate equipment and integration support are verified together. Automatic gate movement also needs its required safety system; a convenient app command does not replace that equipment.

**Build direction — entry-sequence:** Real door/intercom/lock details and a sample expiring-access schedule. Confirm exact supported lock/gate model.

Research: [control4](https://www.control4.com/solutions/products/controllers).

## 05. Who can see the recordings?

Separate system administration from ordinary viewing where the selected equipment allows it. Give each person the access their role needs, then remove it when that role ends.

Privacy masks can block selected image areas on supported cameras or recorders. Network rules can restrict which devices and users can reach the recording system.

Those are specific controls, not a guarantee against every risk. Document account ownership, remote-access methods and the procedure for changing permissions.

**Build direction — permission-matrix:** Illustrative role matrix: owner, household, temporary access, service. Never show real credentials or client IP addresses.

Research: [luma](https://help.snapone.com/luma-x20-guide/Content/Topic-NVRUI/Fxn-Camera.htm), [privacy](https://whitepapers.axis.com/en-us/privacy-in-surveillance), [isolation](https://help.ui.com/hc/en-us/articles/18965560820247-Implementing-Network-and-Client-Isolation-in-UniFi).

## 06. Test the property after dark.

Commissioning checks actual views, motion events, recording retrieval and entry permissions. Nighttime checks matter when the event of interest happens after dark.

If power backup is part of the scope, test the whole intended chain and record its expected runtime under load. Cameras, switches, recorder and internet equipment may have different power needs.

Camera recording, intrusion alarms and professional monitoring are separate scopes. The proposal should say which of them is included and who responds to an alert.

**Build direction — test-sequence:** Anonymized test checklist and genuine nighttime image samples. No fabricated incident or monitoring claims.

Research: [luma](https://help.snapone.com/luma-x20-guide/Content/Topic-NVRUI/Fxn-Camera.htm), [luma-nvr](https://www.snapav.com/shop/en/snapav/luma-surveillance%E2%84%A2-220-series-nvr-lum-220-nvr-a).

## Your project path

Select one route. Show its full copy in static HTML; enhancement may focus the selected route.

### Audit coverage and ownership

Review existing camera views, cabling, recording condition, accounts and lock compatibility. Close meaningful gaps before adding cameras everywhere.

### Coordinate entry and cable work

Set camera positions, door/intercom details and routes while walls or landscape are open. Align the design with privacy boundaries.

### Plan the property before finishes

Coordinate entrances, exterior lighting, camera sightlines, gates and service routes with architecture and landscape teams. Document recording and access responsibilities.

### Buying or preparing to sell an existing home

For a buyer, review equipment, account ownership, documentation and likely changes before assuming a system transfers intact. For a seller, prepare an inventory and clear handover of accounts and controls; upgrades do not come with a resale-value promise.

## Compare the scope

Good / Better / Best describes complete project scope. It is not a fixed brand, platform, model or price ladder.

| Option | Included design intent | Dependencies and boundaries |
|---|---|---|
| Good — defined coverage | Selected entries or events, appropriate cameras/recording, documented accounts and a retrieval test. | Remote access, storage assumptions and monitoring inclusion are stated explicitly. |
| Better — coordinated property | Multiple views, verified nighttime behavior, role-based access where supported and entry integration. | Credential rules, network changes and backup needs follow the property design. |
| Best — comprehensive property scope | Early entry/landscape coordination, detailed coverage and privacy plan, resilience testing and agreed support. | No tier guarantees prevention or response; monitoring and alarm work are named services. |

## Questions before you commit

### Can I view cameras when away?

When the selected system has a working remote-access method and the needed internet/service connections. Accounts and service terms are part of the scope.

### How long can I keep footage?

That depends on the recording schedule, bitrate, camera count and storage. We size the recorder against stated assumptions.

### Can staff access expire automatically?

Supported access systems can offer scheduled or temporary credentials. We verify the exact hardware and define revocation rules.

### What changes the cost?

Useful view count, lenses, nighttime conditions, routes, recording capacity, entrances, network work, backup power and service scope.

## Start with the project you have.

Tell us which rooms matter, what already exists, and when construction starts. Share plans or photographs if you have them.

Inquiry fields: Project path, Rooms or zones, Existing systems, Construction timing, Contact details.

## Visual study

Use a property plan with view wedges and privacy exclusions, then follow one visitor from gate or door to verified entry and recorded event.

## Required real imagery

| Asset | Subject | Views | Status |
|---|---|---|---|
| sa-cameras | Selected Luma x20 camera models | Exact front and mounted views | Needed; model/rights/alt text must be verified |
| sa-recorder | Selected Luma NVR | Exact front and serviceable rack installation | Needed; model/rights/alt text must be verified |
| sa-entry | Confirmed intercom/lock/gate hardware | Actual installed detail; no client credentials | Needed; model/rights/alt text must be verified |

## Search fields

Title: Security Cameras & Access Control | DAVG

Description: Camera views and entry permissions solve different problems. We plan useful detail, recording, privacy boundaries, and access as one property-specific scope.

Use the production origin for the canonical URL. Service-area text must match the company’s verified coverage; do not invent city pages.


---

# Digital Infrastructure & Privacy

Route: `/systems/infrastructure-privacy/`

## Website copy

# A fast internet plan cannot fix a weak room connection.

The provider connection, wired network, Wi-Fi coverage, and device permissions are separate parts of the house. Each needs a clear job.

Action: **Discuss your project** → project inquiry.

## 01. Find the weak part of the connection.

Your internet provider brings service to the home. The gateway routes traffic; switches connect wired devices; access points connect wireless devices to that network.

A problem on any part of that path can affect a call or stream. Buying more provider bandwidth does not move an access point out of a cabinet or repair a weak wireless link.

We separate provider performance from in-home coverage and device behavior. That gives the diagnosis a place to start.

**Build direction — system-diagram:** Provider → gateway → switch → access point/device. Distinguish internet, wired transport and radio coverage.

Research: [mesh](https://help.ui.com/hc/en-us/articles/115002262328-Considerations-for-Optimal-Wireless-Mesh-Networks).

## 02. Plan Wi-Fi around walls and people.

Radio coverage changes with distance, materials and placement. Stone, concrete, metal and concealed installations can make a floor-plan-only prediction misleading.

Access points placed for the occupied rooms reduce the distance the signal must travel. A site survey and installed checks help confirm those locations.

More access points are not automatically better. Channel use, power and client behavior also affect how devices share the available radio capacity.

**Build direction — coverage-study:** Architectural plan with material annotations and proposed AP locations. Only show measured signal heatmaps when actual survey data exists.

Research: [mesh](https://help.ui.com/hc/en-us/articles/115002262328-Considerations-for-Optimal-Wireless-Mesh-Networks).

## 03. Give the access points a wired path where practical.

A wired access point carries traffic back through cable. A wireless mesh link carries that traffic over radio, sharing a resource with other wireless activity.

Wireless backhaul can be useful where cable cannot reasonably reach. Its performance depends on the link between mesh nodes as well as the client’s connection.

Wire fixed high-demand devices where the project allows it. That leaves more wireless capacity for devices that actually need to move.

| Approach | Useful when | Tradeoff |
|---|---|---|
| Wired AP backhaul | Cable routes are available | Requires planned cable and switch capacity |
| Wireless mesh backhaul | A practical cable path is absent | Radio link quality affects transport |
| Wired endpoint | Device stays in place | Requires a serviceable cable route |
| Provider gateway Wi-Fi | Small/simple coverage fits its position | Placement may be fixed by provider handoff |

**Build direction — comparison:** Same plan with wired and wireless backhaul routes. Explain the extra radio hop without an invented speed percentage.

Research: [mesh](https://help.ui.com/hc/en-us/articles/115002262328-Considerations-for-Optimal-Wireless-Mesh-Networks).

## 04. Separate the devices. Then write the rules.

A guest network can keep visitor devices away from private systems. Cameras and connected-home devices can also sit in distinct network segments where the equipment and design support it.

A segment name does not enforce separation by itself. Firewall and access rules determine what traffic can cross the boundary.

Some services need discovery across segments, such as supported casting or control. Allow the required paths deliberately; broad exceptions can undo the separation you intended.

**Build direction — permission-matrix:** A readable household/guest/camera/control boundary matrix. Distinguish discovery from permitted traffic.

Research: [isolation](https://help.ui.com/hc/en-us/articles/18965560820247-Implementing-Network-and-Client-Isolation-in-UniFi), [mdns](https://help.ui.com/hc/en-us/articles/12648701398807-UniFi-Gateway-Multicast-DNS-mDNS-Proxy).

## 05. The rack needs air, power and a way to work on it.

Switches, gateways and controllers need accessible connections and suitable operating conditions. A rack hidden in an unventilated cabinet can create a service problem.

Power-over-Ethernet switches can power supported access points and cameras through network cable. The switch’s power budget must cover the selected devices.

Backup power is sized for the equipment and runtime you want. It does not keep the provider’s wider network running, so outage expectations still need a stated boundary.

**Build direction — rack-study:** Actual labeled rack, cable termination, airflow and UPS detail. Keep customer network identifiers out of public images.

Research: [mesh](https://help.ui.com/hc/en-us/articles/115002262328-Considerations-for-Optimal-Wireless-Mesh-Networks), [isolation](https://help.ui.com/hc/en-us/articles/18965560820247-Implementing-Network-and-Client-Isolation-in-UniFi).

## 06. Test where the house is actually used.

Check the work area, bedrooms, entertainment spaces and outdoor areas in scope. Test expected simultaneous use as well as a single device beside an access point.

Record cable results, access-point positions, network boundaries and account ownership. Remote support, if included, should have a defined access method and permission process.

The result is a documented network that can be serviced. Privacy comes from the selected controls and account practices, not from a label on the equipment.

**Build direction — test-sequence:** Anonymized handover map and measured test locations; avoid fictitious throughput results.

Research: [mesh](https://help.ui.com/hc/en-us/articles/115002262328-Considerations-for-Optimal-Wireless-Mesh-Networks), [isolation](https://help.ui.com/hc/en-us/articles/18965560820247-Implementing-Network-and-Client-Isolation-in-UniFi).

## Your project path

Select one route. Show its full copy in static HTML; enhancement may focus the selected route.

### Diagnose before replacing

Review provider handoff, current routes, wireless conditions and accounts. Use available cable paths and identify where wireless backhaul is a practical compromise.

### Put cable where access exists

Coordinate AP positions, wired work areas, rack space and outdoor routes before walls close. Label and test the installed cabling.

### Draw the infrastructure with the house

Reserve serviceable rack space, power, ventilation and cable pathways with the architect and builder. Coordinate camera, control and entertainment loads on the same network plan.

### Buying or preparing to sell an existing home

For a buyer, review equipment, account ownership, documentation and likely changes before assuming a system transfers intact. For a seller, prepare an inventory and clear handover of accounts and controls; upgrades do not come with a resale-value promise.

## Compare the scope

Good / Better / Best describes complete project scope. It is not a fixed brand, platform, model or price ladder.

| Option | Included design intent | Dependencies and boundaries |
|---|---|---|
| Good — coverage repair | Documented diagnosis, targeted access-point/cable work and testing in the rooms in scope. | Provider faults and inaccessible routes are separated from the in-home work. |
| Better — planned household network | Wired backhaul where practical, network boundaries, equipment/power review and documented handover. | Discovery exceptions and device compatibility are designed, not assumed. |
| Best — whole-property infrastructure | Early cable/rack coordination, interior/exterior coverage, designed resilience and agreed service access. | No universal speed or security promise; tests and runtime expectations are project-specific. |

## Questions before you commit

### Do I need a faster internet package?

Only if the provider connection is the constraint. Weak room coverage, client issues and congested radio links need different remedies.

### Is mesh bad?

No. Wireless backhaul is useful when cable cannot reach; it needs a good link between nodes and realistic capacity expectations.

### Will separate networks break casting?

They can if discovery and traffic paths are blocked. We define the supported exceptions while retaining the intended boundaries.

### What changes cost?

Cable access, property size/materials, access-point count, switching/power needs, outdoor buildings, backup runtime and support scope.

## Start with the project you have.

Tell us which rooms matter, what already exists, and when construction starts. Share plans or photographs if you have them.

Inquiry fields: Project path, Rooms or zones, Existing systems, Construction timing, Contact details.

## Visual study

Trace one video call from the provider handoff through gateway, switch, cable and access point. Then show the same home with guest and device boundaries.

## Required real imagery

| Asset | Subject | Views | Status |
|---|---|---|---|
| ip-rack | DAVG rack or labeled sample build | Wide, termination, airflow and backup detail | Needed; model/rights/alt text must be verified |
| ip-ap | Selected access points and gateway | Exact model front and installed views | Needed; model/rights/alt text must be verified |
| ip-plan | Coverage and boundary studies | Illustrative until measured project data exists | Needed; model/rights/alt text must be verified |

## Search fields

Title: Digital Infrastructure & Privacy | DAVG

Description: The provider connection, wired network, Wi-Fi coverage, and device permissions are separate parts of the house. Each needs a clear job.

Use the production origin for the canonical URL. Service-area text must match the company’s verified coverage; do not invent city pages.


---

# Outdoor Entertainment

Route: `/systems/outdoor-entertainment/`

## Website copy

# Put the sound near the people. Match the screen to the exposure.

A dining terrace, garden, and pool are different zones. Speaker placement, sun, weather, and cable routes shape the outdoor system.

Action: **Discuss your project** → project inquiry.

## 01. Where will people actually spend time?

A table needs comfortable sound around seated conversation. A garden may need several listening pockets; a pool introduces distance, hard surfaces and different activity.

Map those areas before choosing speakers. Independent zones let a quiet dinner and a more active gathering use different sources or levels where the system supports it.

Include nearby property boundaries in the design. Distributed sound can reduce the need to turn up one distant speaker, but it does not eliminate sound beyond the listening area.

**Build direction — property-map:** Illustrative landscape plan with listening areas, seats and boundaries. Show no fabricated sound-pressure contours.

Research: [landscape](https://sonance.com/collections/sonance-landscape-series), [garden](https://sonance.com/collections/sonance-garden-series).

## 02. Landscape and surface speakers solve different placement problems.

Surface-mounted speakers can serve a terrace from the building. Landscape speakers can place sound closer to seating and paths without relying on a wall.

Subwoofers handle lower frequencies and need their own placement and installation detail. A buried design still has specified exposure, drainage and access requirements.

Select the speaker family, amplification and wiring method together. Sonance Landscape and Garden systems have different configurations; neither is a universal recipe for every property.

| Type | Likely role | Design check |
|---|---|---|
| Surface mounted | Covered terrace or building-edge seating | Aiming, structure and view |
| Landscape satellite | Distributed garden listening | Spacing, landscape growth and routes |
| Outdoor subwoofer | Low-frequency support | Position, drainage and installation detail |
| Separate zones | Different activities | Amplification, controls and source behavior |

**Build direction — product-gallery:** Actual surface speaker, landscape satellite and subwoofer, each before and after installation. Caption exact model and installation requirements.

Research: [landscape](https://sonance.com/collections/sonance-landscape-series), [garden](https://sonance.com/collections/sonance-garden-series).

## 03. Covered does not always mean protected.

An indoor television under a roof still encounters outdoor temperature, humidity and wind-driven conditions. The selected outdoor display needs to suit its actual exposure.

Full-sun and partial-sun models have different installation guidance. Check the exact model against the screen’s orientation and the hours people will watch.

Brightness alone does not remove reflections or make a poor viewing position comfortable. Review glare, mounting, cable access and the manufacturer’s environmental limits together.

**Build direction — exposure-study:** Actual outdoor TV installation at expected viewing times; annotate roof coverage and sun direction. Exact-model product view alongside.

Research: [terrace](https://www.samsung.com/us/lifestyle-tvs/the-terrace/).

## 04. The buried work decides how clean the finished space looks.

Cable routes must fit the landscape, equipment and installation method. Planting, irrigation, drainage and future digging all affect where those routes should go.

A new terrace offers an opportunity to plan conduit and service points before hardscape is placed. An existing patio may require a different route or a smaller initial scope.

Coordinate with the landscape and electrical teams. Exterior lighting circuits, display power and network equipment have different requirements from speaker cable.

**Build direction — construction-detail:** Real route, conduit/service point and finished landscape details. No generic burial-depth rules.

Research: [landscape](https://sonance.com/collections/sonance-landscape-series), [terrace](https://www.samsung.com/us/lifestyle-tvs/the-terrace/).

## 05. The patio should have its own controls.

A patio scene can select music in the intended zone and adjust supported exterior lighting. A viewing scene can select the TV source and its sound path.

Wireless control needs coverage where people sit. The network route to an outdoor display or controller matters just as much as the speaker placement.

Set zone names and volume limits the household understands. Use a quiet-hours routine if requested, without promising that an automated setting can prevent every disturbance.

**Build direction — scene-study:** Dining and Viewing states of the same terrace with a real interface and short action list.

Research: [control4](https://www.control4.com/solutions/products/controllers), [mesh](https://help.ui.com/hc/en-us/articles/115002262328-Considerations-for-Optimal-Wireless-Mesh-Networks).

## 06. Commission it outside.

Listen from the seats, walk the paths and check the property edges. Confirm the sound balance and controls at normal use levels rather than only beside the equipment.

Check the display at the intended viewing time. Document environmental limits, shutdown or storage instructions, and maintenance for the selected equipment.

Colorado weather makes model-specific temperature and installation limits part of the selection. A weather rating is not permission to ignore the manufacturer’s instructions.

**Build direction — test-sequence:** Genuine daytime/sunset viewing and listening checks. Maintenance schedule names the selected products.

Research: [terrace](https://www.samsung.com/us/lifestyle-tvs/the-terrace/), [landscape](https://sonance.com/collections/sonance-landscape-series).

## Your project path

Select one route. Show its full copy in static HTML; enhancement may focus the selected route.

### Improve the existing patio

Survey seating, exposure, power and cable paths. Begin with the zones that can be served cleanly without reopening the whole landscape.

### Coordinate with the outdoor work

Plan speaker routes, display location, service points and network coverage before hardscape and planting are finished.

### Design the property as connected zones

Work with architecture and landscape teams on listening areas, sun, equipment locations and interior/exterior connections. Keep future service access in the plan.

### Buying or preparing to sell an existing home

For a buyer, review equipment, account ownership, documentation and likely changes before assuming a system transfers intact. For a seller, prepare an inventory and clear handover of accounts and controls; upgrades do not come with a resale-value promise.

## Compare the scope

Good / Better / Best describes complete project scope. It is not a fixed brand, platform, model or price ladder.

| Option | Included design intent | Dependencies and boundaries |
|---|---|---|
| Good — a defined outdoor area | One listening or viewing zone, exposure-appropriate equipment, practical routing and installed checks. | Power, network and hardscape work are itemized. |
| Better — multiple outdoor zones | Dining/garden or pool areas with suitable speaker distribution, source control and planned display exposure. | Zone boundaries, amplification and routes follow the property. |
| Best — coordinated landscape system | Early landscape design, distributed sound, planned viewing, lighting integration and documented seasonal care. | More coverage does not mean louder operation; every added zone needs a defined use. |

## Questions before you commit

### Can I put an indoor TV under the patio roof?

A roof does not remove all outdoor exposure. Select equipment against actual temperature, moisture, sunlight and manufacturer installation limits.

### Will landscape speakers disturb neighbors?

They can. Placement closer to listeners may reduce required level, but sound still travels; we review boundaries and normal listening levels.

### Can the patio use the indoor music system?

When the sources, amplification, controls and network design support that zone. Outdoor equipment still needs its own suitable installation.

### What changes cost?

Zones, speaker/subwoofer choices, display exposure, power/network work, trenching, hardscape access and landscape coordination.

## Start with the project you have.

Tell us which rooms matter, what already exists, and when construction starts. Share plans or photographs if you have them.

Inquiry fields: Project path, Rooms or zones, Existing systems, Construction timing, Contact details.

## Visual study

Follow one property from covered dining to open garden. Use daytime/sunset views, listener locations and exposure detail instead of generic pool photography.

## Required real imagery

| Asset | Subject | Views | Status |
|---|---|---|---|
| oe-speakers | Selected Sonance Landscape/Garden and surface speakers | Exact product, installation and finished views | Needed; model/rights/alt text must be verified |
| oe-tv | Selected outdoor display | Exact model, mount and daytime installed view | Needed; model/rights/alt text must be verified |
| oe-property | One real terrace and garden | Same property daytime and sunset; anonymized if needed | Needed; model/rights/alt text must be verified |

## Search fields

Title: Outdoor Entertainment | DAVG

Description: A dining terrace, garden, and pool are different zones. Speaker placement, sun, weather, and cable routes shape the outdoor system.

Use the production origin for the canonical URL. Service-area text must match the company’s verified coverage; do not invent city pages.


# Research register

Research checked 30 September 2026. Confirm selected models and terms again when specifying the project.

| Key | Primary source |
|---|---|
| control4 | [Control4 controllers](https://www.control4.com/solutions/products/controllers) |
| connect | [Control4 services; confirm terms for installed system](https://www.control4.com/services) |
| ra3 | [Lutron RadioRA 3](https://www.lutron.com/us/en/controls/systems/radiora3) |
| homeworks | [Lutron HomeWorks](https://www.lutron.com/us/en/controls/systems/homeworks) |
| keypads | [Lutron keypads and remotes](https://www.lutron.com/us/en/controls/keypads-remotes) |
| alisse | [Alisse specification; HomeWorks QSX](https://assets.lutron.com/a/documents/3691154_eng.pdf) |
| sunnata | [Sunnata RF keypad specification](https://assets.lutron.com/a/documents/3691168_eng.pdf) |
| drivers | [Lutron dimmer and LED compatibility tool](https://webtools.lutron.com/compatibility/us/en/dimmers) |
| lumaris | [Lumaris downlight specification](https://assets.lutron.com/a/documents/3691335_eng.pdf) |
| triathlon | [Lutron Triathlon shades](https://www.lutron.com/us/en/window-treatments/triathlon-shades) |
| sivoia | [Lutron Sivoia shades](https://www.lutron.com/us/en/window-treatments/sivoia-shades) |
| palladiom | [Lutron Palladiom roller shades](https://www.lutron.com/us/en/window-treatments/shades/palladiom-roller-shades) |
| fabric | [Lutron fabric FAQs](https://www.lutronfabrics.com/us/en/resources/faq) |
| blackout | [Lutron application note 736; blackout detailing](https://www.lutron.com/TechnicalDocumentLibrary/048736.pdf) |
| dolby | [Dolby home speaker setup guidance](https://www.dolby.com/about/support/guide/speaker-setup-guides/5.1.4-overhead-speaker-setup-guide/) |
| sonance | [Sonance architectural sound](https://sonance.com/pages/designed-to-disappear) |
| invisible | [Sonance Invisible installation manual](https://www.sonance.com/assets/media/files/downloads/IS_InstallationManual_Reduced.pdf) |
| triad | [Triad collection](https://www.triadspeakers.com/the-triad-collection) |
| display | [Samsung OLED and Mini LED explanation](https://www.samsung.com/us/tvs/tv-buying-guide/mini-led-vs-oled/) |
| screens | [Screen Innovations material selection](https://www.screeninnovations.com/materials/) |
| unity | [Screen Innovations Unity AT](https://www.screeninnovations.com/materials/unity-at/) |
| pixels | [Axis pixel density engineering guide](https://whitepapers.axis.com/en-us/pixel-density-based-on-iec-62676-4-2014) |
| privacy | [Axis privacy in surveillance engineering guide](https://whitepapers.axis.com/en-us/privacy-in-surveillance) |
| luma | [Luma x20 camera configuration and privacy masks](https://help.snapone.com/luma-x20-guide/Content/Topic-NVRUI/Fxn-Camera.htm) |
| luma-nvr | [Luma 220 NVR product information](https://www.snapav.com/shop/en/snapav/luma-surveillance%E2%84%A2-220-series-nvr-lum-220-nvr-a) |
| mesh | [Ubiquiti wireless mesh considerations](https://help.ui.com/hc/en-us/articles/115002262328-Considerations-for-Optimal-Wireless-Mesh-Networks) |
| isolation | [Ubiquiti network and client isolation](https://help.ui.com/hc/en-us/articles/18965560820247-Implementing-Network-and-Client-Isolation-in-UniFi) |
| mdns | [Ubiquiti multicast DNS proxy](https://help.ui.com/hc/en-us/articles/12648701398807-UniFi-Gateway-Multicast-DNS-mDNS-Proxy) |
| terrace | [Samsung The Terrace; model-specific exposure](https://www.samsung.com/us/lifestyle-tvs/the-terrace/) |
| landscape | [Sonance Landscape Series](https://sonance.com/collections/sonance-landscape-series) |
| garden | [Sonance Garden Series](https://sonance.com/collections/sonance-garden-series) |
| astro | [Astro content collections](https://docs.astro.build/en/guides/content-collections/) |
| routing | [Astro routing reference](https://docs.astro.build/en/reference/routing-reference/) |


# Concrete layout instructions for Cursor

These are recommended compositions inside the existing right-hand field. They replace the repeated heading/paragraph/card treatment; the brand shell stays the current V4 shell.

## The first layout pass

Give each hero a dominant architectural image, a short headline and a deliberate text measure. Use a quiet caption to establish what the visitor is seeing; do not surround the hero with feature cards.

Immediately below the hero, ask “Where is your home in the process?” Show Existing home, Remodel and Custom build as genuine controls with a visible selected state when enhanced; keep every path readable without JavaScript.

Use the selection to highlight applicable project notes and prefill the inquiry. Do not hide the main education or turn construction paths into separate duplicate pages.

Across a page, vary scale intentionally: a wide study, a compact explanation, an enlarged product detail, then a useful comparison. A chapter can occupy the space its content needs; it is not one mandatory full screen.

Place product captions under the product, and keep the comparison beside the relevant decision. Use large authentic detail views rather than eight tiny products floating above generic descriptions.

## Page-specific compositions

| Page | Opening composition | Middle-page change of scale | Controls and finish |
|---|---|---|---|
| Home Intelligence | One arrival photograph with a narrow action list | Full-width residence-state study, then a restrained signal diagram | Large handheld remote photo and literal scene labels; outage behavior in a readable matrix |
| Architectural Lighting | Same room with separate ambient/task/accent evidence | Enlarged driver/fixture detail followed by warm-dim/tunable comparison | Wall elevation with actual keypads; return to the opening room for Cooking/Dinner/Late Night |
| Motorized Shades | Strong glass-and-daylight photograph with the window problem | Opening elevations, tactile fabric samples and same-window day/night views | Large mounting details; system comparison; real keypad gallery; return to the same rooms |
| Media & Audio | Room-use map paired with a lived-in room image | Speaker visibility gallery, then TV light/seat study | One sound plan with ear-level/overhead distinction; end with clear Watch/Listen actions |
| Private Cinemas | Room cutaway anchored by the seated view | Enlarged sightline section, then projection and screen-wall detail | Sound geometry on the same room; separate treatment and isolation sections |
| Security & Access | Property event map with privacy exclusions | Same-view day/night evidence and local/cloud data path | Door detail and permission matrix; actual test criteria rather than dramatic threat imagery |
| Infrastructure & Privacy | Provider-to-room diagram grounded in a working area | Material-aware coverage plan and wired/wireless route comparison | Large genuine rack detail, network-boundary matrix and measured handover evidence |
| Outdoor Entertainment | Property view with actual listening locations | Enlarged satellite/subwoofer details, then roof-and-sun study | Route construction detail; repeat the terrace in Dining/Viewing states |

## Mobile and access

Keep the chapter title and argument before its evidence. Stack paired photographs with explicit state captions so their meaning does not depend on a hover or swipe.

Make study controls keyboard-operable and name their selected state. Respect reduced-motion preferences; motion may explain a change but must not carry the only explanation.

A table can scroll horizontally in a labeled region. A diagram must also have a concise text account of its connections; a colorful line alone does not explain a system.

## Comparison and image details still requiring specification

The shade gallery must show mounting method, power version and hardware family separately. The keypad gallery must show button arrangement, finish, installation power/link requirements and supported system.

Use current specifications to fill exact product capacities, dimensions and availability. Do not insert generic “up to” figures from one model into an entire family comparison.

For dark-room performance, describe the proposed edge treatment and verify the result. For cinema isolation, measured levels or an assembly rating need an engineering/test basis before publication.

For security, document recording assumptions and distinguish notification from monitored response. For infrastructure, publish test conditions with any measured speed or runtime; for outdoor products, state the selected model’s actual exposure limits.

# Source precedence and remaining implementation work

This all-eight master is the active website sequence. `references/` retains the earlier technical masters and shading briefs so deeper notes can be checked without forcing their full research order onto the visitor.

Use the references for internal specifications and carefully selected expandable detail. Resolve conflicts against current manufacturer documentation and the actual project; do not paste every old paragraph into the new page.

The completed work here is the researched editorial content and build handoff. The pack does not claim that the current Cursor repository or live site has been changed.

Still to complete in that repository: actual visual components, approved photographs, exact product captions, genuine project evidence where available, confirmed service offers, form integration, and production build/browser verification.



