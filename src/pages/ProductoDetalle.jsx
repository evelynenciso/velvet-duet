import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"

function ProductoDetalle() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((p) => p.id === Number(id))
        setProducto(encontrado || null)
      })
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) return <p>Cargando producto...</p>
  if (!producto) return <p>Producto no encontrado</p>

  return (
    <article className="detalle">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio}</p>
      <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
    </article>
  )
}

export default ProductoDetalle