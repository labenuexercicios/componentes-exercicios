import React from 'react';
import {Info} from './InfosUsuario';

const titulo = "Título do vídeo";
function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

export function CardVideo()
{
    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/800/800?a=1 " alt="" />
        <h4>{titulo}</h4>
        <Info/>
        </div> 
    )
}