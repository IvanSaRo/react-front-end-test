import React from 'react'

export const Search = ({ handleInputChange }) => {
  return (
    <input type='text' onChange={handleInputChange} placeholder='Introduzca marca o modelo' />
  )
}
