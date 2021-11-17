import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ brand, model, price, id }) => {
  return (
    <div id='item'>
      <div>{brand}</div>
      <div>{model}</div>
      <div>{price}</div>
      <Link to={`./${id}`}>Mas...</Link>
    </div>
  )
}
