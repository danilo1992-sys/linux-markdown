---
name: "git mv"
description: "`git mv` renombra o mueve archivos manteniendo el historial."
---

## Descripción

`git mv` renombra o mueve archivos manteniendo el historial. Equivale a ejecutar `mv`, `git rm` y `git add` en una sola operación.


## Ejemplos de uso

Renombrar un archivo:

```bash
git mv archivo.txt nuevo-nombre.txt
```

Mover un archivo a otro directorio:

```bash
git mv archivo.txt carpeta/
```

Mover un directorio completo:

```bash
git mv viejo-directorio/ nuevo-directorio/
```

Forzar movimiento (sobrescribir):

```bash
git mv -f archivo.txt destino.txt
```