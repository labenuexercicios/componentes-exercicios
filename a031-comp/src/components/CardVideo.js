import React from 'react';
import {Info} from './InfosUsuario';
import styled from 'styled-components';

const BoxPaginaPrincipal = styled.div
`
display: grid;
    
grid-template-columns: 1fr;
border-style: solid;
border-width: thin;
align-items: start;
justify-items: stretch;
`


export function CardVideo(props)
{
    return(
        <BoxPaginaPrincipal onClick={() => props.reproduzVideo()}>
        <Info objeto = {props.objeto}/> 
        </BoxPaginaPrincipal> 
    )
}
