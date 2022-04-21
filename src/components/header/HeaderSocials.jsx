import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
         <a href="https://www.linkedin.com/in/alexandru-gabriel-gabor-3b1b791b2/" target="_blank"><BsLinkedin/></a>
         <a href="https://github.com/alexgalex98" target="_blank"><FaGithub/></a>
         {/* <a href="https:/dribbble.com" target="_blank"><BsDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials