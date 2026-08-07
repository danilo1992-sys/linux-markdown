---
name: "tar"
description: "Crea o extrae archivos comprimidos."
---


## Descripción

`tar` (tape archive) es una herramienta para empaquetar y desempaquetar archivos.

## Sintaxis

```bash
tar [opciones] archivo.tar.gz [archivos...]
```

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
