import React from "react"

export default function InfosUsuario() {
    const nomeUsuario = "Heytor";
    
     return(
        <div id="infos-usuario">
         <img src="https://picsum.photos/200/300" alt="" />
         <p>{nomeUsuario}</p>
        </div>
     )
}