import React from 'react'
import './header.css'
import Cta from './CTA'
import ME from './../../assets/me_.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="home">
      <div className='container header__container'>
        <h5>Hi, I&apos;m</h5>
        <h1>Gabor Alexandru-Gabriel</h1>
        <h5 className='text-light'>Full-Stack Developer building practical digital products</h5>
        <Cta />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='Portrait of Gabor Alexandru-Gabriel' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
