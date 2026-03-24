import React from 'react'
import "../../styles/BotonWhatsApp.css"

function UrlWhatsApp() {

  const telefono = "573506864194"
  const mensaje = "Hola, me gustaría más información sobre los postres de El Rincón de los Postres"

  const mensajeCodificado = encodeURIComponent(mensaje)

  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

  return (
    <div className='url-whatsapp'>
      
      <a href={urlWhatsApp} >
        <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="" />
        Escribir ahora
      </a>
    </div>
  )
}

export default UrlWhatsApp
