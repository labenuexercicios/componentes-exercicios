import React from "react";
import "./styles.css";
import InfosUsuarios from "./components/InfosUsuarios";
import { GlobalStyle } from "./components/GlobalStyle";
import CardVideo from "./components/CardVideo";
import { DivTelaToda, HeaderCard, MainCard, NavCard } from "./components/styled";


export default function App() {
  const titulo = "Título do vídeo";

  const infoVideo = {
    imagem:  "https://picsum.photos/400/400?a=1" ,
    titulo: titulo
  }

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <DivTelaToda className="tela-inteira">
        <HeaderCard>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
        </HeaderCard>

        <MainCard>
          <NavCard className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </NavCard>

          <section className="painel-de-videos">
            <CardVideo imagem={infoVideo.imagem} titulo={infoVideo.titulo} />
            <CardVideo imagem={infoVideo.imagem} titulo={infoVideo.titulo} />
            <CardVideo imagem={infoVideo.imagem} titulo={infoVideo.titulo} />
            <CardVideo imagem={infoVideo.imagem} titulo={infoVideo.titulo} />
            <CardVideo imagem={infoVideo.imagem} titulo={infoVideo.titulo} />
            <CardVideo imagem={infoVideo.imagem} titulo={infoVideo.titulo} />
            <CardVideo imagem={infoVideo.imagem} titulo={infoVideo.titulo} />
            <CardVideo imagem={infoVideo.imagem} titulo={infoVideo.titulo} />
            
          </section>
      
        </MainCard>
         
        <footer>
          <h4>Copyright © 2022 Labenu All rights reserved.</h4>
        </footer>
      </DivTelaToda>
    </div>
  );
}
