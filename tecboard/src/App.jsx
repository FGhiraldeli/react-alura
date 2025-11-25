/** @format */

import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";

//no react, componentes sao FUNÇÕES

function App() {
  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligência artificial" },
    { id: 5, nome: "data science" },
    { id: 6, nome: "cloud" },
  ];

  const eventos = [
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png",
      tema: temas[1],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_3.png",
      tema: temas[2],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_4.png",
      tema: temas[3],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_5.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_6.png",
      tema: temas[5],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt=""></img>
      </header>
  

      <Banner />
      <FormularioDeEvento temas={temas} />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            <CardEvento evento={eventos[0]} />
          </section>
        );
      })}

      {/* <section><Tema tema={temas[0]} /></section>
      <section><Tema tema={temas[1]} /></section>
      <section><Tema tema={temas[2]} /></section>
      <section><Tema tema={temas[3]} /></section>
      <section><Tema tema={temas[4]} /></section>
      <section><Tema tema={temas[5]} /></section> */}
    </main>
  );
}

export default App;
