import React from 'react'
import PsicommerceLogo from '/img/enneagram.png'
import './Title.css'

const Title = () => {
  return (
    <div class="bloqueSuperior">
        <ul>
            <li class="elementoTitu"><h1 class="textoTitu" >Psicommerce</h1></li>
            <li class="elementoTitu"><img class="logoTitu" src={PsicommerceLogo} alt="Psicommerce logo" /></li>
        </ul>

    </div>
  )
}

export default Title