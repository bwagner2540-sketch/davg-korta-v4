import process from 'node:process';
import publication from '../config/publication.json';
import {site} from '../config/site';
export function GET() {
 const pages: string[]=process.env.DAVG_BUILD_MODE==='production'?publication.approvedPages:[];
 const paths=pages.filter(p=>p.endsWith('.astro')&&!p.endsWith('/404.astro')).map(p=>p.replace('src/pages','').replace(/\/index\.astro$/,'/').replace(/\.astro$/,'/'));
 const xml=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>${site.origin}${path}</loc></url>`).join('')}</urlset>`;
 return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
