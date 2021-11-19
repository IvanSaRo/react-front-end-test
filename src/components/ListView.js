import React, { useEffect, useState } from 'react'
import { getData } from '../services/service'
import { Item } from './Item'
import { Search } from './Search'

export const ListView = () => {
  const [data, setData] = useState(null)

  const handleInputChange = ({ target }) => {
    if (target.value.length <= 1) { return null }
    const dataFiltered = data.filter(dat => { return dat.brand.toLowerCase().includes(target.value) || dat.model.toLowerCase().includes(target.value) })
    setData(dataFiltered)
  }

  useEffect(() => {
    getData().then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <div className='listView'>
      <div className='listView__search'><Search handleInputChange={handleInputChange} /></div>
      <div className='listView__items'>
        {data?.map((item) => {
          return (
            <Item key={item.id} {...item} />
          )
        })}
      </div>
    </div>
  )
}
