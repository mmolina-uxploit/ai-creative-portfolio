# Refactor UX, SEO y accesibilidad

21 de octubre de 2026. Fuente: main de GitHub, publicación conectada a Netlify.

## Decisiones

- Portada breve, trabajo antes que método y formación. Una serie es un proyecto, no tres proyectos duplicados.
- Imágenes completas, producto protagonista y detalle/contexto como parte de la serie. El resumen queda después de las imágenes.
- Galería con enlaces funcionales sin JavaScript. Con JavaScript se mejora a un diálogo nativo con anterior/siguiente, Escape, foco inicial y devolución del foco al disparador.
- Se retiran herramientas de carga local, reloj y decoración de portada. Filtros solo si hay imágenes y videos.
- HTML, CSS y JavaScript separados. `templates/index.html` es la fuente; `site/index.html` es generado. Editar la plantilla y ejecutar `node scripts/build-portfolio.mjs`.
- El importador sigue incorporando cada creativo al catálogo. El mismo build actualiza HTML visible y datos estructurados, sin depender de un fetch en el navegador.

## SEO implementado

HTML inicial con todos los proyectos, un h1, secciones con nombres accesibles, enlaces reales, títulos y descripción, canonical, robots.txt, sitemap.xml, Open Graph, Twitter Card, JSON-LD Person/WebSite/CollectionPage/CreativeWork y redirección /index.html a /. Sin reseñas, clientes ni resultados inventados. Primera imagen eager/prioridad alta; secundarias lazy; WebP existente, fuentes de sistema y GSAP 3.13.0 servido localmente.

El sitio protegido por autenticación no es rastreable públicamente. No se modificó la privacidad de Netlify. La indexación, las métricas Core Web Vitals reales y la validación en Search Console requieren acceso público y datos posteriores al despliegue. No hay garantía de posicionamiento ni puntajes Lighthouse inventados.

## Accesibilidad

Objetivo: WCAG 2.2 AAA; esta entrega no declara conformidad integral.

Paleta medida: texto principal 14.22:1 sobre fondo y 13.18:1 sobre superficie; secundario 8.27:1 / 7.67:1; acento 7.57:1 / 7.01:1. Objetivo de texto normal >=7:1. Foco de 3 px, controles de al menos 44 px, idioma es-AR, salto al contenido, jerarquía semántica, alternativas de imágenes, enlaces externos anunciados y controles nativos. El encabezado no es fijo: no tapa el contenido enfocado. No se fuerza scroll animado.

GSAP solo desplaza texto 5–8 px durante menos de un segundo. No oculta contenido, no anima el producto ni captura el desplazamiento. Se desactiva con prefers-reduced-motion o con el control persistente del pie. El sitio sigue funcionando si GSAP no carga.

## Verificaciones realizadas

- Build y sintaxis de JavaScript correctos.
- Imágenes y rutas locales existentes, IDs únicos y destinos de anclas presentes.
- Vista móvil en marcos de 320 y 390 px, y escritorio de 1348 px: imágenes cargadas y sin desbordamiento horizontal observado.
- En móvil, controles visibles de la página con objetivos de al menos 44 × 44 px.
- Visor: abrir producto, avanzar a detalle/contexto, contador 3 de 3, Escape, cierre y retorno al enlace de origen comprobados.
- Desplegable de proceso y reducción manual de movimiento comprobados. Preferencia persistida entre páginas.
- No se observaron errores de aplicación en la consola; sí mensajes ajenos de la extensión del navegador.

## Pendiente de auditoría integral

Lectores de pantalla reales (VoiceOver/NVDA), zoom y espaciado personalizados, preferencias de sistema en dispositivos reales, toda la matriz WCAG AAA y mediciones de rendimiento en producción. El catálogo actual no contiene videos: cuando se incorporen, revisar subtítulos, transcripciones, audiodescripción y otros requisitos aplicables antes de declarar conformidad. La implementación actual no reemplaza esa evaluación.

Referencias: https://www.w3.org/TR/WCAG22/ ; https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics ; https://gsap.com/docs/v3/GSAP/gsap.context/

## Reauditoría semántica y de accesibilidad · 3 de noviembre de 2026

Fuente: main de GitHub, publicación conectada a Cloudflare. Posterior a la incorporación de la tipografía Fraunces en encabezados y a la apertura por defecto del bloque de proceso.

### Verificación automatizada

axe-core 4.x corrido contra el HTML servido localmente (reglas WCAG 2.0 A/AA, 2.1 A/AA y buenas prácticas): 0 violaciones. 2 ítems marcados `incomplete` (requieren revisión manual, no son fallos confirmados):

- `color-contrast` sobre el ícono de ampliar (`.enlarge`, `aria-hidden="true"`) y la flecha del botón del hero: el fondo es un disco translúcido sobre foto, axe no puede resolver el compuesto. Revisado a ojo recortando y ampliando el ícono sobre la imagen más oscura del catálogo: el trazo queda nítido. No es un requisito WCAG 1.4.11 estricto porque el ícono es decorativo (`aria-hidden`) y el enlace ya es reconocible como interactivo sin él.
- `label-content-name-mismatch` sobre los `.media-button`: el nombre accesible viene de `aria-label` ("Ampliar producto de…") y no coincide con el `alt` de la imagen interior. Es el patrón correcto: el `aria-label` describe la acción del enlace, el `alt` describe el contenido de la imagen; son roles distintos a propósito.

