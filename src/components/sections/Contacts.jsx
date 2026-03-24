import React from 'react'
import '../../styles/Contacts.css'
import UrlWhatsApp from '../layout/UrlWhatsApp'

function Contacts() {
  return (
    <section className='contenedor-principal'>
      <div className="contenedor">
        <h1 className='titulo'>QUIENES SOMOS</h1>
        <p>Somos una pareja que ama hacer postres.</p>
        <br />
        <p>Disfrutamos cada proceso y ponemos cariño y dedicación en todo lo que hacemos, para que quienes nos apoyen puedan disfrutar de algo realmente especial.</p>
      </div>
      <div className="contenedor">
        <h1 className='titulo'>CONTACTANOS</h1>
        <p>¿Quieres hacer un pedido o tienes alguna pregunta?<br/>
          Escríbenos por WhatsApp, estaremos felices de atenderte 💬
        </p>
        <p>📲 WhatsApp principal
          (+57 350 686 4194)
        </p>
          <UrlWhatsApp />
        <p>También puedes comunicarte con nosotros en los siguientes numeros: 
          <br />
          (+57 310 706 1769)
          <br />
          (+57 322 915 6278)
        </p>
      </div>
      <div className="contenedor">
        <h1 className='titulo'>REDES SOCIALES</h1>
        <a href="https://www.instagram.com/el_rincondelospostres21/" className='instagram'>INSTAGRAM</a>
        <a href="https://www.tiktok.com/@elrincondelospostres21" className="tiktok">TIKTOK</a>
      </div>
    </section>
  )
}

export default Contacts
