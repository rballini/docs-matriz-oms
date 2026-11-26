# Pendientes para el equipo técnico — Portal Matriz OMS API

> Documento interno. Está excluido de la publicación mediante `.mintignore`: no aparece en el portal ni es accesible por URL.

Generado a partir de los comentarios `{/* [PENDIENTE] ... */}` y de las marcas `[REVISAR_VIGENCIA]` presentes en los archivos `.mdx` del portal (Tandas 1 a 6). Para ubicar cada ítem en el código: `grep -rn "\[PENDIENTE\]" .` o `grep -rn "REVISAR_VIGENCIA" .`

## Cómo usar este documento

1. **Pendientes (sección A):** datos que **ninguna** de las fuentes define. Requieren una respuesta de ingeniería. Al resolverlos, completar el contenido en la página y borrar el comentario `[PENDIENTE]`.
2. **Revisar vigencia (sección B):** datos que provienen **solo** de la documentación anterior (Primary API v1.21 o su transcripción JSON) y se muestran al público con un aviso. Al validarlos, borrar el componente `<RevisarVigencia />` y el comentario `[REVISAR_VIGENCIA]` asociado (o corregir el dato).
3. **Antes de publicar (sección C):** tareas de configuración y contenido que no son preguntas técnicas.

## A. Pendientes de definición técnica (54 ítems)

### Guías y páginas generales

| # | Archivo | Pendiente | Responsable | Estado |
| --- | --- | --- | --- | --- |
| A1 | `introduction.mdx` | Agregar links directos a cada herramienta cuando estén actualizados (nota 📝 del manual). No usar los links del hub anterior. | | ☐ |
| A2 | `environments.mdx` | Completar con horarios de disponibilidad de cada ambiente y, si corresponde, otros ambientes de prueba además del demo general. | | ☐ |
| A3 | `authentication.mdx` | Documentar la respuesta ante credenciales inválidas y ante token vencido (código HTTP y cuerpo). Ninguna de las tres fuentes lo define. | | ☐ |
| A4 | `guides/order-lifecycle.mdx` | Confirmar que no existe un mensaje de reemplazo por WebSocket (ninguna fuente lo documenta) y cómo se informa la expiración de órdenes DAY y GTD. | | ☐ |
| A5 | `guides/rest-vs-websocket.mdx` | Confirmar que no existen mensajes WebSocket para reemplazar órdenes ni para consultar datos de referencia. | | ☐ |
| A6 | `resources/ecosystem.mdx` | Completar los links vigentes de cada herramienta (nota pendiente del manual). Para cada Card: agregar el atributo href="https://…" y quitar la línea "Acceso: a confirmar". NO usar los links del hub anterior. | | ☐ |
| A7 | `resources/ecosystem.mdx` | Verificar que la colección de Postman y el repositorio de GitHub vigentes usen las URLs api.{urlbase}.(matrizoms\|xoms).com.ar, la autenticación por token y los nombres de mercado actualizados. | | ☐ |
| A8 | `resources/ecosystem.mdx` | Definir si las guías de implementación, homologación y buenas prácticas se migran como páginas de este portal (recomendado) o se enlazan como documentos externos. | | ☐ |
| A9 | `resources/ecosystem.mdx` | Confirmar si existen SDKs oficiales de Matriz OMS API para algún lenguaje y, en ese caso, agregarlos en una sección propia. | | ☐ |
| A10 | `resources/webinars.mdx` | Completar el link vigente de cada webinar (grabación) agregando el atributo href="https://…" en cada Card y quitando la línea "Grabación: a confirmar". Agregar fecha y duración si están disponibles. | | ☐ |
| A11 | `support.mdx` | Completar: (1) URL del portal de JIRA (agregar href="https://…" a la Card y quitar "Acceso: a confirmar"); (2) quién puede cargar tickets (¿solo usuarios designados por cada ALyC?); (3) horarios de atención; (4) niveles de severidad y tiempos de respuesta (SLA); (5) canal de urgencias en horario de rueda, si existe. | | ☐ |

### API REST · Datos de referencia

| # | Archivo | Pendiente | Responsable | Estado |
| --- | --- | --- | --- | --- |
| A12 | `reference-data/instruments/by-segment.mdx` | Ninguna fuente describe los segmentos U-DDF, U-DDA y U-DUAL. Agregar su descripción. | | ☐ |

### API REST · Ruteo de órdenes