### Hallazgo corregido

`.method{list-style:none}` quita las viñetas del `<ol>` de "Cómo trabajo". En Safari/VoiceOver eso suprime también los roles implícitos de lista y de ítem de lista — un bug documentado de WebKit, no una regla CSS inocua. Se agregó `role="list"` al `<ol class="method">` en `templates/index.html` para restituirlos. Es el único `<ul>`/`<ol>` del sitio; no hay otros casos.

### Revisado y sin cambios

Jerarquía de encabezados, landmarks (`header`, `nav` × 3 con nombres distintos, `main`, `section` con `aria-labelledby`, `footer`), salto al contenido, trampa de foco manual del visor (necesaria: `<dialog>` nativo no atrapa el foco de forma consistente entre navegadores), doble desactivación de movimiento (CSS `prefers-reduced-motion` + control persistente), enlaces externos anunciados, atributos `alt` descriptivos y sin relleno. Sin cambios de color: el contraste medido en la auditoría de octubre sigue vigente, la incorporación de Fraunces no tocó la paleta.

## Rebrand de paleta y tipografía · 4 de noviembre de 2026

A pedido de Matías: identidad "off-white/Supreme pero minimalista". Cambia la paleta completa, la tipografía de encabezados y se agrega un tratamiento de etiqueta industrial entre comillas en metadatos. Reemplaza, no extiende, la paleta cálida y la tipografía Fraunces incorporadas el 3 y 4 de noviembre.

### Paleta nueva

`--bg:#f3f1ea` (off-white/hueso), `--surface:#e9e5d8`, `--ink:#0d0d0c` (negro cálido, ya no verde-negro), `--muted:#57544a`, `--line:#d6d1c2`, `--accent:#c2410c` (naranja de seguridad oscurecido para uso en texto), `--accent-vivid:#ff5a00` (naranja de seguridad puro, solo para superficies decorativas: punto de marca, fondo de `status-pill`, favicon).

El naranja de seguridad auténtico (`#ff5a00`/`#ff6600`) da 2.6–2.8:1 contra el fondo nuevo: no alcanza ni el mínimo de texto grande (3:1). Por eso el token de texto (`--accent`) usa una versión más oscurecida (`#c2410c`, 4.58:1 contra `--bg`) y el tono puro queda reservado a superficies no textuales, donde no aplica un mínimo de contraste de texto.

Medido sobre la página renderizada (`getComputedStyle`, no estimado): texto `--ink` sobre `--bg` 17.20:1; `--muted` sobre `--bg` 6.70:1; `--accent` sobre `--bg` (enlaces, `.inline-link`, hover de nav) 4.58:1; `--ink` sobre `--accent-vivid` (`.status-pill`) 6.22:1; texto del botón blanco sobre `--ink` 19.44:1.

### Velo del hero, retomado

El cambio de `--bg` obligaba a remedir el velo sobre la foto del hero (ver entrada del 4 de noviembre, sección hero). Con el fondo nuevo, el alpha que antes alcanzaba 4.5:1 para el texto `--muted` caía a 4.0:1. Se subió el alpha de la zona plana de 0.68 a 0.78. Remedido por muestreo de píxeles en filas sin glifos sobre la página real: `--muted` 4.71–4.75:1, `--ink` ~12:1. El span en `--accent` del h1 ("Con dirección.") da 3.2–3.25:1 contra el peor punto de la foto bajo el velo: pasa el mínimo de 3:1 para texto grande en negrita, pero con menos margen que el resto — es el único valor de esta paleta que queda cerca del piso, no por elección sino porque el techo teórico de `--accent` contra `--bg` puro es 4.58:1 y ya se usa casi todo ese margen.

### Tipografía

Fraunces (variable, 300–700) se reemplaza por Archivo Black (un solo corte, peso 400), autohospedada en `site/assets/vendor/fonts/archivo-black-latin.woff2` (18 KB, más liviana que el variable anterior de 67 KB). Encabezados en mayúsculas. Se corrigieron todos los `font-weight:500/600` que apuntaban a elementos `h1/h2/h3` a `400`: Archivo Black es un solo corte, pedirle otro peso fuerza una negrita sintética del navegador en vez de usar el diseño real de la fuente. El letter-spacing de cada encabezado grande se aflojó de negativo fuerte a negativo leve o cero: estaba afinado para el ajuste de Fraunces (serif), no para una grotesca ya ancha de por sí.

### Etiquetas industriales

`.status-pill`, el rol de cada imagen (`.creative figcaption span:first-child`) y `.play-mark` llevan comillas, versalitas y monoespaciada vía `::before`/`::after{content:'"'}` y `text-transform:uppercase` — sin tocar el HTML ni `render-site.mjs`, puramente CSS. Las comillas generadas quedan expuestas al árbol de accesibilidad en los navegadores actuales; se verificó que no introduce ninguna violación (axe-core, página completa: 0).

### Verificación

axe-core (WCAG 2.0/2.1 A/AA): 0 violaciones, antes y después de agregar el favicon actualizado. Capturas de escritorio, proyecto expandido, sección "Sobre mi trabajo" y mobile (390 px) revisadas visualmente. Build de `render-site.mjs` reconstruido y servido sin errores de consola.
