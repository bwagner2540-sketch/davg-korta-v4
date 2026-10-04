export interface HubPhoto { id: string; src: string; alt: string; title: string; caption: string; fit: 'contain' | 'cover'; purpose: string; status: string; }
export interface SectionRole { purpose: string; surface: 'hero' | 'answer' | 'editorial' | 'questions' | 'investment' | 'systems' | 'inquiry'; frame: string; photo?: string; products?: boolean; study?: 'signature' | 'technical' | null; }
export const spatialWords: Record<string, string>;
export function sectionRole(slug: string, id: string): SectionRole;
export function bodyPhoto(slug: string, purpose: string): HubPhoto | null;
export function productsFor(slug: string): HubPhoto[];
export function studyPhotosFor(slug: string): Record<string, HubPhoto | undefined>;
