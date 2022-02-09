import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget.jsx";
import logo1 from "./logo1.png";
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button, NavLink } from 'react-bootstrap';
import './Loading.css'

const NavBar = () => {

  return (
    <>
  <Navbar bg="danger" variant="dark" className='navBarC'>
    <Container>
    <Navbar.Brand href="/"><img style={{ width:"200px"}} src={logo1} alt="" /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">HOME</Nav.Link>
      <Nav.Link href="/">SWITCH</Nav.Link>
      <Nav.Link href="/">ACCESORIOS</Nav.Link>
      <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    <Nav>
    <Form  className="d-flex">
        <FormControl
          type="Buscar"
          placeholder="Buscar"
          className="me-2"
          aria-label="Buscar"
        />
        <Button variant="dark">Buscar</Button>
      </Form>
    </Nav>
    <NavLink to="/cart">
              <CartWidget/>
    </NavLink>

    </Container>
  </Navbar>
</>
    
  );
};

export default NavBar;
