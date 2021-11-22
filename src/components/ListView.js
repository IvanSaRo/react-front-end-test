/* eslint-disable func-call-spacing */
/* eslint-disable no-unexpected-multiline */
import React, { useEffect, useState } from 'react'
import { getData } from '../services/service'
import { Item } from './Item'
import { Search } from './Search'

export const ListView = () => {
  const [data, setData] = useState()
  const [dataSaved, setDataSaved] = useState()
  const [reload, setReload] = useState(false)

  const handleInputChange = ({ target }) => {
    if (target.value.length === 0) { setReload(true) }
    const datatoFilter = data.filter(dat => { return dat.brand.toLowerCase().includes(target.value) || dat.model.toLowerCase().includes(target.value) })
    setData(datatoFilter)
  }

  useEffect(() => {
    setData(dataSaved)
  }, [reload, dataSaved])

  useEffect(() => {
    getData().then((response) => {
      setData(response.data)
      setDataSaved(response.data)
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
