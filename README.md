# Matías Molina · AI Creative Portfolio

Portfolio de imágenes, videos y campañas con inteligencia artificial. Este repositorio reúne el sitio, los briefs y el registro de producción.

## Estado

Base inicial. Todavía no hay piezas finales: las portadas del sitio son muestras de diseño.

El sitio actual se conserva en `site/index.html`. La versión alojada en Sites tiene su propio repositorio; este repositorio de GitHub no está conectado a su despliegue automático.

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
