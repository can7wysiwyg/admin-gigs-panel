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

  const TextRemover = () => {

    if(isLogged === true) {
      return(<>
        <Nav.Link href="/" className="mx-2 active"></Nav.Link>
      
      </>) 

    }else if(isLogged === false) {
     return(<> <Nav.Link href="/" className="mx-2 active">Home</Nav.Link> </> )
    }
  }


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
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <div className="container-fluid">
        <Navbar.Brand href="#">Tutor Finder Admin Section</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ms-auto">
            {TextRemover()}
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
