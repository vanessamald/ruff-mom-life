import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import Butter from 'buttercms';

const butter = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE);

function Products() {
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
    <Row xs={1} md={2} className="g-2">
       <button
          my="5px"
          colorScheme="black"
          variant="ghost"
          leftIcon={<FiShoppingBag size="24px" />}
          size="lg"
          p={2}
          className="snipcart-checkout"
        >  
        </button>
          {products.map((product) => (
      <Col>
    
    <CardGroup maxW="container.xl" h="100vh">
      <Card justifyContent="space-between" alignContent="center">
      <div mt={4}>
        <div
          minChildWidth="100px"
          align="center"
          justify="center"
          spacing="40px"
          mb={32}
        >
            <div
              maxW="sm"
              rounded="lg"
              _hover={{ shadow: "dark-lg" }}
              key={product.id}
            >
              <Card.Img className= "product-image" variant="top"
                src={product.image}
                alt={`Picture of ${product.name}`}
                style={{
                  
                }}
              />

              <div p="6">
                <div
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <p className="product-name">
                    {product.name}
                  </p>
                  <p>
                    ${product.price}
                  </p>
                </div>

                <Card.Text
                  mt={2}
                  color="gray.500"
                  display={{ base: "none", md: "flex" }}
                >{product.description}
                </Card.Text>

                <button bg="black"
                  leftIcon={<FiShoppingCart size="24px" />}
                  size="lg"
                  mt={4}
                  isFullWidth
                  colorScheme="black"
                  variant="outline"
                  alignSelf={"center"}

                  className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.name}
                  data-item-url="/"
                  data-item-description={product.description}
                  data-item-price={product.price}

                  style={{
                    width:"100%"
                  }}
                >
                  Add to Cart
                </button>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </div>
            </div>
        </div>
      </div>
  </Card>
</CardGroup>
</Col>
       ))}
    </Row>
  );
}

export default Products;
