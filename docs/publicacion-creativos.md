# Incorporar un creativo y publicarlo

## Flujo

1. Generar o editar la pieza.
2. Incorporar el archivo al proyecto con el comando de importación.
3. Revisar la imagen, el texto alternativo y su estado.
4. Subir archivo y metadatos juntos a main.
5. Netlify ejecuta el indexador y publica site/.

Cada imagen aparece directamente en la galería principal. Los filtros se calculan desde el catálogo; no se edita el HTML para agregar piezas.

## Comando

Desde la raíz, con Node.js 20 o posterior:

```bash
node scripts/import-creative.mjs --project 001-el-frio-tiene-textura --source /ruta/imagen.webp --role Detalle --alt "Detalle de los pliegues del helado de frambuesa"
```

El importador conserva los archivos anteriores y asigna un nombre versionado. Acepta imágenes y videos. No convierte formatos ni optimiza el archivo: preparar el derivado web antes de importarlo. Guarda únicamente archivos destinados al portfolio; los descartes quedan fuera de site/assets/projects/.

## Catálogo

data/projects.json contiene la ficha de cada proyecto y metadatos opcionales por archivo. El indexador descubre imágenes y videos en site/assets/projects/, incluidos subdirectorios, y escribe site/assets/portfolio.json.

Para excluir un archivo del catálogo sin borrarlo, indicar publish: false en su entrada de metadatos. Los archivos nuevos dentro de esa carpeta se publican por defecto.

```bash
node scripts/build-portfolio.mjs
```

## Alcance de la automatización

Netlify indexa y despliega automáticamente los archivos incorporados al repo. No observa las generaciones de ChatGPT ni Magnific: el paso de importación y envío al repo lo ejecuta el asistente al producir contenido para este portfolio.

Si la interfaz Git no dispone de autenticación, usar la conexión GitHub para crear los blobs, el árbol y el commit. Publicar el conjunto en una sola actualización de main con comprobación de la revisión esperada.

No introducir tokens ni credenciales en el repo. Confirmar el despliegue antes de afirmar que está publicado; si el panel está protegido, informar esa limitación.
