---
name: Roberto López Barbarin · Portfolio
description: El perfil como inventario industrial etiquetado; algodón blanco, nylon negro y un único naranja de seguridad.
colors:
  cotton: "#ffffff"
  label: "#e6e6e6"
  label-strong: "#cfcfcf"
  ink: "#0a0a0a"
  ink-2: "#3d3d3d"
  ink-3: "#5e5e5e"
  nylon: "#141414"
  nylon-2: "#222222"
  nylon-line: "#3a3a3a"
  on-nylon: "#f4f4f4"
  on-nylon-2: "#b9b9b9"
  safety: "#ff5a00"
  safety-deep: "#e24e00"
typography:
  display:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 10.5vw, 9.5rem)"
    fontWeight: 850
    lineHeight: 0.94
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 800
    lineHeight: 1.1
    fontVariation: "'wdth' 75"
  body:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-prose:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 80"
  data:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(64px, 9vw, 112px)"
  max: "1200px"
  prose: "68ch"
components:
  button-primary:
    backgroundColor: "{colors.safety}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.safety-deep}"
    padding: "0 52px 0 20px"
  button-secondary:
    backgroundColor: "{colors.cotton}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cotton}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-small:
    padding: "0 14px"
    height: "40px"
  tag:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "5px 9px"
  tag-on-nylon:
    backgroundColor: "{colors.nylon-2}"
    textColor: "{colors.on-nylon}"
  plate:
    backgroundColor: "{colors.cotton}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  plate-title:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cotton}"
    padding: "14px 24px"
  ziptag:
    backgroundColor: "{colors.safety}"
    textColor: "{colors.ink}"
    width: "150px"
    padding: "30px 16px 16px"
---

# Design System: Roberto López Barbarin · Portfolio

## Overview

**Creative North Star: "El inventario etiquetado"**

El perfil se presenta como un almacén industrial bien rotulado: cada zona se llama por su nombre literal entre comillas («Proyectos», «Experiencia», «Ficha técnica») y cada pieza lleva su placa de especificación con remaches, borde de 2 px y datos en monoespaciada. La página no tiene modo oscuro; en su lugar, bloques enteros de algodón blanco y nylon negro se alternan como suelos distintos del mismo almacén, y el contraste entre ambos hace el trabajo que antes hacía el tema.

La densidad es de ficha técnica: mucha información escaneable (estado, año, piezas, stack) ordenada en filas con etiquetas en versalitas condensadas, y una voz display enorme, condensada y pesada que nombra cada sección. El único color es el naranja de seguridad, y aparece solo donde algo exige actuar o está «activo»: la acción primaria, la brida colgante, el foco, la selección y la señal de hover en enlaces. Lo que está en obras (En desarrollo, En preparación) lleva franjas de peligro a 45°, nunca un color nuevo.

Rechazos confirmados: el hero oscuro de desarrollador con nombre en degradado, la fila de tarjetas iguales y cualquier radio o sombra difusa en las placas.

**Key Characteristics:**
- Bloques blancos y negros a ancho completo, sin modo oscuro (solo claro, `color-scheme: light`).
- Placas rectangulares con remaches en las cuatro esquinas, borde de 2 px en tinta y radio cero.
- Títulos de sección en mayúsculas condensadas y entre comillas tipográficas.
- Datos en JetBrains Mono; rótulos en Archivo condensado en mayúsculas.
- Franjas de peligro a 45° para separar el hero y marcar lo que está en obras.
- Naranja de seguridad reservado a acción, estado activo, foco, selección y hover de enlaces.

## Colors

Monocromo industrial de algodón, tinta y nylon, con un solo naranja de alta visibilidad que funciona como señal, no como decoración.

### Primary
- **Naranja de seguridad** (safety): fondo de la acción primaria (`Contactar`, `Enviar email`, `Volver al inicio`), cuerpo y cinta de la brida «Abierto a nuevas oportunidades», contorno de foco (3 px, offset 3 px), fondo de `::selection` y señal de hover en enlaces (subrayado en tarjetas de post y repo, fondo de rotulador en enlaces de prosa, color del texto en enlaces sobre nylon). El texto sobre naranja es siempre tinta, nunca blanco.
- **Naranja de seguridad profundo** (safety-deep): solo el hover del botón primario.

