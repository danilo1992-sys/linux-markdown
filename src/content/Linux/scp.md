---
name: "scp"
description: "`scp` (secure copy) copia archivos de forma segura entre sistemas usando SSH."
---

## Descripción

`scp` (secure copy) copia archivos de forma segura entre sistemas usando SSH.


## Ejemplos de uso

Copiar archivo al servidor:

```bash
scp archivo.txt usuario@servidor:/home/usuario/
```

Copiar archivo del servidor:

```bash
scp usuario@servidor:/home/usuario/archivo.txt ./
```

Copiar directorio recursivamente:

```bash
scp -r directorio/ usuario@servidor:/home/usuario/
```

Especificar puerto SSH:

```bash
scp -P 2222 archivo.txt usuario@servidor:/home/usuario/
```
