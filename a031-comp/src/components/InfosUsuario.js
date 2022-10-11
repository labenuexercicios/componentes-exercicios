import React from 'react';
import logo from "./logo192.png"; //colcoar a imagem na pasta components

export function Info()
{
    return(
    <div> 
            <p>Autor: fulano</p>
            <img src={logo}/>
    </div>
    )
}