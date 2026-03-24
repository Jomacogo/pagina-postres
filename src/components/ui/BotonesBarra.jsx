import React from "react"
import '../../styles/NavBar.css' 

function Boton({ link, texto }) {
  
  return (
    <div className="contBoton">
      <a href={link} className="boton-barra">{texto}</a>
    </div>
  )
}

export default Boton