### Neutral
- **Algodón** (cotton): suelo principal de la página, fondo de placas y de botones secundarios; texto sobre bloques de tinta.
- **Tinta** (ink): texto principal, bordes de 2 px de placas, botones y cabeceras de sección, barras de título de placa, viñetas cuadradas y el monograma «RL».
- **Tinta secundaria** (ink-2): leads, resúmenes y texto secundario sobre algodón (≈10:1).
- **Tinta de metadatos** (ink-3): `dt` de placas, fechas y metadatos de repos (≈6.5:1).
- **Gris de etiqueta** (label): fondo de las etiquetas de stack y del código en línea; pista de la barra de scroll.
- **Gris de etiqueta fuerte** (label-strong): separadores finos de 1 px (discontinuos dentro de placas, continuos en tablas, formación y filas de stack).
- **Nylon** (nylon): suelo de los bloques oscuros (Experiencia, Contacto, footer) y fondo de bloques de código.
- **Nylon elevado** (nylon-2): fondo de etiquetas sobre nylon.
- **Línea de nylon** (nylon-line): separadores de 2 px dentro de bloques de nylon.
- **Texto sobre nylon** (on-nylon) y **secundario sobre nylon** (on-nylon-2, ≈9:1): primer y segundo plano de texto en bloques oscuros.

### Named Rules
**The Señal Única Rule.** El naranja de seguridad marca solo acción primaria, brida, foco, selección y hover de enlaces. Ni fondos de sección, ni iconos, ni títulos, ni gráficos. Si algo naranja no se puede pulsar ni está «activo», sobra.

**The Suelos Enteros Rule.** El algodón y el nylon se alternan en bloques de ancho completo; no hay tarjetas oscuras flotando sobre blanco ni tarjetas blancas sobre nylon. Dentro de un bloque de nylon, los componentes cambian a su variante `on-nylon`.

**The Obras con Franja Rule.** Lo inacabado (En desarrollo, En preparación) se marca con la franja de peligro a 45° (12 px tinta / 12 px algodón), nunca con un color de estado.

## Typography

**Display Font:** Archivo Variable (eje de anchura `wdth`, con system-ui y sans-serif)
**Body Font:** Archivo Variable a anchura normal
**Label/Mono Font:** JetBrains Mono Variable (con ui-monospace)

**Character:** Una sola familia variable que pasa de rótulo de almacén (condensada al 66-80 %, peso 750-850, mayúsculas) a texto de lectura cómodo a anchura 100 %; la monoespaciada pone los datos de placa en su sitio, como un albarán.

### Hierarchy
- **Display** (850, clamp(3.75rem, 10.5vw, 9.5rem), 0.94, anchura 68 %, mayúsculas): el nombre del hero, el título de caso de estudio y «¿Hablamos?» (hasta 11rem). Siempre entre comillas tipográficas.
- **Headline** (850, clamp(2.75rem, 7vw, 5.5rem), 0.92, anchura 68 %, mayúsculas): títulos de sección entre comillas, sobre un filete de 2 px. Los títulos de proyecto en placa usan la misma voz a clamp(2.5rem, 5.5vw, 4.25rem).
- **Title** (800, 1.625rem, 1.1, anchura 75 %, mayúsculas): títulos de post y de empleo; los h2 de prosa suben a 2.25rem a anchura 70 % con comillas y filete superior de 2 px.
- **Body** (400, 1.0625rem, 1.6): texto general. La prosa larga va a 1.125rem / 1.7 con un máximo de 68ch; leads a 1.125-1.3125rem en tinta secundaria.
- **Label** (700, 0.8125rem, 0.06em, anchura 80 %, mayúsculas): `dt` de placas, rótulos de grupo de stack, «Actual». Los enlaces de navegación, botones y flechas usan la misma voz a 0.9375-1rem y 0.05em.
- **Data** (JetBrains Mono 500-600, 0.8125-0.9375rem): valores de ficha técnica, etiquetas de stack, estados, fechas, nombres de repo, email de contacto.

