import '../../styles/Hero.css'
import heroImg from '../../assets/Postres.png'

/**
 * Hero — Sección principal de bienvenida
 * 
 * Es lo primero que ve el visitante al abrir la página.
 * Muestra una imagen de fondo con overlay oscuro para legibilidad,
 * el nombre de la marca, una descripción breve del emprendimiento
 * y un botón CTA que lleva a la sección de productos.
 * 
 * La imagen se carga desde assets/Postres.png y se aplica con
 * object-fit para que cubra todo el espacio disponible.
 */
function Hero() {
  return (
    <section className="hero" id="descripcion">
      {/* Imagen de fondo del hero */}
      <img src={heroImg} alt="Postres artesanales de El Rincón de los Postres" className="hero-bg" />

      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <div className="hero-overlay"></div>

      {/* Contenido del hero */}
      <div className="hero-content">
        <span className="hero-badge">🍰 Postres Artesanales</span>
        <h1 className="hero-title">El Rincón de los Postres</h1>
        <p className="hero-description">
          Somos un emprendimiento artesanal en Rionegro, Antioquia, dedicado a endulzar 
          tus días con recetas únicas y caseras. Preparamos Napoleón, tiramisú, brownies, 
          galletas y más, con ingredientes frescos y de calidad.
        </p>
        <div className="hero-details">
          <span>📦 Pedidos al por mayor y por unidad</span>
          <span>📍 Entregas en Rionegro, Antioquia</span>
        </div>
        <a href="#productos" className="hero-cta">
          Ver Nuestros Postres
        </a>
      </div>
    </section>
  )
}

export default Hero
