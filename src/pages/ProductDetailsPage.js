import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getItemById } from '../services/service'

export const ProductDetailsPage = () => {
  const [data, setData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getItemById(id).then((response) => {
      setData(response.data)
    })
  }, [])
  return (
    <div>
      <h1>ProductDetailsPage</h1>
      <img src={data?.imgUrl} alt={data?.model} />
      <ul>
        <li><strong>Marca</strong>: {data?.brand}</li>
        <li><strong>Modelo</strong>: {data?.model}</li>
        <li><strong>Precio</strong>: {data?.price}€</li>
        <li><strong>CPU</strong>: {data?.cpu}</li>
        <li><strong>RAM</strong>: {data?.ram}</li>
        <li><strong>Sistema Operativo</strong>: {data?.os}</li>
        <li><strong>Resolucion de pantalla</strong>: {data?.displayResolution}</li>
        <li><strong>Bateria</strong>: {data?.battery}</li>
        <li><strong>Cámaras</strong>: {data?.primaryCamera}/{data?.secondasryCamera}</li>
        <li><strong>Dimensiones</strong>: {data?.dimentions}</li>
        <li><strong>Peso</strong>:  {data?.weight} </li>
      </ul>
      <div>
        {
          data?.options.colors.map(color => {
            return <div key={color.code}>{color.name}</div>
          })
        }
      </div>
      <div>
        {
          data?.options.storages.map(storage => {
            return <div key={storage.code}>{storage.name}</div>
          })
        }
      </div>
      <button className='btn btn-success'>Añadir a cesta</button>
      <Link to='/'>Volver</Link>
    </div>
  )
}
