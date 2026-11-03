# Migración a Cloudflare

Estado: completada. Cloudflare es la fuente de publicación oficial, en reemplazo de Netlify. El sitio se verificó cargando correctamente en `https://ai-creative-portfolio.mmolina-uxploit.workers.dev/`.

## Configuración de build en Cloudflare

- Framework preset: None.
- Comando de build: `node scripts/build-portfolio.mjs`
- Directorio de salida: `site`
- Sin variables de entorno ni paso de instalación: el script no tiene dependencias externas (no hay `package.json`).

## Compatibilidad verificada

- `site/_headers` y `site/_redirects` usan la sintaxis que Cloudflare interpreta de forma nativa. No requirieron cambios.
- `netlify.toml` se retiró del repositorio: ya no tenía efecto y describía un host que dejó de usarse.

## URLs actualizadas

Se reemplazó `ia-creative-portfolio-matiasmolina.netlify.app` por `ai-creative-portfolio.mmolina-uxploit.workers.dev` en:

- `site/index.html`: canonical, Open Graph, Twitter Card, JSON-LD (`@id` y `url` de Person, WebSite, CollectionPage).
- `site/sitemap.xml`.
- `site/robots.txt`.

Si más adelante se conecta un dominio propio sobre este mismo proyecto de Cloudflare, estas URLs deben volver a actualizarse.

## Historial que no se reescribió

Los registros de producción fechados (`projects/*/produccion.md`) y la auditoría UX/UI (`docs/auditoria-ux-ui.md`) mencionan a Netlify como parte del estado vigente en el momento en que se escribieron. Se conservan sin cambios: son historial, no documentación de proceso actual.
