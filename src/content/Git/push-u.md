---
name: "git push -u"
description: "`git push -u` sube commits y establece la rama remota como upstream."
---

## Descripción

`git push -u` sube commits y establece la rama remota como upstream. Después, solo necesitas usar `git push` sin argumentos.


## Ejemplos de uso

Push y establecer upstream:

```bash
git push -u origin main
```

Push de nueva rama con upstream:

```bash
git push -u origin mi-nueva-feature
```

Push con establecer upstream para todas las ramas:

```bash
git push -u --all origin
```