import Boton from '../ui/BotonesBarra'
import logo from '../../assets/Logo-Rincon-postres.jpg'
import { useState } from 'react'

function NavBar() {

  const [abierto, setAbierto] = useState(false)

  return (
    <div className="cont_NavBar">
        <img src={logo} alt="Logo de El Rincon De Los Postres" className="logo" />


        {/* Botón hamburguesa */}
      <div 
        className="menu-icon" 
        onClick={() => setAbierto(!abierto)}
        >
          ☰
      </div>
        <ul className={`menu ${abierto ? "activo" : ""}`}> 
        <Boton 
        link= '#'
        texto= 'EL RINCON DE LOS POSTRES'
        />
        <Boton 
        link= '#descripcion'
        texto= 'DESCRIPCION'
        />
        <Boton 
        link= '#productos'
        texto= 'PRODUCTOS'
        />
        <Boton 
        link= '#contactanos'
        texto= 'CONTACTANOS'
        />
        </ul>
    </div>
  )
}

export default NavBar
