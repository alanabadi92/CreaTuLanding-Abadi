import React from 'react'
import './CartWidget.css'
import CartIcon from '/img/cart.png'

const CartWidget = () => {
  return (
    <div>
        <img class="iconoCarrito" src={CartIcon} alt="carrito"/><span>4</span>
    </div>
  )
}

export default CartWidget