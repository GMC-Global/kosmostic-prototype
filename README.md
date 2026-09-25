# KosmosTIC - Prototipo de rediseño (cosmic)

Prototipo estático de una propuesta radicalmente distinta para kosmostic.com.
Contenido reconstruido del sitio real; único activo conservado: el logo oficial.

## Estructura

```
index.html          Página única (landing completa en español)
css/styles.css      Sistema de diseño cósmico (tokens, estados, responsive)
js/main.js          Interacciones (menú, reveals, contadores, formulario)
assets/             Logo oficial + imágenes y video generados con Magnific
```

## Assets generados (Magnific)

| Asset | Modelo | Uso |
|---|---|---|
| `assets/datacenter.webp` | Seedream 5 Pro (2K, 3:2) | Celda principal de servicios y poster del hero |
| `assets/support.webp` | Seedream 5 Pro (2K, 3:2) | Bloque "respaldo operativo" (sentido humano) |
| `assets/hero-cosmos.mp4` | MiniMax H3 (Hailuo 3.0, 768p, 5s) | Fondo animado del hero |

Las imágenes se sirven en WebP (compresión 82%); los PNG originales de 2K quedan fuera del repositorio.

Costo total Magnific: 610 créditos (2 imágenes a 75 + 1 clip a 460; el primer intento del clip falló sin costo).

## Sistema de diseño (v2, cosmic minimal)

- **Tema:** oscuro en toda la página (theme lock). Fondo `#07080d`.
- **Acento único:** gradiente cian → azul → violeta, usado con moderación (palabra del hero, botón primario, focus, iconos).
- **Tipografía:** Space Grotesk (display y texto), JetBrains Mono (etiquetas y datos). Sin fuentes decorativas.
- **Formas (regla global):** botones pill, tarjetas 20px, inputs 12px. Bordes hairline en vez de fondos cargados.
- **Logo:** versión oficial del sitio (disco azul marino con wordmark plateado) sobre fondo oscuro, sin placas ni recoloreos.
- **Movimiento:** reveals con IntersectionObserver, contadores, auroras CSS suaves en `transform`.
  Todo colapsa con `prefers-reduced-motion`. Sin listeners de scroll. El contenido nunca depende de la animación para ser visible.

## Accesibilidad

- Contraste WCAG AA en textos y botones (texto blanco sobre gradiente azul-violeta ≥ 4.5:1).
- Focus visible cian 2px, skip link, labels visibles sobre inputs, errores inline por campo.
- Navegación por teclado completa; menú móvil con `aria-expanded` y cierre con Escape.

## Verificación

Servir la carpeta con cualquier servidor estático:

```
python -m http.server 8787
# → http://localhost:8787
```

Comprobado con Playwright (Chromium) en escritorio (1440x900) y móvil (390x844):
hero con video, bento responsive, formulario con validación y contraste AA.
