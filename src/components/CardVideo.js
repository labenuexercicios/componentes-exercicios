import React from "react";
import InfosUsuario from "./InfosUsuario";
import perfil from "../img/meliodas.jpg"

export default function (props) {
  const img = perfil
  const autor = "David"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  {/* Exercicio Props e Componentes */ }
  return (
    <section className="painel-de-videos">
      <div className="box-pagina-principal" onClick={reproduzVideo}>
         {/*Acessando Objeto*/}
        <img src={props.imagem} alt="" />
        <h4>{props.titulo}</h4>
        


        {/* Exercicio Props e Componentes */}
        <InfosUsuario
          autor={autor} 
          img={img}
        />
      </div>


    </section>
  )
}