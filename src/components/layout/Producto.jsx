import React from 'react'
import "../../styles/Productos.css"

function Producto({ foto, descripcionFoto, nombreProducto, precioProducto, descripcionProducto}) {
  
  return (
    <div className="cont-products" id="#producto">
      <img src={foto} alt={descripcionFoto} className="foto-producto" />
      <h2 className="contenido-producto">{nombreProducto}</h2>
      <p className="contenido-producto">{precioProducto}</p>
      <p className="contenido-producto">{descripcionProducto}</p>
    </div>
  )
}

export default Producto
