# KosmosTIC — Prototipo "Atlas" (broadsheet técnico)

Prototipo estático del rediseño de kosmostic.com, creado con el proceso **impeccable**:
contexto de producto en `PRODUCT.md`, mundo visual sustituto en `DESIGN.md`, construcción
completa y QA por lotes (desktop + móvil) con Playwright.

Contenido reconstruido del sitio real; único activo de marca: el logo oficial de KosmosTIC.

## Estructura

```
PRODUCT.md          Verdad del producto, hechos y restricciones
DESIGN.md           Mundo visual "Atlas" (tokens, tipografía, anti-referencia)
index.html          Landing única en español (modo Persuade)
css/styles.css      Sistema de diseño Atlas
js/main.js          Menú, reveals, contadores, validación de formulario
assets/             Logo oficial + fotografía y video generados con Magnific
verify.js           Script QA de Playwright (no se publica)
```

## Mundo visual "Atlas"
- Papel `#FAFAFA`, tinta navy `#0B1F3F`, acento azul eléctrico `#1257FF`, señal cian `#00B8D9` sobre navy.
- Tipografía: **Archivo** (display), **IBM Plex Sans** (texto), **IBM Plex Mono** (etiquetas).
- Retículas de hairline, composiciones asimétricas 7/5 y 8/4, fotografía en duotono navy.
- Radios: botones e inputs 6px; paneles 0px (cajas de hairline). Sin sombras negras.
- Movimiento sobrio (reveals de 8px, conteos); todo colapsa con `prefers-reduced-motion`.

## Activos generados (Magnific, 610 créditos)
| Asset | Modelo | Uso |
|---|---|---|
| `assets/support.webp` / `support.png` | Seedream 5 Pro (2K) | Hero (duotono) |
| `assets/datacenter.webp` / `datacenter.png` | Seedream 5 Pro (2K) | Panel lateral de servicios (duotono) |
| `assets/hero-cosmos.mp4` | MiniMax H3 768p, 5s | Textura de fondo de la banda de ahorro |

## Verificación
```
python -m http.server 8787   # http://localhost:8787
node verify.js               # Playwright: desktop 1440x900 + móvil 390x844
```
QA ejecutado: hero en 2 líneas (desktop), reveals activos, video reproduciéndose,
sin scroll horizontal, sin errores de consola, foco visible sobre papel y navy.

## Publicación
https://gmc-global.github.io/kosmostic-prototype/ · GitHub Pages, rama `main`.
