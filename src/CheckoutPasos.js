import React from "react";

function CheckoutPasos({ cantidadItems, contactoEnviado }) {
  const pasos = [
    {
      id: "p1",
      numero: "1",
      titulo: "Arma tu carrito",
      texto: "Selecciona los productos y ajusta cantidades según tu necesidad.",
      activo: cantidadItems > 0,
    },
    {
      id: "p2",
      numero: "2",
      titulo: "Solicita compra",
      texto: "Desde el carrito, pulsa Solicitar compra para preparar tu pedido.",
      activo: cantidadItems > 0,
    },
    {
      id: "p3",
      numero: "3",
      titulo: "Confirma por contacto",
      texto: "Revisamos stock, envío y te confirmamos el detalle final.",
      activo: contactoEnviado,
    },
  ];

  return (
    <section className="seccion seccion-checkout" id="checkout" aria-labelledby="titulo-checkout">
      <h2 id="titulo-checkout" className="tit">
        Checkout en 3 pasos
      </h2>
      <p className="seccion-texto">
        Un proceso simple y transparente para que la compra se sienta real y ordenada.
      </p>
      <div className="checkout-grid">
        {pasos.map((paso) => (
          <article
            key={paso.id}
            className={`checkout-item ${paso.activo ? "checkout-item--activo" : ""}`}
          >
            <span className="checkout-numero">{paso.numero}</span>
            <h3 className="checkout-titulo">{paso.titulo}</h3>
            <p className="checkout-texto">{paso.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CheckoutPasos;