| # | Archivo | Pendiente | Responsable | Estado |
| --- | --- | --- | --- | --- |
| A13 | `order-routing/new-order.mdx` | Confirmar: (1) si price es obligatorio u opcional en órdenes MARKET; (2) si timeInForce distingue mayúsculas (el manual dice "Day" en la descripción y "DAY" en el diccionario); (3) la cantidad mínima y máxima de displayQty en órdenes iceberg. | | ☐ |
| A14 | `order-routing/replace-order.mdx` | Confirmar: (1) si se pueden modificar solo el precio o solo el tamaño, o si ambos parámetros son siempre obligatorios; (2) qué clOrdId usar para un segundo reemplazo o una cancelación posterior: el original o el devuelto por este método; (3) qué estados reciben la orden original y la de reemplazo (en el ejemplo WebSocket del manual, la orden aparece CANCELLED con texto "Reemplazada"). | | ☐ |
| A15 | `order-routing/status/last-by-client-order-id.mdx` | Confirmar el valor de proprietary para esta consulta: el documento anterior usa "api" en sus ejemplos, mientras que el manual vigente indica PBCP / ISV_PBCP para órdenes enviadas por API. Confirmar también la respuesta ante un clOrdId inexistente. | | ☐ |
| A16 | `order-routing/status/history-by-client-order-id.mdx` | Confirmar el valor de proprietary (el documento anterior usa "api" en sus ejemplos) y el orden en que se devuelven los estados (en el ejemplo, del más antiguo al más reciente). | | ☐ |
| A17 | `order-routing/status/actives-by-account.mdx` | Confirmar que "activas" incluye exactamente NEW y PARTIALLY_FILLED (criterio tomado de snapshotOnlyActive en WebSocket) y si también incluye estados PENDING_*. | | ☐ |
| A18 | `order-routing/status/filled-by-account.mdx` | Confirmar el período que abarca la consulta (solo la rueda del día o un histórico). | | ☐ |
| A19 | `order-routing/status/by-order-id.mdx` | Confirmar con el equipo técnico: (1) si el endpoint /rest/order/byOrderId sigue disponible; (2) qué parámetro recibe realmente (orderId, accountId o ambos); (3) su respuesta real. Según el resultado, completar la página o quitarla de la navegación en docs.json. | | ☐ |

### API REST · Market Data

| # | Archivo | Pendiente | Responsable | Estado |
| --- | --- | --- | --- | --- |
| A20 | `market-data/snapshot.mdx` | Ninguna fuente define el significado de "aggregated" ni la estructura de ACP en la respuesta REST. Confirmar con el equipo técnico. | | ☐ |
| A21 | `market-data/historical-trades.mdx` | Confirmar valores vigentes del parámetro environment | | ☐ |
| A22 | `market-data/historical-trades.mdx` | Confirmar: (1) el comportamiento si se envían date y dateFrom/dateTo juntos; (2) la amplitud máxima permitida del rango de fechas. | | ☐ |
| A23 | `market-data/historical-trades.mdx` | El diccionario anterior nombra "serverTime"; la respuesta de ejemplo usa "servertime". Confirmar el nombre real del campo y la zona horaria de "datetime". | | ☐ |

### API WebSocket

| # | Archivo | Pendiente | Responsable | Estado |
| --- | --- | --- | --- | --- |
| A24 | `websockets/overview.mdx` | Confirmar con el equipo técnico: (1) si el servidor usa ping/pong o requiere heartbeat del cliente, y el timeout por inactividad; (2) qué ocurre con una conexión abierta cuando vence el token; (3) códigos de cierre y mensajes de error que envía el servidor (token inválido, mensaje mal formado); (4) límites de conexiones simultáneas o de instrumentos por suscripción; (5) si existe un mensaje para cancelar suscripciones. | | ☐ |
| A25 | `websockets/orders/new-order.mdx` | Confirmar: (1) cómo se envía una orden MARKET por WebSocket (ningún ejemplo incluye ordType; los Execution Reports de ejemplo muestran LIMIT); (2) si timeInForce tiene valor por defecto DAY también en WebSocket; (3) qué recibe el cliente si el mensaje está mal formado. | | ☐ |
| A26 | `websockets/orders/new-order.mdx` | Confirmar la nomenclatura vigente de los contratos Todo o Nada. | | ☐ |
| A27 | `websockets/orders/cancel-order.mdx` | Confirmar: (1) si clientId puede ser el clOrdId de cualquier request de la orden (alta o reemplazo) o solo el del alta; (2) qué Execution Report recibe el cliente si la orden ya no existe o ya fue operada. | | ☐ |
| A28 | `websockets/orders/subscribe-execution-reports.mdx` | Confirmar: (1) si al suscribirse se recibe un snapshot inicial de las órdenes existentes también cuando snapshotOnlyActive es false; (2) qué ocurre si se envía account y accounts juntos; (3) qué responde el servidor si el usuario no tiene acceso a la cuenta; (4) cómo cancelar una suscripción. | | ☐ |
| A29 | `websockets/orders/execution-report-message.mdx` | Confirmar que los Execution Reports incluyen órdenes ingresadas por otras vías (REST, otras pantallas) en las cuentas suscriptas. | | ☐ |
| A30 | `websockets/orders/execution-report-message.mdx` | Confirmar el significado operativo de PENDING_APPROVAL y de REPLACED, y en qué casos se usa cada uno. | | ☐ |
| A31 | `websockets/orders/execution-report-message.mdx` | Confirmar la secuencia completa de Execution Reports que genera un reemplazo (estado de la orden original y de la nueva). | | ☐ |
| A32 | `websockets/market-data/subscribe.mdx` | Confirmar: (1) el significado y los valores posibles de "level" (el documento anterior solo indica que se incorporó en la versión 1.7); (2) la cantidad máxima de instrumentos por suscripción; (3) si existe un mensaje para cancelar la suscripción; (4) si al suscribirse se recibe un primer mensaje con el estado actual. | | ☐ |
| A33 | `websockets/market-data/market-data-message.mdx` | Las fuentes solo muestran la estructura de BI y OF en el mensaje Md. Confirmar la estructura del resto de los entries (LA, OP, CL, SE, HI, LO, TV, OI, IV, EV, NV, ACP) y si coincide con la de Market Data REST (price, size, date). Confirmar también si cada mensaje trae todos los entries suscriptos o solo los que cambiaron, y si incluye timestamp. | | ☐ |

