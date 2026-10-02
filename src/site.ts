export const SITE = {
  name: 'Denver AV Group',
  shortName: 'DAVG',
  legacyName: 'Denver AV Guy',
  url: 'https://davg.ai',
  locale: 'en_US',
  language: 'en-US',
  themeColor: '#090B0A',
  defaultImage: '/images/davg-living-room-lutron-shades-orlando-01-1600w.webp',
  description:
    'Denver AV Group designs and integrates home intelligence, architectural lighting, motorized shading, media, private cinema, security, networking, and outdoor entertainment for luxury residences across Denver and South Metro Denver.',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Denver metropolitan area, Colorado' },
    { '@type': 'AdministrativeArea', name: 'South Metro Denver, Colorado' },
  ],
  knowsAbout: [
    'Home Intelligence',
    'Architectural Lighting',
    'Motorized Shading',
    'Media & Audio',
    'Private Cinemas',
    'Security Cameras & Access Control',
    'Digital Infrastructure & Privacy',
    'Outdoor Entertainment',
    'Control4 home automation',
    'Lutron HomeWorks',
  ],
} as const;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface PageSEOConfig {
  title: string;
  description: string;
  image?: string;
  serviceName?: string;
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
}

export const PAGE_SEO: Record<string, PageSEOConfig> = {
  '/': {
    title: 'Denver AV Group | Luxury Home Automation & Residential Technology',
    description: SITE.description,
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  '/solutions/motorized-shades/': {
    title: 'Motorized Shading Denver | Lutron HomeWorks Integrator | DAVG',
    description:
      'DAVG designs architectural motorized shading for luxury homes across Denver and South Metro Denver, including recessed shade planning, Lutron HomeWorks integration, daylight control, and coordinated low-voltage infrastructure.',
    image: '/images/davg-living-room-lutron-shades-orlando-01-1600w.webp',
    serviceName: 'Motorized Shading',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions/' },
      { name: 'Motorized Shading', path: '/solutions/motorized-shades/' },
    ],
  },
};

export const INDEXABLE_ROUTES = ['/', '/solutions/motorized-shades/'] as const;

export function normalizePath(pathname: string): string {
  if (pathname === '/') return '/';
  return `/${pathname.replace(/^\/+|\/+$/g, '')}/`;
}

export function getPageSEO(pathname: string): PageSEOConfig | undefined {
  return PAGE_SEO[normalizePath(pathname)];
}
