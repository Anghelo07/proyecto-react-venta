import React, { Component } from "react";
import Grupo1 from "./Grupo1";

class Destacados extends Component {
  estrellas = (rating) => {
    const redondeado = Math.round(rating);
    return "★".repeat(redondeado) + "☆".repeat(5 - redondeado);
  };

  formatearPrecio = (valor) =>
    new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
      maximumFractionDigits: 0,
    }).format(valor);

  render() {
    return (
      <section
        className="seccion seccion-ofertas"
        id="ofertas"
        aria-labelledby="titulo-ofertas"
      >
        <h2 id="titulo-ofertas" className="tit">
          Ofertas y productos destacados
        </h2>
        <p className="seccion-texto">
          Seleccionamos equipos con garantía local y despacho en 24-48 horas.
        </p>
        <div className="promo-resumen" aria-label="Resumen comercial de ofertas">
          <article className="promo-item">
            <p className="promo-valor">-25%</p>
            <p className="promo-label">Descuento máximo de temporada</p>
          </article>
          <article className="promo-item">
            <p className="promo-valor">24h</p>
            <p className="promo-label">Entrega rápida en zonas principales</p>
          </article>
          <article className="promo-item">
            <p className="promo-valor">12m</p>
            <p className="promo-label">Garantía en equipos seleccionados</p>
          </article>
          <article className="promo-item promo-item--acento">
            <h3 className="promo-titulo">Combo recomendado</h3>
            <p className="promo-texto">
              Llevá monitor + teclado y obtén envío gratis en esta campaña.
            </p>
          </article>
        </div>
        <div className="grid-destacados">
          {Grupo1.map((x) => (
            <article className="art-atencion" key={x.id}>
              <div className="art-media">
                <span className="badge">{x.badge}</span>
                <img
                  className="art-img"
                  src={x.imagen}
                  alt={x.titulo}
                />
              </div>
              <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{x.titulo}</h3>
                <p className="tarjeta-meta">{x.descripcion}</p>
                <p className="tarjeta-rating" aria-label={`Calificación ${x.rating} de 5`}>
                  <span className="estrellas">{this.estrellas(x.rating)}</span>{" "}
                  <span className="reseñas">({x.reseñas})</span>
                </p>
                <p className="tarjeta-precio">
                  {this.formatearPrecio(x.precio)}{" "}
                  <span className="tarjeta-stock">Stock: {x.stock}</span>
                </p>
                <button
                  className="btn btn-secundario"
                  type="button"
                  onClick={() =>
                    this.props.onAgregar?.({
                      id: x.id,
                      titulo: x.titulo,
                      precio: x.precio,
                    })
                  }
                >
                  Añadir
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Destacados;
