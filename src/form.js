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

export class Boton extends React.Component {
    clicBoton(e){
        e.preventDefault();
        document.getElementById('form').style.display='none';
        document.getElementById('resultados').style.display='flex';
    }
    render(){
        return(
            <button onClick={this.clicBoton}>{this.props.texto}</button>
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
                <h2>Formulario</h2>
                <hr></hr>
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
