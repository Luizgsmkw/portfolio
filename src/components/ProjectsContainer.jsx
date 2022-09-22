import React from 'react'
import '../styles/components/projectsContainer.sass'

import {AiFillGithub, AiOutlineGlobal} from 'react-icons/ai'
import {DiHtml5, DiCss3, DiSass, DiReact, DiAngularSimple, DiJsBadge, DiBootstrap, DiGithub} from 'react-icons/di'
import Ts from '../img/icons8-typescript-48.png'

import eVinho from '../img/eVinho.png'
import sunnyside from '../img/Sunnyside.png'
import filmax from '../img/filmax.png'
import cura from '../img/cura.png'
import todo from '../img/todo-list.png'
import github from '../img/Api-github.png'

import fylo from '../img/fylo.png'

const iconProjects = [
    {name: 'github', icon: <AiFillGithub/>},
    {name: 'global', icon: <AiOutlineGlobal/>},
    {name: 'HTML5', icon: <DiHtml5/>},
    {name: 'CSS3', icon: <DiCss3/>},
    {name: 'JAVASCRIPT', icon: <DiJsBadge/>},
    {name: 'TYPESCRIPT', icon: <img src={Ts} alt="Icon ts"/>},
    {name: 'REACT', icon: <DiReact/>},
    {name: 'ANGULAR', icon: <DiAngularSimple/>},
    {name: 'SASS', icon: <DiSass/>},
    {name: 'BOOTSTRAP', icon: <DiBootstrap/>},
    {name: 'GITHUB', icon: <DiGithub/>},
]
const ProjectsContainer = () => {
  return (
    <section className='projects-container'>
        <h2>Projetos</h2>
        <div className='projects'>
            <div className='project'>
                <a href="https://luizgsmkw.github.io/e-wine/" target='_blank'><img src={eVinho} alt="Projeto e-vinho" /></a>
                <h3></h3>
                <div className='projects-links'>
                    <a href="https://github.com/Luizgsmkw/e-wine" target='_blank'  className='social-btn' id={iconProjects[0].name}>
                    {iconProjects[0].icon}
                    <p>Repositório</p>
                    </a>
                    <a href="https://luizgsmkw.github.io/e-wine/" target='_blank'  className='social-btn' id={iconProjects[1].name}>
                    {iconProjects[1].icon}
                    <p>Deploy</p>
                    </a>
                </div>
                {/* <p className='technology'>tecnologias: {iconProjects[7].icon} {iconProjects[5].icon} {iconProjects[9].icon} </p> */}
            </div>
            <div className='project'>
                <a href="https://luizgsmkw.github.io/Sunnyside/" target='_blank'><img src={sunnyside} alt="Projeto sunnyside" /></a>
                <h3></h3>
                <div className='projects-links'>
                    <a href="https://github.com/Luizgsmkw/Sunnyside" target='_blank'  className='social-btn' id={iconProjects[0].name}>
                    {iconProjects[0].icon}
                    <p>Repositório</p>
                    </a>
                    <a href="https://luizgsmkw.github.io/Sunnyside/" target='_blank'  className='social-btn' id={iconProjects[1].name}>
                    {iconProjects[1].icon}
                    <p>Deploy</p>
                    </a>
                </div>
            </div>
            <div className='project'>
                <a href="https://filmax.vercel.app/" target='_blank'><img src={filmax} alt="Projeto filmax" /></a>
                <h3></h3>
                <div className='projects-links'>
                    <a href="https://github.com/Luizgsmkw/filmax" target='_blank'  className='social-btn' id={iconProjects[0].name}>
                    {iconProjects[0].icon}
                    <p>Repositório</p>
                    </a>
                    <a href="https://filmax.vercel.app/" target='_blank'  className='social-btn' id={iconProjects[1].name}>
                    {iconProjects[1].icon}
                    <p>Deploy</p>
                    </a>
                </div>
            </div>
            <div className='project'>
                <a href="https://luizgsmkw.github.io/Cura-BH/" target='_blank'><img src={cura} alt="Projeto cura-arte" /></a>
                <h3></h3>
                <div className='projects-links'>
                    <a href="https://github.com/Luizgsmkw/Cura-BH" target='_blank'  className='social-btn' id={iconProjects[0].name}>
                    {iconProjects[0].icon}
                    <p>Repositório</p>
                    </a>
                    <a href="https://luizgsmkw.github.io/Cura-BH/" target='_blank'  className='social-btn' id={iconProjects[1].name}>
                    {iconProjects[1].icon}
                    <p>Deploy</p>
                    </a>
                </div>
            </div>
            <div className='project'>
                <a href="https://luizgsmkw.github.io/todo-list/" target='_blank'><img src={todo} alt="Projeto todo-list" /></a>
                <h3></h3>
                <div className='projects-links'>
                    <a href="https://github.com/Luizgsmkw/todo-list" target='_blank'  className='social-btn' id={iconProjects[0].name}>
                    {iconProjects[0].icon}
                    <p>Repositório</p>
                    </a>
                    <a href="https://luizgsmkw.github.io/todo-list/" target='_blank'  className='social-btn' id={iconProjects[1].name}>
                    {iconProjects[1].icon}
                    <p>Deploy</p>
                    </a>
                </div>
            </div>
            <div className='project'>
                <a href="https://luizgsmkw.github.io/ProjetoGitHub/" target='_blank'><img src={github} alt="Projeto github" /></a>
                <h3></h3>
                <div className='projects-links'>
                    <a href="https://github.com/Luizgsmkw/ProjetoGitHub" target='_blank'  className='social-btn' id={iconProjects[0].name}>
                    {iconProjects[0].icon}
                    <p>Repositório</p>
                    </a>
                    <a href="https://luizgsmkw.github.io/ProjetoGitHub/" target='_blank'  className='social-btn' id={iconProjects[1].name}>
                    {iconProjects[1].icon}
                    <p>Deploy</p>
                    </a>
                </div>
            </div>
            <div className='project'>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xOopgGz-YiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <h3></h3>
                <div className='projects-links'>
                    <a href="https://github.com/Luizgsmkw/Front_InfoClick" target='_blank'  className='social-btn' id={iconProjects[0].name}>
                    {iconProjects[0].icon}
                    <p>Repositório Front-end</p>
                    </a>
                    <a href="https://github.com/Luizgsmkw/Back_InfoClick" target='_blank'  className='social-btn' id={iconProjects[0].name}>
                    {iconProjects[0].icon}
                    <p>Repositório Back-end</p>
                    </a>
                </div>
            </div>
            <div className='project'>
                <a href="https://luizgsmkw.github.io/Fylo-/" target='_blank'><img src={fylo} alt="Projeto fylo" /></a>
                <h3></h3>
                <div className='projects-links'>
                    <a href="https://github.com/Luizgsmkw/Fylo-" target='_blank'  className='social-btn' id={iconProjects[0].name}>
                    {iconProjects[0].icon}
                    <p>Repositório</p>
                    </a>
                    <a href="https://luizgsmkw.github.io/Fylo-/" target='_blank'  className='social-btn' id={iconProjects[1].name}>
                    {iconProjects[1].icon}
                    <p>Deploy</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectsContainer