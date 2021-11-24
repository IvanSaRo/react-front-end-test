/* eslint-disable func-call-spacing */
/* eslint-disable no-unexpected-multiline */
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { ProductDetailsPage } from './pages/ProductDetailsPage'
import { ProductListPage } from './pages/ProductListPage'

function App () {
  const [product, setProduct] = useState({
    id: null,
    colorCode: null,
    storageCode: null
  })
  const [cart, setCart] = useState(sessionStorage.getItem('cart') || [])
  const [breadcrumb, setBreadcrumb] = useState('')

  const date = new Date()
  const millennium = new Date(2000, 0, 1)
  const hourInMiliseconds = 3_600_000

  const checkPersistencyCart = () => {
    const dateStored = new Date(JSON.parse(sessionStorage.getItem('date')))
    const dateStoredHours =
      Math.ceil(dateStored.getTime() - millennium.getTime()) /
      hourInMiliseconds
    const dateNowHours =
      Math.ceil(date.getTime() - millennium.getTime()) / hourInMiliseconds

    if (dateNowHours - dateStoredHours <= 1) {
      setCart(JSON.parse(sessionStorage.getItem('cart')))
    } else {
      setCart([])
      sessionStorage.setItem('cart', [])
    }
  }

  useEffect(() => {
    checkPersistencyCart()
  }, [])

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <>
      <Header cart={cart} breadcrumb={breadcrumb} setBreadcrumb={setBreadcrumb} />
      <Routes>
        <Route path='/' element={<ProductListPage setBreadcrumb={setBreadcrumb} />} />
        <Route
          path='/:id'
          element={
            <ProductDetailsPage
              product={product}
              setProduct={setProduct}
              setCart={setCart}
              cart={cart}
              checkPersistencyCart={checkPersistencyCart}
              setBreadcrumb={setBreadcrumb}
            />
          }
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
