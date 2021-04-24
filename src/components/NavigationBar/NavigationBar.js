import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col} from 'react-bootstrap';
import './NavigationBar.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSignedIn } from '../../actions.js';

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.setSignedIn.isSignedIn,
    user: state.setLoggedInUser.user
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};
class NavbarPage extends React.Component {

constructor(props){
  super(props);
  this.state = {
    
  }
  
}
render() {
  const { isSignedIn } = this.props;

  return (
    <div className="navbarcomp">
    <Container  className = "buttonscontainer">
    <Row >
      <Col align = "right" >
        { isSignedIn === true?
      <Button className ="custombuttons"  onClick = {() => this.props.history.push("/MyAdverts")} variant="Light">Anunturile mele</Button>
      :
      <div></div>
        }
      <Button className ="custombuttons" onClick = {() => this.props.history.push('Register')} variant="Light">Contul Meu</Button>{' '}       
      <Button className ="custombuttons"  onClick = {() => this.props.history.push('Signin')} variant="Light">Conectare</Button>{' '}
      </Col>
    </Row>
  </Container>

  <Navbar className="nvbar" bg="success" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav >
      <Nav.Link 
      onClick = {() => this.props.history.push("/")} 
      className="navbarfirst" href="#home">ACASA</Nav.Link>
      <Nav.Link className="navbar-nav" href="#shelters">ADAPOSTURI</Nav.Link>
      <Nav.Link className="navbar-nav" href="#caini">INGRIJIRE CAINI</Nav.Link>
      <Nav.Link className="navbar-nav" href="#pisici">INGRIJIRE PISICI</Nav.Link>

      <Nav.Link className="navbar-nav"onClick = {() => {
        if(isSignedIn === true)
        this.props.history.push("/Advert")
        }} >ADAUGA ANUNT</Nav.Link>

    </Nav>
  </Navbar>

  </div>
    
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavbarPage));