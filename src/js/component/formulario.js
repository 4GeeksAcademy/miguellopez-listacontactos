import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
  const { store, actions } = useContext(Context);
  const [contacto, setContacto] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de nombre completo
    if (contacto.name.length === 0 || contacto.name.length > 20) {
      alert("Por favor ingrese un nombre completo válido (máximo 20 caracteres).");
      return;
    }
    // Validación de email
    if (contacto.email.length === 0 || contacto.email.length > 20) {
      alert("Por favor ingrese un email válido (máximo 20 caracteres).");
      return;
    }
    // Validación de teléfono
    if (contacto.phone.length === 0 || contacto.phone.length > 12 || isNaN(contacto.phone)) {
      alert("Por favor ingrese un número de teléfono válido (máximo 12 caracteres y solo números).");
      return;
    }
    // Validación de dirección
    if (contacto.address.length === 0 || contacto.address.length > 20) {
      alert("Por favor ingrese una dirección válida (máximo 20 caracteres).");
      return;
    }
    // Si pasa todas las validaciones, enviar el formulario
    actions.crearContacto(contacto, navigate);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="formulario">
            <legend>AÑADE NUEVO CONTACTO</legend>
            <div className="mb-3">
              <label htmlFor="nombreCompleto" className="form-label">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombreCompleto"
                className="form-control"
                placeholder="Escribe tu nombre completo..."
                onChange={(e) =>
                  setContacto({ ...contacto, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Escribe tu Email..."
                onChange={(e) =>
                  setContacto({ ...contacto, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                id="telefono"
                className="form-control"
                placeholder="Escribe tu teléfono..."
                onChange={(e) =>
                  setContacto({ ...contacto, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                id="direccion"
                className="form-control"
                placeholder="Escribe tu dirección..."
                onChange={(e) =>
                  setContacto({ ...contacto, address: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <Link to="/" className="btn btn-secondary me-2">
                  Ir a contactos
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary bntFormulario"
            >
              <i>G</i>
              <i>U</i>
              <i>A</i>
              <i>R</i>
              <i>D</i>
              <i>A</i>
              <i>R</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};