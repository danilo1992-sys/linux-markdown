---
name: "tar"
description: "`tar` (tape archive) es una herramienta para empaquetar y desempaquetar archivos."
---

## Descripción

`tar` (tape archive) es una herramienta para empaquetar y desempaquetar archivos.


## Ejemplos de uso

Crear archivo comprimido:

```bash
tar -czvf archivo.tar.gz directorio/
```

Extraer archivo comprimido:

```bash
tar -xzvf archivo.tar.gz
```

Listar contenido del archivo:

```bash
tar -tzvf archivo.tar.gz
```

Extraer en directorio específico:

```bash
tar -xzvf archivo.tar.gz -C /destino/
```
