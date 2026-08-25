---
name: "git push"
description: "`git push` sube los commits locales al repositorio remoto."
---

## Descripción

`git push` sube los commits locales al repositorio remoto. Es la forma de compartir cambios con otros desarrolladores.


## Ejemplos de uso

Push a la rama principal:

```bash
git push origin main
```

Push con establecer upstream:

```bash
git push -u origin main
```

Push de todas las ramas:

```bash
git push --all origin
```

Forzar push (usar con precaución):

```bash
git push --force origin main
```

Eliminar una rama remota:

```bash
git push origin --delete rama-antigua
```