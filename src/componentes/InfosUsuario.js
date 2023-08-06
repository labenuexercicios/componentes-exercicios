import React from "react";



export default function InfosUsuario() {
  const nomeDoUsuario = "Simone"



  return(
    <>
      <div className="info-usuario"> 
        <img className="imagem" src="https://picsum.photos/400/400?a=1 " />
        <p>Nome do usuário: {nomeDoUsuario}</p>
      </div>
    </>
  )
}