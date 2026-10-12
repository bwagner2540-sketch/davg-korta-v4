export interface FigurePhoto { id: string; src: string; alt?: string; title?: string; caption?: string; rightsStatus?: string; }
export function visibleCaption(value: string): string;
export function rightsUnconfirmed(photo: FigurePhoto): boolean;
export function figuresFor(slug: string, sectionId: string): FigurePhoto[];
export function chapterLayout(figures: FigurePhoto[]): 'single' | 'aside';
export function inlineFigures(figures: FigurePhoto[], options?: { dev?: boolean; caption?: string }): string;
export function asideFigure(figures: FigurePhoto[], options?: { dev?: boolean; caption?: string }): string;
export function heroFigure(photo: FigurePhoto, options?: { dev?: boolean; caption?: string }): string;
