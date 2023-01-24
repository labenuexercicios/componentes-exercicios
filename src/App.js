import React from "react";
import "./styles.css";
import { CardVideo } from "./Componentes/CardVideo";
// import carro1 from

export default function App() {
  // const titulo = "Título do vídeo";

  // function reproduzVideo() {
  //   alert("O vídeo está sendo reproduzido");
  // }
  // const nome = "fala doido."

  const infof1 ={
   titulo : "Titulo novo",
   imagem: "https://i.picsum.photos/id/795/400/400.jpg?hmac=mmGHCbis-pqjssxb_bq5FPGiEmO3uKJROlzfkmfl5BE"
  };

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <CardVideo infof1 = {infof1}   
          />
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
