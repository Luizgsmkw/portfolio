import React from 'react'
import {DiHtml5, DiCss3, DiSass, DiReact, DiAngularSimple, DiJsBadge, DiBootstrap, DiGithub} from 'react-icons/di'
import Ts from '../img/icons8-typescript-48.png'
import '../styles/components/technologiesContainer.sass'

const technologies = [
  {id: "html", name: 'HTML5', icon: <DiHtml5/>},
  {id: "css", name: 'CSS3', icon: <DiCss3/>},
  {id: "javascript", name: 'JAVASCRIPT', icon: <DiJsBadge/>},
  {id: "typescript", name: 'TYPESCRIPT', icon: <img src={Ts} alt="Icon ts"/>},
  {id: "react", name: 'REACT', icon: <DiReact/>},
  {id: "angular", name: 'ANGULAR', icon: <DiAngularSimple/>},
  {id: "sass", name: 'SASS', icon: <DiSass/>},
  {id: "bootstrap", name: 'BOOTSTRAP', icon: <DiBootstrap/>},
  {id: "github", name: 'GITHUB', icon: <DiGithub/>},

]
const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies'>
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer