import { useEffect, useState } from "react"
import Item from "./Item"

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el catálogo")
        return res.json()
      })
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) return <p>Cargando productos...</p>
  if (error) return <p>{error}</p>

  return (
    <section className="item-list">
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </section>
  )
}

export default ItemListContainer