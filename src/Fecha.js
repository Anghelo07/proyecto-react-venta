import React, { Component } from "react";

class Fecha extends Component {
  formatear(f) {
    const d = f.getDate() < 10 ? "0" + f.getDate() : f.getDate();
    const m =
      f.getMonth() + 1 < 10
        ? "0" + (f.getMonth() + 1)
        : f.getMonth() + 1;
    const a = f.getFullYear();
    return d + "/" + m + "/" + a;
  }

  render() {
    const ahora = new Date();
    return (
      <div className="bloque">Fecha : {this.formatear(ahora)}</div>
    );
  }
}

export default Fecha;
