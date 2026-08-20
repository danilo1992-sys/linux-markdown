# Renderizado de Tags con map y props

## 1. Crear componente `Tags.astro`

```astro
---
const { tags } = Astro.props
---

{tags.filter(t => t.value).map(t => (
  <span class="bg-gray-900 backdrop-blur-md border border-default text-white text-xs font-normal px-1.5 py-0.5 rounded">{t.value}</span>
))}
```

## 2. Usar en `[id].astro`

```astro
---
import Tags from '../../components/Tags.astro'
const {name, description, dificult, platform, os} = item.data
const tags = [
  { value: os },
  { value: platform },
  { value: dificult },
]
---

<Tags tags={tags} />
```

## Notas

- `.filter(t => t.value)` evita renderizar spans vacíos cuando un campo no existe en el frontmatter.
- Las props se pasan como atributos HTML: `tags={tags}`.
- Se reciben con `Astro.props.tags` en el componente hijo.
