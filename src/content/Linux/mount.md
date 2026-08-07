---
name: "mount"
description: "Monta un sistema de archivos."
---


## Descripción

`mount` monta un sistema de archivos en un punto del árbol de directorios.

## Sintaxis

```bash
mount [opciones] dispositivo punto_montaje
```

## Ejemplos de uso

Montar un sistema de archivos:

```bash
mount /dev/sdb1 /mnt/usb
```

Montar en modo solo lectura:

```bash
mount -o ro /dev/sdb1 /mnt/usb
```

Desmontar:

```bash
umount /mnt/usb
```

Mostrar sistemas montados:

```bash
mount
```
