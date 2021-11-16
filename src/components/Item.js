import React from 'react'

export const Item = ({ brand, model, price }) => {
  return (
    <div id='item'>
      <div>{brand}</div>
      <div>{model}</div>
      <div>{price}</div>
    </div>
  )
}