### Risk API (restringida)

| # | Archivo | Pendiente | Responsable | Estado |
| --- | --- | --- | --- | --- |
| A34 | `risk/overview.mdx` | Confirmar con el equipo técnico el prefijo /oms-webservices/rest de todas las rutas del dominio api-risk (nota pendiente del manual vigente). La documentación anterior usaba /rest/risk/... sin ese prefijo y autenticación HTTP Basic; el manual vigente indica token. | | ☐ |
| A35 | `risk/overview.mdx` | Confirmar la frecuencia de recálculo de RIMA y si existen límites de consumo para el dominio api-risk. | | ☐ |
| A36 | `risk/positions.mdx` | Confirmar con el equipo técnico el prefijo /oms-webservices/rest de todas las rutas del dominio api-risk (nota pendiente del manual vigente). La documentación anterior usaba /rest/risk/... sin ese prefijo y autenticación HTTP Basic; el manual vigente indica token. | | ☐ |
| A37 | `risk/positions.mdx` | Obtener definiciones oficiales de: totalDailyDiff, totalDiff (base de cálculo y moneda), originalBuyPrice / originalSellPrice (cuándo difieren de buyPrice / sellPrice), buyPrice / sellPrice (precio promedio o último) y los valores posibles de settlType. Confirmar también la nomenclatura de symbolReference para futuros. | | ☐ |
| A38 | `risk/detailed-positions.mdx` | Confirmar con el equipo técnico el prefijo /oms-webservices/rest de todas las rutas del dominio api-risk (nota pendiente del manual vigente). La documentación anterior usaba /rest/risk/... sin ese prefijo y autenticación HTTP Basic; el manual vigente indica token. | | ☐ |
| A39 | `risk/detailed-positions.mdx` | Obtener definiciones oficiales de: valores posibles de contractType (las fuentes solo muestran FUTURE_OPTION_CALL), significado de "PPP" en buyPricePPPDiff / sellPricePPPDiff, diferencia entre totalDailyDiff (puntos) y totalDailyDiffPlain (valor monetario) y la moneda en que se expresan totalMarketValue y totalDailyDiffPlain. | | ☐ |
| A40 | `risk/account-report.mdx` | Confirmar con el equipo técnico el prefijo /oms-webservices/rest de todas las rutas del dominio api-risk (nota pendiente del manual vigente). La documentación anterior usaba /rest/risk/... sin ese prefijo y autenticación HTTP Basic; el manual vigente indica token. | | ☐ |
| A41 | `risk/account-report.mdx` | Obtener definiciones oficiales de: significado de las claves de detailedAccountReports ("0" = ¿plazo de liquidación?), significado de cada moneda (USD D, USD C, USD G, USD R, USD MtR, ARS BCRA, U$S), relación entre totalCash, total y currentCash, y la moneda de referencia de margin, portfolio y dailyDiff. | | ☐ |

### Referencia

