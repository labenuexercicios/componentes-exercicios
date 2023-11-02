import react from "react";
import InfosUsuarios from "./InfosUsuarios";

import { DivCard, SectionCard } from "./styled";


export default function CardVideo(props) {
    const titulo = "Título do vídeo";

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }

    return (
     <div>
          <SectionCard className="painel-de-videos">
            <DivCard className="box-pagina-principal" onClick={reproduzVideo}>

              <img src={props.imagem} alt="" />
              <h4>{props.titulo}</h4>
              <InfosUsuarios />
            </DivCard>
        
          </SectionCard>

       
          
      </div>
    );
}