import React, { useEffect, useState } from 'react';
import '../src/index.css';
import Marquee from "react-fast-marquee";
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './components/About';

function App() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }
        , 10000);
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
            fontFamily: 'Creamer',
            fontSize: "72px",
            textAlign: "center",
            color: "white",
            animationName: "slideIn",
            animationDuration: "15s",
            height: "100vh",
          }}>Loading...</h1>
          
        </div>

      ) : (
    <div className="App"
    style={{
      animationName: "fadeIn",
      animationDuration: "5s",
    
    }}>
      <Navigation />
      <Header/>
      <About/>
      <div>
        <Products />
      </div>
      
    </div>
      )}
    </>
  );
}

export default App;