import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './form.js'
import './menu.js'

/**
 * @author Sergio Matamoros Delgado
 * @description Contiene las tarjetas de resultados aleatoriamente
 */
/**
 * Al pulsar el botón se generará una Lista de Resultados (que será un componente React),
 * que mostrará entre 3 y 5 resultados (que también serán componentes React). 
 * Cada resultado será un div a modo de tarjeta con un título y un texto generados al azar.
 */
class Resultados extends React.Component {
  constructor(props) {
    super(props);

    //Información que se encuentra ligada o enlazada a este componente...
    this.estado = {
      resultados: [
        ["titulo1", "cuerpo1"],
        ["titulo2", "cuerpo2"],
        ["titulo3", "cuerpo3"],
        ["titulo4", "cuerpo4"],
        ["titulo5", "cuerpo5"],
      ]
    }
  }

  render() {
    let resultadosRnd = Math.floor(Math.random()*this.estado.resultados.length+3);
    let copiaResultados = this.estado.resultados.slice(0, resultadosRnd);

    return (
      <Tarjeta 
        resultado = {copiaResultados}
      />
    );
  }
}

class Tarjeta extends React.Component {
  render() {
    return this.props.resultado.map((valor, index) => {
      return (
        <div className="tarjeta" key={index}>
          Título: {valor[0]}
          <hr />
          {valor[1]}
        </div>
      )
    })
  }
}

// ========================================

ReactDOM.render(<Resultados />, document.getElementById("resultados"));
