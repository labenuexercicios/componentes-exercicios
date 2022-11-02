import react from "react";
import { Usuario } from "./InfoUsuarios";

export const CardVideo = () => {
    const titulo = "titulo do video"
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }
    return (

        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{titulo}</h4>
            <Usuario/>
        </div>
    )
}