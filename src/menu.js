import React, {Component} from 'react';
import {headerwrapper } from "./styles/Header"


function Opciones(props){
    return(
        <li>Opcion {props.num}</li>
    )
}

function Menu(){
    let item =[]

    for(let i = 0; i<3; i++){
        items.push(<li key={i}><a href={'#'}>Opcion {i +1}</a> </li>)
    }

    return(


        <ul>
            {item}
        </ul>
    )
}