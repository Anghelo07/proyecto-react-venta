import React, { Component } from "react";
import Grupo2 from "./Grupo2";

class Catalogo extends Component {
  state = {
    texto: "",
    categoria: "Todos",
  };

  onTexto = (event) => {
    this.setState({ texto: event.target.value });
  };

  onCategoria = (event) => {
    this.setState({ categoria: event.target.value });
  };

  formatearPrecio = (valor) =>
    new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
      maximumFractionDigits: 0,
    }).format(valor);

  filtrarProductos = () => {
    const texto = this.state.texto.trim().toLowerCase();
    const categoria = this.state.categoria;

    return Grupo2.filter((x) => {
      const coincideTexto =
        x.titulo.toLowerCase().includes(texto) ||
        x.categoria.toLowerCase().includes(texto);
      const coincideCategoria =
        categoria === "Todos" ? true : x.categoria === categoria;
      return coincideTexto && coincideCategoria;
    });
  };

  render() {
    const categorias = ["Todos", ...new Set(Grupo2.map((x) => x.categoria))];
    const productos = this.filtrarProductos();

    return (
      <section
        className="seccion seccion-catalogo"
        id="catalogo"
        aria-labelledby="titulo-catalogo"
      >
        <h2 id="titulo-catalogo" className="tit1">
          Catálogo
        </h2>
        <p className="seccion-texto">
          Buscá por nombre o categoría para revisar disponibilidad en tiempo real.
        </p>
        <div className="filtros">
          <input
            className="form-input"
            type="search"
            value={this.state.texto}
            onChange={this.onTexto}
            placeholder="Buscar producto..."
            aria-label="Buscar producto"
          />
          <select
            className="form-input"
            value={this.state.categoria}
            onChange={this.onCategoria}
            aria-label="Filtrar por categoría"
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <p className="resultado-catalogo">
          {productos.length} producto(s) encontrado(s)
        </p>
        <div className="catalogo-extra" aria-label="Información del catálogo">
          <article className="catalogo-panel">
            <h3 className="catalogo-panel-titulo">Compra con confianza</h3>
            <ul className="catalogo-panel-lista">
              <li>Stock actualizado en tiempo real</li>
              <li>Asesoría para elegir según tu uso</li>
              <li>Pago seguro y boleta/factura</li>
            </ul>
          </article>
          <article className="catalogo-panel catalogo-panel--meta">
            <p className="catalogo-meta-valor">{categorias.length - 1}</p>
            <p className="catalogo-meta-label">categorías activas</p>
            <p className="catalogo-meta-valor">{Grupo2.length}</p>
            <p className="catalogo-meta-label">productos en vitrina</p>
          </article>
        </div>
        <div className="grid-catalogo">
          {productos.map((x) => (
            <article className="art-cuidados" key={x.id}>
              <div className="art-media">
                <span className="badge">{x.badge}</span>
                <img
                  className="art-img1"
                  src={x.imagen}
                  alt={x.titulo}
                />
              </div>
              <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo tarjeta-titulo--sm">{x.titulo}</h3>
                <p className="tarjeta-meta">{x.categoria}</p>
                <p className="tarjeta-rating" aria-label={`Calificación ${x.rating} de 5`}>
                  <span className="estrellas">
                    {"★".repeat(Math.round(x.rating)) +
                      "☆".repeat(5 - Math.round(x.rating))}
                  </span>{" "}
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

export default Catalogo;
