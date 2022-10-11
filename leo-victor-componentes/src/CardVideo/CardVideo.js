import React from "react";
import InfosUsuarios from "./InfosUsuarios";

export function CardVideo(){

    const titulo = "Título do vídeo";
function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}
    return(
        <>
          <div className="box-pagina-principal" onClick={reproduzVideo}>
             <InfosUsuarios/>
            </div>
        </>
    )
}