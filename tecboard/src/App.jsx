/** @format */

import "./App.css";

//no react, componentes sao FUNÇÕES

// props é um OBJETO
// props.chidren
function TituloFormulario(props) {
  return <h2>{props.children}</h2>;
}

function CampoDeFormulario({ children }) {
  return <fieldset>{children}</fieldset>;
}

function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

function CampoDeEntrada({ props }) {
  return <input {...props} />;
}

function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <h2>Preencha para criar um evento:</h2>
      <CampoDeFormulario>
        <Label>Preencha para criar um evento:</Label>
        <label htmlFor='nome'>Qual o nome do evento? </label>
        <input
          type='text'
          id='nome'
          placeholder='Summer dev hits'
          name='nomeEvento'
        />
      </CampoDeFormulario>
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
