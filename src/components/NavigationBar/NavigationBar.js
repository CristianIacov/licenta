import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col} from 'react-bootstrap';
import './NavigationBar.css';
class NavbarPage extends Component {


render() {
  return (
    


  <Navbar className="nvbar" bg="success" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav >
      <Nav.Link className="navbarfirst" href="#home">DESPRE ADOPTIE</Nav.Link>
      <Nav.Link className="navbar-nav" href="#shelters">ADAPOSTURI</Nav.Link>
      <Nav.Link className="navbar-nav" href="#caini">INGRIJIRE CAINI</Nav.Link>
      <Nav.Link className="navbar-nav" href="#pisici">INGRIJIRE PISICI</Nav.Link>
      <Nav.Link className="navbar-nav" href="#shop">MAGAZIN</Nav.Link>
    </Nav>
  </Navbar>


    
  );
  }
}

export default NavbarPage;