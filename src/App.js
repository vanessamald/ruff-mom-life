import './App.css';
import { useState, useEffect } from 'react';
import Butter from 'buttercms';

const butter = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE);

function App() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await butter.content.retrieve(["ruff-mom-life"], {
        order: "name",
      });
      const { data } = await res.data;
      const allProducts = data['ruff-mom-life'];
      console.log(allProducts);
      setProducts(allProducts);
    }
    fetchData();
  }, []);
  
  return (
    
  <div>
    {products.map((product) => (
      <div>
        <img src={product.image} alt={`${product.name}`} />
        {product.name}
        {product.price}
        {product.description}
      </div>
    ))}
  </div>
  );
}

export default App;