import React from "react";

function formatearPrecio(valor) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    maximumFractionDigits: 0,
  }).format(valor);
}

function totalizar(items) {
  return items.reduce((acc, it) => acc + it.precio * it.cantidad, 0);
}

function Carrito({ items, onIncrementar, onDecrementar, onVaciar, onFinalizar }) {
  const total = totalizar(items);
  const cantidad = items.reduce((acc, it) => acc + it.cantidad, 0);

  return (
    <aside className="carrito" aria-label="Carrito de compras (simulado)">
      <div className="carrito-header">
        <h3 className="carrito-titulo">Carrito</h3>
        <span className="carrito-badge">{cantidad}</span>
      </div>

      {items.length === 0 ? (
        <p className="carrito-vacio">Aún no agregaste productos.</p>
      ) : (
        <ul className="carrito-lista">
          {items.map((it) => (
            <li className="carrito-item" key={it.id}>
              <div className="carrito-item-info">
                <p className="carrito-item-nombre">{it.titulo}</p>
                <p className="carrito-item-precio">{formatearPrecio(it.precio)}</p>
              </div>
              <div className="carrito-item-acciones">
                <button
                  className="carrito-btn"
                  type="button"
                  onClick={() => onDecrementar(it.id)}
                  aria-label={`Quitar uno de ${it.titulo}`}
                >
                  -
                </button>
                <span className="carrito-cantidad" aria-label="Cantidad">
                  {it.cantidad}
                </span>
                <button
                  className="carrito-btn"
                  type="button"
                  onClick={() => onIncrementar(it.id)}
                  aria-label={`Agregar uno de ${it.titulo}`}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="carrito-footer">
        <p className="carrito-total">
          Total: <strong>{formatearPrecio(total)}</strong>
        </p>
        <div className="carrito-footer-acciones">
          <button
            className="btn btn-secundario"
            type="button"
            onClick={onVaciar}
            disabled={items.length === 0}
          >
            Vaciar
          </button>
          <button
            className="btn"
            type="button"
            onClick={onFinalizar}
            disabled={items.length === 0}
          >
            Solicitar compra
          </button>
        </div>
        <p className="carrito-nota">
          Carrito demostrativo: al finalizar se prepara un mensaje para contacto.
        </p>
      </div>
    </aside>
  );
}

export default Carrito;
