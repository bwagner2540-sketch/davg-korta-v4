import type { HubSection } from './git-hubs.mjs';
import type { SectionRole, HubPhoto } from './hub-composition.mjs';
type ContentBlock = { kind: 'prose'; html: string; textLength: number } | {kind:'matrix'; html:string; headers:string[]; rows:string[][]; textLength:number} | {kind:'steps'; items:string[]; textLength:number} | {kind:'question'; title:string; html:string; textLength:number};
export interface PresentationGroup { heading: string; blocks: ContentBlock[]; primary: boolean; expandable: boolean; }
export function presentationGroups(html: string, frame: string): PresentationGroup[];
export function hasPublicSection(section: HubSection, role: SectionRole, photo: HubPhoto | null, products: HubPhoto[]): boolean;
