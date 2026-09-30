export const SERVICES = [
  { n: '01', name: 'Home Intelligence', file: '01-home-intelligence', key: /intelligence/ },
  { n: '02', name: 'Architectural Lighting', file: '02-architectural-lighting', key: /lighting/ },
  { n: '03', name: 'Motorized Shading', file: '03-motorized-shading', key: /shad/ },
  { n: '04', name: 'Media & Audio', file: '04-media-and-audio', key: /media|audio/ },
  { n: '05', name: 'Private Cinemas', file: '05-private-cinemas', key: /cinema|theater/ },
  { n: '06', name: 'Security & Access', file: '06-security-and-access', key: /security|access/ },
  { n: '07', name: 'Infrastructure & Privacy', file: '07-infrastructure-and-privacy', key: /network|infrastructure|privacy/ },
  { n: '08', name: 'Outdoor Entertainment', file: '08-outdoor-entertainment', key: /outdoor/ },
] as const;

/** Rail chapters, identical on all eight services. The sticky 25/75 body renders these sections in this order. */
export const GROUPS = [
  { id: 'overview', label: 'Overview', sections: ['03'] },
  { id: 'design', label: 'Design', sections: ['06', '07'] },
  { id: 'systems', label: 'Systems', sections: ['04', '05', '08'] },
  { id: 'installation', label: 'Installation', sections: ['09', '10', '13'] },
  { id: 'investment', label: 'Investment', sections: ['12', '11'] },
] as const;

/** Page zones: 01–02 full width above the 25/75 split, 03–13 inside it, 14–15 full width below. */
export const zoneOf = (nn: string): 'top' | 'body' | 'end' => (nn <= '02' ? 'top' : nn >= '14' ? 'end' : 'body');

/** Image slots per section number: [aspect ratio, subject]. */
export const SLOTS: Record<string, [string, string][]> = {
  '03': [['16 / 9', 'Room photograph — the experience in a real space']],
  '04': [['4 / 3', 'System diagram']],
  '05': [['16 / 9', 'Signature study']],
  '06': [['1 / 1', 'Product / material detail'], ['1 / 1', 'Installed elevation']],
  '07': [['4 / 3', 'Applied example — room one'], ['4 / 3', 'Applied example — room two']],
  '08': [['16 / 9', 'Construction detail / cutaway']],
};

/** Real project photography only (no concept studies in production). Keyed by service n → section nn. */
export const MEDIA: Record<string, Record<string, { src: string; alt: string }>> = {
  '03': {
    '01': { src: '/images/davg-bedroom-motorized-shades-01-1600w.webp', alt: 'Bedroom window wall with motorized roller shades' },
    '03': { src: '/images/davg-living-room-lutron-shades-orlando-01-1600w.webp', alt: 'Living room with Lutron roller shades' },
  },
};
