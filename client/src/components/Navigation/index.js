import React, { useState } from 'react';
import Subscribe from '../Subscribe';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";

function Navigation() {
  return (
    <>
      {[false,  ].map((expand) => (
        <Navbar key={expand} bg="light" variant="dark" expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">"Ruff" Mom Life</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <NavDropdown
                    title="Shop"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/products">Bandanas</NavDropdown.Item>
                    <NavDropdown.Item href="/products">
                      Shirts
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href=""
                      my="5px"
                      colorScheme="black"
                      variant="ghost"
                      leftIcon={<FiShoppingBag size="24px" />}
                      size="lg"
                      p={2}
                      className="snipcart-checkout"
                      >  
                      My Cart
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                <Subscribe/>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;




