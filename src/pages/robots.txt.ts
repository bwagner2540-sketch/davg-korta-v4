import process from 'node:process';
import publication from '../config/publication.json';
import {site} from '../config/site';
export function GET() {
 const live=process.env.DAVG_BUILD_MODE==='production' && publication.approvedPages.length>0;
 return new Response(live?`User-agent: *\nAllow: /\nSitemap: ${site.origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain; charset=utf-8'}});
}
