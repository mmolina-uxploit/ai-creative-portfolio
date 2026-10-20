# Trabajo en este portfolio

El repositorio y Netlify son la fuente de publicación actual. La copia anterior de Sites no se sincroniza.

## Creativos generados

Cuando Matías solicite generar o incorporar contenido para este portfolio, completar también la incorporación al repo sin pedir una segunda autorización.

- No dejar el resultado únicamente en la conversación.
- Guardar un derivado web y conservar el original.
- Usar scripts/import-creative.mjs, o el mismo contrato mediante la conexión GitHub.
- Mantener data/projects.json y site/assets/portfolio.json sincronizados.
- Incorporar archivo, metadatos y registro de producción en el mismo commit.
- Conservar versiones; excluir descartes mediante publish: false o mantenerlos fuera de la carpeta publicada.
- Mantener los estados de trabajo en desarrollo y proyecto conceptual cuando correspondan.
- Comprobar JavaScript, catálogo y rutas de medios antes de actualizar main.
- Verificar el despliegue o indicar que no pudo comprobarse.

La subida automática a Netlify ocurre después del envío a main. Este archivo no crea un observador externo de generaciones.

## Sitio

HTML estático sin dependencias de compilación. Construcción del catálogo:

```bash
node scripts/build-portfolio.mjs
```
