import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function CartWidget() {
  const { totalItems } = useCart()

  return (
    <Link to="/carrito" className="cart-widget">
      🛒 <span className="cart-count">{totalItems}</span>
    </Link>
  )
}

export default CartWidget