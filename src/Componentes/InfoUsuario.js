import React from 'react';
import Doutor from "../Componentes/Doutorestranho.jpg"
import "./InfoUsuario.css"

const InfoUsuario = () =>{
    
    const nome = "Kayronny"

    return( 
        <div className='container'>
        <img id='doutor' src={Doutor}/>
        <p>{nome}</p>    
        </div>
    )

}

export default InfoUsuario