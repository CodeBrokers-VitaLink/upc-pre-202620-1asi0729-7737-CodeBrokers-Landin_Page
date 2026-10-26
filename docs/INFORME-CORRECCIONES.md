# Correcciones de la Landing Page VitaLink

Rama: `feature/vitalink.responsive`.

Se conservó el diseño original y se mejoró la adaptación de contenedores, imágenes, navegación y botones a pantallas pequeñas. Se añadieron foco visible, salto al contenido, cierre del menú con Escape y soporte para movimiento reducido. La navegación familiar apunta a secciones visibles y los enlaces legales abren avisos del prototipo.

Por indicación del responsable se retiraron el bloque de contacto, las redes ficticias y las secciones nuevas de presentación y demostración. Se mantuvieron los indicadores y las llamadas a la acción originales. La ausencia de correo/formulario y redes oficiales queda pendiente respecto de la rúbrica original.

## Verificación

La versión anterior a la retirada de los bloques pasó mediciones de desbordamiento en 320, 390, 768, 1024 y 1440 px, así como pruebas de menú, idioma y audiencia. Esas capturas se excluyen porque ya no representan la versión final. Después de las retiradas se verificaron la sintaxis JavaScript, los enlaces internos, las imágenes locales y la ausencia de errores de espacios en el diff. Se requiere actualizar las capturas visuales de la versión final publicada para el informe.

No se encontró un informe editable ni una configuración de alojamiento en este repositorio. Subir esta rama al remoto no confirma la actualización de un sitio público. Incorporar al informe la URL real, la revisión desplegada y capturas desde esa URL.

Para revisar localmente, ejecutar `python -m http.server 4174 --bind 127.0.0.1` desde la raíz y abrir `http://127.0.0.1:4174`.
