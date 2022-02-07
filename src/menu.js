import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function Opciones(props){
    return(
        <li>Opcion {props.num}</li>
    )
}

function Menu(){
    let items =[]

    for(let i = 0; i<3; i++){
        items.push(<li key={i}><a href={'#'}>Opcion {i +1}</a> </li>)
    }

    return(


        <ul>
            {items}
        </ul>
    )
}

ReactDOM.render(<Menu />, document.getElementById('menu'));