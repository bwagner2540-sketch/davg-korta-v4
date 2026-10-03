const serviceSlugs = new Set(['home-intelligence','architectural-lighting','motorized-shades','media-audio','private-cinemas','security-access','infrastructure-privacy','outdoor-entertainment']);
const limits = { name:100, email:254, location:100, projectStage:30, controls:300, service:60, rooms:1500, windows:1500, website:200, 'cf-turnstile-response':2048 };
const json = (status, body, origin) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type':'application/json', 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff', ...(origin ? { 'Access-Control-Allow-Origin':origin, Vary:'Origin' } : {}) } });
export async function handle(request, env, fetcher = fetch) {
 const url = new URL(request.url);
 if (url.pathname !== '/api/inquiry') return json(404,{error:'Not found'});
 const origin = request.headers.get('Origin');
 const allowed = String(env.ALLOWED_ORIGINS || '').split(',').map(x=>x.trim()).filter(Boolean);
 if (!origin || !allowed.includes(origin)) return json(403,{error:'Origin rejected'});
 if (request.method === 'OPTIONS') return new Response(null,{status:204,headers:{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'POST','Access-Control-Allow-Headers':'Content-Type',Vary:'Origin','Access-Control-Max-Age':'600'}});
 if (request.method !== 'POST') return json(405,{error:'POST required'},origin);
 if (!(request.headers.get('Content-Type') || '').startsWith('application/json')) return json(415,{error:'JSON required'},origin);
 if (!env.TURNSTILE_SECRET_KEY || !/^\d+$/.test(env.HUBSPOT_PORTAL_ID || '') || !/^[a-f\d-]{36}$/i.test(env.HUBSPOT_FORM_GUID || '') || !env.RATE_LIMITER?.limit || !env.HUBSPOT_FIELD_MAP) return json(503,{error:'Inquiry delivery is not configured'},origin);
 const ip = request.headers.get('CF-Connecting-IP');
 if (!ip) return json(503,{error:'Request protection unavailable'},origin);
 let rate;
 try { rate = await env.RATE_LIMITER.limit({key:`inquiry:${ip}`}); } catch { return json(503,{error:'Request protection unavailable'},origin); }
 if (!rate.success) return json(429,{error:'Please wait before trying again'},origin);
 let data;
 try {
   const reader=request.body?.getReader(); if(!reader) return json(400,{error:'Brief required'},origin);
   const parts=[];let length=0;
   while(true){const {done,value}=await reader.read();if(done)break;length+=value.byteLength;if(length>8192){await reader.cancel();return json(413,{error:'Brief too large'},origin);}parts.push(value);}
   const bytes=new Uint8Array(length);let offset=0;for(const part of parts){bytes.set(part,offset);offset+=part.byteLength;}
   data=JSON.parse(new TextDecoder().decode(bytes));
 } catch { return json(400,{error:'Invalid brief'},origin); }
 if (!data || typeof data !== 'object' || Array.isArray(data)) return json(400,{error:'Invalid brief'},origin);
 if(Object.keys(data).some(key=>!(key in limits))) return json(400,{error:'Unexpected field'},origin);
 for(const [key,value] of Object.entries(data)) if(typeof value!=='string'||value.length>limits[key]) return json(400,{error:'Invalid field'},origin);
 if(data.website || !data.name?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '') || !data.rooms?.trim() || !serviceSlugs.has(data.service) || !['','retrofit','remodel','custom'].includes(data.projectStage || '') || !data['cf-turnstile-response']) return json(400,{error:'Complete the required fields'},origin);
 let fieldMap;
 try { fieldMap=JSON.parse(env.HUBSPOT_FIELD_MAP); } catch { return json(503,{error:'Inquiry field mapping is not configured'},origin); }
 if(!fieldMap || Array.isArray(fieldMap) || fieldMap.email!=='email' || !fieldMap.name || !fieldMap.rooms || Object.entries(fieldMap).some(([key,value])=>!['name','email','location','projectStage','controls','service','rooms','windows'].includes(key)||typeof value!=='string'||!/^\w+$/.test(value))) return json(503,{error:'Inquiry field mapping is not configured'},origin);
 try {
   const verification=await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',body:new URLSearchParams({secret:env.TURNSTILE_SECRET_KEY,response:data['cf-turnstile-response'],remoteip:ip}),signal:AbortSignal.timeout(8000)});
   if(!verification.ok) return json(502,{error:'Verification unavailable'},origin);
   const result=await verification.json();
   if(!result.success || result.action!=='inquiry' || result.hostname!==new URL(origin).hostname) return json(400,{error:'Verification failed'},origin);
   const fields=Object.entries(fieldMap).map(([key,name])=>({objectTypeId:'0-1',name,value:String(data[key] || '').trim()}));
   const delivery=await fetcher(`https://api.hsforms.com/submissions/v3/integration/submit/${env.HUBSPOT_PORTAL_ID}/${env.HUBSPOT_FORM_GUID}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({fields}),signal:AbortSignal.timeout(8000)});
   if(!delivery.ok) return json(502,{error:'Delivery could not be confirmed'},origin);
   return json(200,{status:'accepted'},origin);
 } catch { return json(502,{error:'Delivery could not be confirmed'},origin); }
}
export default { fetch: (request,env) => handle(request,env) };
