---
name: "cat"
description: "`cat` (concatenate) muestra el contenido completo de uno o varios archivos en la salida estándar."
---

## Descripción

`cat` (concatenate) muestra el contenido completo de uno o varios archivos en la salida estándar.


## Ejemplos de uso

Mostrar el contenido de un archivo:

```bash
cat archivo.txt
```

Mostrar con números de línea:

```bash
cat -n archivo.txt
```

Concatenar dos archivos:

```bash
cat archivo1.txt archivo2.txt
```

Crear un archivo con contenido:

```bash
cat > archivo.txt << EOF
línea 1
línea 2
EOF
```
