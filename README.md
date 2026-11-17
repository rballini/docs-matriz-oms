# Portal de documentación · Matriz OMS API

Repositorio del portal público de documentación de Matriz OMS API, construido con [Mintlify](https://mintlify.com).

## Desarrollo local

```bash
npm i -g mint
mint dev            # levanta el portal en http://localhost:3000
mint broken-links   # verifica enlaces internos
```

## Estructura

| Ruta | Contenido |
| --- | --- |
| `docs.json` | Configuración: tema, colores, navegación, autenticación de endpoints |
| `*.mdx` (raíz) | Introducción, guía rápida, ambientes, autenticación y soporte |
| `guides/` | Guías conceptuales |
| `resources/` | Herramientas del ecosistema y webinars |
| `reference-data/`, `order-routing/`, `market-data/` | API REST de Trading |
| `websockets/` | API WebSocket |
| `risk/` | Matriz Risk API · **acceso restringido** (`groups: ["alyc-admin"]`) |
| `reference/` | Errores, diccionario, entries, códigos CFI, estados y novedades |
| `snippets/` | Componentes reutilizables (no se publican como páginas) |
| `logo/`, `favicon.svg`, `images/` | Recursos gráficos (**placeholders**: reemplazar por los oficiales) |

## Convenciones

- **`{urlbase}` en MDX:** fuera de bloques de código, escribirlo siempre entre backticks. Sin backticks, MDX lo interpreta como expresión JavaScript y el build falla.
- **`[REVISAR_VIGENCIA]`:** dato tomado solo de la documentación anterior. Se muestra con `<RevisarVigencia dato="…" />` y va acompañado de un comentario `{/* [REVISAR_VIGENCIA] origen: … */}`.
- **`[PENDIENTE]`:** dato que ninguna fuente define. Va en un comentario MDX invisible `{/* [PENDIENTE] … */}`.
- **Pendientes consolidados:** ver `PENDIENTES-EQUIPO-TECNICO.md` (excluido de la publicación mediante `.mintignore`).

## Risk API

La carpeta `risk/` está en una pestaña con `"hidden": true` y sus páginas declaran `groups: ["alyc-admin"]`. `hidden` **no** protege el contenido: no publicar `risk/` hasta activar la autenticación por grupos de Mintlify (JWT u OAuth).
