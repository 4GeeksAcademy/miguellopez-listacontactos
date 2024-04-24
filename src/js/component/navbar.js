import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<div className="barraNav">
			<nav className="navbar bg-light mb-3">
				<span className="navbar-brand"><strong className="lista-contactos">LISTA DE CONTACTOS</strong></span>
				<div className="ml-auto">
					<Link to="/viewFormulario">
						<button className="btnContacto btn-primary">AGREGA NUEVO CONTACTO</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};