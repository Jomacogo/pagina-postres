import '../../styles/Contacts.css'
import UrlWhatsApp from '../layout/UrlWhatsApp'

/**
 * Contacts — Sección de contacto y footer de la página
 * 
 * Dividida en tres bloques:
 * 1. "Quiénes Somos" — Historia breve del emprendimiento
 * 2. "Contáctanos" — WhatsApp y teléfonos de contacto
 * 3. "Redes Sociales" — Links a Instagram y TikTok
 * 
 * Al final incluye un mini-footer con copyright.
 * 
 * El layout usa CSS Grid:
 * - Desktop: 3 columnas
 * - Tablet/Móvil: 1 columna apilada
 */
function Contacts() {
  return (
    <footer id="contactanos">
      {/* Título de la sección */}
      <div className="contact-header">
        <h2 className="section-title">Contáctanos</h2>
      </div>

      {/* Grid de 3 columnas con la info de contacto */}
      <section className="contact-grid container">

        {/* Bloque 1: Quiénes Somos */}
        <div className="contact-card">
          <div className="contact-card__icon">💛</div>
          <h3 className="contact-card__title">Quiénes Somos</h3>
          <p>
            Somos una pareja que ama hacer postres.
          </p>
          <p>
            Disfrutamos cada proceso y ponemos cariño y dedicación en todo lo que
            hacemos, para que quienes nos apoyen puedan disfrutar de algo realmente
            especial.
          </p>
        </div>

        {/* Bloque 2: Información de contacto + WhatsApp */}
        <div className="contact-card">
          <div className="contact-card__icon">📲</div>
          <h3 className="contact-card__title">Escríbenos</h3>
          <p>
            ¿Quieres hacer un pedido o tienes alguna pregunta?
            Estaremos felices de atenderte 💬
          </p>

          {/* Botón de WhatsApp en línea */}
          <UrlWhatsApp />

          <div className="contact-card__phones">
            <p className="contact-card__phone-label">También puedes llamarnos:</p>
            <a href="tel:+573107061769" className="contact-card__phone">(+57) 310 706 1769</a>
            <a href="tel:+573229156278" className="contact-card__phone">(+57) 322 915 6278</a>
          </div>
        </div>

        {/* Bloque 3: Redes Sociales */}
        <div className="contact-card">
          <div className="contact-card__icon">🌟</div>
          <h3 className="contact-card__title">Redes Sociales</h3>
          <p>Síguenos para ver nuestras creaciones más recientes:</p>

          <div className="social-links">
            <a
              href="https://www.instagram.com/el_rincondelospostres21/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link--instagram"
            >
              📸 Instagram
            </a>
            <a
              href="https://www.tiktok.com/@elrincondelospostres21"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link--tiktok"
            >
              🎵 TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Mini-footer con copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} El Rincón de los Postres — Rionegro, Antioquia 🍰</p>
      </div>
    </footer>
  )
}

export default Contacts
