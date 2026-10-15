function Footer() {
  const personas = [
    { nombre: "Evelyn", rol: "Fundadora, Diseñadora y Producción", contacto: "evelyn.enciso.tech@gmail.com" },
    { nombre: "Tamara", rol: "Redes sociales", contacto: "tamara@velvetduet.com" },
    { nombre: "Santiago", rol: "Producción", contacto: "santiago@velvetduet.com" },
  ]

  return (
    <footer className="footer">
      <div className="footer-empresa">
        <h3>Velvet Duet</h3>
        <p>Emprendimiento de papelería creativa: tarjetas, stickers, toppers, cajas sorpresa, fotos y más.</p>
        <p>Buenos Aires, Argentina</p>
      </div>

      <div className="footer-personas">
        {personas.map((p) => (
          <div className="tarjeta-persona" key={p.nombre}>
            <h4>{p.nombre}</h4>
            <p>{p.rol}</p>
            <p>{p.contacto}</p>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer