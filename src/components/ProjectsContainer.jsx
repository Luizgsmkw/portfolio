import React from 'react'
import {AiFillGithub, AiOutlineGlobal} from 'react-icons/ai'
import eVinho from '../img/eVinho.png'
import '../styles/components/projectsContainer.sass'
import sunnyside from '../img/Sunnyside.png'
import filmax from '../img/filmax.png'
import cura from '../img/cura.png'
import todo from '../img/todo-list.png'

const iconProjects = [
    {name: 'github', icon: <AiFillGithub/>},
    {name: 'global', icon: <AiOutlineGlobal/>}
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
        </div>
    </section>
  )
}

export default ProjectsContainer