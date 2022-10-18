import React from "react";

export default function (props){
    return(
        <div className="infoUsuario">
            <img className="imgCard" src={props.img}/>
            <p>{props.autor}</p>
        </div>
    )
}