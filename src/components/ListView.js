import React, { useState } from 'react'
import { getData } from '../services/service'
import { Search } from './Search'

export const ListView = () => {
  const [data, setData] = useState(null)

  getData().then((response) => {
    setData(response.data)
  })
  return (
    <div>
      <Search />
      <h1>ListView</h1>
      {data.map((item) => {
        return (
          <pre key={item.id}>
            <div>{item.brand}</div>
            <div>{item.model}</div>
            <div>{item.price}</div>
            <img src={item.imgUrl} alt={item.model} />
          </pre>
        )
      })}
    </div>
  )
}
