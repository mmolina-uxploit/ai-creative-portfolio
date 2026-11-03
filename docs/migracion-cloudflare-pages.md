# Migración a Cloudflare Pages

Estado: preparación técnica. La conexión del repositorio al dashboard de Cloudflare requiere la cuenta de Matías; no puede ejecutarse de forma remota desde este entorno.

## Configuración de build en Cloudflare Pages

- Framework preset: None.
- Comando de build: `node scripts/build-portfolio.mjs`
- Directorio de salida: `site`
- Sin variables de entorno ni paso de instalación: el script no tiene dependencias externas (no hay `package.json`).

## Compatibilidad verificada

- `site/_headers` y `site/_redirects` usan la sintaxis que Cloudflare Pages interpreta de forma nativa. No requieren cambios.
- `netlify.toml` queda sin efecto en Cloudflare pero no interfiere; puede conservarse mientras ambos hosts coexistan.

## Pendiente, deferido a propósito

El dominio `ia-creative-portfolio-matiasmolina.netlify.app` está escrito en:

- `site/index.html`: canonical, Open Graph, Twitter Card, JSON-LD (`@id` y `url` de Person, WebSite, CollectionPage).
- `site/sitemap.xml`: único `<loc>`.
- `site/robots.txt`: línea `Sitemap:`.

Este reemplazo se posterga hasta fijar el dominio final en Cloudflare. Mientras no se actualice, el sitio funciona igual; solo las referencias SEO apuntarán al host anterior.

## Paso manual no delegable

Conectar el repositorio de GitHub al proyecto de Cloudflare Pages se hace desde el dashboard de Cloudflare, con la cuenta de Matías. Una vez conectado con la configuración de arriba, el primer deploy debería replicar el sitio actual sin ajustes adicionales.
