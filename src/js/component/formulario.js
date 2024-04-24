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
              onClick={(e) => handleSubmit(e)}
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