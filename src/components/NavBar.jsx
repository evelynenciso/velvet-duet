import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <CartWidget />
    </nav>
  )
}

export default NavBar