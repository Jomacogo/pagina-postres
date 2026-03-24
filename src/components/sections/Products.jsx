import React from 'react'
import Producto from '../layout/producto'
import fotoNapoleon from "../../assets/Postres.png"

function Products() {

  

  return (
    <div>
      <section className='productos'>
        <Producto 
        foto = {fotoNapoleon}
        descripcionFoto = "POSTRE DE NAPOLEON"
        nombreProducto = "NAPOLEON"
        precioProducto = "$4500"
        descripcionProducto = "Este es un rico postre de Napoleon de tres leches asado con galletas"
        />
        <Producto 
        foto = {fotoNapoleon}
        descripcionFoto = "POSTRE DE MARACUYA"
        nombreProducto = "MARACUYA"
        precioProducto = "$4500"
        descripcionProducto = "Este es un rico postre de Napoleon de tres leches asado con galletas"
        />
        <Producto 
        foto = {fotoNapoleon}
        descripcionFoto = "POSTRE DE CHOCOLATE"
        nombreProducto = "CHOCOLATE"
        precioProducto = "$4500"
        descripcionProducto = "Este es un rico postre de Napoleon de tres leches asado con galletas"
        />
        <Producto 
        foto = {fotoNapoleon}
        descripcionFoto = "POSTRE DE MORA"
        nombreProducto = "MORA"
        precioProducto = "$4500"
        descripcionProducto = "Este es un rico postre de Napoleon de tres leches asado con galletas"
        />
      </section>
    </div>
  )
}

export default Products
