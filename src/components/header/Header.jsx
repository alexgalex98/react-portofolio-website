import React from 'react'
import './header.css'
import Cta from './CTA'
import ME from './../../assets/me_.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gabor Alexandru-Gabriel</h1>
        <h5 className="text-light">Junior Fullstack Developer</h5>
        <Cta/>
        <HeaderSocials/>
        
        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        
      </div>
    </header>
  )
}

export default Header