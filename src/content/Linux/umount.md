---
name: "umount"
description: "Desmonta un sistema de archivos."
---


## Descripción

`umount` desmonta un sistema de archivos montado previamente con `mount`.

## Sintaxis

```bash
umount punto_montaje
```

## Ejemplos de uso

Desmontar un dispositivo USB:

```bash
umount /mnt/usb
```

Desmontar por dispositivo:

```bash
umount /dev/sdb1
```

Desmontar todos los sistemas de archivos:

```bash
umount -a
```

Desmontar con forzar:

```bash
umount -f /mnt/nfs
```
