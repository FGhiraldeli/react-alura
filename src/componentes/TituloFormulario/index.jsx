/** @format */
import "./titulo-formulario.estilos.css";
/** @format */
// props é um OBJETO
// props.children
export function TituloFormulario(props) {
  return <h2 className='titulo-form'>{props.children}</h2>;
}
