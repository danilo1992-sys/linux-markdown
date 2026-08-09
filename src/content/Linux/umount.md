---
name: "umount"
description: "`umount` desmonta un sistema de archivos montado previamente con `mount`."
---

## Descripción

`umount` desmonta un sistema de archivos montado previamente con `mount`.


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
