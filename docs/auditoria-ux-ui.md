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
