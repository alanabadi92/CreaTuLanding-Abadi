import React from 'react'
import PsicommerceLogo from '/img/enneagram.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const Nav = () => {
  return (
    <div class="barraNav">
        <ul>
            <li class="elementoNav"><img class="logoNav" src={PsicommerceLogo} alt="Psicommerce logo" /></li>
            <a class="linkNav" href="../html/quienes.html"><li class="elementoNav">Quiénes somos?</li></a>
            <a class="linkNav" href="../html/que.html"><li class="elementoNav">Qué ofrecemos?</li></a>
            <a class="linkNav" href="../html/cuenta.html"><li class="elementoNav">Mi cuenta</li></a>
            <a class="linkNav" href="../html/carrito.html"><li class="elementoNav"><CartWidget/></li></a>
        </ul>
    </div>
  )
}

export default Nav