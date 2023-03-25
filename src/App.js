import React from "react";
import "./styles.css";
import { CardVideo } from "./components/CardVideo";

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
              <li className="botoes-menu-vertical">Início</li>
              <li className="botoes-menu-vertical">Em alta</li>
              <li className="botoes-menu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-menu-vertical">Originais</li>
              <li className="botoes-menu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
