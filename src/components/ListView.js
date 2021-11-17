import React, { useEffect, useState } from 'react'
import { getData } from '../services/service'
import { Item } from './Item'
import { Search } from './Search'

export const ListView = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    getData().then((response) => {
      // console.log(response)
      setData(response.data)
    })
  }, [])

  return (
    <div>
      <Search />
      <h1>ListView</h1>
      {data?.map((item) => {
        return (
          <Item key={item.id} {...item} />
        )
      })}
    </div>
  )
}
