# 🌌 ALED — El Nexo del Conocimiento Cósmico

> **Sistema de Curación Activo | Última sesión: 27 Mar 2026**
> Repositorio vivo en: **https://jfcramatista.github.io/aled/**

---

## 🎯 ¿Qué es ALED?

**ALED** es una **biblioteca personal web de recursos de Inteligencia Artificial**, diseñada y operada por el usuario (**Sajor / jfcramatista**). No es solo una página web: es una **Bóveda de Conocimiento en constante expansión** que cataloga herramientas de IA con contexto real de uso, extraído directamente de videos de YouTube.

### Filosofía del Proyecto

- Cada herramienta de IA registrada va **atada a un video fuente** con la fecha exacta de publicación de ese video.
- La fecha `updateDate` NO es cuándo se añadió a la base de datos, sino **cuándo el video que la presenta fue publicado**. Esto es un principio fundamental e irrompible.
- El objetivo es que Sajor y su equipo puedan navegar el caos de la explosión de IA con **criterio, orden y contexto histórico**.

---

## 🗂️ Arquitectura del Proyecto

```
C:\Users\USER\Desktop\Nodriza\Matrix\Aled\
├── index.html        → Estructura HTML (sidebar, grid, modal de video)
├── style.css         → Estilos dark mode / glassmorphism (no tocar sin motivo)
├── app.js            → ⚡ LA BASE DE DATOS. Todo el arsenal vive aquí.
├── README.md         → Este documento (contexto del proyecto)
├── CURADOR.md        → Protocolo e instrucciones para el Agente Curador
└── INVENTARIO.md     → Registro detallado de todos los artefactos catalogados
```

### Repositorio Git
- **GitHub Pages** sirve la versión pública automáticamente al hacer `git push`.
- Comandos habituales tras cada sesión:
  ```powershell
  git add . ; git commit -m "Mensaje descriptivo" ; git push
  ```

---

## 🧱 Cómo Funciona la Base de Datos (`app.js`)

El archivo `app.js` comienza con un array llamado `toolsDatabase`. Cada herramienta es un objeto JS con esta estructura exacta:

```javascript
{
    id: N,                        // Número entero correlativo (1, 2, 3...)
    name: "Nombre de la Tool",
    category: "categoria",        // Ver lista de categorías abajo
    icon: "fa-solid fa-cube",     // Icono de FontAwesome 6
    author: "Nombre del Canal",   // Canal de YouTube fuente
    updateDate: "26 Feb 2026",    // FECHA DEL VIDEO, no de hoy
    description: "Qué es la herramienta en general.",
    videoContext: "Cómo se usó específicamente en el video.",
    tags: ["Tag1", "Tag2", "Tag3"],
    appUrl: "https://url-de-la-app.com",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
}
```

> ⚠️ **REGLA DE ORO**: Los IDs deben ser números enteros correliativos (continuando desde el último). NO usar `Date.now()` ni `Math.random()` en producción — eso era solo el formato que el Agente Curador generaba en borrador.

---

## 📂 Categorías del Sistema

Estas son las categorías válidas. El `data-cat` del sidebar y el campo `category` de cada tool DEBEN coincidir exactamente:

| Categoría JS | Etiqueta en Sidebar | Icono FontAwesome |
|---|---|---|
| `all` | Dashboard | `fa-border-all` |
| `imagen` | Imágenes | `fa-image` |
| `imagen_progra` | Imagen + Programación | `fa-code` |
| `video` | Video | `fa-video` |
| `video_progra` | Video + Programación | `fa-code` |
| `avatares` | Avatares | `fa-user-astronaut` |
| `programacion` | Programación | `fa-terminal` |
| `diseno_web` | Diseño Web | `fa-desktop` |
| `diapositivas` | Diapositivas | `fa-presentation-screen` |
| `redaccion` | Redacción | `fa-file-pen` |
| `analisis_datos` | Análisis de Datos | `fa-chart-pie` |
| `musica` | Música | `fa-music` |
| `backend` | Backend | `fa-server` |
| `agente` | Agentes | `fa-robot` |
| `utilidades` | Utilidades | `fa-toolbox` |
| `seguridad` | Seguridad / VPN | `fa-shield-halved` |

> Para añadir una **nueva categoría**, hay que editar TANTO `index.html` (añadir el `<li>` en el sidebar) COMO asegurarse de que la tool en `app.js` use el mismo string en el campo `category`.

---

## 📡 Canales Fuente Principales

Las herramientas provienen principalmente de estos canales de YouTube:

- **Ale Javi** (`author: "Ale Javi"`) — Creador de contenido español de IA
- **Alejavi Rivera** (`author: "Alejavi Rivera"`) — Misma persona, nombre ligeramente distinto en versiones más recientes

---

## 🔁 Flujo de Trabajo para Añadir Nuevas Herramientas

1. El usuario proporciona los datos de una herramienta (en formato borrador del Curador) junto con la **URL del video de YouTube** y la **fecha de publicación**.
2. La IA debe verificar la fecha de publicación del video (via browser subagent o directamente del usuario).
3. Se asigna un `id` correlativo (el último ID existente + 1).
4. Se reemplaza `updateDate` con la fecha real del video (formato: `"8 Jan 2026"`, `"15 Feb 2026"`, `"28 Feb 2026"`, etc.).
5. Se inyecta el objeto en `app.js` justo antes del cierre del array `];`.
6. Si la herramienta usa una categoría nueva, también se añade el `<li>` en `index.html`.
7. Se hace `git add . ; git commit -m "..." ; git push`.

---

## 📊 Estado Actual del Arsenal

- **Total de herramientas catalogadas**: 51
- **Rango cronológico**: 8 Jan 2026 → 28 Feb 2026
- **Ver inventario completo**: `INVENTARIO.md`
- **Ver protocolo del Curador**: `CURADOR.md`
