import React, { useMemo, useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Header from "./Header";
import Destacados from "./Destacados";
import Catalogo from "./Catalogo";
import Soporte from "./Soporte";
import Contacto from "./Contacto";
import Footer from "./Footer";
import Resumen from "./Resumen";
import Tiendas from "./Tiendas";
import Carrito from "./Carrito";
import Testimonios from "./Testimonios";
import CheckoutPasos from "./CheckoutPasos";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [mensajeCheckout, setMensajeCheckout] = useState("");
  const [contactoEnviado, setContactoEnviado] = useState(false);

  const agregar = (producto) => {
    setCarrito((prev) => {
      const encontrado = prev.find((x) => x.id === producto.id);
      if (encontrado) {
        return prev.map((x) =>
          x.id === producto.id ? { ...x, cantidad: x.cantidad + 1 } : x
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const incrementar = (id) => {
    setCarrito((prev) =>
      prev.map((x) => (x.id === id ? { ...x, cantidad: x.cantidad + 1 } : x))
    );
  };

  const decrementar = (id) => {
    setCarrito((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, cantidad: x.cantidad - 1 } : x))
        .filter((x) => x.cantidad > 0)
    );
  };

  const vaciar = () => setCarrito([]);

  const itemsCarrito = useMemo(() => carrito, [carrito]);

  const finalizarCompra = () => {
    if (carrito.length === 0) return;
    const detalle = carrito
      .map((x) => `- ${x.titulo} x${x.cantidad} (${x.precio} c/u)`)
      .join("\n");
    const mensaje = `Hola, quiero finalizar esta compra:\n${detalle}\n\nTotal referencial: ${new Intl.NumberFormat(
      "es-PE",
      { style: "currency", currency: "PEN", maximumFractionDigits: 0 }
    ).format(
      carrito.reduce((acc, it) => acc + it.precio * it.cantidad, 0)
    )}\n\n¿Podrían confirmar disponibilidad y entrega?`;
    setMensajeCheckout(mensaje);
    setContactoEnviado(false);
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-root marco">
      <a className="salto" href="#inicio">
        Ir al contenido
      </a>
      <nav
        className="envoltorio-menu"
        id="navegacion"
        aria-label="Secciones principales"
      >
        <Menu />
      </nav>
      <Header />
      <main className="contenido-principal">
        <Resumen />
        <Tiendas />
        <Destacados onAgregar={agregar} />
        <Catalogo onAgregar={agregar} />
        <Testimonios />
        <CheckoutPasos
          cantidadItems={itemsCarrito.length}
          contactoEnviado={contactoEnviado}
        />
        <Soporte />
        <Contacto
          mensajeSugerido={mensajeCheckout}
          onEnviado={() => setContactoEnviado(true)}
        />
      </main>
      <Footer />
      <Carrito
        items={itemsCarrito}
        onIncrementar={incrementar}
        onDecrementar={decrementar}
        onVaciar={vaciar}
        onFinalizar={finalizarCompra}
      />
    </div>
  );
}

export default App;
