---
name: "curl"
description: "Transfiere datos desde o hacia un servidor."
---


## Descripción

`curl` transfiere datos a o desde un servidor usando diversos protocolos como HTTP, FTP, SCP, etc.

## Sintaxis

```bash
curl [opciones] URL
```

## Ejemplos de uso

Descargar un archivo:

```bash
curl -O https://ejemplo.com/archivo.zip
```

Ver headers de respuesta:

```bash
curl -I https://ejemplo.com
```

Hacer una petición GET:

```bash
curl https://api.ejemplo.com/datos
```

Enviar datos POST:

```bash
curl -X POST -d "nombre=valor" https://api.ejemplo.com
```
