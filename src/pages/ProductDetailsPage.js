import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ColorsStorage } from '../components/ColorsStorage'
import { ImageDetail } from '../components/ImageDetail'
import { PhoneDescription } from '../components/PhoneDescription'
import { getItemById, postItem } from '../services/service'

export const ProductDetailsPage = ({ setProduct, setCart, cart, setBreadcrumb }) => {
  const [data, setData] = useState(null)
  const [colorData, setColorData] = useState(null)
  const [storageData, setStorageData] = useState(null)
  const { id } = useParams()

  const handleChangeColor = (e) => {
    setColorData(e.target.value)
  }
  const handleChangeStorage = (e) => {
    setStorageData(e.target.value)
  }

  const handleClick = async () => {
    const response = await postItem({
      id: id,
      colorCode: colorData,
      storageCode: storageData
    })
    if (response.status) {
      setProduct({
        id: id,
        colorCode: colorData,
        storageCode: storageData
      })
      setCart([...cart, {
        id: id,
        colorCode: colorData,
        storageCode: storageData
      }
      ])
      sessionStorage.setItem('cart', JSON.stringify(cart))
      sessionStorage.setItem('date', JSON.stringify(new Date()))
    }
  }

  useEffect(() => {
    getItemById(id).then((response) => {
      setBreadcrumb(response.data.model)
      setData(response.data)
      const colorSelect = document.getElementById('color-select')
      const storageSelect = document.getElementById('color-storage')
      setColorData(colorSelect.value)
      setStorageData(storageSelect.value)
    })
  }, [id])
  return (
    <div className='productDetailsPage'>
      <ImageDetail data={data} />
      <div className='productDetailsPage__data'>
        <PhoneDescription data={data} />
        <ColorsStorage data={data} handleChangeColor={handleChangeColor} handleChangeStorage={handleChangeStorage} />
        <button className='btn' onClick={handleClick}>Añadir a cesta</button>
      </div>
    </div>
  )
}
