import { readFile, writeFile, mkdir, copyFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const args=process.argv.slice(2),opts={};
for(let i=0;i<args.length;i+=2){if(!args[i]?.startsWith('--')||!args[i+1])throw Error('Use --project ID --source PATH --role ROLE --alt TEXT');opts[args[i].slice(2)]=args[i+1]}
if(!opts.project||!opts.source||!opts.role||!opts.alt)throw Error('Required: --project --source --role --alt');
if(!/^[a-z0-9][a-z0-9-]*$/.test(opts.project))throw Error('Invalid project id');
const ext=path.extname(opts.source).toLowerCase();
if(!['.webp','.png','.jpg','.jpeg','.avif','.gif','.mp4','.webm'].includes(ext))throw Error('Unsupported media format');
const configPath=path.join(root,'data/projects.json');
const config=JSON.parse(await readFile(configPath,'utf8'));
const project=config.projects.find(p=>p.id===opts.project);
if(!project)throw Error('Register project in data/projects.json first');
const slug=opts.role.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
if(!slug)throw Error('Invalid role');
const dir=path.join(root,'site/assets/projects',opts.project);await mkdir(dir,{recursive:true});
let version=1,dest;
while(true){dest=path.join(dir,slug+'-v'+String(version).padStart(2,'0')+ext);try{await access(dest);version++}catch(e){if(e.code!=='ENOENT')throw e;break}}
await copyFile(path.resolve(opts.source),dest);
project.assets??={};const relative=opts.project+'/'+path.basename(dest);
project.assets[relative]={role:opts.role,alt:opts.alt,order:100+version,publish:true};
await writeFile(configPath,JSON.stringify(config,null,2)+'\n');
await import('./build-portfolio.mjs');
console.log('Incorporado: '+path.relative(root,dest));
