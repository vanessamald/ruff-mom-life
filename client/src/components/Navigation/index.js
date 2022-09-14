import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import App from '../../App';
import About from '../About';

function Navigation() {
    return (
    <div 
        style= {{
            display: 'flex',
            justifyContent: 'space-evenly',
            
            color: 'white',
            fontSize: '24px',
         
            fontFamily: 'Creamer'
        }}>
        <a to="/">Home</a>
        <a to="/about">About</a>
        <a to="/products">Products</a>
    </div>
    );
}


export default Navigation;




