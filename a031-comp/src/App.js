import React from "react";
import "./App.css";
import {CardVideo} from './components/CardVideo';
import {InfosUsuario} from './components/InfosUsuario';
import logo from "./components/logo192.png"; //colcoar a imagem na pasta components

const titulo = "Título do vídeo";
function reproduzVideo(event) {
  alert("O vídeo está sendo reproduzido");
}

const objeto1 = 
{
video: "https://picsum.photos/400/400?a=1",
titulo: "video legal",
autor: "luiz",
imagem: logo
}

const objeto2 = 
{
video: "https://picsum.photos/400/400?a=2",
titulo: "video legal",
autor: "luiz",
imagem: logo
}

const objeto3 = 
{
video: "https://picsum.photos/400/400?a=3",
titulo: "video legal",
autor: "luiz",
imagem: logo
}

const objeto4 = 
{
video: "https://picsum.photos/400/400?a=4",
titulo: "video legal",
autor: "luiz",
imagem: logo
}

const objeto5 = 
{
video: "https://picsum.photos/400/400?a=5",
titulo: "video legal",
autor: "luiz",
imagem: logo
}

const objeto6 = 
{
video: "https://picsum.photos/400/400?a=6",
titulo: "video legal",
autor: "luiz",
imagem: logo
}

const objeto7 = 
{
video: "https://picsum.photos/400/400?a=7",
titulo: "video legal",
autor: "luiz",
imagem: logo
}

const objeto8 = 
{
video: "https://picsum.photos/400/400?a=8",
titulo: "video legal",
autor: "luiz",
imagem: logo
}

export default function App() {

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

          <section className="painel-de-videos">
          <CardVideo objeto = {objeto1} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto2} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto3} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto4} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto5} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto6} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto7} reproduzVideo = {reproduzVideo}/>
          <CardVideo objeto = {objeto8} reproduzVideo = {reproduzVideo}/>      
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
