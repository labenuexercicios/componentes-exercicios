import React from "react";
import { InfosUsuario } from "./InfosUsuario";




export function CardVideo() {
    const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=4 " alt="" />
        <h4>{titulo}</h4>
        <InfosUsuario/>
      </div>
    );
  
}
