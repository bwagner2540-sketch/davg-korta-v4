// Good / Better / Best tiers transcribed from "Claude GBB Refined 6.7" (client, 29 Sep 2026).
// Public copy only; GEO notes and keyword lists are internal. Prices exactly as supplied — never invent.
export interface GbbTier { tier?: string; label?: string; name: string; body?: string; detail?: string; from?: string }
export interface GbbSet { title?: string; model?: string; tiers: GbbTier[] }
export const GBB: Record<string, GbbSet[]> = {
  '01': [
    { title: 'Control4 home automation', model: 'Scope / experience tier', tiers: [
      { label: 'The Smart Home Start', name: 'Control4 Essential', body: 'AV control, lighting scenes, and app-based automation for 1–3 rooms. The entry point to a unified home.', detail: 'Processor: CORE 1', from: '$8,000' },
      { label: 'The Connected Estate', name: 'Control4 Whole Home', body: 'Every room connected. AV, lighting, climate, security, shades — one app, one remote, one experience.', detail: 'Processor: CORE 3/5', from: '$25,000' },
      { label: 'The Digital Estate', name: 'Control4 Flagship', body: 'Mission-critical dual-processor estate control. Josh.ai voice, architectural keypads, concierge DAVG OS monitoring.', detail: 'Processor: CA-10', from: '$60,000' } ] },
    { title: 'Interfaces & voice control', model: 'Interface tier — tactile → visual → invisible', tiers: [
      { label: 'In Your Hand', name: 'Control4 Halo Remote', body: 'The everyday driver. Premium backlit tactile remote with full system navigation. Feels as refined as the home it controls.', detail: 'Models: Halo, Halo Touch' },
      { label: 'On Your Wall', name: 'Control4 T4 Touchscreens', body: "High-resolution wall-mounted touchscreens. Custom UI per room. In-wall and tabletop models. Your home's command center, beautifully surfaced.", detail: 'Models: T4 In-Wall, T4 Tabletop' },
      { label: 'In the Air', name: 'Josh.ai Voice Control', body: 'Natural language voice control built for luxury homes. No wake words. No routines. Just speak and your home responds. Pairs with architectural metal keypads for silent tactile backup.', detail: 'Pairs with: Palladiom / Alisse metal keypads' } ] },
  ],
  '02': [
    { title: 'Lutron lighting control', model: 'Product tier — system + control interface per tier', tiers: [
      { label: 'The Smart Start', name: 'Caséta Pro', body: 'Wireless smart dimmers, no rewiring required. App, Alexa, and Google control. Ideal for retrofit luxury homes.', detail: 'Control interface: Pico Wireless Remote' },
      { label: 'The Connected Home', name: 'RadioRA 3', body: 'Full-home wireless mesh lighting. Whole-home scenes, natural daylight response, native Control4 integration.', detail: 'Control interface: Sunnata RF Keypad' },
      { label: 'The Architectural Standard', name: 'HomeWorks QSX', body: 'Panelized wired lighting. Millisecond response. The lighting system specified by architects for estate-level homes.', detail: 'Control interface: Alisse / Palladiom Keypad' } ] },
    { title: 'Lutron HomeWorks QSX', model: 'Application / scope tier', tiers: [
      { label: 'Condo & Penthouse', name: 'QSX Single Processor', body: '1 processor, up to 100 zones. Centralized dimming with architectural keypad finishes. High-rise ready.', from: '$15,000 installed' },
      { label: 'Estate Home', name: 'QSX Dual Processor', body: '1–2 processors, floor-by-floor scene control, integrated Sivoia shade control, Palladiom keypads throughout.', from: '$35,000 installed' },
      { label: 'Flagship + Ketra', name: 'QSX + Ketra Full Spectrum', body: 'Multi-processor system with Ketra tunable lighting. Circadian rhythm programming. Color temperature shifts dawn to dusk automatically.', from: '$65,000 installed' } ] },
    { title: 'Control4 lighting control', model: 'Control tier — wireless to full panelized architectural', tiers: [
      { label: 'Wireless Lighting Control', name: 'C4 Wireless Dimmers', body: 'Control4 wireless dimmers and switches integrated into your existing Control4 system. Scene control, scheduling, and app access without rewiring.', detail: 'Best for: Retrofit homes already on Control4' },
      { label: 'Centralized Scene Control', name: 'C4 Configurable Keypads', body: 'Custom-engraved keypads. One-touch scene activation across every room. "Good Morning," "Movie Night," "Away" — programmed exactly to your lifestyle.', detail: 'Keypad finish options: White, Almond, Black, Nickel' },
      { label: 'Panelized Architectural Lighting', name: 'C4 Panelized + Lutron Integration', body: 'Full panelized lighting with millisecond response. Seamless Control4 + Lutron HomeWorks QSX co-integration for estates that demand the absolute best of both systems.', detail: 'The DAVG signature install' } ] },
  ],
  '03': [
    { title: 'Lutron motorized shades', model: 'Product tier', tiers: [
      { label: 'Wire-Free Retrofit', name: 'Lutron Triathlon / Serena', body: 'Battery-powered motorized rollers. Zero wiring required. Perfect for retrofit installs in existing luxury homes.' },
      { label: 'Hardwired Precision', name: 'Sivoia QS Wireless', body: 'Hardwired, ultra-silent motorized rollers. Full scene integration. Pairs natively with RadioRA 3 and HomeWorks.' },
      { label: 'Architectural Masterpiece', name: 'Palladiom Shades', body: 'Exposed bracket design. Hand-finished metal hardware. The only shade system designed to be seen, not hidden.', detail: 'Pairs with: HomeWorks QSX + Palladiom Keypads' } ] },
  ],
  '04': [
    { title: 'Sonos whole-home audio', model: 'Zone / coverage tier — Sonos-led with architectural upgrade path', tiers: [
      { label: 'Room by Room', name: 'Sonos Era + Roam', body: 'Professionally configured Sonos system. DAVG handles network optimization, grouping, and Control4 integration so it works perfectly every time.', detail: 'Products: Sonos Era 100, Era 300, Roam 2' },
      { label: 'Architectural Whole-Home', name: 'Sonos Amp + In-Ceiling', body: 'Sonos Amp powering Sonance or James Loudspeaker in-ceiling speakers. Invisible audio in every room. One app controls it all.', detail: 'Speakers: Sonance, James Loudspeaker' },
      { label: 'Reference Whole-Home', name: 'Sonos + Control4 + 2-Channel', body: 'Sonos as the whole-home backbone, dedicated listening room with QLN or Focal reference speakers, all unified under Control4. The pinnacle of residential audio.', detail: 'Reference brands: QLN, Focal, Trinnov' } ] },
    { title: 'Media rooms', model: 'Performance / concealment tier', tiers: [
      { label: 'The Elevated Living Room', name: '85" OLED + Sonos Arc', body: 'Premium large-format OLED display, Sonos Arc soundbar, Control4 one-touch scene. Sophisticated without a dedicated room.', detail: 'Display brands: LG OLED, Sony Bravia' },
      { label: 'The Dedicated Room', name: 'In-Wall LCR + AVR', body: 'In-wall left/center/right speakers, dedicated AV receiver, acoustic treatment, 4K display. A room engineered for performance.', detail: 'Speaker brands: Sonance, James Loudspeaker' },
      { label: 'The Hidden Performance Room', name: 'Motorized Art + 5.2.2 Atmos', body: 'Motorized art panel conceals the display. Dolby Atmos 5.2.2. Zero visible technology. Guests never know the room exists until you press one button.', detail: 'The DAVG signature: invisible luxury' } ] },
    { title: 'Control4 audio & entertainment', model: 'Room experience tier — AV integration', tiers: [
      { label: 'Single Room AV', name: 'Media Room Control', body: 'One-touch scene: display on, lights dim, shades close, Sonos or Apple TV launches. Control4 transforms any room instantly.', detail: 'Integrates: Sonos, Apple TV, lighting scenes' },
      { label: 'Whole-Home AV', name: 'Multi-Room Integration', body: 'Sonos whole-home audio, distributed video, Control4 keypads in every room. Different sources, different rooms, one unified system.', detail: 'Integrates: Sonos, 4K AV, climate, lighting' },
      { label: 'Full Estate AV', name: 'Cinema + Whole-Home', body: 'Dedicated home theater, distributed audio, outdoor AV, and whole-home lighting — all unified under Control4 with Josh.ai voice and T4 touchscreens.', detail: 'Integrates: Josh.ai, Sonos, Trinnov, Séura outdoor' } ] },
  ],
  '05': [
    { title: 'Home theater', model: 'Cinema specification tier', tiers: [
      { label: 'The Private Cinema', name: '4K Display + 5.1 Surround', body: 'Premium large-format 4K display, 5.1 surround system, acoustic treatment, Control4 one-touch "Watch a Movie" scene.', from: '$25,000 installed' },
      { label: 'The Laser Theater', name: '4K Laser Projection + Atmos', body: '4K laser projector, acoustic transparent screen, Dolby Atmos 7.2.4, full room acoustic treatment. A true cinematic experience.', detail: 'Projector brands: Sony, JVC, Epson LS' },
      { label: 'The Reference Cinema', name: 'DCI-Spec + Trinnov Altitude', body: 'Micro-LED or dual 4K laser, Trinnov Altitude audio processor, THX-certified design. The same standard as a commercial cinema, in your home.', from: '$150,000 installed' } ] },
  ],
  '06': [
    { title: 'Security & surveillance', model: 'Coverage / intelligence tier', tiers: [
      { label: 'Professional Surveillance', name: 'Luma 4K Camera System', body: 'High-resolution 4K IP cameras, local NVR storage, encrypted remote app viewing. Professional-grade recording for the luxury home.', detail: 'Brand: Luma Surveillance', from: '$5,000' },
      { label: 'AI Perimeter Intelligence', name: 'Verkada Cloud Security', body: 'Verkada AI-powered cameras with human and vehicle detection, cloud-managed access, smart alerts, and two-way audio. No DVR required.', detail: 'Brand: Verkada', from: '$12,000' },
      { label: 'Estate Security Architecture', name: 'Axis Communications + Control4', body: 'Axis thermal imaging, active perimeter tracking, license plate recognition — all unified into your Control4 interface. See everything. Control everything. From one screen.', detail: 'Brand: Axis Communications', from: '$30,000' } ] },
  ],
  '07': [
    { title: 'WiFi & network infrastructure', model: 'Performance / density tier', tiers: [
      { label: 'Professional Mesh WiFi', name: 'Eero Pro + Araknis', body: 'Eero Pro 6E mesh professionally configured by DAVG. Araknis managed switches as the wired backbone. OvrC remote monitoring included.', detail: 'Brands: Eero Pro, Araknis', from: '$3,500' },
      { label: 'Managed Estate Network', name: 'Pakedge + Araknis Suite', body: 'Full Pakedge and Araknis managed infrastructure. VLAN segmentation for IoT, AV, and personal devices. Fiber backbone. OvrC proactive 24/7 monitoring via DAVG OS.', detail: 'Brands: Pakedge, Araknis', from: '$8,000' },
      { label: 'Enterprise Estate Infrastructure', name: 'Ruckus Wi-Fi 7', body: 'Ruckus Unleashed enterprise-grade Wi-Fi 7. BeamFlex+ antenna technology, high-density coverage, zero dead zones. Built for estates with 50+ connected devices.', detail: 'Brand: Ruckus Unleashed', from: '$15,000' } ] },
  ],
  '08': [
    { title: 'Outdoor entertainment', model: 'Environment / coverage tier', tiers: [
      { label: 'The Patio Setup', name: 'Séura Outdoor TV + Sonos', body: "Séura weatherproof 4K outdoor display, Sonos outdoor speakers. Professionally installed, weatherproofed for Colorado's climate extremes.", detail: 'Display: Séura Storm Ultra · Audio: Sonos Outdoor' },
      { label: 'The Outdoor Living Room', name: 'Multi-Zone Landscape System', body: 'High-nit terrace displays, multi-zone landscape audio covering pool, patio, and pergola. Seamless Control4 integration with interior zones.', detail: 'Audio: Sonance Outdoor, Episode · Display: Séura' },
      { label: 'The Outdoor Estate', name: 'Outdoor Cinema + Full Perimeter', body: 'Buried subwoofers, full perimeter landscape audio, outdoor 4K laser projection, full Control4 integration. Your backyard becomes a private venue.', detail: 'Subwoofers: Sonance, SpeakerCraft · Projection: Sony' } ] },
  ],
};
