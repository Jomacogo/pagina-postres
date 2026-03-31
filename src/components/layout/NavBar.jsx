import { useState } from 'react'
import Boton from '../ui/BotonesBarra'
import logo from '../../assets/Logo-Rincon-postres.jpg'
import '../../styles/NavBar.css'

/**
 * NavBar — Barra de navegación principal
 * 
 * Funcionalidades:
 * - Logo de la marca a la izquierda
 * - Links de navegación a la derecha (Inicio, Descripción, Productos, Contáctanos)
 * - Menú hamburguesa en pantallas pequeñas con animación (☰ → ✕)
 * - Se cierra automáticamente al seleccionar un enlace en móvil
 * - Posición sticky (siempre visible al hacer scroll)
 */
function NavBar() {
  const [abierto, setAbierto] = useState(false)

  /* Cierra el menú móvil al hacer click en un enlace */
  const cerrarMenu = () => setAbierto(false)

  return (
    <nav className="cont_NavBar">
      {/* Logo de la marca */}
      <img src={logo} alt="Logo de El Rincón De Los Postres" className="logo" />

      {/* Botón hamburguesa — solo visible en móvil
          Las 3 líneas se animan a formar una X al abrirse */}
      <div
        className={`menu-icon ${abierto ? 'abierto' : ''}`}
        onClick={() => setAbierto(!abierto)}
        aria-label="Abrir menú de navegación"
        role="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Lista de enlaces de navegación */}
      <ul className={`nav-menu ${abierto ? 'activo' : ''}`}>
        <Boton link="#" texto="Inicio" onClick={cerrarMenu} />
        <Boton link="#descripcion" texto="Descripción" onClick={cerrarMenu} />
        <Boton link="#productos" texto="Productos" onClick={cerrarMenu} />
        <Boton link="#contactanos" texto="Contáctanos" onClick={cerrarMenu} />
      </ul>
    </nav>
  )
}

export default NavBar
