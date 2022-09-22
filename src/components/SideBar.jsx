import React from 'react'
import avatar from '../img/WhatsApp Image 2022-08-01 at 18.52.04.jpeg'
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import curriculo from '../curriculo/Luiz-Martins.pdf'

const SideBar = () => {
  return (
    <aside id='sidebar'>
      <img src={avatar} alt="Foto de perfil" />
      <h1 className='name'>Luiz Martins</h1>
      <p className='title'>Desenvolvedor Front-end</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href={curriculo} download="Luiz-Martins.pdf" type="application/pdf" className="btn">Download Currículo</a>
    </aside>
  )
}

export default SideBar