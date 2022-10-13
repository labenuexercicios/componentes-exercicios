import React from "react";
import CardVideo from "./components/CardVideo";
import "./styles.css";

export default function App() {

  
  const video1 = {
    mainTitle: "https://picsum.photos/401/400?a=7",
    title: 'Video 1',
    alt: 'video1',
  }

  const video2 = {
    mainTitle: "https://picsum.photos/401/400?a=8",
    title: 'Video 2',
    alt: 'video2',
  }

  
  const video3 = {
    mainTitle: "https://picsum.photos/401/400?a=9",
    title: 'Video 3',
    alt: 'video3'
  }

  const video4 = {
    mainTitle: "https://picsum.photos/401/400?a=1",
    title: 'Video 4',
    alt: 'video4'
  }

/////////////////////////////////////////////
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
            <CardVideo video={video1} img={video1}/> 
            <CardVideo video={video2} img={video2}/>
            <CardVideo video={video3} img={video3}/>
            <CardVideo video={video4} img={video4}/>
          </section>
        </main>

        <footer>
          <h4>Eu moro no footer</h4>
        </footer>
      </div>
    </div>
  );
}
