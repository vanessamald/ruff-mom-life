import { useState, useEffect } from 'react';
import {
  Container,
  Text,
  Box,
  Divider,
  Image,
  Button,
  Flex,
  SimpleGrid
} from "@chakra-ui/react";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import Butter from 'buttercms';
import Footer from '../Footer';

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
    
<Container maxW="container.xl" h="100vh" >
      <Flex justifyContent="space-between" alignContent="center">
        <Text
          as="a"
          href="/"
          fontSize="2rem"
          color="gray.900"
          my="5px"
          style={{
            fontFamily: "Creamer",
            color: "white",
          }}
        >
          Our Products
        </Text>
        <Button
          my="5px"
          colorScheme="green"
          variant="ghost"
          leftIcon={<FiShoppingBag size="24px" />}
          size="lg"
          p={2}

          className="snipcart-checkout"
        >
          View Cart
        </Button>
      </Flex>
      
      <Box mt={4}>
        <SimpleGrid
          minChildWidth="300px"
          align="center"
          justify="center"
          spacing="40px"
          mb={32}
        >
          {products.map((product) => (
            <Box
              maxW="sm"
              rounded="lg"
              _hover={{ shadow: "dark-lg" }}
              key={product.id}
            >
              <Image className= "product-image"
                src={product.image}
                alt={`Picture of ${product.name}`}
              />

              <Box p="6">
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Text
                  className="product-name"
                  >
                    {product.name}
                  </Text>
                  <Text
                  >
                    ${product.price}
                  </Text>
                </Flex>

                <Text
                  mt={2}
                  color="gray.500"
                  display={{ base: "none", md: "flex" }}
                >
                  {product.description}
                </Text>

                <Button
                  leftIcon={<FiShoppingCart size="24px" />}
                  size="lg"
                  mt={4}
                  isFullWidth
                  colorScheme="green"
                  variant="outline"
                  alignSelf={"center"}

                  className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.name}
                  data-item-url="/"
                  data-item-description={product.description}
                  data-item-price={product.price}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Footer/>

    </Container>

  );
}

export default Products;