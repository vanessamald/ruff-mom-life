import React from 'react';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Products />
      </div>
      
    </div>
  );
}

export default App;