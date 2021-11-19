import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { ProductDetailsPage } from './pages/ProductDetailsPage'
import { ProductListPage } from './pages/ProductListPage'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ProductListPage />} />
        <Route path='/:id' element={<ProductDetailsPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