| # | Archivo | Pendiente | Responsable | Estado |
| --- | --- | --- | --- | --- |
| A42 | `reference/errors.mdx` | Documentar: (1) los códigos HTTP asociados a cada caso; (2) la respuesta ante token vencido o inválido; (3) cómo se informan los errores en la API WebSocket. Ninguna fuente lo define. | | ☐ |
| A43 | `reference/field-dictionary.mdx` | Confirmar los nombres reales de: timeInForces vs. timesInForce (detalle de instrumentos) y serverTime vs. servertime (getTrades). El diccionario anterior y las respuestas de ejemplo no coinciden. | | ☐ |
| A44 | `reference/market-data-entries.mdx` | Confirmar si REST admite también HI, LO, TV, IV, EV y NV. | | ☐ |
| A45 | `reference/cfi-codes.mdx` | Confirmar que el parámetro CFICode no admite prefijos ni comodines, y si existen otros códigos CFI vigentes (por ejemplo, para índices o cauciones). | | ☐ |
| A46 | `reference/order-statuses.mdx` | Confirmar: (1) en qué casos se usa PENDING_APPROVAL; (2) si REPLACED es un estado final o se informa junto con la nueva versión de la orden; (3) si la expiración de órdenes DAY y GTD al cierre se informa como CANCELLED o con otro estado. | | ☐ |
| A47 | `reference/changelog.mdx` | Completar el número de versión vigente de Matriz OMS API en la etiqueta de la primera entrada. | | ☐ |

### Snippets reutilizables

| # | Archivo | Pendiente | Responsable | Estado |
| --- | --- | --- | --- | --- |
| A48 | `snippets/instrument-detail-fields.mdx` | El diccionario anterior nombra "timeInForces", pero la respuesta de ejemplo usa "timesInForce". Confirmar el nombre real del campo contra un ambiente vigente. | | ☐ |
| A49 | `snippets/order-fields.mdx` | Confirmar el formato y la zona horaria de transactTime (en los ejemplos: AAAAMMDD-HH:mm:ss). | | ☐ |

### Homologación de APIs

| # | Archivo | Pendiente | Responsable | Estado |
| --- | --- | --- | --- | --- |
| A50 | `homologacion/proceso.mdx` | Valores concretos de los límites de consumo (cantidad de peticiones por unidad de tiempo, umbrales de limitación y de bloqueo de usuario o IP) y el código HTTP y el cuerpo con los que el servidor informa un límite de consumo. El material interno menciona 400, 429 y 500, pero el portal documenta los errores con "status": "ERROR" en el cuerpo. La página describe las reglas sin números. | | ☐ |
| A51 | `homologacion/proceso.mdx` | Detalle de la sesión de homologación técnica: duración, agenda, entregables del informe y forma de pedir una nueva revisión si no se aprueba. | | ☐ |
| A52 | `homologacion/proceso.mdx` | Tiempo de respuesta de Soporte al recibir el relevamiento y canal por el que se avisa que las pruebas en Demo están terminadas (hoy la página lo deja en el portal de soporte). | | ☐ |
| A53 | `homologacion/proceso.mdx`, `homologacion/solicitud.mdx` | Confirmar que, al recibir el relevamiento, Soporte envía por mail las credenciales del entorno Demo y las herramientas, y quién lo hace. Se tomó del protocolo post-reunión del material interno. | | ☐ |
| A54 | `homologacion/solicitud.mdx` | Revisión legal del texto de privacidad (finalidad, plazo de conservación y política de datos personales vigente). | | ☐ |

## B. Datos a validar contra la versión vigente — `[REVISAR_VIGENCIA]` (39 avisos visibles + 2 snippets)

Cada fila es un aviso `<RevisarVigencia />` visible en el portal. La columna **Origen** indica de dónde se tomó el dato en la documentación anterior.

### Guías y páginas generales

| # | Archivo | Dato a validar | Origen | Estado |
| --- | --- | --- | --- | --- |
| B1 | `quickstart.mdx` | Los parámetros de /rest/order/id del paso 5 y el uso de wsClOrdId en WebSocket | PDF v1.21, p. 27 (parámetros clOrdId y proprietary de /rest/order/id) y p. 22 (reglas de wsClOrdId). | ☐ |
| B41 | `introduction.mdx` | Los parámetros de /rest/order/id usados en la verificación (pestaña “Flujo de Orden DMA”) | PDF v1.21, p. 27 (parámetros clOrdId y proprietary de /rest/order/id). | ☐ |

### API REST · Datos de referencia

