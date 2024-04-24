import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Contacto } from "../component/contacto";
import { Navbar } from "../component/navbar";

import "../../styles/demo.css";

export const ViewContacto = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
        <Navbar />
        <div className="container-fluid">
            {store.contactos.map((contacto, index) => {
                return (
                    <Contacto
                        key={index}
                        nombre={contacto.name}
                        direccion={contacto.address}
                        telefono={contacto.phone}
                        email={contacto.email}
                        id={contacto.id}
                    />
                );
            })}
        </div>
    </>
  );
};