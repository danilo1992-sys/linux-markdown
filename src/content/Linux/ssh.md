---
name: "ssh"
description: "Acceso remoto seguro a otro sistema."
---


## Descripción

`ssh` (secure shell) permite conectarse de forma segura a otro sistema de forma remota.

## Sintaxis

```bash
ssh [opciones] usuario@host
```

## Ejemplos de uso

Conectar a un servidor:

```bash
ssh usuario@servidor.com
```

Conectar con puerto específico:

```bash
ssh -p 2222 usuario@servidor.com
```

Ejecutar comando remoto:

```bash
ssh usuario@servidor.com "ls -la"
```

Ejecutar comando con -t:

```bash
ssh -t usuario@servidor.com "sudo reboot"
```

Cerrar sesión remota:

```bash
exit
```
