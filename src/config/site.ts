/** Confirmed facts only. Unresolved contact facts are deliberately absent. */
export const site = {
  name: 'Denver AV Group', shortName: 'DAVG', origin: 'https://davg.ai',
  founded: '2013', email: 'info@davg.ai', phone: null as string | null,
  publicAddress: null, socialImage: null as string | null,
  inquiryEndpoint: import.meta.env.PUBLIC_INQUIRY_ENDPOINT || '',
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || '',
};
export const chapterNavigation = [
  { id: 'overview', label: 'Overview' }, { id: 'design', label: 'Design' },
  { id: 'systems', label: 'Systems' }, { id: 'installation', label: 'Installation' },
  { id: 'investment', label: 'Investment' },
];
export const railCredentials = [
  'Control4 Platinum Dealer · Lutron Certified',
  'HomeWorks Integrator · CEDIA member (2026)',
];
/** Only ordered service list. Header, footer, rail, systems index, and /preview/ read this array. */
export const services = [
  { label: 'Home Intelligence', railLabel: 'Home Intelligence', slug: 'home-intelligence' },
  { label: 'Media & Audio', railLabel: 'Media & Audio', slug: 'media-audio' },
  { label: 'Private Cinemas', railLabel: 'Private Cinemas', slug: 'private-cinemas' },
  { label: 'Architectural Lighting', railLabel: 'Architectural Lighting', slug: 'architectural-lighting' },
  { label: 'Motorized Shading', railLabel: 'Motorized Shading', slug: 'motorized-shades' },
  { label: 'Outdoor Entertainment', railLabel: 'Outdoor Entertainment', slug: 'outdoor-entertainment' },
  { label: 'Digital Infrastructure & Privacy', railLabel: 'Infrastructure & Privacy', slug: 'infrastructure-privacy' },
  { label: 'Security Cameras & Access Control', railLabel: 'Security & Access', slug: 'security-access' },
].map(service => ({ ...service, href: `/solutions/${service.slug}/` }));
