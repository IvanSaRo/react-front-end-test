import React from 'react'
import { Link } from 'react-router-dom'

export const ImageDetail = ({ data }) => {
  return (
    <div className='productDetailsPage__imglink'>
      <img src={data?.imgUrl} alt={data?.model} />
      <Link to='/'>Volver</Link>
    </div>
  )
}
