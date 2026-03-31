import './App.css'
import NavBar from './components/layout/NavBar'
import Hero from './components/sections/Hero'
import Products from './components/sections/Products'
import Contacts from './components/sections/Contacts'
import UrlWhatsApp from './components/layout/UrlWhatsApp'

/**
 * App — Componente raíz de la aplicación
 * 
 * Estructura de la página:
 * 1. NavBar    → Barra de navegación sticky con links y menú hamburguesa
 * 2. Hero      → Sección principal con imagen de fondo y CTA
 * 3. Products  → Catálogo de postres en grid de cards
 * 4. Contacts  → Información de contacto, redes sociales y footer
 * 5. WhatsApp  → Botón flotante de WhatsApp (esquina inferior derecha)
 * 
 * Cada sección maneja su propio título internamente,
 * lo que mantiene el código modular y organizado.
 */
function App() {
  return (
    <>
      {/* Navegación principal (sticky en la parte superior) */}
      <NavBar />

      {/* Contenido principal de la página */}
      <main className="main-content">
        <Hero />
        <Products />
        <Contacts />
      </main>

      {/* Botón flotante de WhatsApp — siempre visible
          para que el visitante pueda contactar fácilmente */}
      <UrlWhatsApp flotante />
    </>
  )
}

export default App
