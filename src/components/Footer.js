import React from 'react'
import '../assets/styles/components/footer.css'

export default function Footer() {
  return (
    <footer className='container-footer'>
      <div className='content-footer'>
        <div className='footer-info'>
          <p className='info-title'>Address</p>
          <p>Värnmlandsgatan 14 <br /> 64136 Katrineholm</p>

        </div>
        <div className='footer-info'>
          <p className='info-title'>Kontakt</p>
          <p>46 (0) 707 571 576 <br /> peter@imtperformance.se</p>


        </div>
      </div>
    </footer>
  )
}
