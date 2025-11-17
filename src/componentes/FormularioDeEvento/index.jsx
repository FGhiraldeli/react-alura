import "./formulario-de-eventos.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";


export function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor='nome'>Qual o nome do evento? </Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            placeholder="Summer dev hits"
            name="nomeEvento"

          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor='dataEvento'>Data do evento:</Label>
          <CampoDeEntrada type="date" id='dataEvento' name='dataEvento' />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>
          Criar evento
        </Botao>
      </div>
    </form>
  );
}
