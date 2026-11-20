# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Personas que evalúan a Roberto López Barbarin como candidato para un puesto de backend .NET / Azure / DevOps, con el mismo peso para dos grupos:

- **Mercado español:** recruiters técnicos y tech leads de empresas en España.
- **Remoto / internacional:** empresas fuera de España o full-remote.

Llegan normalmente desde el CV, LinkedIn o GitHub, con poco tiempo, y necesitan decidir rápido si el perfil encaja y si merece una conversación.

## Product Purpose

Portfolio personal estático: proyectos (casos de estudio), blog, repos públicos de GitHub y contacto. Existe para conseguir un mejor empleo en 12-18 meses en el ecosistema Microsoft (Azure, DevOps/CI-CD, IaC, IA aplicada).

El éxito es que el visitante **contacte** (email o LinkedIn) o **descargue el CV**. Leer un caso de estudio o abrir un repo es el camino hacia eso, no el objetivo.

## Positioning

Un desarrollador con ~2 años de experiencia que en su trabajo actúa como senior de facto en una pyme 100 % on-premise (propuso e implantó Azure DevOps con pipelines), y que fuera del trabajo construye plataformas completas en Azure con infraestructura como código, sin secretos, con tests contra SQL Server real y observabilidad. La prueba son proyectos reales con repo público y decisiones técnicas razonadas (ADRs), no una lista de tecnologías.

## Operating Context

- El visitante suele venir de un proceso de selección y alterna entre la web, el CV, LinkedIn y GitHub.
- Los casos de estudio siguen una estructura de problema → qué hace → arquitectura → decisiones técnicas.
- El contenido se mantiene a mano en Markdown con 5-10 h/semana disponibles: todo debe ser barato de mantener.

## Capabilities and Constraints

- **Stack:** Astro 7 (estático, sin JS por defecto), MDX, RSS, sitemap; Archivo (variable, con eje de anchura) y JetBrains Mono vía Fontsource.
- **Despliegue:** Cloudflare Workers con static assets (`wrangler.jsonc`), sin código de servidor. Página 404 propia.
- **Repos de GitHub:** se leen de la API en tiempo de build (`src/lib/github.ts`); solo se listan los que no tienen caso de estudio.
- **Fuente de verdad de datos personales:** `src/config.ts`, que a su vez solo recoge lo que está en `claude-job-finder/perfil.md`. Nada que no esté allí.
- **Contenido validado por esquema** en `src/content.config.ts`: el build falla si falta un campo obligatorio.
- **Estados de proyecto honestos:** `Desplegado en Azure`, `En desarrollo`, `Terminado`. Plumy es "Desplegado en Azure", nunca "En producción", mientras no tenga clientes.
- **Idioma:** solo español. Los ADRs y el código de los repos están en inglés.
- **Pendiente / sin decidir:**
  - Dominio final: falta definir la variable `SITE_URL` del repo (y los secrets de Cloudflare) para activar el deploy.
  - PDF del CV (`cvUrl` es `null`, así que el botón de descarga está oculto, aunque descargar el CV es una de las dos acciones de éxito).
  - Cómo atender a la audiencia internacional con una web solo en español (decisión abierta).

## Brand Commitments

- Nombre: **Roberto López Barbarin** (corto: Roberto López; iniciales: RL).
- Rol: **Backend .NET · Azure · DevOps**. Ubicación: Burlada, Navarra. Idiomas: español nativo, inglés C1.
- Tono: primera persona, directo y concreto, con cifras reales en lugar de adjetivos ("de más de 6 s a menos de 1 s", "más de 600 tests").
- Pastilla "Abierto a nuevas oportunidades" controlada por `SITE.available`.

## Evidence on Hand

- **Casos de estudio** (`src/content/projects/`): Plumy (SaaS B2B para gestorías, desplegado en Azure), Finances Hub (monitor financiero PSD2, en desarrollo), AppClientesEstadística (Summer Camp de Tracasa, terminado). Todos con repo público.
- **Experiencia** en `src/config.ts`: Telco SL (oct 2024 – actualidad) con tres logros cuantificados; Summer Camp de Tracasa.
- **Formación:** CFGS DAW y CFGS DAM. **Certificaciones:** AZ-900 (obtenida), AI-200 (en preparación).
- **Blog:** un único post, `por-que-astro.md`, marcado como post de ejemplo.
- **No existen** y no se deben inventar: testimonios, clientes de Plumy, métricas de uso, logos de empresas, capturas que no sean de los proyectos reales, ni certificaciones o puestos que no estén en `perfil.md`.

## Product Principles

1. **Prueba antes que promesa.** Cada afirmación se apoya en un repo, una cifra o una decisión documentada.
2. **Honestidad de estado.** Lo que está en desarrollo lo dice; nada se infla para parecer más de lo que es.
3. **Al contacto en dos clics.** Desde cualquier página, contactar o descargar el CV debe estar siempre a mano.
4. **Escaneable en 30 segundos, profundo si se quiere.** El rol, el stack y los proyectos clave se entienden de un vistazo; el detalle técnico está en los casos de estudio.
5. **Mantenible en Markdown.** Nada que obligue a tocar código para añadir un proyecto o un post.
