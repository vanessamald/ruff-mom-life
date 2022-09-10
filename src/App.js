import React from 'react';
import '../src/index.css';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header/>
      <About/>
      <div>
        <Products />
      </div>
      
    </div>
  );
}

export default App;