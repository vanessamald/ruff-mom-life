import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import App from '../../App';
import About from '../About';


const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    //const handleClose = () => setShowMenu(false);
    //const handleShow = () => setShowMenu(true);
    
    //const state = { showing: true };
    //const { showing } = this.state;

    return (
      <nav
        
      >
        <div className="container">
          <div className="navbar-brand">
          <button onClick={() => setShowMenu}>toggle</button>
         
          </div>
  
          <div>
            <div className="navbar-menu"
                   style= {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: '0px',
                    marginBottom: '0px',
                    marginLeft: '0px',
                    marginRight: '0px',
                    padding: '0px',
                    height: '100%',
                    width: '100%', 
                  }}
               
            >
              <Link className="navbar-item" to="/">
                Home
              </Link>
  
              <Link
                className="navbar-item"
                
                to="/about"
              >
                About
              </Link>
  
              <Link
                className="navbar-item"
                to="/products"
              >
                Products
              </Link>
              <a clasName="navbar-item">Log in</a>
            </div>
  
         
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navigation;




