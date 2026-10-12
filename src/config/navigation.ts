/** Site navbar from the supplied header mockup. Service chapters stay in the left rail. */
import { services } from './site';

export const utilityBar = {
  place: 'Denver CO',
  established: 'Est. 2013',
  phoneDisplay: '720-638-1603',
  phoneHref: 'tel:+17206381603',
};

export interface NavItem {
  label: string;
  href: string;
}

export interface NavMenu {
  id: string;
  label: string;
  items: NavItem[];
}

export const primaryNavigation: NavMenu[] = [
  {
    id: 'company',
    label: 'Company',
    items: [
      { label: 'Our Story', href: '/company/our-story/' },
      { label: 'Our Work', href: '/company/our-work/' },
      { label: 'Our Process', href: '/company/our-process/' },
      { label: 'Careers', href: '/company/careers/' },
      { label: 'Legal', href: '/company/legal/' },
    ],
  },
  {
    id: 'solutions',
    label: 'Home Solutions',
    items: services.map((service) => ({ label: service.railLabel, href: service.href })),
  },
  {
    id: 'resources',
    label: 'Resources',
    items: [
      { label: 'Design & Build', href: '/resources/design-build/' },
      { label: 'Brands', href: '/resources/brands/' },
      { label: 'Trade Partners', href: '/resources/trade-partners/' },
      { label: 'Homeowner Guides', href: '/resources/homeowner-guides/' },
      { label: 'Blog', href: '/resources/blog/' },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    items: [
      { label: 'Locations', href: '/support/locations/' },
      { label: 'Service Plans', href: '/support/service-plans/' },
      { label: 'Contact', href: '/support/contact/' },
    ],
  },
];

export const interiorPages = primaryNavigation
  .flatMap((menu) => menu.items)
  .filter((item) => !item.href.startsWith('/systems/'));
