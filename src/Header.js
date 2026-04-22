import React, { Component } from "react";

const imagenes = [
  "/imagenes/banner-tech1.jpg",
  "/imagenes/banner-tech2.jpg",
  "/imagenes/banner-tech3.jpg",
  "/imagenes/banner-tech4.jpg",
];

class Header extends Component {
  state = { c: 0 };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prev) => ({
        c: (prev.c + 1) % imagenes.length,
      }));
    }, 4000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <header className="hero" id="inicio">
        <div className="hero-grid">
          <div className="hero-info">
            <span className="hero-tag">Ofertas activas de temporada</span>
            <h1 className="titulo">Ventas tecnológicas</h1>
            <p className="hero-bajada">
              Equipos, accesorios y asesoría para el día a día. Compra seguro con
              garantía local y soporte.
            </p>
            <div className="hero-acciones">
              <a className="btn" href="#catalogo">
                Ver catálogo
              </a>
              <a className="btn btn-ghost" href="#contacto">
                Cotizar
              </a>
            </div>
            <div className="chips" aria-label="Beneficios">
              <span className="chip">Envío 24-48h</span>
              <span className="chip">Garantía</span>
              <span className="chip">Soporte</span>
              <span className="chip">Pago seguro</span>
            </div>
            <p className="texto-comercial">
              Campaña de cierre de mes: descuentos en periféricos y asesoría
              gratuita para elegir tu setup ideal.
            </p>
          </div>
          <div className="contenedorbaner">
            <img
              className="imgheader"
              src={imagenes[this.state.c]}
              alt={`Promoción ${this.state.c + 1} de ${imagenes.length}`}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
