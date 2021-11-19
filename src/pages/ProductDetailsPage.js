import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getItemById } from '../services/service'

export const ProductDetailsPage = () => {
  const [data, setData] = useState(null)
  const [colorData, setColorData] = useState(null)
  const [storageData, setStorageData] = useState(null)
  const [product, setProduct] = useState({ id: null, colorCode: null, storageCode: null })
  console.log(product)

  const { id } = useParams()

  const handleChangeSelect = (e) => {
    console.log(e.target.id)
  }
  const handleChangeStorage = (e) => {
    console.log(e.target.id)
  }

  const handleClick = (e) => {
    setProduct({
      id: id,
      colorCode: colorData,
      storageCode: storageData
    })
  }

  useEffect(() => {
    getItemById(id).then((response) => {
      setData(response.data)
      const colorSelect = document.getElementById('color-select')
      const storageSelect = document.getElementById('color-storage')
      setColorData(colorSelect.value)
      setStorageData(storageSelect.value)
    })
  }, [])
  return (
    <div className='productDetailsPage'>
      <div className='productDetailsPage__imglink'>
        <img src={data?.imgUrl} alt={data?.model} />
        <Link to='/'>Volver</Link>
      </div>
      <div className='productDetailsPage__data'>
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
        <div className='productDetailsPage__data-colors-container'>
          <div>Colores: </div>
          <select onChange={handleChangeSelect} id='color-select'>
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
        <button className='btn btn-success' onClick={handleClick}>Añadir a cesta</button>
      </div>
    </div>
  )
}