### Named Rules
**The Nombre Literal Rule.** Toda zona se llama por su nombre literal, en display condensado y entre comillas tipográficas (“ ”). Nada de titulares metafóricos ni rótulos pequeños encima del título.

**The Datos en Mono Rule.** Un valor medible o técnico (año, estado, stack, periodo, email) va en JetBrains Mono; la prosa nunca.

## Layout

Contenedor centrado de 1200 px como máximo con margen lateral fluido (16-40 px). Las secciones respiran con un relleno vertical de clamp(64px, 9vw, 112px) y abren con una cabecera de sección: título display a la izquierda, enlace con flecha a la derecha, filete de 2 px en `currentColor` debajo y 40 px hasta el contenido. La cabecera es sticky, de 68 px, con filete inferior de 2 px.

Las placas de proyecto se apilan en una sola columna (28 px entre ellas), cada una como rejilla de tres franjas: ficha de especificación (220 px), cuerpo y canto (64 px) negro o rayado. Los listados (experiencia, stack, posts, repos) son filas separadas por filetes, no rejillas de tarjetas. El caso de estudio combina prosa a 68ch con una barra lateral sticky de 340 px.

Puntos de corte observados: 960 px (hero, sobre mí, contacto, filas y casos de estudio pasan a una columna), 860 px (la cabecera parte la navegación en una segunda fila con scroll horizontal; las placas de proyecto se apilan con el canto como franja superior de 20 px), 640/520/480/420 px para ajustes finos.

## Elevation & Depth

Sistema plano. La profundidad la dan los cambios de suelo (algodón frente a nylon), los bordes de 2 px y las barras de título en tinta, no las sombras. Las placas no tienen sombra; el hover de una placa de proyecto solo aclara el fondo.

### Shadow Vocabulary
- **Sombra de objeto colgante** (`box-shadow: 0 10px 18px -8px rgb(0 0 0 / .45), inset 0 0 0 1px rgb(0 0 0 / .12)`): exclusiva de la brida, que es un objeto físico que cuelga fuera de la placa.

### Named Rules
**The Placa Plana Rule.** Placas, botones, etiquetas y bloques de código no proyectan sombra. La única sombra del sistema es la de la brida, porque es el único objeto que no está atornillado.

## Shapes

Rectángulos de esquina viva (0 px) en todo: placas, botones, etiquetas, bloques de código, imágenes y citas. Los bordes estructurales son de 2 px en tinta (o en algodón dentro de botones sobre nylon); los separadores internos son de 1 px en gris de etiqueta fuerte, discontinuos dentro de las placas. Las viñetas son cuadrados macizos de 9-10 px y los pasos numerados, cuadrados de 28 px en tinta con el número en mono.

Dos geometrías propias del mundo: los **remaches** (cuatro puntos grises de 2.4 px en las esquinas interiores de cada placa, por encima incluso de las barras de título) y la **franja de peligro** (rayas a -45° de 12 px). La brida es la única forma con radio (6 px arriba, 3 px abajo, ojal circular), porque imita una etiqueta de plástico real.

## Components

### Buttons
Placas pulsables: rectángulos de borde entero que, al pasar el ratón, dejan entrar una franja diagonal por el borde derecho.
- **Shape:** esquina viva (0 px), borde de 2 px en tinta, altura mínima de 48 px (40 px en la variante pequeña de la cabecera).
- **Primary:** fondo naranja de seguridad, texto en tinta, Archivo 750 a anchura 78 %, 1rem, mayúsculas, 0.05em; icono de 18 px a la derecha con 10 px de separación.
- **Secondary:** fondo algodón con texto en tinta. **Ink:** fondo de tinta con texto en algodón.
- **Hover:** el relleno derecho crece de 20 a 52 px (0.35 s, `cubic-bezier(0.16, 1, 0.3, 1)`) mientras una franja de rayas de 6 px en `currentColor` se descubre de derecha a izquierda; el primario además se oscurece a naranja profundo.
- **Focus:** contorno naranja de 3 px con offset de 3 px.
- **Sobre nylon:** borde y texto en `on-nylon`, fondo transparente; el primario mantiene el naranja con borde naranja.