| # | Archivo | Dato a validar | Origen | Estado |
| --- | --- | --- | --- | --- |
| B2 | `reference-data/segments/list.mdx` | La estructura del objeto segments | PDF v1.21, p. 12 y Anexo Diccionario (p. 51) | ☐ |
| B3 | `reference-data/segments/list.mdx` | La descripción de cada segmento | PDF v1.21, p. 12. El manual vigente solo enumera los códigos; las descripciones vienen del documento anterior. | ☐ |
| B4 | `reference-data/instruments/list.mdx` | La estructura del objeto instruments | PDF v1.21, p. 13 | ☐ |
| B5 | `reference-data/instruments/list-detailed.mdx` | La estructura y la descripción de los campos de cada instrumento detallado | PDF v1.21, pp. 14-15 y Anexo Diccionario (p. 51) | ☐ |
| B6 | `reference-data/instruments/detail.mdx` | La estructura y la descripción de los campos del objeto instrument | PDF v1.21, p. 16 y Anexo Diccionario (p. 51) | ☐ |
| B7 | `reference-data/instruments/by-cfi-code.mdx` | La estructura del objeto instruments | PDF v1.21, pp. 17-18 | ☐ |
| B8 | `reference-data/instruments/by-segment.mdx` | La estructura del objeto instruments | PDF v1.21, p. 19 | ☐ |

### API REST · Ruteo de órdenes

| # | Archivo | Dato a validar | Origen | Estado |
| --- | --- | --- | --- | --- |
| B9 | `order-routing/new-order.mdx` | El uso de PENDING_NEW como estado transitorio y los parámetros de /rest/order/id en el ejemplo completo | PDF v1.21, p. 27 (parámetros de /rest/order/id) y ejemplos de pp. 28-29 (estado PENDING_NEW previo a NEW). | ☐ |
| B10 | `order-routing/new-order.mdx` | El campo order.proprietary de la respuesta | PDF v1.21, pp. 24-26. El manual vigente confirma "status" y "clientId"; el campo "order.proprietary" de la respuesta viene del documento anterior. | ☐ |
| B11 | `order-routing/replace-order.mdx` | La estructura de la respuesta del reemplazo | PDF v1.21, p. 25. El manual vigente define los parámetros, pero no la respuesta de este método. | ☐ |
| B12 | `order-routing/cancel-order.mdx` | La estructura de la respuesta de la cancelación | PDF v1.21, p. 26. El manual vigente confirma que la cancelación devuelve un Client Order ID propio; la estructura completa viene del documento anterior. | ☐ |
| B13 | `order-routing/status/last-by-client-order-id.mdx` | Los parámetros y la estructura de la respuesta de esta consulta | PDF v1.21, p. 27. El manual vigente lista el endpoint, pero no sus parámetros ni su respuesta. | ☐ |
| B14 | `order-routing/status/history-by-client-order-id.mdx` | Los parámetros, la estructura de la respuesta y la exclusión del estado CANCELLED | PDF v1.21, pp. 28-29. El manual vigente lista el endpoint, pero no sus parámetros, su respuesta ni la regla sobre CANCELLED. | ☐ |
| B15 | `order-routing/status/actives-by-account.mdx` | El nombre del parámetro accountId y la estructura de la respuesta | PDF v1.21, p. 30 (URL de ejemplo /rest/order/actives?accountId=10). El manual vigente define el endpoint, pero no sus parámetros ni su respuesta. | ☐ |
| B16 | `order-routing/status/filled-by-account.mdx` | El nombre del parámetro accountId y la estructura de la respuesta | PDF v1.21, p. 31. El manual vigente define el endpoint, pero no sus parámetros ni su respuesta. | ☐ |
| B17 | `order-routing/status/all-by-account.mdx` | El nombre del parámetro accountId y la estructura de la respuesta | PDF v1.21, pp. 32-33. El manual vigente define el endpoint y su uso, pero no sus parámetros ni su respuesta. | ☐ |
| B18 | `order-routing/status/by-execution-id.mdx` | El parámetro execId de esta consulta y la estructura de la respuesta | PDF v1.21, p. 34. El manual vigente define el endpoint y el campo execId, pero no los parámetros ni la respuesta de esta consulta. | ☐ |
| B19 | `order-routing/status/by-order-id.mdx` | Este endpoint completo (/rest/order/byOrderId), sus parámetros y su respuesta | PDF v1.21, p. 30 ("Consultar Order por OrderID"). Este endpoint NO figura en el manual vigente: toda la página proviene del documento anterior. | ☐ |

### API REST · Market Data

| # | Archivo | Dato a validar | Origen | Estado |
| --- | --- | --- | --- | --- |
| B20 | `market-data/snapshot.mdx` | La estructura de la respuesta (objeto marketData y campos depth y aggregated) | PDF v1.21, pp. 38-39. El manual vigente define los parámetros y los entries, pero no la estructura de la respuesta. | ☐ |
| B21 | `market-data/historical-trades.mdx` | La estructura de la respuesta (campos symbol, market y trades) | PDF v1.21, p. 42 y Anexo Diccionario (p. 51). El manual vigente define los parámetros, pero no la estructura de la respuesta. | ☐ |

### API WebSocket

