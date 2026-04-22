import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("muestra el título y las secciones principales", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /ventas tecnológicas/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /catálogo/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^Soporte$/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /^Contacto$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /tiendas de tecnología/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  expect(
    screen.getByText(/©\s*2026.*Ventas tecnológicas/i)
  ).toBeInTheDocument();
});

test("el formulario de contacto valida y confirma el envío simulado", async () => {
  render(<App />);

  await userEvent.click(
    screen.getByRole("button", { name: /enviar/i })
  );
  expect(
    await screen.findByText(/completá nombre, e-mail y mensaje/i)
  ).toBeInTheDocument();

  await userEvent.type(
    screen.getByLabelText(/^Nombre$/i),
    "Ana López"
  );
  await userEvent.type(
    screen.getByLabelText(/E-mail/i),
    "ana@correo.com"
  );
  await userEvent.type(
    screen.getByLabelText(/Mensaje/i),
    "Hola, consulto stock de monitores."
  );
  await userEvent.click(
    screen.getByRole("button", { name: /enviar/i })
  );

  expect(
    await screen.findByText(/mensaje recibido/i)
  ).toBeInTheDocument();
});

test("el catálogo permite filtrar por texto y categoría", async () => {
  render(<App />);

  expect(screen.getByText(/4 producto\(s\) encontrado\(s\)/i)).toBeInTheDocument();

  await userEvent.type(screen.getByLabelText(/buscar producto/i), "ssd");
  expect(screen.getByText(/1 producto\(s\) encontrado\(s\)/i)).toBeInTheDocument();
  expect(screen.getByText(/Disco SSD 1 TB/i)).toBeInTheDocument();

  await userEvent.clear(screen.getByLabelText(/buscar producto/i));
  await userEvent.selectOptions(
    screen.getByLabelText(/filtrar por categoría/i),
    "Perifericos"
  );
  expect(screen.getByText(/2 producto\(s\) encontrado\(s\)/i)).toBeInTheDocument();
});
