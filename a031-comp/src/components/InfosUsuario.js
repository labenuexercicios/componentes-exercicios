import React from 'react';
import logo from "./logo192.png"; //colcoar a imagem na pasta components
import styled from 'styled-components';

export function Info(props)
{
    return(
    <div> 
            <img src={props.objeto.video}/>
            <h4>titulo: {props.objeto.titulo}</h4>
            <p>Autor: {props.objeto.autor}</p>
            <img src={props.objeto.imagem}/>
    </div>
    )
}