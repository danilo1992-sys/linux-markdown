# linux-markdown

Sitio estático construido con **Astro** para publicar notas en Markdown. Cada nota se renderiza como una página individual con sus metadatos (nombre, descripción, dificultad, plataforma y sistema operativo) mostrados como etiquetas, y todo el contenido es buscable gracias a **Pagefind**.

🌐 **Demo:** <https://meek-beignet-1b2647.netlify.app>

## ✨ Características

- 📝 Páginas generadas a partir de archivos Markdown con frontmatter
- 🏷️ Etiquetas dinámicas por nota (`os`, `platform`, `dificult`) mediante el componente `Tags.astro`
- 🔎 Búsqueda del lado del cliente con [Pagefind](https://pagefind.app/)
- 🎨 Estilos con Tailwind CSS 4, Flowbite y `@tailwindcss/typography`
- ⚙️ Integración continua con GitHub Actions (`.github/workflows`)
- 🚀 Desplegado en Netlify

## 🧱 Stack

| Área        | Tecnología                                                    |
| :---------- | :------------------------------------------------------------ |
| Framework   | [Astro](https://astro.build/)                                 |
| Estilos     | Tailwind CSS 4 (`@tailwindcss/vite`), Flowbite, Typography    |
| Búsqueda    | `astro-pagefind`                                              |
| Lenguaje    | JavaScript / TypeScript                                       |
| Gestor      | pnpm                                                          |
| Despliegue  | Netlify                                                       |

## 📋 Requisitos

- **Node.js** `>= 22.12.0`
- **pnpm** (el repositorio incluye `pnpm-lock.yaml`)
- **Git**

## 🚀 Instalación

```bash
git clone https://github.com/danilo1992-sys/linux-markdown.git
cd linux-markdown
pnpm install
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando          | Acción                                                                   |
| :--------------- | :----------------------------------------------------------------------- |
| `pnpm install`   | Instala las dependencias                                                 |
| `pnpm dev`       | Levanta el servidor de desarrollo en `localhost:4321`                    |
| `pnpm pull`      | Actualiza el contenido (`git -C src/content pull origin master`)         |
| `pnpm build`     | Genera el sitio de producción en `./dist/` e indexa la búsqueda          |
| `pnpm preview`   | Previsualiza el build localmente antes de desplegar                      |
| `pnpm astro ...` | Ejecuta comandos del CLI de Astro (`astro add`, `astro check`, etc.)     |

> 💡 La búsqueda de Pagefind se indexa durante el build, por lo que funciona de forma completa con `pnpm build && pnpm preview`.

## 📁 Estructura del proyecto

```text
/
├── .github/workflows/   # Automatización con GitHub Actions
├── .vscode/
├── public/              # Archivos estáticos (favicon, etc.)
├── src/
│   ├── components/      # Componentes Astro (p. ej. Tags.astro)
│   ├── layouts/
│   └── pages/           # Rutas del sitio (incluye la ruta dinámica [id].astro)
├── astro.config.mjs     # Configuración de Astro, Tailwind y Pagefind
├── AGENTS.md            # Guía para agentes de IA (CLAUDE.md es un enlace simbólico)
├── INSTRUCCIONES.md     # Notas de implementación (renderizado de tags)
├── tsconfig.json
└── package.json
```

## 🏷️ Frontmatter de las notas

Cada nota expone estos campos, que se muestran como etiquetas en la página de detalle:

```yaml
---
name: Nombre de la nota
description: Breve descripción
os: Linux
platform: Plataforma
dificult: Fácil
---
```

El componente `Tags` filtra los valores vacíos (`.filter(t => t.value)`), así que cualquier campo que falte simplemente no genera una etiqueta.

En `src/pages/.../[id].astro` se arma el arreglo de etiquetas y se pasa por props:

```astro
---
import Tags from '../../components/Tags.astro'
const { name, description, dificult, platform, os } = item.data
const tags = [{ value: os }, { value: platform }, { value: dificult }]
---

<Tags tags={tags} />
```

Más detalles en [`INSTRUCCIONES.md`](./INSTRUCCIONES.md).

## ☁️ Despliegue

El sitio está configurado con `site: 'https://meek-beignet-1b2647.netlify.app'` en `astro.config.mjs`. Para desplegar en Netlify:

1. Conecta el repositorio en Netlify.
2. Comando de build: `pnpm build`
3. Directorio de publicación: `dist`
4. Variable de entorno: `NODE_VERSION=22`

### Exponer el servidor de desarrollo con un túnel

`astro.config.mjs` permite un host de `trycloudflare.com` en `vite.server.allowedHosts`, lo que sirve para compartir el servidor local mediante un túnel de Cloudflare. Si generas una URL nueva, actualiza ese valor.

## 🤝 Contribuir

1. Haz un fork del repositorio
2. Crea una rama: `git checkout -b feature/mi-mejora`
3. Haz commit de tus cambios: `git commit -m "feat: descripción"`
4. Sube la rama: `git push origin feature/mi-mejora`
5. Abre un Pull Request

## 📖 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs) · [Flowbite](https://flowbite.com/)
- [Pagefind](https://pagefind.app/)

## 📄 Licencia

Aún no se ha definido una licencia para este proyecto. Agrega un archivo `LICENSE` (por ejemplo, MIT) si quieres que otros puedan usarlo.
