import React from "react"
import InfosUsuario from "./InfosUsuario"


export default function CardVideo(props) {
    const nomeUsuario = "Heytor"

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <>
          <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img id="img" src={props.imagem} alt=""/>
            <h4 id="titulo">{props.titulo}</h4>
            <InfosUsuario nome={nomeUsuario} imagem="https://picsum.photos/300/300"/>
          </div>
       </>
    )
}