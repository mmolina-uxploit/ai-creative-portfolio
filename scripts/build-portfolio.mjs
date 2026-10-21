import { readFile, writeFile, readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const assets=path.join(root,'site/assets/projects');
const config=JSON.parse(await readFile(path.join(root,'data/projects.json'),'utf8'));
const image=/\.(webp|png|jpe?g|avif|gif)$/i, video=/\.(mp4|webm)$/i;
const human=s=>s.replace(/\.[^.]+$/,'').replace(/[-_]+/g,' ').trim();
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});const results=[];for(const e of entries){const full=path.join(dir,e.name);if(e.isDirectory())results.push(...await walk(full));else if(image.test(e.name)||video.test(e.name))results.push(full)}return results}
await mkdir(assets,{recursive:true});
const media=[],files=(await walk(assets)).sort();
for(const full of files){
 const rel=path.relative(assets,full).split(path.sep).join('/'),name=path.basename(full);
 const project=config.projects.find(p=>rel.startsWith(p.id+'/')||name.startsWith(p.filePrefix+'-'));
 const data=project?.assets?.[rel]??project?.assets?.[name]??{};
 if(data.publish===false)continue;
 if((await stat(full)).size===0)throw Error('Empty creative: '+rel);
 const type=video.test(name)?'video':'image';
 const role=data.role||human(name);
 media.push({id:rel,projectId:project?.id||rel.split('/')[0],name:project?.name||human(name),role,type,src:'assets/projects/'+rel,alt:data.alt||((project?.name||'Estudio visual')+' · '+role),order:data.order??100,subtitle:project?.subtitle||'Proyecto personal · En desarrollo',summary:project?.summary||'Estudio en desarrollo.',concept:project?.concept||'',decision:project?.decision||'',pending:project?.pending||'Pendiente de revisión.',origin:project?.origin||'Producción asistida por IA.',projectOrder:config.projects.indexOf(project)});
}
media.sort((a,b)=>a.projectOrder-b.projectOrder||a.order-b.order||a.src.localeCompare(b.src));
const output={version:1,creatives:media.map(({projectOrder,...item})=>item)};
await mkdir(path.join(root,'site/assets'),{recursive:true});
await writeFile(path.join(root,'site/assets/portfolio.json'),JSON.stringify(output,null,2)+'\n');
console.log('Portfolio: '+media.length+' creativos indexados.');
const {renderSite}=await import('./render-site.mjs');
await renderSite(root,output.creatives);
console.log('HTML semántico, datos estructurados y sitemap generados.');
