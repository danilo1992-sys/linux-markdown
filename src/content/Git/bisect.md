---
name: "git bisect"
description: "`git bisect` usa búsqueda binaria para encontrar el commit que introdujo un bug."
---

## Descripción

`git bisect` usa búsqueda binaria para encontrar el commit que introdujo un bug. Automatiza la revisión del historial para localizar problemas.


## Ejemplos de uso

Iniciar bisect con un commit bueno y uno malo:

```bash
git bisect start
git bisect bad          # Commit actual tiene el bug
git bisect good v1.0    # Esta versión funcionaba
```

Marcar un commit como bueno:

```bash
git bisect good
```

Marcar un commit como malo:

```bash
git bisect bad
```

Usar un script de prueba:

```bash
git bisect run ./test.sh
```

Finalizar y volver a la rama original:

```bash
git bisect reset
```