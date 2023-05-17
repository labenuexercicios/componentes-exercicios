import React from "react";
import InfosUsuario from "../InfosUsuario/InfosUsuario";
import "./styles.css"


const CardVideo = ({infoCardVideo}) => {
    // const titulo = "Título do vídeo";
    
    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido");
    }
 
      return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src= {infoCardVideo.imagem} alt="" />
    <h4>{infoCardVideo.titulo}</h4>
   <InfosUsuario infoCardVideo={infoCardVideo}/>
  
  </div>
  )
}



export default CardVideo;