# Producción · Una prenda. Tres vidas.

Fecha: 23 de octubre de 2026.
Herramienta: generación de imágenes integrada en ChatGPT (image_gen); no se utilizó Magnific ni API externa.
Estado: tres imágenes generadas y seleccionadas como primera serie en desarrollo.

## Referencias y función

- Campera puesta, de cuerpo completo.jpeg: referencia principal de identidad y conjunto.
- Detalle de la campera1.jpeg y Detalle de la campera2.jpeg: textura y costuras solamente; su diseño difiere de la prenda principal.
- Persona viajando por una estación.jpeg: composición, estación y postura.
- Persona trabajando en un espacio cotidiano.jpg: situación de café, ventana y computadora.
- Retrato urbano nocturno.jpeg: encuadre, actitud y luces urbanas.

No se publican las referencias originales en el repositorio. No se presume autoría ni origen verificado de esas referencias.

## Método

Se generó Viaje primero. Se usaron la referencia principal, los dos detalles y la estación. Para Trabajo y Noche se usaron la referencia principal, la nueva toma de estación, los dos detalles y la referencia de escena correspondiente. Se conserva el conjunto completo, incluida la capa acolchada interior.

## Archivos

### Viaje

Original: `/workspace/scratch/221b752c62de/generated_images/exec-9f710df4-bbed-4fe9-9edc-ad84da7121e6.png`.
Derivado web: `site/assets/projects/una-prenda-tres-vidas-viaje-v01.webp`.
Conversión WebP, calidad 88, sin recorte ni cambio de dimensiones. Los originales se conservan.

### Trabajo

Original: `/workspace/scratch/221b752c62de/generated_images/exec-111c0e4c-bd13-4571-b57d-85a47a5f5435.png`.
Derivado web: `site/assets/projects/una-prenda-tres-vidas-trabajo-v01.webp`.
Conversión WebP, calidad 88, sin recorte ni cambio de dimensiones. Los originales se conservan.

### Noche

Original: `/workspace/scratch/221b752c62de/generated_images/exec-4b07409a-dff4-4904-bdb8-6470a3d20753.png`.
Derivado web: `site/assets/projects/una-prenda-tres-vidas-noche-v01.webp`.
Conversión WebP, calidad 88, sin recorte ni cambio de dimensiones. Los originales se conservan.

## Evaluación

Identidad facial y pelo corto consistentes a escala de la serie; dos capas de campera, remera blanca y jeans grises reconocibles. Sin marcas añadidas. La primera imagen es un plano entero; las otras dos acercan el encuadre. La escena de trabajo representa una pausa con mirada fuera de pantalla. El laptop oculta parte del bolsillo izquierdo. Las solapas, los cordones y la escala de los bolsillos muestran pequeñas variaciones generativas que deben ajustarse antes de cerrar una versión final. No se declara continuidad exacta de confección ni resultados comerciales.

## Prompts finales

### Viaje

```text
Use case: photorealistic-natural. Asset type: a three-image conceptual fashion portfolio campaign, "Una prenda. Tres vidas." Create ONE standalone premium photographic image, vertical 4:5. Identity and wardrobe fidelity are the main priorities. The first reference defines the ONLY person and exact outfit: same young adult man with close-cropped dark brown hair, strong straight brows, clean-shaven angular jaw, same facial proportions and natural skin; olive-green matte cotton hooded outer jacket with dropped shoulders, two symmetric rectangular chest flap pockets, dark round buttons on the outer front placket, olive hood with long drawstrings, gathered cuffs, layered over the same dark olive quilted zip-front inner jacket and white crew-neck T-shirt, loose faded gray jeans and black chunky leather shoes. Preserve the two distinct garment layers, original pocket placement, drape, proportions, seams, hood shape and color. Do not invent extra cargo pockets, zippers or patches. The two detail images are references for believable cotton weave, stitching and wrinkles ONLY: never import their mustard/beige color or differing pocket hardware. No logos, campaign text or watermark. Honest skin texture, physically plausible anatomy and hands, premium natural editorial photography rather than plastic retouching. Keep the olive jacket readable under the scene light.
Input images in order: 1 main person/outfit reference (identity and garment authority); 2 and 3 textile detail references only; 4 station reference (setting, stance and composition ONLY, do not use the woman or her denim clothes).
Scene 01 — Viaje: the exact man from image1 waits on an urban underground station platform, lightly leaning one shoulder against a painted dark steel column. He holds a small open paperback naturally at waist height with both hands, pausing reading and looking slightly toward the incoming train, with his face clearly visible in three-quarter view. Full body with both black shoes fully in frame; subject is the clear focal point, jacket unobstructed above his hands. A silver train and platform edge recede along the right side; ordinary station architecture gives depth, very few indistinct passengers far behind. Adapt image4's converging lines and quiet waiting posture to a fresh composition. No readable transit branding or prominent signs. Camera at waist/chest height, natural 50mm perspective. Cool overhead station light with soft warm reflections from train windows; realistic moderate contrast, subtle film grain, neutral enough on skin and olive fabric. Crisp subject, modest background motion blur, no exaggerated wide angle. It must feel like a believable moment in a commute, with the garment doing the visual work. One image, no grid or collage.
```

### Trabajo

