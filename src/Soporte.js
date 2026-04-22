import React, { Component } from "react";

const puntos = [
  {
    id: 1,
    titulo: "Garantía y cambios",
    texto:
      "Consulta condiciones de garantía. Los cambios aplican con ticket y en el plazo indicado.",
  },
  {
    id: 2,
    titulo: "Envío y retiro",
    texto:
      "Coordiná horarios y modalidad de entrega. Retiro en local con documento y pedido listo.",
  },
  {
    id: 3,
    titulo: "Soporte técnico básico",
    texto:
      "Ayuda con instalación inicial, drivers y pautas de uso. Asuntos avanzados se derivan a servicio.",
  },
];

const preguntas = [
  {
    id: "f1",
    q: "¿Puedo pagar en cuotas?",
    a: "Sí. Dependiendo del banco y la pasarela, habilitamos cuotas sin intereses en campañas activas.",
  },
  {
    id: "f2",
    q: "¿Los productos tienen garantía?",
    a: "Todos incluyen garantía local. El tiempo varía según la marca y tipo de equipo.",
  },
];

class Soporte extends Component {
  render() {
    return (
      <section
        className="seccion seccion-soporte"
        id="soporte"
        aria-labelledby="titulo-soporte"
      >
        <h2 id="titulo-soporte" className="soporte-titulo">
          Soporte
        </h2>
        <p className="seccion-texto">
          Información útil para comprar y usar tus productos con tranquilidad.
        </p>
        <ul className="soporte-lista">
          {puntos.map((p) => (
            <li className="soporte-item" key={p.id}>
              <h3 className="soporte-item-titulo">{p.titulo}</h3>
              <p className="soporte-item-texto">{p.texto}</p>
            </li>
          ))}
        </ul>
        <div className="faq">
          <h3 className="faq-titulo">Preguntas frecuentes</h3>
          {preguntas.map((p) => (
            <details key={p.id} className="faq-item">
              <summary>{p.q}</summary>
              <p>{p.a}</p>
            </details>
          ))}
        </div>
      </section>
    );
  }
}

export default Soporte;
