import React from "react";
import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			contactos: [],
			contactoSeleccionado:null
		},
		actions: {
			selectedid: (data) =>{
				setStore({ contactoSeleccionado: data})
			},
			cargarContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/miguel")
					.then((response) => {
						if (response.ok) {
							return response.json();
						} else {
							if (response.status === 404) {
								getActions().crearUsuario(); // Llamar a la función crearUsuario
							}
						}
					})
					.then((result) => setStore({ contactos: result.contacts }))
					.catch((error) => console.error(error));
			},

			crearUsuario: () => {
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "aplication/json"
					},
					redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/miguel", requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error(error));
			},

			crearContacto: (contacto, navigate) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify(
					contacto
				);

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/miguel/contacts", requestOptions)
					.then((response) => response.json())
					.then((result) => {
						getActions().cargarContactos()
						navigate("/")
						console.log(result)})
					.catch((error) => console.error(error));
			},

			editarContacto: async (id, contactoEditado) => {
				const requestOptions = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contactoEditado),
					redirect: "follow"
				};

				
					try {
						const resp= await fetch(`https://playground.4geeks.com/contact/agendas/miguel/contacts/${id}`, requestOptions)
						if(resp.ok){							
							const result = await resp.json()
							console.log(result)
							getActions().cargarContactos();
							return true;
						}
					} catch (error) {
						console.log (error)
						return false;
					}
					
				
			},

			eliminarContacto: (id) => {
				return (
					fetch(`https://playground.4geeks.com/contact/agendas/miguel/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"Content.type": "application/json"
						}
					})
						.then(resp => {
							if (resp.status == 200) {
								console.log(resp)
								alert("Contacto eliminado exitosamente")
							} else return resp.json();
						})
						.then(resp => console.log(resp))
						.catch(error => console.log(error))
				)
			}		
		}
	};
};

export default getState;