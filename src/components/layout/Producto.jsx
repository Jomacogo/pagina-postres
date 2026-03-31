import '../../styles/Productos.css'

/**
 * Producto — Card individual de un postre
 * 
 * Componente reutilizable que muestra la información de un postre
 * en formato de card (tarjeta). Se usa dentro de Products.jsx.
 * 
 * Props:
 * - foto: ruta de la imagen del postre
 * - descripcionFoto: texto alt para accesibilidad
 * - nombreProducto: nombre del postre (ej: "Napoleón")
 * - precioProducto: precio formateado (ej: "$4.500")
 * - descripcionProducto: breve descripción del postre
 * 
 * Diseño:
 * - Imagen rectangular arriba con object-fit cover
 * - Badge de precio superpuesto sobre la imagen
 * - Nombre y descripción debajo
 * - Efecto hover: se eleva y la sombra se intensifica
 */
function Producto({ foto, descripcionFoto, nombreProducto, precioProducto, descripcionProducto }) {
  return (
    <article className="product-card">
      {/* Contenedor de la imagen con badge de precio */}
      <div className="product-card__image-wrapper">
        <img src={foto} alt={descripcionFoto} className="product-card__image" />
        <span className="product-card__price">{precioProducto}</span>
      </div>

      {/* Información del producto */}
      <div className="product-card__info">
        <h3 className="product-card__name">{nombreProducto}</h3>
        <p className="product-card__description">{descripcionProducto}</p>
      </div>
    </article>
  )
}

export default Producto
