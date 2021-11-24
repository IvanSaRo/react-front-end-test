/* eslint-disable func-call-spacing */
/* eslint-disable no-unexpected-multiline */
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { checkPersistency } from './helpers/helpers'
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

  useEffect(() => {
    const checkStorage = checkPersistency('date', 'cart')
    if (checkStorage) {
      setCart(JSON.parse(sessionStorage.getItem('cart')))
    } else {
      setCart([])
      sessionStorage.setItem('cart', [])
    }
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
