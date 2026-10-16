// Página de inicio: bienvenida, categorías destacadas, por qué elegirnos y contacto.
import { Link } from "react-router-dom";

// Datos de contacto.
const WHATSAPP = "5491165094168"; // código de país + número, sin + ni espacios
const EMAIL = "evelyn.enciso.tech@gmail.com";

// Categorías destacadas: cada bloque es un acceso rápido al catálogo.
const categorias = [
  { icono: "🖨️", titulo: "Impresiones y fotos", texto: "Fotos, láminas y todo tipo de impresiones." },
  { icono: "💌", titulo: "Papelería social y eventos", texto: "Invitaciones, tarjetas y souvenirs." },
  { icono: "📦", titulo: "Emprendedores y packaging", texto: "Etiquetas, cajas y packaging para tu marca." },
  { icono: "🎁", titulo: "Regalos y detalles", texto: "Detalles personalizados para sorprender." },
];

// Motivos para elegir la marca.
const motivos = [
  { icono: "✨", titulo: "Calidad en cada detalle", texto: "Materiales y terminaciones cuidadas." },
  { icono: "🎨", titulo: "Diseños personalizados", texto: "Hacemos realidad tu idea." },
  { icono: "⏱️", titulo: "Entregas a tiempo", texto: "Cumplimos los plazos acordados." },
  { icono: "🤝", titulo: "Atención cercana", texto: "Te acompañamos en todo el proceso." },
];

function Home() {
  return (
    <div className="home">
      {/* Bienvenida */}
      <section className="home-hero">
        <h2>Bienvenida a Velvet Duet</h2>
        <p>Impresiones, papelería y detalles hechos a tu medida.</p>
        <Link to="/productos" className="home-btn">Ver productos</Link>
      </section>

      {/* Categorías destacadas: bloques de acceso rápido */}
      <section className="home-seccion">
        <h2>Categorías destacadas</h2>
        <div className="home-grid">
          {categorias.map((cat) => (
            <Link to="/productos" key={cat.titulo} className="home-card home-card-link">
              <span className="home-icono">{cat.icono}</span>
              <h3>{cat.titulo}</h3>
              <p>{cat.texto}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="home-seccion">
        <h2>¿Por qué elegir Velvet Duet?</h2>
        <div className="home-grid">
          {motivos.map((m) => (
            <div key={m.titulo} className="home-card">
              <span className="home-icono">{m.icono}</span>
              <h3>{m.titulo}</h3>
              <p>{m.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="home-contacto">
        <h2>¿Hablamos?</h2>
        <p>Contanos qué necesitás y te respondemos a la brevedad.</p>
        <div className="home-botones">
          <a
            className="home-btn"
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
          >
            Escribinos por WhatsApp
          </a>
          <a className="home-btn home-btn-outline" href={`mailto:${EMAIL}`}>
            Enviar un correo
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;  