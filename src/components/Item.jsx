import { Link } from "react-router-dom"

function Item({ id, nombre, precio, imagen, categoria }) {
  return (
    <article className="item">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{categoria}</p>
      <p>${precio}</p>
      <Link to={`/producto/${id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item