import React from "react";
import "./styles.css";
import CardVideo from "./componentes/CardVideo";
import imagem1 from './imagens/1.jpg'
import imagem2 from './imagens/2.jpg'
import imagem3 from './imagens/3.jpg'
import imagem4 from './imagens/4.jpg'
import imagem5 from './imagens/5.jpg'
import imagem6 from './imagens/6.jpg'
import imagem7 from './imagens/7.jpg'
import imagem8 from './imagens/8.jpg'

export default function App() {
  const nomeDoUsuario1 = "Simone"
  const nomeDoUsuario2 = "Maria"
  const nomeDoUsuario3 = "Ana"
  const nomeDoUsuario4 = "Fernanda"
  const nomeDoUsuario5 = "Bárbara"
  const nomeDoUsuario6 = "Josefina"
  const nomeDoUsuario7 = "Manuela"
  const nomeDoUsuario8 = "Aurora"

  const titulo1 = "Os Devs vão dominar o mundo"
  const titulo2 = "A lagoa azul"
  const titulo3 = "Fé demais não cheira bem"
  const titulo4 = "Oswaldo Montenegro e Orquestra"
  const titulo5 = "O Poderoso Chefão"
  const titulo6 = "A teoria do Big Bang"
  const titulo7 = "Filhos da Anarquia"
  const titulo8 = "O Mágico de Oz"
 
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
          <CardVideo imagemCard={imagem1} imagemUsuario={imagem8} nomeDoUsuario={nomeDoUsuario1} titulo={titulo1}/>
          <CardVideo imagemCard={imagem2} imagemUsuario={imagem7} nomeDoUsuario={nomeDoUsuario2} titulo={titulo2}/>
          <CardVideo imagemCard={imagem3} imagemUsuario={imagem6} nomeDoUsuario={nomeDoUsuario3} titulo={titulo3}/>
          <CardVideo imagemCard={imagem4} imagemUsuario={imagem5} nomeDoUsuario={nomeDoUsuario4} titulo={titulo4}/>
          <CardVideo imagemCard={imagem5} imagemUsuario={imagem4} nomeDoUsuario={nomeDoUsuario5} titulo={titulo5}/>
          <CardVideo imagemCard={imagem6} imagemUsuario={imagem3} nomeDoUsuario={nomeDoUsuario6} titulo={titulo6}/>
          <CardVideo imagemCard={imagem7} imagemUsuario={imagem2} nomeDoUsuario={nomeDoUsuario7} titulo={titulo7}/>
          <CardVideo imagemCard={imagem8} imagemUsuario={imagem1} nomeDoUsuario={nomeDoUsuario8} titulo={titulo8}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}