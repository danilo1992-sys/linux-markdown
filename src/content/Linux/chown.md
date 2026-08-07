---
name: "chown"
description: "Cambia el propietario de un archivo o directorio."
---


## Descripción

`chown` (change owner) cambia el propietario y/o grupo de un archivo o directorio.

## Sintaxis

```bash
chown usuario:grupo archivo
```

## Ejemplos de uso

Cambiar propietario:

```bash
chown juan archivo.txt
```

Cambiar propietario y grupo:

```bash
chown juan:usuarios archivo.txt
```

Cambiar recursivamente:

```bash
chown -R juan:usuarios directorio/
```

Solo cambiar el grupo:

```bash
chown :usuarios archivo.txt
```