| # | Archivo | Dato a validar | Origen | Estado |
| --- | --- | --- | --- | --- |
| B22 | `websockets/orders/new-order.mdx` | Los campos displayQuantity, timeInForce, expireDate y wsClOrdId del mensaje no | PDF v1.21, pp. 21-23. El manual vigente solo documenta type, product, price, quantity, side, account e iceberg; tiene una nota pendiente para sumar los mensajes de órdenes iceberg y GTD. | ☐ |
| B23 | `websockets/orders/new-order.mdx` | Las reglas de funcionamiento de wsClOrdId | PDF v1.21, p. 22 (comentarios sobre wsClOrdId). | ☐ |
| B24 | `websockets/orders/new-order.mdx` | La operatoria de contratos Todo o Nada mediante el sufijo A en el símbolo | PDF v1.21, p. 21 (ejemplo de contrato Todo o Nada con sufijo A). | ☐ |
| B25 | `websockets/orders/cancel-order.mdx` | La estructura del Execution Report de una cancelación | PDF v1.21, pp. 32-33 (estructura del estado CANCELLED con Client Order ID propio de la cancelación). | ☐ |
| B26 | `websockets/orders/subscribe-execution-reports.mdx` | El campo accounts y la suscripción a todas las cuentas omitiendo account | PDF v1.21, p. 35. El manual vigente indica que se puede suscribir a una cuenta, a varias o a todas, pero solo documenta el mensaje de una cuenta. | ☐ |
| B27 | `websockets/orders/execution-report-message.mdx` | Los campos timestamp, wsClOrdId y los campos de orderReport que no figuran en el ejemplo del manual vigente | PDF v1.21, pp. 22 y 36 y Anexo Diccionario (p. 51). El manual vigente muestra orderId, clOrdId, accountId, instrumentId, status y text; el resto de los campos viene del documento anterior. | ☐ |
| B28 | `websockets/market-data/subscribe.mdx` | El valor por defecto de depth en la suscripción WebSocket | PDF v1.21, pp. 39-40. La descripción de "depth" en WebSocket (default top of book) viene del documento anterior; el manual vigente define la profundidad de 1 a 5. | ☐ |
| B29 | `websockets/market-data/market-data-message.mdx` | La estructura completa del mensaje Md | PDF v1.21, pp. 40-41. El manual vigente no documenta el mensaje Md recibido. | ☐ |

### Risk API (restringida)

| # | Archivo | Dato a validar | Origen | Estado |
| --- | --- | --- | --- | --- |
| B30 | `risk/positions.mdx` | La estructura y la descripción de los campos de la respuesta de posiciones | PDF v1.21, pp. 43-44. El manual vigente define el endpoint y su parámetro, pero no la respuesta. | ☐ |
| B31 | `risk/detailed-positions.mdx` | La estructura y la descripción de los campos del detalle de posiciones | PDF v1.21, pp. 45-46. El manual vigente define el endpoint y su parámetro, pero no la respuesta. | ☐ |
| B32 | `risk/account-report.mdx` | La estructura y la descripción de los campos del reporte de cuenta | PDF v1.21, pp. 47-49. El manual vigente define el endpoint, su parámetro y los conceptos que devuelve, pero no la estructura de la respuesta. | ☐ |

### Referencia

| # | Archivo | Dato a validar | Origen | Estado |
| --- | --- | --- | --- | --- |
| B33 | `reference/errors.mdx` | El caso de error “Ruta invalida” | Anexo Errores del PDF v1.21 (p. 50), presentado como alternativa al caso "Método sin acceso". No figura en el manual vigente. | ☐ |
| B34 | `reference/field-dictionary.mdx` | Las definiciones con origen “En revisión” | Anexo Diccionario del PDF v1.21 (p. 51), vía JSON. Todas las filas con Origen "En revisión" provienen de ese anexo, con nombres de mercado normalizados. | ☐ |
| B35 | `reference/market-data-entries.mdx` | La disponibilidad de cada entry en la API WebSocket | PDF v1.21, p. 41 (los entries están disponibles "tanto REST como WebSocket"). El manual vigente lista los entries, pero no indica explícitamente cuáles admite la suscripción WebSocket. | ☐ |
| B36 | `reference/market-data-entries.mdx` | La recomendación de usar TV para el volumen de instrumentos de A3 Mercados | PDF v1.21, p. 41. | ☐ |
| B37 | `reference/order-statuses.mdx` | Los estados PENDING_CANCEL, PENDING_REPLACE y PENDING_APPROVAL | Anexo Diccionario del PDF v1.21 (p. 51) para PENDING_CANCEL, PENDING_REPLACE y PENDING_APPROVAL. Los demás estados figuran en el manual vigente. | ☐ |
| B38 | `reference/order-statuses.mdx` | La asociación del estado CANCELLED al request de cancelación | PDF v1.21, pp. 28-29 (exclusión de CANCELLED del historial del request de alta). | ☐ |