### Chips
- **Style:** etiquetas de inventario en JetBrains Mono 0.8125rem sobre gris de etiqueta, texto en tinta, 5×9 px de relleno, sin borde ni radio. Sobre nylon, fondo nylon elevado.
- **State:** no son interactivas; el excedente se resume como `+N`.

### Estado
Indicador de estado de proyecto o certificación: rectángulo de 22×12 px seguido del texto en mono mayúsculas. Macizo en tinta para lo terminado o desplegado; con franja de peligro y contorno de 1.5 px para lo que está en obras.

### Cards / Containers
- **Corner Style:** esquina viva (0 px).
- **Background:** algodón; barra de título opcional en tinta con texto en algodón (`“Ficha técnica”`, ficha de proyecto).
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** 2 px en tinta, con remaches en las cuatro esquinas.
- **Internal Padding:** 20-32 px; filas de datos con `dt` en rótulo gris y `dd` en mono, separadas por filetes discontinuos.

### Navigation
Logotipo como monograma «RL» en un cuadrado de tinta de 40 px más el nombre condensado. Enlaces en mayúsculas condensadas (0.9375rem, anchura 78 %, 700) envueltos en comillas tipográficas; el hover y la página actual se marcan con un filete inferior de 3 px en tinta. Los CV ES/EN van a la derecha como botones pequeños. Por debajo de 860 px la navegación baja a una segunda fila con scroll horizontal; por debajo de 420 px se oculta el nombre y queda el monograma.

### Enlace con flecha
Enlace de acción secundaria en las cabeceras de sección y en las placas: mayúsculas condensadas, subrayado de 2 px con offset de 6 px; en hover el subrayado pasa a naranja y la flecha avanza 4 px.

### Brida (signature)
La etiqueta naranja colgada de una cinta curva sobre la placa de especificación del hero, con el texto «Abierto a nuevas oportunidades» en display condensado y una línea de meta en mono. Es el único objeto con radio y sombra del sistema. Se balancea una vez al cargar (1.6 s, con el easing de salida) hasta quedar girada -9°; con movimiento reducido queda estática. Existe una sola vez por página y solo cuando la disponibilidad está activa.

### Banda de peligro
Franja de 28 px de rayas a -45° entre filetes de 2 px en tinta que cierra el hero; en prosa, el `hr` es la misma franja a 14 px y las citas llevan un canto rayado de 44 px a la izquierda.

### Bloques de código
Fondo nylon con borde de 2 px en tinta y tema Shiki `css-variables` en grises, con un único acento naranja claro para palabras clave y enlaces.

## Do's and Don'ts

### Do:
- **Do** nombrar cada sección por su nombre literal en display condensado y entre comillas tipográficas.
- **Do** construir todo contenedor como placa: borde de 2 px en tinta, esquina viva, remaches y, si lleva título, barra de tinta.
- **Do** alternar bloques enteros de algodón y nylon, y pasar los componentes a su variante `on-nylon` dentro de los oscuros.
- **Do** marcar lo que está en obras con la franja de peligro a 45° y lo terminado con el rectángulo macizo.
- **Do** poner los datos medibles en JetBrains Mono y los rótulos en Archivo condensado en mayúsculas.
- **Do** usar texto en tinta sobre el naranja de seguridad.
- **Do** dejar que el hover de un botón haga entrar la franja por el borde derecho; con movimiento reducido, sin transición.

### Don't:
- **Don't** usar el naranja de seguridad fuera de acción primaria, brida, foco, selección y hover de enlaces.
- **Don't** añadir modo oscuro ni un segundo color de acento: el contraste entre bloques ya hace ese papel.
- **Don't** redondear esquinas ni añadir sombras difusas a placas, botones o etiquetas; la brida es la única excepción.
- **Don't** volver al hero oscuro con nombre en degradado ni a la fila de tarjetas iguales.
- **Don't** poner rótulos pequeños en mayúsculas encima de los títulos de sección; el título entre comillas ya nombra la zona.
- **Don't** colgar más de una brida por página.
