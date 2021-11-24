import React from 'react'
import { ListView } from '../components/ListView'

export const ProductListPage = ({ setBreadcrumb }) => {
  return (
    <div className='productListPage'>
      <ListView setBreadcrumb={setBreadcrumb} />
    </div>
  )
}
