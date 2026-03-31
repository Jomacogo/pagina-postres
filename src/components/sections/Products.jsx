import Producto from '../layout/Producto'
import fotoPostre from '../../assets/Postres.png'

/**
 * Products — Sección que muestra el catálogo de postres
 * 
 * Renderiza un grid de cards con todos los postres disponibles.
 * Cada card se genera con el componente <Producto />.
 * 
 * Nota: Actualmente todos los postres usan la misma imagen
 * (Postres.png). Cuando haya fotos individuales, solo hay 
 * que cambiar la prop `foto` de cada <Producto />.
 * 
 * El grid es responsive:
 * - Desktop: 4 columnas
 * - Tablet: 2 columnas  
 * - Móvil: 1 columna
 */
function Products() {
  return (
    <section className="products-section" id="productos">
      <div className="container">
        {/* Título de la sección */}
        <h2 className="section-title">Nuestros Postres</h2>

        {/* Grid de cards de productos */}
        <div className="products-grid">
          <Producto
            foto={fotoPostre}
            descripcionFoto="Postre de Napoleón artesanal"
            nombreProducto="Napoleón"
            precioProducto="$4.500"
            descripcionProducto="Delicioso postre de tres leches con capas de galleta crujiente, cremoso y suave."
          />
          <Producto
            foto={fotoPostre}
            descripcionFoto="Postre de Maracuyá artesanal"
            nombreProducto="Maracuyá"
            precioProducto="$4.500"
            descripcionProducto="Postre tropical con crema de maracuyá fresca, un toque ácido y dulce perfecto."
          />
          <Producto
            foto={fotoPostre}
            descripcionFoto="Postre de Chocolate artesanal"
            nombreProducto="Chocolate"
            precioProducto="$4.500"
            descripcionProducto="Intenso sabor a chocolate con textura suave y rica, ideal para los amantes del cacao."
          />
          <Producto
            foto={fotoPostre}
            descripcionFoto="Postre de Mora artesanal"
            nombreProducto="Mora"
            precioProducto="$4.500"
            descripcionProducto="Fresco y afrutado, con mora natural que aporta un sabor único y delicioso."
          />
        </div>
      </div>
    </section>
  )
}

export default Products
