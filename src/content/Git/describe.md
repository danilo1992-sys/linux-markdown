---
name: "git describe"
description: "`git describe` describe el commit actual usando tags y distancia."
---

## Descripción

`git describe` describe el commit actual usando tags cercanos y la distancia al tag más reciente. Útil para generar números de versión automáticos.


## Ejemplos de uso

Describir el HEAD actual:

```bash
git describe
```

Describir un commit específico:

```bash
git describe abc123
```

Describir solo con tags anotados:

```bash
git describe --tags
```

Describir sin usar tags:

```bash
git describe --always
```

Describir con exactitud de commits:

```bash
git describe --long
```