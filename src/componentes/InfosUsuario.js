import React from "react"
import img1 from "../img/img1.jpg";

const InfosUsuario = () => {
    const usuario = "DevStart"
    const reproduzirVideo = () => {
        alert("O vídeo está sendo reproduzido")
    }
    return (
    
        <div >
            <div className="box-pagina-principal">
                <img src={img1} className="img" alt="" />
                <p>Usuario : {usuario}</p>
                <button className="btn" onClick={reproduzirVideo}>Clique Aqui</button>
            </div>
        </div>
    )
}
export default InfosUsuario;