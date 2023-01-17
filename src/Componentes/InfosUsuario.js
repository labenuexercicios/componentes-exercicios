import React from "react";
import img from "../img/Eu.jpeg"

const userName = "Henrique"

export function InfosUsuario (){
return(
    <div>
        <img src={img} id="eu"/>
        <p>{userName}</p>
    </div>
)

}


