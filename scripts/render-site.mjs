import {readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const json=x=>JSON.stringify(x).replace(/</g,'\\u003c');
export async function renderSite(root,creatives){
 const base='https://ia-creative-portfolio-matiasmolina.netlify.app/';
 const groups=Map.groupBy?Map.groupBy(creatives,x=>x.projectId):creatives.reduce((m,x)=>m.set(x.projectId,[...(m.get(x.projectId)||[]),x]),new Map());
 let number=0;
 const catalog=[...groups.entries()].map(([id,series])=>{
 const p=series[0];number++;
 return `<article class="project" id="${esc(id)}" aria-labelledby="title-${esc(id)}"><div class="project-top"><p class="project-category">${String(number).padStart(2,'0')} · ${esc(p.subtitle.split(' · ')[0])}</p><span class="status-pill">${esc(p.subtitle.split(' · ').at(-1))}</span></div><h3 class="project-title" id="title-${esc(id)}">${esc(p.name)}</h3><div class="project-grid">${series.map((x,i)=>`<figure class="creative"><a class="media-button" href="${esc(x.src)}" data-creative="${esc(x.id)}" aria-label="Ampliar ${esc(x.role.toLowerCase())} de ${esc(x.name)}">${x.type==='image'?`<img src="${esc(x.src)}" alt="${esc(x.alt)}" ${number===1&&i===0?'fetchpriority="high" loading="eager"':'loading="lazy"'} decoding="async">`:`<video src="${esc(x.src)}" preload="metadata" muted playsinline aria-label="${esc(x.alt)}"></video><span class="play-mark">Video</span>`}<span class="enlarge" aria-hidden="true">⤢</span></a><figcaption><span>${esc(x.role)}</span><span class="creative-number">${String(i+1).padStart(2,'0')}</span></figcaption></figure>`).join('')}</div><p class="project-intro">${esc(p.summary)}</p><details class="project-process"><summary>Ver el proceso</summary><dl class="process-grid">${[['La intención',p.concept],['La dirección',p.decision],['La producción',p.origin],['El estado',p.pending]].filter(([,v])=>v).map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></details></article>`;
 }).join('\n');
 const person={'@type':'Person','@id':base+'#matias',name:'Matías Molina',url:base,sameAs:['https://www.instagram.com/matias_sistemascreativos/'],jobTitle:'Creador de contenido visual con IA'};
 const graph={'@context':'https://schema.org','@graph':[person,{'@type':'WebSite','@id':base+'#website',url:base,name:'Matías Molina · Creación visual con IA',inLanguage:'es-AR',publisher:{'@id':base+'#matias'}},{'@type':'CollectionPage','@id':base+'#portfolio',url:base,name:'Imágenes con IA para marcas',inLanguage:'es-AR',isPartOf:{'@id':base+'#website'},author:{'@id':base+'#matias'},hasPart:[...groups.entries()].map(([id,s])=>({'@type':'CreativeWork',name:s[0].name,url:base+'#'+id,description:s[0].summary,creativeWorkStatus:'En desarrollo',creator:{'@id':base+'#matias'},image:s.filter(x=>x.type==='image').map(x=>base+x.src)}))}]};
 const image=creatives.find(x=>x.type==='image');
 const seo=`<link rel="canonical" href="${base}"><meta name="robots" content="index,follow,max-image-preview:large"><meta property="og:type" content="website"><meta property="og:locale" content="es_AR"><meta property="og:site_name" content="Matías Molina"><meta property="og:url" content="${base}"><meta property="og:title" content="Matías Molina · Imágenes con IA"><meta property="og:description" content="Creo imágenes con IA para marcas. Conocé mis proyectos y las decisiones detrás de cada pieza.">${image?`<meta property="og:image" content="${base+esc(image.src)}"><meta property="og:image:alt" content="${esc(image.alt)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${base+esc(image.src)}">`:''}<script type="application/ld+json">${json(graph)}</script>`;
 let html=await readFile(path.join(root,'templates/index.html'),'utf8');
 for(const [key,value] of [['SEO',seo],['CATALOG',`<div id="catalog">${catalog}</div>`],['DATA',`<script type="application/json" id="portfolio-data">${json(creatives)}</script>`]])html=html.replace(new RegExp(`<!-- ${key}:START -->[\\s\\S]*?<!-- ${key}:END -->`),`<!-- ${key}:START -->${value}<!-- ${key}:END -->`);
 await writeFile(path.join(root,'site/index.html'),html);
 await writeFile(path.join(root,'site/robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${base}sitemap.xml\n`);
 await writeFile(path.join(root,'site/sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${base}</loc></url></urlset>\n`);
}



