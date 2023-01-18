import React from "react"
import { InfosUsuario } from "./InfosUsuario"

export function CardVideo(props){
    console.log("Propos do card" , props)
    // const titulo = "Video de paisagens";
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }
      
  const infou1 ={
    nome : "Nome do usuario",
    imagem: "https://i.picsum.photos/id/795/400/400.jpg?hmac=mmGHCbis-pqjssxb_bq5FPGiEmO3uKJROlzfkmfl5BE"
   };
return(
    <div className="videos">
    <section className="painel-de-videos">
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src= {props.infof1.imagem} />
    <h4>{props.infof1.titulo}</h4>
    <InfosUsuario
    infou1 = {infou1}
    />
    </div>
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src="https://picsum.photos/400/400?a=2 " alt="" />
    <h4>{props.infof1.titulo}</h4>
    <InfosUsuario
    infou1 = {infou1}
    />
    </div>
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src="https://picsum.photos/400/400?a=3 " alt="" />
    <h4>{props.infof1.titulo}</h4>
    <InfosUsuario
    infou1 = {infou1}
    />
    </div>
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src="https://picsum.photos/400/400?a=4 " alt="" />
    <h4>{props.infof1.titulo}</h4>
    <InfosUsuario
    infou1 = {infou1}
    />
    </div>
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src="https://picsum.photos/400/400?a=5 " alt="" />
    <h4>{props.infof1.titulo}</h4>
    <InfosUsuario
    infou1 = {infou1}
    />
    </div>
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src="https://picsum.photos/400/400?a=6 " alt="" />
    <h4>{props.infof1.titulo}</h4>
    <InfosUsuario
    infou1 = {infou1}
    />
    </div>
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src="https://picsum.photos/400/400?a=7 " alt="" />
    <h4>{props.infof1.titulo}</h4>
    <InfosUsuario
    infou1 = {infou1}
    />
    </div>
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src="https://picsum.photos/400/400?a=8 " alt="" />
    <h4>{props.infof1.titulo}</h4>
    <InfosUsuario
    infou1 = {infou1}
    />
    </div>
    </section>
</div>
)

}