### Snippets reutilizables

| # | Archivo | Dato a validar | Origen | Estado |
| --- | --- | --- | --- | --- |
| B39 | `snippets/instrument-detail-fields.mdx` | (aviso lo coloca cada página que usa el snippet) | PDF v1.21, pp. 14-16 y Anexo Diccionario (p. 51). Las descripciones vienen del diccionario anterior, excepto "cficode", que figura en el manual vigente. El aviso visible lo pone cada página que usa este snippet. | ☐ |
| B40 | `snippets/order-fields.mdx` | (aviso lo coloca cada página que usa el snippet) | PDF v1.21, pp. 27-34 y Anexo Diccionario (p. 51): accountId, instrumentId, price, orderQty, ordType, transactTime, avgPx, lastPx, lastQty, cumQty, leavesQty, text, y los estados de la lista que no figuran en el manual. El aviso visible lo pone cada página que usa este snippet. | ☐ |

## C. Tareas antes de publicar

- [ ] C1. **Logos y favicon:** `logo/light.svg`, `logo/dark.svg` (logo matriz OMS) y `favicon.svg` (isotipo de Primary) se **vectorizaron** a partir de los SVG recibidos, que en realidad contienen imágenes PNG incrustadas (el de matriz OMS, de solo 460 × 91 px). Pedir a diseño los archivos **vectoriales originales** (SVG con trazados o AI/EPS) y reemplazarlos. Color de las letras aplicado: `#1D1464` (en el archivo original era `#1D1482`).
- [ ] C2. **Imagen de arquitectura:** `images/arquitectura.svg` es un placeholder (ya actualizado a la paleta oficial; hoy no se usa en ninguna página). Reemplazar o eliminar.
- [ ] C3. **Autenticación de Mintlify para Risk API:** activar Authentication en modo parcial con handshake JWT u OAuth y emitir tokens con `groups: ["alyc-admin"]` desde el login de WebAdmin. Ver también C13: hoy la restricción está **quitada temporalmente** para revisión.
- [ ] C4. **Dominio del portal:** la autenticación por grupos requiere dominio propio o subdominio de Mintlify (no subpath). Definir el dominio (ej.: `docs.matrizoms.com.ar`).
- [ ] C5. **Links de herramientas** (`resources/ecosystem.mdx`): APIDoc (Swagger), cliente WebSocket web, GitHub, Postman, 3 guías de implementación, buenas prácticas de consumo y Google Colab. Agregar `href` a cada Card y quitar “Acceso: a confirmar”.
- [ ] C6. **Links de webinars** (`resources/webinars.mdx`): las 4 grabaciones.
- [ ] C7. **Portal de JIRA** (`support.mdx`): URL, quién puede cargar tickets, horarios y SLA.
- [ ] C8. **Número de versión vigente** de Matriz OMS API en `reference/changelog.mdx`.
- [ ] C9. **Diagrama de ciclo de vida** (`reference/order-statuses.mdx`): validar las transiciones con ingeniería (hoy se presenta como ilustrativo).
- [ ] C10. **Página `order-routing/status/by-order-id.mdx`:** según la respuesta de ingeniería, completar o quitar de `docs.json`.
- [ ] C11. **Playground de API:** hoy en modo `simple`. Si existe un ambiente demo público con CORS habilitado, evaluar el modo `interactive` y configurar `api.mdx.server`.
- [ ] C12. **Validación final:** correr `mint dev` y `mint broken-links` antes de cada publicación.

- [ ] C13. **⚠️ RESTRICCIÓN DE RISK API QUITADA TEMPORALMENTE (revisión sin SSO).** Para revisar la sección en vivo se hicieron dos cambios que **hay que revertir antes de salir a producción**:
  - Se quitó la línea `groups: ["alyc-admin"]` del frontmatter de `risk/overview.mdx`, `risk/positions.mdx`, `risk/detailed-positions.mdx` y `risk/account-report.mdx`. Para revertir, volver a agregarla debajo de `api:` (en `overview.mdx`, debajo de `icon:`).
  - Se cambió `"hidden": true` a `"hidden": false` en la pestaña "Risk API · Administradores ALyC" de `docs.json`. Mantenerla visible solo cuando la autenticación por grupos (C3) esté activa.
  - Mientras dure la revisión, cualquier persona con la URL del portal puede ver la documentación de Risk API. Preferir un **preview deployment** o un entorno protegido para revisarla.
