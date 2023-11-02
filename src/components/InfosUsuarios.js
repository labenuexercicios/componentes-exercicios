import react from "react";
import { DivUsuario } from "./styled";
import imagem from "../pics/info.png"

export default function InfosUsuarios(props) {
    const nome = "Raissa"

    return (
        <DivUsuario>
          <img src={imagem.props}/>
          <p> Nome do Usuario: {nome}</p>
        </DivUsuario>
    );
}