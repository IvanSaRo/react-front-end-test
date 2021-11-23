import React from 'react'

export const PhoneDescription = ({ data }) => {
  return (
    <ul className='productDetailsPage__data-char'>
      <li>
        <strong>Marca</strong>: {data?.brand}
      </li>
      <li>
        <strong>Modelo</strong>: {data?.model}
      </li>
      <li>
        <strong>Precio</strong>: {data?.price}€
      </li>
      <li>
        <strong>CPU</strong>: {data?.cpu}
      </li>
      <li>
        <strong>RAM</strong>: {data?.ram}
      </li>
      <li>
        <strong>Sistema Operativo</strong>: {data?.os}
      </li>
      <li>
        <strong>Resolucion de pantalla</strong>: {data?.displayResolution}
      </li>
      <li>
        <strong>Bateria</strong>: {data?.battery}
      </li>
      <li>
        <strong>Cámaras</strong>: {data?.primaryCamera}/
        {data?.secondasryCamera}
      </li>
      <li>
        <strong>Dimensiones</strong>: {data?.dimentions}
      </li>
      <li>
        <strong>Peso</strong>: {data?.weight}{' '}
      </li>
    </ul>
  )
}
