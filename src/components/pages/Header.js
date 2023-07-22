import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { GlobalState } from "../../GlobalState"
import { Link } from "react-router-dom"

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.AdminApi.isLogged;
  const [isAdmin] = state.AdminApi.isAdmin;

  const logoutUser = async () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const loggedRouter = () => {
    return (
      <Nav>
        <Link className="nav-link" to="/" onClick={logoutUser}>
          Logout
        </Link>
      </Nav>
    );
  };


  const AdminRoute = () => {
    return (
      <Nav>
        <NavDropdown title="Management" id="basic-nav-dropdown">
          <NavDropdown.Item href="/admin_panell">Admin Panel</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  };

  const AdminLogin = () => {
    if (isAdmin) {
      return AdminRoute();
    }
  };




  return (
    <Navbar bg="info" variant="light" expand="lg" className="p-3">
      <div className="container-fluid">
        <Navbar.Brand href="#">Admin Section</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="mx-2 active">Home</Nav.Link>
            
          </Nav>
          <Nav className="ml-auto">
          {isLogged ? loggedRouter() : ""}
          {AdminLogin()}
  
          
        </Nav>

         </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
