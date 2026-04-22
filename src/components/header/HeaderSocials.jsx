import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/alexandru-gabriel-gabor-3b1b791b2/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/alexgalex98' target='_blank' rel='noreferrer' aria-label='GitHub'>
        <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocials
