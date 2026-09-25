# DESIGN.md — KosmosTIC, mundo visual "Atlas"

Estado: reemplazo de mundo visual (rediseño). El mundo anterior (cósmico oscuro con degradados cian-violeta, tipografía Space Grotesk, tarjetas redondeadas y video de globo como hero) queda como **anti-referencia**: no se retoca, se sustituye.

## Intención de diseño
Un broadsheet técnico en papel blanco: la infraestructura de telecomunicaciones se presenta con la autoridad de un documento de ingeniería y el calor de un servicio humano, con tinta azul marino del logo, reglas de hairline y cifras enormes.

## Paleta (token → valor → uso)
| Token | Valor | Uso |
|---|---|---|
| --paper | #FAFAFA | Fondo de página |
| --surface | #FFFFFF | Paneles, formulario |
| --ink | #0B1F3F | Texto principal, bandas navy |
| --ink-2 | #33415C | Texto secundario (≥8:1 sobre paper) |
| --accent | #1257FF | CTA, kickers, enlaces, cifras (5.4:1 sobre blanco) |
| --signal | #00B8D9 | Micro-detalles sobre navy únicamente |
| --line | rgba(11,31,63,0.14) | Hairlines |
| --line-strong | rgba(11,31,63,0.28) | Bordes de inputs y controles |

Sobre navy (#0B1F3F): texto #FFFFFF y #C9D4E8. Inversiones de tema deliberadas y contenidas: barra superior, banda de ahorro y footer en navy; el resto de la página vive sobre papel.

## Tipografía
- Display: **Archivo** 700/800, tracking -0.02em. Titulares y cifras.
- Texto: **IBM Plex Sans** 400/500.
- Etiquetas/datos: **IBM Plex Mono** 400/500 en mayúsculas, tracking 0.16em.
- Escala: 12 / 14 / 16 / 20 / 24 / 32 + clamps de display (hero 40–64px, cifras 64–160px).

## Formas, sombras, material
- Regla global de radios: botones e inputs 6px; paneles y bloques 0px (cajas de hairline).
- Sombras: ninguna por defecto; cuando existan, tintadas en navy al 8% y nunca negras.
- Fotografía: tratamiento duotono navy (grayscale + multiply navy + ligera pantalla de acento). Ninguna imagen a color pleno.

## Retícula y ritmo
- Contenedor 1200px, 12 columnas, gutter 24px.
- Ritmo vertical: padding de sección clamp(72px, 10vw, 140px).
- Composiciones asimétricas (7/5, 5/7, 8/4). Las reglas hairline separan contenido real, nunca decoran.

## Movimiento
- Entrada: fade + 8px de elevación, 500ms ease-out, con stagger corto (IntersectionObserver).
- Cifras: conteo al entrar en viewport.
- Hover: subrayado que se desliza en enlaces; botón se desplaza 1px.
- `prefers-reduced-motion` desactiva todo. El contenido nunca depende de la animación para ser visible.

## Accesibilidad
- Contraste AA en todo (texto, controles, foco). Foco visible: 2px --accent con offset 2px.
- Labels visibles sobre inputs; errores inline por campo; navegación por teclado completa.

## Anti-referencia explícita (no volver a)
- Fondos oscuros con degradados cian/violeta como identidad principal.
- Botones pill con glow y textos con gradiente.
- Tarjetas redondeadas 20px con fondos translúcidos.
- Marquee, auroras animadas y video espacial como hero.
- Fuentes decorativas tipo sci-fi (Audiowide).

## Activos
- Logo oficial: disco navy con globo y wordmark plateado (`assets/logo-emblem.png`).
- Fotografía generada (duotono en uso): `assets/support.png` (calidez humana, hero), `assets/datacenter.png` (infraestructura, panel lateral de servicios).
- Video generado: `assets/hero-cosmos.mp4`, usado solo como textura de fondo al 20% en la banda navy de ahorro.
