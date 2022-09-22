import React from 'react'
import '../styles/components/socialNetworks.sass'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn/>},
    {name: 'github', icon: <FaGithub/>}
]
const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        
            <a href="https://www.linkedin.com/in/luizmartinss/" target='_blank'  className='social-btn' id={socialNetworks[0].name}>
                {socialNetworks[0].icon}
            </a>

            <a href="https://github.com/Luizgsmkw" target='_blank'  className='social-btn' id={socialNetworks[1].name}>
                {socialNetworks[1].icon}
            </a>
        
    </section>
  )
}

export default SocialNetworks