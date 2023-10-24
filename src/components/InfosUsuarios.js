import react from "react";
import imagem from "../pics/info.png"

export default function InfosUsuarios() {
    const nome = "Raissa"
    return (
        <div className="Info-img">
          <img src={imagem} alt="Info" className="Info"/>
          <h3> Nome do Usuario: {nome}</h3>
        </div>
    );
}