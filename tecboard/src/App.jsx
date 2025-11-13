/** @format */

import "./App.css";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";

//no react, componentes sao FUNÇÕES

function App() {
  return (
    <main>
      <header>
        <img src='/logo.png' alt=''></img>
      </header>
      <section>
        <img Src='/banner.png' alt=''></img>
      </section>
      <FormularioDeEvento />
    </main>
  );
}

export default App;
