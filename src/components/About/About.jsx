import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/ME.jpg'
export const About = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
    
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
              <img src={ME} alt="About Image"/>
        </div>
      </div>
    


    <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years</small>
        </article>

        <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>3 Projects Completed</small>
        </article>
       
      </div>

      <p>
        I am Software Engineer with good Web development skills, communication and interpersonal skills.
        Looking forward to deploy my experience as Web Developer to create value for an organiation.   
      </p>
      <a href="#contact" className="btn">Let's Talk</a>
    </div>
    </div>
    </section>
  )
}
