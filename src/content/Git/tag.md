---
name: "git tag"
description: "`git tag` crea, lista y gestiona etiquetas (tags) para marcar puntos específicos del historial."
---

## Descripción

`git tag` crea, lista y gestiona etiquetas (tags) para marcar puntos específicos del historial. Comúnmente usado para marcar versiones de software.


## Ejemplos de uso

Crear una etiqueta ligera:

```bash
git tag v1.0
```

Crear una etiqueta anotada:

```bash
git tag -a v1.0 -m "Versión 1.0 estable"
```

Listar todas las etiquetas:

```bash
git tag
```

Eliminar una etiqueta:

```bash
git tag -d v1.0
```

Push de una etiqueta al remoto:

```bash
git push origin v1.0
```

Push de todas las etiquetas:

```bash
git push --tags
```