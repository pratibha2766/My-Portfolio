import React from 'react'
import './header.css'
import {CTA} from './CTA'
import ME from '../../assets/ME.jpg'
import { HeaderSocials } from './HeaderSocials'
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Pratibha Borode</h1>
        <h5 className="text-light">React Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        
        <div className="me">
          <img src={ME} alt="me"/>
        </div>

    
      </div>
    </header>
  )
}
