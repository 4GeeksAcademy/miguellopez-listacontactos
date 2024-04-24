import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Editar = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const [contacto, setContacto] = useState({
    name: store.contactoSeleccionado[0].name,
    email: store.contactoSeleccionado[0].email,
    phone: store.contactoSeleccionado[0].phone,
    address: store.contactoSeleccionado[0].address,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    
    actions.editarContacto(id, contacto)?navigate("/"):""


  };
  console.log(store.contactoSeleccionado)
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form className="formulario">
            <legend>EDITA EL CONTACTO</legend>
            <div className="mb-3">
              <label htmlFor="nombreCompleto" className="form-label">
                NOMBRE COMPLETO
              </label>
              <input
                type="text"
                value={contacto.name}
                id="nombreCompleto"
                className="form-control"
                placeholder="Nombre completo"
                onChange={(e) =>
                  setContacto({ ...contacto, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                EMAIL
              </label>
              <input
                type="text"
                value={contacto.email}
                id="email"
                className="form-control"
                placeholder="Correo electrónico"
                onChange={(e) =>
                  setContacto({ ...contacto, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                TELEFONO
              </label>
              <input
                type="text"
                value={contacto.phone}
                id="telefono"
                className="form-control"
                placeholder="Teléfono"
                onChange={(e) =>
                  setContacto({ ...contacto, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                DIRECCION
              </label>
              <input
                type="text"
                value={contacto.address}
                id="direccion"
                className="form-control"
                placeholder="Dirección"
                onChange={(e) =>
                  setContacto({ ...contacto, address: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <div className="form-check"></div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
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
      <Link to="/" className="btn btn-secondary me-2">
        Ir atrás a contactos
      </Link>
    </div>
  );
};