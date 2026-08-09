---
name: "wget"
description: "`wget` descarga archivos desde la web usando HTTP, HTTPS y FTP."
---

## Descripción

`wget` descarga archivos desde la web usando HTTP, HTTPS y FTP.


## Ejemplos de uso

Descargar archivo:

```bash
wget https://ejemplo.com/archivo.zip
```

Guardar con nombre específico:

```bash
wget -O mi_archivo.zip https://ejemplo.com/archivo.zip
```

Descargar recursivamente:

```bash
wget -r https://ejemplo.com/directorio/
```

Continuar descarga interrumpida:

```bash
wget -c https://ejemplo.com/archivo.grande
```

En segundo plano:

```bash
wget -b https://ejemplo.com/archivo.zip
```
