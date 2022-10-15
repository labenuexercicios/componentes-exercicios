import React from "react";
import "./App.css";
import {CardVideo} from './components/CardVideo';
import logo from "./components/logo192.png"; //colcoar a imagem na pasta components
import {GlobalStyled} from "./styled/GlobalStyled";
import {TelaInteira, Header, Main, MenuVertical, BotoesMenuVertical, PainelDeVideos} from "./styled/AppStyled";

const titulo = "Título do vídeo";
function reproduzVideo(event) {
  alert("O vídeo está sendo reproduzido");
}

const objeto1 = 
{
video: "https://picsum.photos/400/400?a=1",
titulo: "video 1",
autor: "luiz",
imagem: logo
}

const objeto2 = 
{
video: "https://picsum.photos/400/400?a=2",
titulo: "video 2",
autor: "luiz",
imagem: logo
}

const objeto3 = 
{
video: "https://picsum.photos/400/400?a=3",
titulo: "video 3",
autor: "luiz",
imagem: logo
}

const objeto4 = 
{
video: "https://picsum.photos/400/400?a=4",
titulo: "video 4",
autor: "luiz",
imagem: logo
}

const objeto5 = 
{
video: "https://picsum.photos/400/400?a=5",
titulo: "video 5",
autor: "luiz",
imagem: logo
}

const objeto6 = 
{
video: "https://picsum.photos/400/400?a=6",
titulo: "video 6",
autor: "luiz",
imagem: logo
}

const objeto7 = 
{
video: "https://picsum.photos/400/400?a=7",
titulo: "video 7",
autor: "luiz",
imagem: logo
}

const objeto8 = 
{
video: "https://picsum.photos/400/400?a=8",
titulo: "video 8",
autor: "luiz",
imagem: logo
}



export default function App() {

  return (
    <div>
      <GlobalStyled />
      <TelaInteira>
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <MenuVertical>
            <ul>
              <BotoesMenuVertical>Início</BotoesMenuVertical>
              <BotoesMenuVertical>Em alta</BotoesMenuVertical>
              <BotoesMenuVertical>Inscrições</BotoesMenuVertical>
              <hr />
              <BotoesMenuVertical>Originais</BotoesMenuVertical>
              <BotoesMenuVertical>Histórico</BotoesMenuVertical>
            </ul>
          </MenuVertical>

          <PainelDeVideos>
          <CardVideo objeto = {objeto1} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto2} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto3} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto4} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto5} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto6} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto7} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto8} reproduzVideo = {reproduzVideo}/>      
          </PainelDeVideos>
        </Main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </TelaInteira>
    </div>
  );
}
