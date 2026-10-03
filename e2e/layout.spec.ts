import { test, expect } from '@playwright/test';
import { ROUTES } from './routes';

for (const route of ROUTES) {
  test(`layout grammar ${route}`, async ({ page }) => {
    await page.goto(route);
    await page.evaluate(() => document.documentElement.classList.remove('k-motion'));
    const r = await page.evaluate(() => {
      const ch = [...document.querySelectorAll<HTMLElement>('[data-chapter]')];
      const pads = new Set(ch.map((c) => getComputedStyle(c).padding));
      const inners = new Set(ch.map((c) => Math.round(c.querySelector<HTMLElement>('.k-ch__in')!.getBoundingClientRect().left - c.getBoundingClientRect().left)));
      const ink = ch.filter((c) => c.classList.contains('k-ch--ink')).length;
      const tables = ch.map((c) => c.querySelectorAll(':scope .k-ch__body > table, :scope .k-ch__body > .k-wide table').length);
      const tiny = [...document.querySelectorAll<HTMLElement>('main p, main li, main td, main figcaption')].filter((e) => e.offsetParent && parseFloat(getComputedStyle(e).fontSize) < 14).length;
      const txt = document.body.innerText;
      const leaks = ['RIGHTS UNCONFIRMED', 'not verified DAVG project proof', 'sticky explanatory', 'Caption:', 'Core lesson:', 'EST. 2013'].filter((s) => txt.includes(s));
      const overlay = [...document.querySelectorAll('figure')].filter((f) => { const c = f.querySelector('figcaption'), i = f.querySelector('img'); if (!c || !i) return false; const a = c.getBoundingClientRect(), b = i.getBoundingClientRect(); return a.top < b.bottom - 1; }).length;
      const grads = [...document.querySelectorAll<HTMLElement>('main *')].filter((e) => getComputedStyle(e).backgroundImage.includes('gradient') && !e.closest('[data-nav-hero]')).length;
      const railImg = document.querySelectorAll('[data-rail] img').length;
      const mastheads = document.querySelectorAll('header, [data-nav]').length;
      return { n: ch.length, pads: pads.size, inners: inners.size, ink, maxTables: Math.max(0, ...tables), tiny, leaks, overlay, grads, railImg, mastheads };
    });
    expect(r.n).toBeGreaterThan(3);
    expect(r.pads, 'every chapter same padding').toBe(1);
    expect(r.inners, 'every chapter same inner inset').toBe(1);
    expect(r.ink, 'max one ink chapter').toBeLessThanOrEqual(1);
    expect(r.maxTables, 'one visible table per chapter').toBeLessThanOrEqual(1);
    expect(r.tiny, 'no body text under 14px').toBe(0);
    expect(r.leaks, 'authoring notes rendered').toEqual([]);
    expect(r.overlay, 'captions overlaid on images').toBe(0);
    expect(r.grads, 'gradient backgrounds').toBe(0);
    expect(r.railImg, 'logo in rail').toBe(0);
  });
}
