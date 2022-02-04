import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/**
 * Parte 2:
 * Al pulsar el botón se generará una Lista de Resultados
 * (que será un componente React), que mostrará entre 3 y 5 resultados (aleatorios)
 * (que también serán componentes React).
 * Cada resultado será un div a modo de tarjeta con un título y un texto generados al azar.
 */

//Resultados se muestra tras darle a enviar en el formulario.
class Resultados extends React.Component {
  constructor(props) {
    super(props);
    this.estado = {
        resultados: ["Hola", "Adiós", "Esto es otro resultado"]
    };
  }

  //Renderizamos los resultados...
  render() {
    return(
      <Tarjeta 
        resultado = {this.estado.resultados}
      />
    );
  }
}

/**
 * Clase que genera las tarjetas
 * La invocamos con un render en Resultados, con lo que le llega a su constructor una prop (resultado)
 * como en nuestra clase tarjeta no tenemos constructor llama al super y coge el prop directamente.
 */
class Tarjeta extends React.Component {

  /**
   * Renderizamos un div.
   * @returns El div con el resultado del prop
   */
  render() {
    return this.props.resultado.map((result, Symbol) => {
        console.log(result);
        return ( //Identificamos a cada div con un id único.
          <div key={Symbol}>
            {result}
          </div>
        );
    });
  }
}


// ========================================

ReactDOM.render(<Resultados />, document.getElementById("root"));
