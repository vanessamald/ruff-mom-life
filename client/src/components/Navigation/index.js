import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import App from '../../App';
import About from '../About';


const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a
            
              onClick={() => setOpen(!isOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
  
          <div
   
          >
            <div className="navbar-start"
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
              <Link className="navbar-item" activeClassName="is-active" to="/">
                Home
              </Link>
  
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/about"
              >
                About
              </Link>
  
              <Link
                className="navbar-item"
                activeClassName="is-active"
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




