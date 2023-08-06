import React from "react";
import '../imagens/foto1.jpg'


export default function InfosUsuario() {
  const nomeDoUsuario = "Simone"



  return(
    <>
      <div className="info-usuario"> 
        <img className="imagem" src="foto2.jpg"/>
        <p>Nome do usuário: {nomeDoUsuario}</p>
      </div>
    </>
  )
}