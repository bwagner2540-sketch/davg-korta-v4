/** Shared site facts. Contact values preserved from the current homepage until Brandon confirms one public phone. */
export const site = {
  name: 'Denver AV Group',
  shortName: 'DAVG',
  url: 'https://davg.ai',
  email: 'info@davg.ai',
  phoneDisplay: '720.638.1603',
  phoneTel: '7206381603',
  credentials: [
    'Lutron Certified HomeWorks Integrator',
    'Control4 Platinum Dealer',
    'CEDIA Member 2026',
  ] as const,
  logo: {
    dark: '/images/brand/davg-mark-on-dark.svg',
    paper: '/images/brand/davg-mark-on-paper.svg',
  },
  services: [
    { name: 'Home Intelligence', href: '/solutions/home-intelligence/' },
    { name: 'Architectural Lighting', href: '/solutions/architectural-lighting/' },
    { name: 'Motorized Shading', href: '/solutions/motorized-shades/' },
    { name: 'Media & Audio', href: '/solutions/media-audio/' },
    { name: 'Private Cinemas', href: '/solutions/private-cinemas/' },
    { name: 'Security Cameras & Access Control', href: '/solutions/security-access/' },
    { name: 'Digital Infrastructure & Privacy', href: '/solutions/infrastructure-privacy/' },
    { name: 'Outdoor Entertainment', href: '/solutions/outdoor-entertainment/' },
  ] as const,
} as const;
