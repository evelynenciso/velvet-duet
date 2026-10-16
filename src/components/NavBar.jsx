// src/components/NavBar.jsx
// NavLink funciona igual que Link, pero agrega la clase "active" al link de la página actual.
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav className="navbar">
      {/* "end" evita que Inicio quede activo en todas las rutas */}
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <CartWidget />
    </nav>
  )
}

export default NavBar