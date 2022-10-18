import React from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import '../../index.css';
import heroImage from '../../assets/images/hero-image.jpg';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Subscribe from '../Subscribe';
import Products from '../Products';
import OffcanvasExample from '../Navigation';

function Home() {
  return (
    <div
        style= {{
            //marginBottom: '100px',
        }}>
      
      <h1 className="header"
        style= {{
            marginTop: '0px',
            fontSize: '150px',
            textAlign: 'center',
            //color: '#482216',
            color: 'white',
            zIndex: '1',
            marginLeft: '0px',
            marginRight: '0px',
            overflow: 'hidden',
            marginBottom: '800px'
            
        }}
      >"Ruff" Mom Life</h1>
      <h2 className="header"
      style= {{
        marginTop: '-90px',
        fontSize: '200px',
        textAlign: 'center',    
        //color: '#715a45',
        color: 'black',
        marginLeft: '0px',
        marginRight: '0px',   
    }}></h2>
       <h2 className="header"
      style= {{
        marginTop: '-80px',
        fontSize: '206px',
        textAlign: 'center',    
        //color: '#715a45',
        color: 'black',
        marginLeft: '0px',
        marginRight: '0px', 
        
    }}></h2>
      
      <div 
    
      >
      <p
      style= {{
        marginTop: '-50px',
        fontSize: '16px',
        textAlign: 'center',
        color: 'white',
        
        marginBottom: '300px',
      }}
      ></p>
      </div>
    
    
    <Footer/>
    </div> 
  );
}

export default Home;