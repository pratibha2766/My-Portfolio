import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio1.jpg'

const data =[
  {
    id:1,
    image:IMG1,
    title:'MY PORTFOLIO Website',
    github:'https://github.com'

  },

  {
    id:2,
    image:IMG4,
    title:'Online Bakery Website',
    github:'https://github.com/pratibha2766/Cake-N-Flower-Website'

  },

  {
    id:3,
    image:IMG3,
    title:'This is a portfolio item title',
    github:'https://github.com'

  }
]
export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github})=>{
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' tagert='_blank'>GitHub</a>
              </div>
              </article>
            )

          })
        }
      </div>
    </section>
  )
}