- [x] C14. **Contraste de la paleta en Mintlify.** Resuelto el 19/11/2026. Configuración vigente: `primary` `#3BB58C`, `light` `#5AD1A8`, `dark` `#3BB58C`; fondo claro `#ECEFF4` y fondo oscuro `#0B111E` (paleta de capas). WCAG AA exige 4,5:1 para texto.
  - `light` `#5AD1A8` (enlaces, ítem activo del menú y resaltados en modo oscuro) sobre el fondo oscuro `#0B111E`: 10,0:1. Corregido: antes estaba en `#1D1464` y daba 1,19:1.
  - `dark` `#3BB58C` sobre el fondo oscuro (botones en modo oscuro): 7,3:1. Sin problemas.
  - Botones `#3BB58C` con texto `#0B111E`: 7,3:1.
  - **Decisión aceptada:** `primary` `#3BB58C` (enlaces y acentos en modo claro) da 2,2:1 sobre el fondo gris `#ECEFF4` y 2,6:1 sobre blanco, por debajo de 4,5:1. Se revisó en vivo y se mantiene así.
- [ ] C15. **Logo de Primary en el footer (`styles.css`).** Se agregó con CSS porque `docs.json` no tiene una propiedad nativa para un segundo logo en el footer. Verificar en vivo en modo claro, modo oscuro y mobile que quede bien ubicado junto al de matriz OMS y ajustar el selector `#footer::after` si hace falta. Las rutas `/logo/primary-*.svg` del CSS asumen que el portal se publica en la raíz de su dominio (no en un subpath). Igual que C1: `logo/primary-light.svg` y `logo/primary-dark.svg` están vectorizados desde un PNG; reemplazarlos por los vectoriales originales cuando estén disponibles.
- [ ] C16. **Videos del front DMA** (`introduction.mdx` y `websockets/overview.mdx`): verificar en vivo que existan en `/plataforma/` con estos nombres exactos (las rutas distinguen mayúsculas): `FavsLight.mp4`, `FrontMDdark.mp4`, `WidgetsLight.mp4` y `WidgetsDark.mp4`. Cada demo carga las dos versiones (clara y oscura) y el CSS muestra solo la que corresponde al modo: conviene que cada MP4 pese pocos MB (H.264, sin audio, 720p o 1080p) para no penalizar la carga de la portada.
- [ ] C17. **Tarjeta “Risk API” en la portada pública** (`introduction.mdx`): cuando se restaure la restricción por grupos (C3 y C13), los usuarios que no sean administradores de ALyC van a llegar a un 404 desde esa tarjeta. Decidir si se mantiene (con su etiqueta “Exclusivo administradores de ALyC”) o se quita de la portada.
- [x] C18. **Homologación y habilitación productiva** (`environments.mdx`): resuelto el 19/11/2026. El proceso oficial de 3 pasos (Demo, revisión de logs y sesión técnica, OK técnico y credenciales vía ALyC o Mesa de Operaciones) quedó documentado en `homologacion/proceso.mdx` y `environments.mdx` lo resume. El demo general es el ambiente de pruebas de la homologación. Lo que sigue abierto está en A50 a A54. Relacionado con A3 y A42 (código HTTP y cuerpo de la respuesta ante credenciales inválidas o token vencido): `authentication.mdx` describe causas y soluciones sin afirmar un código.
- [x] C19. **Habilitar el envío del formulario de homologación** (`homologacion/solicitud.mdx`): resuelto el 19/11/2026 (commit `aca3097`). El Apps Script está desplegado en el Google Workspace (dominio `primary.com.ar`) y su URL quedó pegada en `APPS_SCRIPT_URL`. Probado de punta a punta (ver C21). No subir `Codigo.gs` con el correo real al repositorio, que es público.
- [x] C20. **Archivos de más en el repositorio:** resuelto. `overview.mdx` en la raíz y las carpetas `docs-json-e-introduction/` y `docs-matriz-oms-navegacion-profundidad/` (esta última con un `styles.css` viejo) fueron eliminados; verificado en GitHub (404 en todos) el 25/11/2026.
- [x] C21. **Verificar el formulario de homologación como cliente externo** (`homologacion/solicitud.mdx`): resuelto el 19/11/2026. Con el acceso del despliegue en “Cualquier persona”, un envío desde una ventana de incógnito, sin sesión de Google, llegó como mail estructurado a Soporte APIs, generó la copia automática al correo externo y registró la fila en la Google Sheet.

## Resumen

| Tipo | Cantidad |
| --- | --- |
| A. Pendientes de definición técnica | 54 |
| B. Avisos `[REVISAR_VIGENCIA]` visibles en páginas | 39 |
| B. Marcas `[REVISAR_VIGENCIA]` en snippets (sin aviso propio) | 2 |
| C. Tareas antes de publicar | 21 |
