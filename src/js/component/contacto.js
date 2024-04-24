import React, {useContext, useEffect, useState,} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";


export const Contacto = ({nombre ,direccion, telefono,email, id}) => {
	const {store, actions} = useContext(Context);
	const navigate = useNavigate();
	const handleDelete = async () =>{
        await actions.eliminarContacto(id);
        actions.cargarContactos()
    };
	

	const handleEdit = (id) =>{
		    
		const contactoSeleccionado = store.contactos.filter(contacto=> contacto.id === id)
		actions.selectedid(contactoSeleccionado)
		navigate(`/viewEditar/${id}`)
    };

	return (
		<div className="container contContacto">
			<div className="row">
				<div className="col-md imagenContacto">
					<img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid rounded-circle border border-dark" alt="..." />
				</div>
				<div className="col-6">
					<div className="card-body">
						<h5 className="card-title">{nombre}</h5>
						<p className="card-text"><small className="text-muted">{direccion}</small></p>
						<p className="card-text"><small className="text-muted">{telefono}</small></p>
						<p className="card-text"><small className="text-muted">{email}</small></p>
						<div className="card-body">
							<button onClick={() => handleDelete(id)} className="card-text delete"><i className="fa-solid fa-trash"></i></button>
							<button onClick={() => handleEdit(id)} className="card-text edit"><i className="fa-solid fa-pencil"></i></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};