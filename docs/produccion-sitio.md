# Producción de piezas del sitio

Registro de assets de marca que no pertenecen a un proyecto del catálogo (hero, íconos, fondos). Sigue la misma convención que `projects/*/produccion.md`; se separa porque estas piezas no tienen `data/projects.json` propio.

## Imagen del hero · 4 de noviembre de 2026

Pieza independiente de las dos series del catálogo, a pedido de Matías: debía representar "creación con dirección" de forma abstracta pero fotorrealista, sin ligarse a gastronomía ni indumentaria.

### Prompt de generación

Herramienta: ChatGPT (image_gen), generada por Matías fuera del repositorio.

```text
Use case: photorealistic-natural. Asset type: ONE standalone editorial still-life photograph for the hero banner of an AI creative-direction portfolio, landscape 16:9. No typography, no logos, no screens, no monitors, no robots, no circuit boards, no neural-network or holographic clichés. Photographic realism, not illustration or 3D render.

Scene: an overhead-leaning three-quarter view of a wooden light table used for reviewing photographic proofs. Several thin backlit panels rest on the table, glowing a soft even white, like blank contact-sheet frames waiting to be chosen — not screens, no visible pixels or UI. A person's hand and forearm enter from the right side, mid-gesture, lifting or sliding one panel into place among the others with visible intention, as if selecting and arranging rather than creating from nothing. One panel has a small warm rust-red grease-pencil mark or a red paper tab clipped to its edge, the only strong color accent in the frame.

Composition: generous, uncluttered negative space across the left 55-60% of the frame — plain tabletop, soft shadow, very little detail — reserved for text that will be placed over it later. All the action (hand, panels, red accent) sits concentrated in the right third to center of the frame. Shallow depth of field, the nearest panel and hand in sharp focus, the farther panels and background falling softly out of focus.

Lighting: warm, directional light from upper right, as if from a window just out of frame, producing soft contact shadows and a gentle glow from the backlit panels. Palette restrained and warm: cream and warm white tabletop and panels, deep ink charcoal-green shadow tones, natural skin tone on the hand, one rust-red accent. No cool blues, no neon, no saturated multicolor light.

Mood: quiet, deliberate, editorial — the feeling of curating and directing, not generating. Output one finished image only, no grid or collage.
```

### Evaluación

Resultado: 1983 × 793 px (2.5:1), zona izquierda despejada tal como se pidió, acción (mano, panel, marca roja) concentrada en el tercio derecho, paleta cálida coherente con la del sitio. Original recibido como archivo subido por Matías en esta conversación; no hay una ruta durable fuera de esta sesión para conservarlo, a diferencia de otros orígenes generados dentro del repo. Derivado web: `site/assets/hero-direccion-creativa-v01.webp`, WebP calidad 90, sin recorte ni cambio de dimensiones.

### Medición de contraste real

El tono de la foto (madera cálida) da entre 1.8:1 y 3:1 contra el texto `--ink`, insuficiente para texto normal (WCAG AA exige 4.5:1). Se resolvió con un velo (`linear-gradient`) que deja el texto sobre `--bg` sólido y dejar que la foto se vea solo del 40% del ancho del hero hacia la derecha, en vez de confiar en que la imagen sola mantuviera el contraste. Medido sobre la página renderizada (no sobre la foto cruda): 12.77–14.22:1 detrás del texto, en escritorio y en mobile.

### Layout

El hero no tenía contenedor de imagen antes de esta pieza. Se restructuró `templates/index.html` (`<section class="hero">` ahora envuelve `.hero-media` + `.wrap.hero-content`, en vez de combinar `wrap` y `hero` en la misma sección) y se agregó a `site/assets/site.css`:

- Mobile (por defecto): la foto es un banner aparte, debajo del texto, con su propio `aspect-ratio`. No hay riesgo de superposición porque no hay texto encima.
- Escritorio (`min-width:768px`): la foto pasa a fondo completo (`position:absolute;inset:0`) con el velo descrito arriba.

La imagen es decorativa (`aria-hidden="true"`, `alt=""`): no transmite información que el texto no transmita ya.
