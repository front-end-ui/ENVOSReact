import { Route, Routes } from 'react-router-dom'
import Home from './screen/index'
import Product from './screen/product'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App