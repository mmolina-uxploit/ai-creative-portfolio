# Matías Molina · AI Creative Portfolio

Portfolio de imágenes, videos y campañas con inteligencia artificial. Este repositorio reúne el sitio, los briefs y el registro de producción.

## Estado

El catálogo reúne dos proyectos personales y seis imágenes:

- «El frío tiene textura»: producto, detalle y contexto de heladería.
- «Una prenda. Tres vidas.»: viaje, trabajo y noche.

Ambas series siguen en desarrollo. La heladería está en revisión de continuidad; la campera requiere ajustes de fidelidad de la prenda. Todavía no hay videos publicados. El titular actual del código es «Imágenes con IA. Con dirección.»; la publicación puede quedar atrasada si Netlify bloquea despliegues por cuota.

El sitio actual se conserva en `site/index.html`. Netlify está conectado a este repositorio y publica la carpeta `site/` desde `main`; la configuración se encuentra en `netlify.toml`. La copia anterior alojada en Sites tiene su propio repositorio y no se sincroniza automáticamente con GitHub.

## Incorporación de creativos

La galería se genera en el HTML inicial y usa `site/assets/portfolio.json` para las interacciones. Netlify lo reconstruye en cada despliegue con `node scripts/build-portfolio.mjs`, detectando los archivos de `site/assets/projects/`. Cada creativo aparece en la página principal, sin modificar el HTML.

Para agregar un archivo, usar `scripts/import-creative.mjs`. Ver [el flujo completo de publicación](docs/publicacion-creativos.md). El envío al repo lo realiza el asistente durante la producción; no hay un observador de generaciones externas.

## Política de publicación

Trabajar los ajustes en una rama de desarrollo y agruparlos en una versión revisada. Cada publicación exitosa en producción consume créditos en Netlify; no enviar cambios pequeños a `main` por separado. No confundir un commit en GitHub con un despliegue confirmado: verificar siempre la URL pública. Si la cuota está agotada, conservar los cambios pendientes sin repetir intentos de publicación.

## Abrir el sitio

Requiere Python 3. Desde la raíz:

```bash
python3 -m http.server 8000 --directory site
```

Abrir http://localhost:8000. No requiere instalación de dependencias ni compilación.

## Empezar

1. Leer [la dirección creativa](docs/direccion-creativa.md).
2. Seguir [la progresión de proyectos](docs/proyectos.md).
3. Producir la primera imagen con [el brief 001](projects/001-el-frio-tiene-textura/brief.md).
4. Registrar las pruebas en [producción](projects/001-el-frio-tiene-textura/produccion.md).

## Estructura

- `site/`: sitio estático actual.
- `docs/`: criterio creativo y secuencia de aprendizaje.
- `projects/`: briefs, experimentos y entregas de cada proyecto.

Los proyectos personales se identifican como conceptuales. No se atribuyen clientes, resultados comerciales ni experiencia no demostrada.

Las imágenes y videos finales se incorporarán al sitio después de revisar su calidad. Los originales pesados se mantienen fuera de Git; se registran sus enlaces y se versionan únicamente los derivados necesarios para la web.
