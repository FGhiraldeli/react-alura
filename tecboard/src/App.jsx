/** @format */

import "./App.css";

//no react, componentes sao FUNÇÕES

function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor='nome'>Qual o nome do evento? </label>
        <input type='text' id='nome'></input>
      </fieldset>
    </form>
  );
}

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
