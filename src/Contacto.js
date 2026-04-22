import React, { Component } from "react";

const inicial = { nombre: "", email: "", mensaje: "" };

class Contacto extends Component {
  state = { ...inicial, enviado: false, error: null };

  componentDidUpdate(prevProps) {
    if (
      this.props.mensajeSugerido &&
      this.props.mensajeSugerido !== prevProps.mensajeSugerido
    ) {
      this.setState({
        mensaje: this.props.mensajeSugerido,
        error: null,
        enviado: false,
      });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: null, enviado: false });
  };

  validar = () => {
    const { nombre, email, mensaje } = this.state;
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      return "Completá nombre, e-mail y mensaje.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Ingresá un e-mail válido.";
    }
    return null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const err = this.validar();
    if (err) {
      this.setState({ error: err });
      return;
    }
    this.setState({ enviado: true, error: null, ...inicial });
    this.props.onEnviado?.();
  };

  render() {
    return (
      <section
        className="seccion seccion-contacto"
        id="contacto"
        aria-labelledby="titulo-contacto"
      >
        <h2 id="titulo-contacto" className="contacto-titulo">
          Contacto
        </h2>
        <p className="seccion-texto">
          Dejanos un mensaje. En este proyecto el envío es de demostración
          (no sale a internet).
        </p>
        <form className="form-contacto" onSubmit={this.handleSubmit} noValidate>
          <div className="form-fila">
            <label className="form-label" htmlFor="contacto-nombre">
              Nombre
            </label>
            <input
              className="form-input"
              id="contacto-nombre"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
              type="text"
              autoComplete="name"
            />
          </div>
          <div className="form-fila">
            <label className="form-label" htmlFor="contacto-email">
              E-mail
            </label>
            <input
              className="form-input"
              id="contacto-email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              inputMode="email"
              autoComplete="email"
            />
          </div>
          <div className="form-fila">
            <label className="form-label" htmlFor="contacto-mensaje">
              Mensaje
            </label>
            <textarea
              className="form-textarea"
              id="contacto-mensaje"
              name="mensaje"
              value={this.state.mensaje}
              onChange={this.handleChange}
              rows={4}
            />
          </div>
          {this.state.error ? (
            <p className="form-error" role="alert">
              {this.state.error}
            </p>
          ) : null}
          {this.state.enviado ? (
            <p className="form-ok" role="status">
              Mensaje recibido (simulado). Gracias.
            </p>
          ) : null}
          <div className="form-acciones">
            <button className="btn" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Contacto;
