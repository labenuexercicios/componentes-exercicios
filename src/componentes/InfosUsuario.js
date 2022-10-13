import React from "react"

export default function InfosUsuario(props) {
    
     return(
        <div id="infos-usuario">
         <img id="imagem" src={props.imagem}/>
         <h1 id="nome">{props.nome}</h1>
        </div>
     )
}