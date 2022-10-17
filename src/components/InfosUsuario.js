import React from "react";
import perfil from "../img/meliodas.jpg"
export default function (){
    return(
        <div className="infoUsuario">
            <img className="imgCard" src={perfil}/>
            <p> David </p>
        </div>
    )
}