---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/proyectos","src/pages/blog"]
---

# Surface brief: portfolio (home + páginas interiores)

## Scope and mode
Home (`/`) en modo Persuade; `/proyectos`, `/proyectos/[id]`, `/blog`, `/blog/[id]` y 404 heredan el mundo en modo Read (contención y legibilidad por encima de la expresión).

## Audience, job, action
Recruiters y tech leads (España y remoto) que llegan desde CV/LinkedIn/GitHub con poco tiempo. Acción: contactar (mailto/LinkedIn) o descargar el CV (ES o EN). Prueba: Plumy, Finances Hub, cifras de Telco, tests y ADRs. Nada de imágenes reales: el diseño vive de tipografía, placas y diagramas en código.
Líneas rojas del usuario: que no sea «demasiado creativo» para un tech lead, que no parezca plantilla y que se lea en 30 segundos.

## Direction contract
THESIS: El perfil como inventario industrial etiquetado: cada zona se llama por su nombre literal entre comillas y cada pieza lleva su placa de especificación. Rechaza el hero de dev oscuro con nombre en degradado y la fila de tarjetas iguales.
OWN-WORLD: Algodón blanco #FFFFFF y nylon negro #111 como suelos que se reparten la página en bloques enteros; tinta #0A0A0A; gris de etiqueta #E6E6E6; naranja de seguridad #FF5A00 solo en acciones primarias y en la brida de «Abierto a nuevas oportunidades». Placas rectangulares con remaches en las esquinas y borde de 2 px, sin radios ni sombras difusas. Franjas de peligro a 45° bajo lo que importa y sobre lo que está en obras (En desarrollo, En preparación). Display Archivo condensado y pesado en mayúsculas entre comillas; cuerpo en Archivo normal; datos de placa en JetBrains Mono.
STORY: El visitante ve quién es, qué rol y qué stack en una placa; entiende que hay proyectos reales desplegados con cifras; contacta o descarga el CV sin buscar.
FIRST VIEWPORT: Barra con la placa «RL» y la navegación en comillas; a la derecha, los CV ES/EN. Izquierda: nombre gigante entre comillas a 2 líneas, rol debajo y tagline. Derecha: la placa de especificación (stack, cloud, ubicación, idiomas, desde) con la brida naranja colgando. Acción primaria «Contactar» como placa naranja bajo el tagline, junto a «Ver proyectos». Una banda de franjas de peligro cierra el hero en diagonal.
FORM: Challenger dealt (verdict declined, adoptado por el usuario) «industrial quote grammar», catalogId textiles-weave-drape-fashion-industrial-quote-grammar; seed:a6852051a7468f23. Préstamos de la mano: «versión rápida» al margen de cada caso de estudio (wildstyle) y seguir un solo recorrido de punta a punta en Plumy (nocturno urbano).
Signature interaction: la brida se balancea una vez al cargar y al pasar sobre una placa activa; al pasar el ratón por un botón, entra la franja diagonal por su borde derecho (estado activo del sistema). Movimiento reducido: estático.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- PDF del CV (ES/EN) pendientes del usuario en `public/cv/`.
- Dominio final.
- Modo oscuro retirado: el mundo ya alterna bloques blancos y negros (confirmar con el usuario).
