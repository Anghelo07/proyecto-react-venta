import React from "react";

const indicadores = [
  { id: 1, valor: "+1,200", etiqueta: "Clientes atendidos" },
  { id: 2, valor: "98%", etiqueta: "Satisfacción promedio" },
  { id: 3, valor: "24-48h", etiqueta: "Tiempo de despacho" },
];

function Resumen() {
  return (
    <section className="seccion seccion-resumen" aria-labelledby="titulo-resumen">
      <h2 id="titulo-resumen" className="tit">
        ¿Por qué elegirnos?
      </h2>
      <p className="seccion-texto">
        Combinamos precios competitivos, asesoría personalizada y garantía para
        que compres con seguridad.
      </p>
      <div className="resumen-grid">
        {indicadores.map((item) => (
          <article className="resumen-item" key={item.id}>
            <p className="resumen-valor">{item.valor}</p>
            <p className="resumen-etiqueta">{item.etiqueta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Resumen;
