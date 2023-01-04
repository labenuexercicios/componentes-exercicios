import React from 'react';
import logo from "../imagem/logo.jpg"; 

export function Info()
{
    return(
    <div> 
            <p>Autor: fulano</p>
            <img className="Logo" src={logo} alt="logo"/>
    </div>
    )
}

