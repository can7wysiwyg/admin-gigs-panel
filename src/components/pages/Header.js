import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="info" variant="light" expand="lg" className="p-3">
      <div className="container-fluid">
        <Navbar.Brand href="#">Admin Section</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="mx-2 active">Home</Nav.Link>
            <Nav.Link href="#" className="mx-2">Products</Nav.Link>
            <Nav.Link href="#" className="mx-2">Pricing</Nav.Link>
            
          </Nav>
         </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
