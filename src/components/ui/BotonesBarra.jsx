/**
 * Boton — Componente reutilizable para los links del navbar
 * 
 * Props:
 * - link: URL o anchor (#seccion) al que dirige el enlace
 * - texto: Texto visible del botón
 * - onClick: Función opcional que se ejecuta al hacer click
 *            (usado para cerrar el menú móvil)
 */
function Boton({ link, texto, onClick }) {
  return (
    <li>
      <a href={link} className="nav-link" onClick={onClick}>
        {texto}
      </a>
    </li>
  )
}

export default Boton