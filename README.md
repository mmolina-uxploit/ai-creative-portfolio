# Matías Molina · AI Creative Portfolio

Portfolio de imágenes, videos y campañas con inteligencia artificial. Este repositorio reúne el sitio, los briefs y el registro de producción.

## Estado

Primer estudio incorporado: «El frío tiene textura», versión 002. Se presenta como trabajo en desarrollo, con textura pendiente. Todavía no hay piezas finales.

El sitio actual se conserva en `site/index.html`. Netlify está conectado a este repositorio y publica la carpeta `site/` desde `main`; la configuración se encuentra en `netlify.toml`. La copia anterior alojada en Sites tiene su propio repositorio y no se sincroniza automáticamente con GitHub.

## Incorporación de creativos

La galería carga `site/assets/portfolio.json`. Netlify lo reconstruye en cada despliegue con `node scripts/build-portfolio.mjs`, detectando los archivos de `site/assets/projects/`. Cada creativo aparece en la página principal, sin modificar el HTML.

Para agregar un archivo, usar `scripts/import-creative.mjs`. Ver [el flujo completo de publicación](docs/publicacion-creativos.md). El envío al repo lo realiza el asistente durante la producción; no hay un observador de generaciones externas.

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
