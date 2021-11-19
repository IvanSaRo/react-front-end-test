import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ brand, model, price, id, imgUrl }) => {
  return (
    <div className='item'>
      <img src={imgUrl} alt={model} className='item__img' />
      <div className='item__field'>{brand}</div>
      <div className='item__field'>{model}</div>
      <div className='item__field'>{price}€</div>
      <Link to={`./${id}`} className='item__link'>Mas...</Link>
    </div>
  )
}
