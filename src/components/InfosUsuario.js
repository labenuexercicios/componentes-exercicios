import React from "react";
import imagem from '../b72a1cfe.png'

export function InfosUsuario() {
    const usuario = "Fulano de tal";
    return (
        <div className="infos-usuario">
            <img src={imagem} className="perfil" />
            <p>Usuário: {usuario}</p>
        </div>
    )
}