import React from "react";
import InfosUsuarios from "./InfosUsuarios";


export default function CardVideo(props) {
   

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");

    }

    return (

        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img className="user.img" src={props.imagem}/>
          
            <h4> {props.titulo}</h4>
            <InfosUsuarios usuario={props.usuario} />

        </div>

    )

}