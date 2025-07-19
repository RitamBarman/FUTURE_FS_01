import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me-new.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h2>Hello, I'm</h2>
          <h1>Ritam Barman</h1>
          <h3 className="text-light">Software Engineer Undergraduate</h3>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

  )
}

export default Header