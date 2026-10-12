export interface HubSection { id: string; title: string; headline: string; deck: string; cta: string; secondary: string; support: string; html: string; notes: string[]; figureCaption: string; lead: string; }
export interface GitHubPage { name: string; slug: string; route: string; h1: string; seoTitle: string; description: string; sections: HubSection[]; }
export function parseHubMarkdown(markdown: string): GitHubPage;
export function loadGitHubs(): GitHubPage[];
export function loadGitHub(slug: string): GitHubPage;
