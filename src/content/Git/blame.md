---
name: "git blame"
description: "`git blame` muestra quién modificó cada línea de un archivo y cuándo."
---

## Descripción

`git blame` muestra quién modificó cada línea de un archivo y cuándo. Útil para entender la historia de un archivo y encontrar al autor de un cambio.


## Ejemplos de uso

Blame de un archivo completo:

```bash
git blame archivo.txt
```

Blame con rango de líneas:

```bash
git blame -L 10,20 archivo.txt
```

Blame de un commit específico:

```bash
git blame abc123 -- archivo.txt
```

Blame mostrando el commit anterior:

```bash
git blame -e archivo.txt
```