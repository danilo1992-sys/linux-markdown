---
name: "sudo"
description: "`sudo` (superuser do) ejecuta comandos con los privilegios del usuario root (superusuario)."
---

## Descripción

`sudo` (superuser do) ejecuta comandos con los privilegios del usuario root (superusuario).


## Ejemplos de uso

Ejecutar comando como root:

```bash
sudo apt update
```

Editar archivo del sistema:

```bash
sudo nano /etc/fstab
```

Cambiar permisos:

```bash
sudo chmod 755 /usr/local/bin
```

Ver historial de sudo:

```bash
sudo -l
```
