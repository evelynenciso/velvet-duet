import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Carrito() {
  const { cart, removeFromCart, clearCart, totalPrecio } = useCart()

  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos">Ver productos</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Tu carrito</h2>
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.imagen} alt={item.nombre} width="80" />
          <h3>{item.nombre}</h3>
          <p>Cantidad: {item.cantidad}</p>
          <p>Subtotal: ${item.precio * item.cantidad}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrecio}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}

export default Carrito