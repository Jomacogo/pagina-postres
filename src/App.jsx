import './App.css'
import NavBar from './components/layout/NavBar'
import Hero from './components/sections/Hero'
import Products from './components/sections/Products'
import UrlWhatsApp from './components/layout/UrlWhatsApp'
import Contacts from './components/sections/Contacts'

function App() {
  

  return (
    
      <div className="cont">
        <NavBar />
        <p className='titulos' id='descripcion'>DESCRIPCION</p>
        <Hero />
        <p className='titulos' id='productos'>PRODUCTO</p>   
        <Products />
        {/* <UrlWhatsApp /> */}
        <p className='titulos' id='contactanos'>CONTACTANOS</p>
        <Contacts />
      </div>
    
  )
}

export default App
