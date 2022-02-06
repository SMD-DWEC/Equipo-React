/**
    @file Componentes react del formulario
    @author Mario Pérez Pizarro
*/

import React from 'react';
import ReactDOM from 'react-dom';

class Etiqueta extends React.Component {
    render(){
        return(
            <label>{this.props.texto+": "}</label>
        );
    }
}
/******************************************************/

class Input extends React.Component {
    render(){
        return(
            <input type="text" />
        );
    }
}
/******************************************************/

class Boton extends React.Component {
    mostrarResultado(){
        console.log('debug');
    }
    render(){
        return(
            <button onClick={this.mostrarResultado}>{this.props.texto}</button>
        );
    }
}
/******************************************************/

class Formulario extends React.Component {
    renderEtiqueta(valor){
        return(
            <Etiqueta texto={valor} />
        );
    }
    renderInput(){
        return(
            <Input />
        );
    }
    renderBoton(valor){
        return(
            <Boton texto={valor} />
        );
    }
    render(){
        return(
            <form>
                <div className='grupo-inputs'>
                    {this.renderEtiqueta('Nombre')}
                    {this.renderInput()}
                </div>
                <div className='grupo-inputs'>
                    {this.renderEtiqueta('Apellidos')}
                    {this.renderInput()}
                </div>
                {this.renderBoton('Enviar')}
            </form>
        );
    }
}
/******************************************************/

ReactDOM.render(<Formulario />, document.getElementById("form"));
