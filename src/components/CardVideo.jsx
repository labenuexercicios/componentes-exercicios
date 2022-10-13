import React from "react";
import InfosUsuario from "./InfosUsuario";
//import App from "../App";


export default function CardVideo(props) {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    const user1 = {
        name: 'Guilherme Mesquita',
        img: 'https://picsum.photos/401/400?a=2',
        //desc: 'name',
    }



    return (
        <>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.img.mainTitle} />
                <h4>{props.video.title}</h4>
                <InfosUsuario userImg={user1} name={user1}/>
            </div>
        </>
    )
}