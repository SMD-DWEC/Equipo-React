import React, {useState} from 'react';
import {headerwrapper } from "./styles/Header"

function Header(){
    const [open, setOpen] = useStat(false)

    const handleClick = () => {
        setOpen(!open);
    };
}