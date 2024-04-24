import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Formulario } from "../component/formulario";

import "../../styles/demo.css";

export const ViewFormulario = () => {
    const { store, actions } = useContext(Context);
    return(
        <Formulario />
    );
};