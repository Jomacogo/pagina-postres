import '../../styles/BotonWhatsApp.css'

/**
 * UrlWhatsApp — Botón de contacto por WhatsApp
 * 
 * Se usa en dos contextos:
 * 1. Dentro de la sección de Contacto (inline)
 * 2. Como botón flotante fijo en la esquina inferior derecha
 *    (siempre visible para acceso rápido)
 * 
 * Al hacer click, abre WhatsApp (web o app) con un
 * mensaje predefinido listo para enviar.
 * 
 * Props:
 * - flotante: si es true, se muestra como botón flotante
 *             si es false/undefined, se muestra como botón inline
 */
function UrlWhatsApp({ flotante = false }) {
  /* Número de WhatsApp del negocio (sin espacios ni guiones) */
  const telefono = '573506864194'

  /* Mensaje predefinido que se envía al abrir el chat */
  const mensaje = 'Hola, me gustaría más información sobre los postres de El Rincón de los Postres 🍰'

  /* Codificar el mensaje para incluirlo en la URL */
  const mensajeCodificado = encodeURIComponent(mensaje)
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`

  /* Si es flotante, renderizar el botón fijo en la esquina */
  if (flotante) {
    return (
      <a
        href={urlWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-flotante"
        aria-label="Contactar por WhatsApp"
      >
        {/* Ícono SVG de WhatsApp */}
        <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.302 22.602c-.388 1.094-1.938 2.002-3.17 2.266-.844.178-1.946.32-5.656-1.216-4.748-1.964-7.804-6.79-8.04-7.104-.226-.314-1.9-2.53-1.9-4.826s1.2-3.426 1.626-3.894c.426-.468.93-.586 1.24-.586.308 0 .618.002.888.016.286.014.668-.108.1044.796.388.932 1.332 3.252 1.448 3.488.116.236.194.512.038.826-.156.314-.234.51-.468.786-.234.274-.492.612-.702.822-.234.234-.478.488-.206.958.274.468 1.216 2.006 2.612 3.25 1.794 1.596 3.304 2.09 3.772 2.324.468.234.742.196 1.016-.118.274-.314 1.176-1.37 1.49-1.838.314-.468.626-.39 1.056-.234.43.156 2.748 1.296 3.216 1.532.468.234.78.352.896.548.116.196.116 1.132-.272 2.224z"/>
        </svg>
      </a>
    )
  }

  /* Botón inline (dentro de la sección de contacto) */
  return (
    <a
      href={urlWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-inline"
    >
      {/* Ícono SVG de WhatsApp */}
      <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.302 22.602c-.388 1.094-1.938 2.002-3.17 2.266-.844.178-1.946.32-5.656-1.216-4.748-1.964-7.804-6.79-8.04-7.104-.226-.314-1.9-2.53-1.9-4.826s1.2-3.426 1.626-3.894c.426-.468.93-.586 1.24-.586.308 0 .618.002.888.016.286.014.668-.108.1044.796.388.932 1.332 3.252 1.448 3.488.116.236.194.512.038.826-.156.314-.234.51-.468.786-.234.274-.492.612-.702.822-.234.234-.478.488-.206.958.274.468 1.216 2.006 2.612 3.25 1.794 1.596 3.304 2.09 3.772 2.324.468.234.742.196 1.016-.118.274-.314 1.176-1.37 1.49-1.838.314-.468.626-.39 1.056-.234.43.156 2.748 1.296 3.216 1.532.468.234.78.352.896.548.116.196.116 1.132-.272 2.224z"/>
      </svg>
      Escribir por WhatsApp
    </a>
  )
}

export default UrlWhatsApp
