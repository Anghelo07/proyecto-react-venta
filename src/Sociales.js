import React from "react";

function Sociales() {
  return (
    <nav className="sociales-nav" aria-label="Redes sociales">
      <a
        className="sociales"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook (se abre en otra ventana)"
      >
        <img
          className="sociales-img"
          src="/imagenes/facebook.jpg"
          alt=""
        />
      </a>
      <a
        className="sociales"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram (se abre en otra ventana)"
      >
        <img
          className="sociales-img"
          src="/imagenes/instagram.jpg"
          alt=""
        />
      </a>
      <a
        className="sociales"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
        aria-label="X / Twitter (se abre en otra ventana)"
      >
        <img
          className="sociales-img"
          src="/imagenes/twitter.jpg"
          alt=""
        />
      </a>
    </nav>
  );
}

export default Sociales;
