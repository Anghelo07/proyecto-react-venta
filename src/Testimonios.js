import React from "react";

const reseñas = [
  {
    id: "r1",
    nombre: "María C.",
    cargo: "Diseñadora freelance",
    texto:
      "La asesoría fue rápida y me ayudaron a elegir monitor y accesorios en una sola compra.",
    nota: "5.0",
  },
  {
    id: "r2",
    nombre: "Luis P.",
    cargo: "Analista de datos",
    texto:
      "Me gustó que el stock fuera claro y que el pedido llegara al día siguiente sin complicaciones.",
    nota: "4.9",
  },
  {
    id: "r3",
    nombre: "Carla M.",
    cargo: "Creadora de contenido",
    texto:
      "Buena relación precio/calidad. Volvería a comprar por la garantía y el soporte postventa.",
    nota: "4.8",
  },
];

function Testimonios() {
  return (
    <section className="seccion seccion-testimonios" id="reseñas" aria-labelledby="titulo-reseñas">
      <h2 id="titulo-reseñas" className="tit">
        Reseñas de clientes
      </h2>
      <p className="seccion-texto">
        Comentarios recientes de compradores que ya equiparon su setup con nosotros.
      </p>
      <div className="testimonios-grid">
        {reseñas.map((item) => (
          <article className="testimonio-item" key={item.id}>
            <p className="testimonio-texto">"{item.texto}"</p>
            <p className="testimonio-nombre">{item.nombre}</p>
            <p className="testimonio-cargo">{item.cargo}</p>
            <p className="testimonio-nota">Calificación: {item.nota}/5</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonios;
