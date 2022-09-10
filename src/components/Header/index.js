import React from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import '../../index.css';
import heroImage from '../../assets/images/hero-image.jpg';
import Navigation from '../Navigation';

function Header() {
  return (
    <div
        style= {{
            marginBottom: '100px',
            
        }}>
            
      <h1 className="header"
        style= {{
            marginTop: '100px',
            fontSize: '120px',
            textAlign: 'center',
            //color: '#482216',
            color: 'white',
            zIndex: '1',
            marginLeft: '0px',
            marginRight: '0px',
            
        }}
      >"Ruff"</h1>
      <h2 className="header"
      style= {{
        marginTop: '-95px',
        fontSize: '96px',
        textAlign: 'center',    
        color: '#715a45',
        marginLeft: '0px',
        marginRight: '0px',   
    }}>Mom</h2>
       <h2 className="header"
      style= {{
        marginTop: '-85px',
        fontSize: '96px',
        textAlign: 'center',    
        color: '#715a45',
        marginLeft: '0px',
        marginRight: '0px', 
        
    }}>Life</h2>
      
      <div>
      <p
      style= {{
        marginTop: '-50px',
        fontSize: '16px',
        textAlign: 'center',
        color: 'white',
        paddingBottom: '100px',
        borderBottom: '1px solid black',
      }}
      >It's "ruff sometimes but we love it!</p>
      </div>
    
    </div> 
  );
}

export default Header;