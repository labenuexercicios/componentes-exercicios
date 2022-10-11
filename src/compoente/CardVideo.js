import React from "react";
import InfosUsuarios from "./InfosUsuarios";

export default function CardVideo() {

    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido");
      
    }
   
    return (
        <>
        <section className="painel-de-videos">
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <InfosUsuarios/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuarios/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuarios/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuarios/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuarios/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuarios/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuarios/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <InfosUsuarios/>
            </div>
          </section>
        </>
    )

        }