import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Router, Routes, Route, Link} from 'react-router-dom';
import './index.css';
import Marquee from "react-fast-marquee";
import Products from './components/Products';
import Home from './components/Home';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './components/About';
import Subscribe from './components/Subscribe';

function App() {
  // set a timeout for loading screen
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }
        , 10000);
  }, []);

  // scroll effect for header
  const [ offset, setOffset ] = useState(0);
  useEffect(() => {
      const onScroll= () => setOffset(window.scrollY);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

  return (
    <>
          {!done ? (
        <div
          style={{
            backgroundColor: '#715a45',
            
          }}
        >
          <h1
          style={{
            paddingTop: '300px',
            fontFamily: 'Creamer',
            fontSize: "72px",
            textAlign: "center",
            color: "#715a45",
            animationName: "slideUp",
            animationDuration: "5s",
            height: "100vh",
            //transform: `maxtrix(${offset}, 0, 0, ${offset}, 0, 0)`,
            
            position: "absolute",
            //height: `${offset > 0 ? "10%" : "100%"}`,
          }}>life is a little "ruff" sometimes</h1>
        </div>
        

      ) : (
    <div className="App"
    style={{
      animationName: "fadeIn",
      animationDuration: "5s",
    
    }}>
    <BrowserRouter>
    <Navigation/>
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/subscribe" element={<Subscribe/>}/>
        </Routes>
      </div>
    </BrowserRouter>

      
      
    </div>
      )}
    </>
  );
}

export default App;