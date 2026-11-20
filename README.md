# Portfolio

Web personal estática hecha con [Astro](https://astro.build): proyectos, blog, repositorios de GitHub y contacto.

## Comandos

| Comando           | Qué hace                                   |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Servidor local en `http://localhost:4321`  |
| `npm run build`   | Genera la web estática en `dist/`          |
| `npm run preview` | Sirve `dist/` para revisarla               |
| `npx astro check` | Comprobación de tipos                      |

## Dónde se edita cada cosa

- **Datos personales, experiencia, stack y certificaciones** → `src/config.ts`
- **Proyectos (casos de estudio)** → un `.md` por proyecto en `src/content/projects/`
- **Posts del blog** → un `.md`/`.mdx` por post en `src/content/blog/` (`draft: true` lo oculta en producción)
- **Repos de GitHub** → se leen de la API en tiempo de build (`src/lib/github.ts`). Con `GITHUB_TOKEN` en el entorno se evita el rate limit.
- **Estilos y colores** → `src/styles/global.css` (tokens de tema claro/oscuro)
- **CV en PDF** → se edita en `cv/cv-es.html` y `cv/cv-en.html`; `./cv/build.sh` regenera `public/cv/*.pdf` (una A4, sin teléfono: es público)
- **Dominio** → variable `SITE_URL` (en CI, variable del repo); sin ella el build usa `https://example.com`

## Despliegue

`.github/workflows/deploy.yml`: en cada push/PR hace `astro check` + build. El deploy a Cloudflare Workers
solo corre en `main` cuando el repo tiene la variable `SITE_URL` y los secrets `CLOUDFLARE_API_TOKEN` y
`CLOUDFLARE_ACCOUNT_ID`. También se reconstruye cada lunes para refrescar los repos de GitHub.

El esquema de proyectos y posts está en `src/content.config.ts`: si falta un campo obligatorio, el build falla.
