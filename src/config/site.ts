// Single source for public business facts. Leave contact values empty until DAVG confirms them.
export const site = {
  name: 'Denver AV Group',
  short: 'DAVG',
  url: 'https://davg.ai',
  tagline: 'Your Home, Automated by Design.',
  established: 2013,
  credentials: ['Control4 Platinum Dealer', 'Lutron Certified HomeWorks Integrator', 'CEDIA member (2026)'],
  territory: ['Denver', 'Cherry Hills Village', 'Greenwood Village', 'Castle Pines', 'Castle Rock', 'Parker', 'Littleton', 'Centennial', 'Lone Tree'],
  contact: { phone: '', email: '' },
  /** Form endpoint (e.g. a Cloudflare Pages Function). Empty = form posts nowhere. */
  formAction: '',
  logo: { dark: '/brand/davg-lockup-cream-tag.png', paper: '/brand/davg-lockup-black-tag.png' },
  /** Service hero layout: 'photo' (full-bleed photo, masthead over it, fitted word across the bottom). 'monument' / 'stacked' / 'overlay' are earlier layouts. */
  heroVariant: 'photo' as 'photo' | 'monument' | 'stacked' | 'overlay',
  /** Force proof reservations visible in production. They always show in `astro dev` (see [...route].astro). */
  showProofPreview: false,
};
