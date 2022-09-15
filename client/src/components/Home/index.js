import React from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import '../../index.css';
import heroImage from '../../assets/images/hero-image.jpg';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Subscribe from '../Subscribe';

function Home() {
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
            color: 'black',
            zIndex: '1',
            marginLeft: '0px',
            marginRight: '0px',
            overflow: 'hidden',
            
        }}
      >"Ruff"</h1>
      <h2 className="header"
      style= {{
        marginTop: '-90px',
        fontSize: '90px',
        textAlign: 'center',    
        //color: '#715a45',
        color: 'black',
        marginLeft: '0px',
        marginRight: '0px',   
    }}>Mom</h2>
       <h2 className="header"
      style= {{
        marginTop: '-80px',
        fontSize: '96px',
        textAlign: 'center',    
        //color: '#715a45',
        color: 'black',
        marginLeft: '0px',
        marginRight: '0px', 
        
    }}>Life</h2>
      
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
    <Subscribe/>
    <Footer/>
    </div> 
  );
}

export default Home;