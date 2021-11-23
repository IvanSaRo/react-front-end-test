import React from 'react'

export const ColorsStorage = ({ data, handleChangeColor, handleChangeStorage }) => {
  return (
    <>
      <div className='productDetailsPage__data-colors-container'>
        <div>Colores: </div>
        <select onChange={handleChangeColor} id='color-select'>
          {data?.options.colors.map((color) => {
            return (
              <option key={color.code} value={color.code}>{color.name}</option>
            )
          })}
        </select>
      </div>
      <div className='productDetailsPage__data-storage-container'>
        <div>Almacenamiento: </div>
        <select onChange={handleChangeStorage} id='color-storage'>
          {data?.options.storages.map((storage) => {
            return (
              <option key={storage.code} value={storage.code}>{storage.name}</option>
            )
          })}
        </select>
      </div>
    </>
  )
}
