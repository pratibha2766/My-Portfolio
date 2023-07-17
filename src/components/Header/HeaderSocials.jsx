import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/pratibha-borode-568086144/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/pratibha2766?tab=repositories" target="blank"><FaGithub/></a>
       
    </div>
  )
}
