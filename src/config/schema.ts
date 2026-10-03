import {site} from './site';
export function serviceSchema(name:string,description:string,path:string):Record<string,unknown>[] {
 const businessId=`${site.origin}/#organization`;
 return [
  {'@type':'Organization','@id':businessId,name:site.name,url:site.origin,foundingDate:site.founded,...(site.email?{email:site.email}:{}),...(site.phone?{telephone:site.phone}:{})},
  {'@type':'Service',name,description,url:new URL(path,site.origin).href,provider:{'@id':businessId},areaServed:{'@type':'Place',name:'Denver and South Metro Colorado'}},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:site.origin+'/'},{'@type':'ListItem',position:2,name:'Home systems',item:site.origin+'/systems/'},{'@type':'ListItem',position:3,name,item:new URL(path,site.origin).href}]},
 ];
}
