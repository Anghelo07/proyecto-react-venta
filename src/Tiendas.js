import React, { Component } from "react";

const tiendas = [
  {
    id: "t1",
    categoria: "Laptops",
    mercado: "S/ 3,400 - S/ 4,100",
    nuestro: "Desde S/ 3,699",
    ahorro: "Hasta S/ 400",
  },
  {
    id: "t2",
    categoria: "Monitores 27\"",
    mercado: "S/ 1,500 - S/ 1,900",
    nuestro: "Desde S/ 1,599",
    ahorro: "Hasta S/ 250",
  },
  {
    id: "t3",
    categoria: "Periféricos",
    mercado: "S/ 180 - S/ 340",
    nuestro: "Desde S/ 179",
    ahorro: "Hasta S/ 80",
  },
  {
    id: "t4",
    categoria: "Almacenamiento SSD",
    mercado: "S/ 430 - S/ 560",
    nuestro: "Desde S/ 449",
    ahorro: "Hasta S/ 60",
  },
];

class Tiendas extends Component {
  render() {
    return (
      <section className="seccion" id="tiendas" aria-labelledby="titulo-tiendas">
        <h2 id="titulo-tiendas" className="tit">
          Referencia de mercado
        </h2>
        <p className="seccion-texto">
          Comparativa referencial por categoría para ayudarte a decidir con
          transparencia. Los valores son estimados y pueden variar.
        </p>
        <div className="tiendas-grid">
          {tiendas.map((t) => (
            <article className="tienda-item" key={t.id}>
              <h3 className="tienda-nombre">{t.categoria}</h3>
              <p className="tienda-desc">Mercado: {t.mercado}</p>
              <p className="tienda-desc">Nuestro precio: {t.nuestro}</p>
              <p className="tienda-ahorro">{t.ahorro}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Tiendas;
