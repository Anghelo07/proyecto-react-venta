import React, { Component } from "react";

const items = new Array(
  "Inicio",
  "Catálogo",
  "Tiendas",
  "Ofertas",
  "Reseñas",
  "Checkout",
  "Soporte",
  "Contacto"
);

const enlaces = {
  Inicio: "#inicio",
  Catálogo: "#catalogo",
  Tiendas: "#tiendas",
  Ofertas: "#ofertas",
  Reseñas: "#reseñas",
  Checkout: "#checkout",
  Soporte: "#soporte",
  Contacto: "#contacto",
};

class Menu extends Component {
  render() {
    return (
      <div className="contenedor contenedor-menu">
        {items.map((it) => (
          <a className="items" key={it} href={enlaces[it]}>
            {it}
          </a>
        ))}
      </div>
    );
  }
}

export default Menu;