```text
Use case: photorealistic-natural. Asset type: a three-image conceptual fashion portfolio campaign, "Una prenda. Tres vidas." Create ONE standalone premium photographic image, vertical 4:5. Identity and wardrobe fidelity are the main priorities. The first reference defines the ONLY person and exact outfit: same young adult man with close-cropped dark brown hair, strong straight brows, clean-shaven angular jaw, same facial proportions and natural skin; olive-green matte cotton hooded outer jacket with dropped shoulders, two symmetric rectangular chest flap pockets, dark round buttons on the outer front placket, olive hood with long drawstrings, gathered cuffs, layered over the same dark olive quilted zip-front inner jacket and white crew-neck T-shirt, loose faded gray jeans and black chunky leather shoes. Preserve the two distinct garment layers, original pocket placement, drape, proportions, seams, hood shape and color. Do not invent extra cargo pockets, zippers or patches. The two detail images are references for believable cotton weave, stitching and wrinkles ONLY: never import their mustard/beige color or differing pocket hardware. No logos, campaign text or watermark. Honest skin texture, physically plausible anatomy and hands, premium natural editorial photography rather than plastic retouching. Keep the olive jacket readable under the scene light.
Input images: 1 ORIGINAL person and outfit (ultimate authority); 2 generated STATION portrait from this same series (match this exact man's face, hair, clothing design and editorial realism); 3 and 4 detail images (fabric and stitching only); 5 café/laptop reference (situation and composition only, ignore its different man, cap, sunglasses and sweatshirt).
Scene 02 — Trabajo: the same clean-shaven, short-haired man and exact two-layer olive jacket are seated at a small everyday café table beside a window, working on a plain unbranded slim laptop. Three-quarter seated view framed from head to upper thigh, his torso turned slightly toward the camera, head naturally angled toward the screen. One hand rests on the trackpad while the other loosely supports his chin near the jaw, anatomically natural. The laptop is low and offset so it does not hide either chest pocket, the outer buttons, the inner quilted zipper or the white T-shirt. Jacket stays on, hood lies naturally behind neck. Include one plain cup at the table edge. Borrow the quiet observational through-window feeling of image5, with very subtle exterior reflections kept away from face and jacket. Afternoon window light from the side, warmer than the station but preserve olive textile and natural skin colors. Soft charcoal café background and out-of-focus window framing, a believable ordinary place rather than a luxury office. Shot like an editorial fashion photograph, 50mm perspective, tangible cotton wrinkles at bent elbows, balanced light on the garment, face clearly recognizable. No cap, no glasses, no facial hair, no added jewelry, no visible brand on laptop. One vertical 4:5 image, not a collage.
```

### Noche

```text
Use case: photorealistic-natural. Asset type: a three-image conceptual fashion portfolio campaign, "Una prenda. Tres vidas." Create ONE standalone premium photographic image, vertical 4:5. Identity and wardrobe fidelity are the main priorities. The first reference defines the ONLY person and exact outfit: same young adult man with close-cropped dark brown hair, strong straight brows, clean-shaven angular jaw, same facial proportions and natural skin; olive-green matte cotton hooded outer jacket with dropped shoulders, two symmetric rectangular chest flap pockets, dark round buttons on the outer front placket, olive hood with long drawstrings, gathered cuffs, layered over the same dark olive quilted zip-front inner jacket and white crew-neck T-shirt, loose faded gray jeans and black chunky leather shoes. Preserve the two distinct garment layers, original pocket placement, drape, proportions, seams, hood shape and color. Do not invent extra cargo pockets, zippers or patches. The two detail images are references for believable cotton weave, stitching and wrinkles ONLY: never import their mustard/beige color or differing pocket hardware. No logos, campaign text or watermark. Honest skin texture, physically plausible anatomy and hands, premium natural editorial photography rather than plastic retouching. Keep the olive jacket readable under the scene light.
Input images: 1 ORIGINAL person and outfit (ultimate authority); 2 generated STATION portrait from this same series (match this exact man's face, hair, clothing design and editorial realism); 3 and 4 detail images (fabric and stitching only); 5 night portrait reference (lighting, camera distance, urban ambience and attitude only, ignore the different person and leather jacket).
Scene 03 — Noche: the same man in the exact olive hooded cotton outer jacket, dark olive quilted inner zip jacket, white T-shirt and faded gray jeans stands on a sidewalk at night. Frame from head to mid-thigh, torso near frontal with a subtle three-quarter turn, head turned to camera-right, looking calmly off-frame. Both hands rest naturally in his jeans pockets below the jacket hem so the jacket chest pockets, dark buttons, hood, drawstrings and inner zipper are clearly visible. Same short close-cropped brown hair and clean-shaven angular face as images1/2; do not copy the long tousled hair from image5. Urban storefront lights and traffic produce soft warm round bokeh, with one restrained cooler light in the distance. Warm streetlight from above and to the side, subtle cool urban fill, richly graded but readable shadows. The olive cotton must remain matte olive fabric, never black leather or glossy fabric. Camera eye/chest level, intimate 85mm portrait feel, face and jacket sharp while background falls out of focus. Natural skin, no heavy beauty retouching, no exaggerated neon, no rain, no signs or text. One vertical 4:5 image, not a collage.
```


