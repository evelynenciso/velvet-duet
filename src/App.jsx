import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Productos from "./pages/Productos"
import ProductoDetalle from "./pages/ProductoDetalle"
import Carrito from "./pages/Carrito"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="producto/:id" element={<ProductoDetalle />} />
          <Route path="carrito" element={<Carrito />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App