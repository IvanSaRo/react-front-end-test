import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

export const Cart = ({ cart }) => {
  return (
    <div className='cart'>
      <FaShoppingCart className='cart__logo' size='2rem' />
      <h1>
        {cart.length}
      </h1>
    </div>
  )
}
