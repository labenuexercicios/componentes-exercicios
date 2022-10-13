import React from 'react';
import {Info} from './InfosUsuario';



export function CardVideo(props)
{
    return(
        <div className="box-pagina-principal" onClick={() => props.reproduzVideo()}>
        <Info objeto = {props.objeto}/> 
        </div> 
    )
}
